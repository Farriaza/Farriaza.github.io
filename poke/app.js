/* ================================================
   POKÉDEX ULTRA — app.js
   Pure JavaScript, no frameworks
   ================================================ */

'use strict';

const API = 'https://pokeapi.co/api/v2/pokemon/';
const TOTAL_POKEMON = 1008;

/* ─── Stat colours ─── */
const statColors = {
  hp:              '#ff5959',
  attack:          '#f5ac78',
  defense:         '#fae078',
  'special-attack':'#9db7f5',
  'special-defense':'#a7db8d',
  speed:           '#fa92b2',
};

/* ─── Cache ─── */
const cache = {};
async function fetchPokemon(nameOrId) {
  const key = String(nameOrId).toLowerCase();
  if (cache[key]) return cache[key];
  const res = await fetch(`${API}${key}`);
  if (!res.ok) throw new Error(`Pokémon "${nameOrId}" no encontrado`);
  const data = await res.json();
  cache[key] = data;
  return data;
}

/* ─── Toast ─── */
function showToast(msg, type = 'info') {
  const tc = document.getElementById('toastContainer');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  tc.appendChild(t);
  setTimeout(() => t.style.opacity = '0', 2500);
  setTimeout(() => t.remove(), 2900);
}

/* ─── Type badge ─── */
function typeBadge(type) {
  return `<span class="type-badge type-${type}">${type}</span>`;
}

/* ─── Stat bar ─── */
function statBar(name, val) {
  const pct = Math.min(Math.round((val / 255) * 100), 100);
  const color = statColors[name] || '#ccc';
  return `
    <div class="stat-row">
      <span class="stat-name">${name.replace('special-', 'sp.')}</span>
      <span class="stat-val">${val}</span>
      <div class="stat-bar-track">
        <div class="stat-bar-fill" style="width:${pct}%; background:${color};"></div>
      </div>
    </div>`;
}

/* ─── Random int ─── */
function randId() { return Math.floor(Math.random() * TOTAL_POKEMON) + 1; }

/* ─── Capitalize ─── */
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

/* =========================================
   HERO SECTION — rotating featured pokemon
   ========================================= */
const featuredHeroes = [25, 6, 150, 249, 384, 445, 658, 800, 890];
let heroIndex = 0;

async function loadHero(id) {
  const img   = document.getElementById('heroImg');
  const name  = document.getElementById('heroName');
  const types = document.getElementById('heroTypes');

  img.style.opacity = '0';
  try {
    const p = await fetchPokemon(id);
    const sprite = p.sprites?.other?.['official-artwork']?.front_default
                 || p.sprites?.front_default;
    img.src = sprite;
    img.onload = () => { img.style.opacity = '1'; };
    name.textContent = cap(p.name);
    types.innerHTML = p.types.map(t => typeBadge(t.type.name)).join('');
  } catch(e) { /* silently skip */ }
}

function cycleHero() {
  heroIndex = (heroIndex + 1) % featuredHeroes.length;
  loadHero(featuredHeroes[heroIndex]);
}

/* =========================================
   SEARCH
   ========================================= */
async function searchPokemon(query) {
  if (!query.trim()) { showToast('Escribe un nombre o número', 'error'); return; }
  const result = document.getElementById('searchResult');
  result.innerHTML = `<div class="random-spinner"><div class="pokeball-spin"></div><p>Buscando...</p></div>`;
  result.classList.remove('hidden');

  try {
    const p = await fetchPokemon(query.toLowerCase().trim());
    result.innerHTML = buildDetailCard(p);
    // animate bars after render
    setTimeout(() => animateBars(result), 100);
  } catch(e) {
    result.innerHTML = `<div style="color:var(--red2);padding:20px;text-align:center;">❌ ${e.message}</div>`;
    showToast(e.message, 'error');
  }
}

function buildDetailCard(p) {
  const sprite = p.sprites?.other?.['official-artwork']?.front_default
               || p.sprites?.front_default;
  const types = p.types.map(t => typeBadge(t.type.name)).join('');
  const stats = p.stats.map(s => statBar(s.stat.name, s.base_stat)).join('');
  const height = (p.height / 10).toFixed(1) + ' m';
  const weight = (p.weight / 10).toFixed(1) + ' kg';
  const abilities = p.abilities.map(a => cap(a.ability.name)).join(', ');

  return `
  <div class="detail-card">
    <div class="detail-left">
      <div class="detail-num">#${String(p.id).padStart(3,'0')}</div>
      <div class="detail-img-wrap">
        <div class="detail-img-glow"></div>
        <img class="detail-img floating" src="${sprite}" alt="${p.name}"/>
      </div>
      <div class="detail-name">${p.name}</div>
      <div class="detail-types">${types}</div>
    </div>
    <div class="detail-right">
      <div>
        <div class="detail-section-title">Información</div>
        <div class="detail-info-grid">
          <div class="info-item"><span class="info-label">Altura</span><span class="info-val">${height}</span></div>
          <div class="info-item"><span class="info-label">Peso</span><span class="info-val">${weight}</span></div>
          <div class="info-item"><span class="info-label">Experiencia base</span><span class="info-val">${p.base_experience ?? '—'}</span></div>
          <div class="info-item"><span class="info-label">Habilidades</span><span class="info-val">${abilities}</span></div>
        </div>
      </div>
      <div>
        <div class="detail-section-title">Estadísticas base</div>
        ${stats}
      </div>
    </div>
  </div>`;
}

function animateBars(container) {
  container.querySelectorAll('.stat-bar-fill').forEach(bar => {
    const w = bar.style.width;
    bar.style.width = '0';
    requestAnimationFrame(() => { bar.style.width = w; });
  });
}

/* =========================================
   TYPE FILTER
   ========================================= */
const TYPES = [
  'normal','fire','water','electric','grass','ice','fighting','poison',
  'ground','flying','psychic','bug','rock','ghost','dragon','dark','steel','fairy'
];

let activeType = null;
let typeOffset = 0;
const TYPE_PAGE = 20;
let typeResults = [];

function buildTypeFilters() {
  const wrap = document.getElementById('typeFilters');
  wrap.innerHTML = TYPES.map(t =>
    `<button class="type-filter-btn type-${t}" data-type="${t}">${cap(t)}</button>`
  ).join('');

  wrap.querySelectorAll('.type-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const t = btn.dataset.type;
      if (activeType === t) {
        activeType = null;
        btn.classList.remove('active');
        clearCards();
        return;
      }
      wrap.querySelectorAll('.type-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeType = t;
      loadByType(t);
    });
  });
}

async function loadByType(type) {
  const grid = document.getElementById('cardsGrid');
  grid.innerHTML = `<div class="cards-placeholder"><div class="pokeball-spin" style="width:48px;height:48px;"></div><p>Cargando tipo ${cap(type)}...</p></div>`;
  typeOffset = 0;
  typeResults = [];

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const data = await res.json();
    typeResults = data.pokemon.map(p => p.pokemon);
    renderTypeCards();
  } catch(e) {
    showToast('Error cargando tipo', 'error');
  }
}

async function renderTypeCards() {
  const grid = document.getElementById('cardsGrid');
  if (typeOffset === 0) grid.innerHTML = '';

  const slice = typeResults.slice(typeOffset, typeOffset + TYPE_PAGE);
  typeOffset += TYPE_PAGE;

  const cards = await Promise.allSettled(
    slice.map(p => fetchPokemon(p.name))
  );

  cards.forEach((result, i) => {
    if (result.status !== 'fulfilled') return;
    const p = result.value;
    const card = buildPokeCard(p);
    const el = document.createElement('div');
    el.innerHTML = card;
    const child = el.firstElementChild;
    child.style.animationDelay = `${i * 0.05}s`;
    grid.appendChild(child);
  });

  const loadMoreWrap = document.getElementById('loadMoreWrap');
  if (typeOffset < typeResults.length) {
    loadMoreWrap.classList.remove('hidden');
  } else {
    loadMoreWrap.classList.add('hidden');
  }
}

function buildPokeCard(p) {
  const sprite = p.sprites?.other?.['official-artwork']?.front_default
               || p.sprites?.front_default;
  const types = p.types.map(t => typeBadge(t.type.name)).join('');
  return `
  <div class="poke-card" data-id="${p.id}" title="Ver detalles de ${p.name}">
    <span class="card-num">#${String(p.id).padStart(3,'0')}</span>
    <img src="${sprite}" alt="${p.name}" loading="lazy"/>
    <div class="card-name">${p.name}</div>
    <div class="card-types">${types}</div>
  </div>`;
}

function clearCards() {
  document.getElementById('cardsGrid').innerHTML = `
    <div class="cards-placeholder">
      <div class="placeholder-ball"></div>
      <p>Busca un Pokémon o selecciona un tipo para ver las cartas</p>
    </div>`;
  document.getElementById('loadMoreWrap').classList.add('hidden');
}

/* card click → show details in search area */
document.addEventListener('click', e => {
  const card = e.target.closest('.poke-card');
  if (!card) return;
  const id = card.dataset.id;
  window.scrollTo({ top: document.getElementById('search-section').offsetTop - 80, behavior: 'smooth' });
  searchPokemon(id);
});

/* =========================================
   RANDOM POKEMON
   ========================================= */
async function loadRandom() {
  const spinner = document.getElementById('randomSpinner');
  const content = document.getElementById('randomContent');
  spinner.style.display = 'flex';
  content.classList.add('hidden');

  try {
    const p = await fetchPokemon(randId());
    displayRandom(p);
  } catch(e) {
    showToast('Error cargando Pokémon', 'error');
    spinner.style.display = 'none';
  }
}

function displayRandom(p) {
  const spinner = document.getElementById('randomSpinner');
  const content = document.getElementById('randomContent');

  const sprite = p.sprites?.other?.['official-artwork']?.front_default
               || p.sprites?.front_default;

  document.getElementById('randomNum').textContent   = `#${String(p.id).padStart(3,'0')}`;
  document.getElementById('randomImg').src           = sprite;
  document.getElementById('randomImg').alt           = p.name;
  document.getElementById('randomName').textContent  = cap(p.name);
  document.getElementById('randomTypes').innerHTML   = p.types.map(t => typeBadge(t.type.name)).join('');

  const statsHtml = p.stats.slice(0,4).map(s => statBar(s.stat.name, s.base_stat)).join('');
  document.getElementById('randomStats').innerHTML = statsHtml;

  const height = (p.height/10).toFixed(1) + 'm';
  const weight = (p.weight/10).toFixed(1) + 'kg';
  document.getElementById('randomMeta').innerHTML =
    `<span>📏 ${height}</span><span>⚖️ ${weight}</span><span>✨ ${p.base_experience ?? '?'} XP</span>`;

  spinner.style.display = 'none';
  content.classList.remove('hidden');
  setTimeout(() => animateBars(document.getElementById('randomStats')), 80);
}

/* =========================================
   BATTLE SYSTEM
   ========================================= */
const state = {
  f1: null,
  f2: null,
  battling: false,
};

async function loadFighter(slot, query) {
  if (!query.trim()) { showToast('Escribe un nombre o número', 'error'); return; }
  const cardEl = document.getElementById(`f${slot}Card`);
  cardEl.innerHTML = `<div class="fighter-placeholder"><div class="pokeball-spin" style="width:36px;height:36px;"></div></div>`;

  try {
    const p = await fetchPokemon(query.toLowerCase().trim());
    state[`f${slot}`] = p;
    renderFighter(slot, p);
    showToast(`${cap(p.name)} está listo`, 'success');
  } catch(e) {
    cardEl.innerHTML = `<div class="fighter-placeholder"><span style="color:var(--red2);">❌ No encontrado</span></div>`;
    showToast(e.message, 'error');
  }
}

async function loadRandomFighter(slot) {
  await loadFighter(slot, String(randId()));
}

function renderFighter(slot, p) {
  const cardEl = document.getElementById(`f${slot}Card`);
  const barsEl = document.getElementById(`f${slot}Bars`);
  const sprite = p.sprites?.other?.['official-artwork']?.front_default
               || p.sprites?.front_default;
  const types  = p.types.map(t => typeBadge(t.type.name)).join('');
  const totalHp = p.stats.find(s => s.stat.name === 'hp')?.base_stat ?? 50;

  cardEl.innerHTML = `
    <div class="fighter-loaded">
      <img class="fighter-img" src="${sprite}" alt="${p.name}" />
      <div class="fighter-name">${p.name}</div>
      <div class="fighter-types">${types}</div>
      <div class="fighter-hp">❤️ HP: ${totalHp}</div>
    </div>`;

  const stats = p.stats.map(s => statBar(s.stat.name, s.base_stat)).join('');
  barsEl.innerHTML = stats;
  barsEl.classList.remove('hidden');

  // reset states
  document.getElementById(`fighter${slot}`).classList.remove('winner','loser','attacker');
  setTimeout(() => animateBars(barsEl), 80);

  resetBattleUI();
}

function resetBattleUI() {
  document.getElementById('battleResult').classList.add('hidden');
  document.getElementById('battleLog').classList.add('hidden');
  document.getElementById('logEntries').innerHTML = '';
  document.getElementById('fighter1').classList.remove('winner','loser','attacker');
  document.getElementById('fighter2').classList.remove('winner','loser','attacker');
  state.battling = false;
}

/* ─── BATTLE ENGINE ─── */
function getStat(pokemon, statName) {
  return pokemon.stats.find(s => s.stat.name === statName)?.base_stat ?? 0;
}

function getTotal(pokemon) {
  return pokemon.stats.reduce((sum, s) => sum + s.base_stat, 0);
}

/* Type effectiveness table (simplified) */
const typeChart = {
  fire:     { grass:2, ice:2, bug:2, steel:2, water:0.5, rock:0.5, fire:0.5, dragon:0.5 },
  water:    { fire:2, ground:2, rock:2, grass:0.5, water:0.5, dragon:0.5 },
  grass:    { water:2, ground:2, rock:2, fire:0.5, grass:0.5, poison:0.5, flying:0.5, bug:0.5, dragon:0.5, steel:0.5 },
  electric: { water:2, flying:2, ground:0, grass:0.5, electric:0.5, dragon:0.5 },
  psychic:  { fighting:2, poison:2, dark:0, psychic:0.5, steel:0.5 },
  dragon:   { dragon:2, steel:0.5, fairy:0 },
  normal:   { rock:0.5, ghost:0, steel:0.5 },
  fighting: { normal:2, ice:2, rock:2, dark:2, steel:2, ghost:0, bug:0.5, psychic:0.5, flying:0.5, poison:0.5, fairy:0.5 },
  dark:     { psychic:2, ghost:2, fighting:0.5, dark:0.5, fairy:0.5 },
  steel:    { ice:2, rock:2, fairy:2, fire:0.5, water:0.5, electric:0.5, steel:0.5 },
};

function effectiveness(attackType, defTypes) {
  const chart = typeChart[attackType] || {};
  let mult = 1;
  defTypes.forEach(dt => { if (chart[dt] !== undefined) mult *= chart[dt]; });
  return mult;
}

function simulateBattle(p1, p2) {
  const log = [];

  const clone = (p) => ({
    name:    p.name,
    hp:      getStat(p, 'hp') * 2,
    atk:     getStat(p, 'attack'),
    spAtk:   getStat(p, 'special-attack'),
    def:     getStat(p, 'defense'),
    spDef:   getStat(p, 'special-defense'),
    spd:     getStat(p, 'speed'),
    types:   p.types.map(t => t.type.name),
  });

  let a = clone(p1), b = clone(p2);
  const maxHp = { a: a.hp, b: b.hp };

  // Determine who goes first
  let [first, second] = a.spd >= b.spd ? [a, b] : [b, a];
  let [label1, label2] = a.spd >= b.spd ? ['a','b'] : ['b','a'];

  log.push(`⚡ Velocidad: ${cap(first.name)} (${first.spd}) vs ${cap(second.name)} (${second.spd}) — ¡${cap(first.name)} ataca primero!`);

  let round = 0;
  while (a.hp > 0 && b.hp > 0 && round < 30) {
    round++;
    // First attacks second
    const fAtk = first.atk;
    const sDef = second.def;
    const eff  = effectiveness(first.types[0], second.types);
    const dmg  = Math.max(1, Math.floor(((fAtk / sDef) * 20 + Math.random() * 8) * eff));
    second.hp -= dmg;
    const effLabel = eff > 1 ? ' ¡Es muy eficaz!' : eff < 1 ? ' No es muy eficaz...' : '';
    log.push(`Ronda ${round}: ${cap(first.name)} causa ${dmg} daño a ${cap(second.name)}. (HP restante: ${Math.max(0, second.hp)})${effLabel}`);

    if (second.hp <= 0) break;

    // Second attacks first
    const sAtk  = second.atk;
    const fDef  = first.def;
    const eff2  = effectiveness(second.types[0], first.types);
    const dmg2  = Math.max(1, Math.floor(((sAtk / fDef) * 20 + Math.random() * 8) * eff2));
    first.hp  -= dmg2;
    const effLabel2 = eff2 > 1 ? ' ¡Es muy eficaz!' : eff2 < 1 ? ' No es muy eficaz...' : '';
    log.push(`Ronda ${round}: ${cap(second.name)} causa ${dmg2} daño a ${cap(first.name)}. (HP restante: ${Math.max(0, first.hp)})${effLabel2}`);
  }

  let winner, loser, reason;
  if (a.hp > b.hp) {
    winner = p1; loser = p2;
    reason = `${cap(p1.name)} sobrevivió con ${Math.max(0,a.hp)} HP restantes.`;
  } else if (b.hp > a.hp) {
    winner = p2; loser = p1;
    reason = `${cap(p2.name)} sobrevivió con ${Math.max(0,b.hp)} HP restantes.`;
  } else {
    winner = null;
    reason = '¡Empate perfecto!';
  }

  return { winner, loser, log, reason };
}

async function startBattle() {
  if (!state.f1 || !state.f2) {
    showToast('Necesitas dos Pokémon para batallar', 'error'); return;
  }
  if (state.battling) return;
  state.battling = true;

  document.getElementById('battleResult').classList.add('hidden');
  document.getElementById('battleLog').classList.add('hidden');
  document.getElementById('fighter1').classList.remove('winner','loser','attacker');
  document.getElementById('fighter2').classList.remove('winner','loser','attacker');

  // animate fighters attacking
  document.getElementById('fighter1').classList.add('attacker');
  await sleep(350);
  document.getElementById('fighter1').classList.remove('attacker');
  document.getElementById('fighter2').classList.add('attacker');
  await sleep(350);
  document.getElementById('fighter2').classList.remove('attacker');

  const { winner, loser, log, reason } = simulateBattle(state.f1, state.f2);

  // show log
  const logEl   = document.getElementById('battleLog');
  const entries = document.getElementById('logEntries');
  logEl.classList.remove('hidden');
  entries.innerHTML = '';

  for (let i = 0; i < log.length; i++) {
    await sleep(80);
    const entry = document.createElement('div');
    entry.className = 'log-entry' + (i === log.length-1 ? ' highlight' : '');
    entry.textContent = log[i];
    entries.appendChild(entry);
    logEl.scrollTop = logEl.scrollHeight;
  }

  await sleep(400);

  // apply winner / loser classes
  if (winner) {
    const w = winner === state.f1 ? '1' : '2';
    const l = winner === state.f1 ? '2' : '1';
    document.getElementById(`fighter${w}`).classList.add('winner');
    document.getElementById(`fighter${l}`).classList.add('loser');

    document.getElementById('resultTrophy').textContent = '🏆';
    document.getElementById('resultTitle').textContent  = `¡${cap(winner.name)} gana!`;
  } else {
    document.getElementById('resultTrophy').textContent = '🤝';
    document.getElementById('resultTitle').textContent  = '¡Empate!';
  }

  document.getElementById('resultDetail').textContent = reason;
  document.getElementById('battleResult').classList.remove('hidden');
  state.battling = false;
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

/* =========================================
   INIT
   ========================================= */
function init() {
  /* ── Hero ── */
  loadHero(featuredHeroes[heroIndex]);
  setInterval(cycleHero, 5000);

  /* ── Nav random ── */
  document.getElementById('navRandomBtn').addEventListener('click', () => {
    window.scrollTo({ top: document.getElementById('random-section').offsetTop - 80, behavior: 'smooth' });
    loadRandom();
  });

  /* ── Search ── */
  const input = document.getElementById('searchInput');
  document.getElementById('searchBtn').addEventListener('click', () => searchPokemon(input.value));
  input.addEventListener('keydown', e => { if (e.key === 'Enter') searchPokemon(input.value); });

  /* ── Type filters ── */
  buildTypeFilters();

  /* ── Load more ── */
  document.getElementById('loadMoreBtn').addEventListener('click', renderTypeCards);

  /* ── Random section ── */
  loadRandom();
  document.getElementById('randomBtn').addEventListener('click', loadRandom);

  /* ── Battle ── */
  document.getElementById('f1Search').addEventListener('click', () => {
    loadFighter(1, document.getElementById('f1Input').value);
  });
  document.getElementById('f2Search').addEventListener('click', () => {
    loadFighter(2, document.getElementById('f2Input').value);
  });
  document.getElementById('f1Random').addEventListener('click', () => loadRandomFighter(1));
  document.getElementById('f2Random').addEventListener('click', () => loadRandomFighter(2));

  document.getElementById('f1Input').addEventListener('keydown', e => {
    if (e.key === 'Enter') loadFighter(1, e.target.value);
  });
  document.getElementById('f2Input').addEventListener('keydown', e => {
    if (e.key === 'Enter') loadFighter(2, e.target.value);
  });

  document.getElementById('battleBtn').addEventListener('click', startBattle);
  document.getElementById('resetBattle').addEventListener('click', () => {
    state.f1 = null; state.f2 = null;
    ['1','2'].forEach(s => {
      document.getElementById(`f${s}Card`).innerHTML = `
        <div class="fighter-placeholder">
          <div class="pokeball-mini"></div>
          <span>Sin Pokémon</span>
        </div>`;
      document.getElementById(`f${s}Bars`).classList.add('hidden');
      document.getElementById(`f${s}Bars`).innerHTML = '';
      document.getElementById(`f${s}Input`).value = '';
      document.getElementById(`fighter${s}`).classList.remove('winner','loser','attacker');
    });
    resetBattleUI();
  });

  document.getElementById('battleAgain').addEventListener('click', () => {
    document.getElementById('battleResult').classList.add('hidden');
    document.getElementById('fighter1').classList.remove('winner','loser');
    document.getElementById('fighter2').classList.remove('winner','loser');
    startBattle();
  });

  /* ── Preload two random fighters to make demo ready ── */
  setTimeout(async () => {
    await loadRandomFighter(1);
    await loadRandomFighter(2);
  }, 800);
}

document.addEventListener('DOMContentLoaded', init);
