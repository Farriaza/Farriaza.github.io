// Toggle menú móvil
function toggleMobileMenu(){
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.getElementById('mobileMenuBtn');
  
  sidebar.classList.toggle('mobile-open');
  menuBtn.classList.toggle('active');
  
  if(sidebar.classList.contains('mobile-open')){
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}
// Espera a que el documento cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    // Ejecuta la función de carga con el parámetro 'lunes'
    if (typeof loadDay === 'function') {
        loadDay('lunes');
        
        // Actualiza el estado visual del botón (opcional pero recomendado)
        document.querySelectorAll('.day-btn').forEach(btn => btn.classList.remove('active'));
        const mondayBtn = document.querySelector('button[onclick*="lunes"]');
        if (mondayBtn) mondayBtn.classList.add('active');
    }
});
// Función para crear comida
function meal(time, icon, title, foods, notes = ''){
  return `
    <div class="meal-card">
      <div class="meal-header">
        <div class="meal-time">${time}</div>
        <h4>${icon} ${title}</h4>
        ${notes ? `<div class="meal-description">${notes}</div>` : ''}
      </div>
      <div class="meal-content">
        <ul class="meal-items">
          ${foods.map(food => `<li>${food}</li>`).join('')}
        </ul>
      </div>
    </div>`;
}

// Planes de cada día
const dietPlans = {
  lunes: `
    <div class="diet-header">
      <div class="diet-badge">Día de Fuerza</div>
      <h2>Lunes - Plan Nutricional</h2>
      <p>Día de entrenamiento de fuerza. Carbohidratos moderados distribuidos estratégicamente.</p>
    </div>
    <div class="diet-grid">
      ${meal('07:00', '🍳', 'Desayuno', [
        '3 huevos revueltos con espinaca y tomate',
        '1 taza de avena cocida (40g cruda)',
        '1 cucharada de aceite de oliva para cocinar',
        '1 manzana mediana'
      ], 'Desayunar dentro de 1 hora al despertar')}
      
      ${meal('10:30', '🥛', 'Colación Media Mañana', [
        '200g yogur griego natural sin azúcar',
        '1 puñado de almendras (20g)',
        'Café o té sin azúcar'
      ])}
      
      ${meal('13:30', '🍽️', 'Almuerzo', [
        '150g pechuga de pollo a la plancha',
        '1 taza de arroz integral cocido (80g crudo)',
        'Ensalada verde abundante (lechuga, pepino, tomate)',
        '1 cucharada de aceite de oliva',
        'Agua (2 vasos)'
      ], 'Caminar 10-15 min después de comer')}
      
      ${meal('16:30', '🍎', 'Colación Pre-Entreno', [
        '1 plátano mediano',
        '2 cucharadas de mantequilla de maní natural'
      ], '1.5 horas antes de entrenar')}
      
      ${meal('19:00', '🥗', 'Cena Post-Entreno', [
        '180g salmón o pescado a la plancha',
        '1 papa mediana cocida (150g)',
        'Brócoli y coliflor al vapor',
        'Ensalada verde con limón',
        'Agua (2 vasos)'
      ], 'Después del entrenamiento de fuerza')}
    </div>`,

  martes: `
    <div class="diet-header">
      <div class="diet-badge">Día de Cardio</div>
      <h2>Martes - Plan Nutricional</h2>
      <p>Día de cardio moderado. Carbohidratos más bajos, enfoque en proteína y verduras.</p>
    </div>
    <div class="diet-grid">
      ${meal('07:00', '🥚', 'Desayuno', [
        'Omelette de 3 huevos con champiñones y pimientos',
        '1/2 taza de avena (30g cruda) con canela',
        '1 puñado de arándanos',
        'Café o té sin azúcar'
      ])}
      
      ${meal('10:30', '🥤', 'Colación', [
        'Batido: 1 scoop proteína + 1 taza leche de almendras',
        '1 cucharada de semillas de chía',
        '10 nueces'
      ])}
      
      ${meal('13:30', '🍗', 'Almuerzo', [
        '150g pechuga de pavo o pollo',
        '1/2 taza quinoa cocida',
        'Ensalada mixta abundante',
        'Espárragos o brócoli al vapor',
        '1 cucharada aceite de oliva'
      ])}
      
      ${meal('16:30', '🍏', 'Colación', [
        '1 manzana',
        '30g queso fresco bajo en grasa',
        'Té verde'
      ])}
      
      ${meal('19:30', '🥙', 'Cena', [
        '150g carne magra (lomo, posta)',
        'Zapallo italiano salteado',
        'Ensalada de espinaca con tomate cherry',
        'Sin carbohidratos complejos',
        'Agua con limón'
      ], 'Cena liviana después del cardio')}
    </div>`,

  miercoles: `
    <div class="diet-header">
      <div class="diet-badge">Día de Fuerza</div>
      <h2>Miércoles - Plan Nutricional</h2>
      <p>Segundo día de fuerza. Similar al lunes con variaciones en proteínas.</p>
    </div>
    <div class="diet-grid">
      ${meal('07:00', '🥣', 'Desayuno', [
        '3 claras + 1 huevo entero revuelto',
        '2 rebanadas de pan integral',
        '1/2 palta (aguacate)',
        '1 naranja'
      ])}
      
      ${meal('10:30', '🥛', 'Colación', [
        '200g yogur griego',
        '1 cucharada de semillas de linaza',
        '1 puñado de nueces mixtas'
      ])}
      
      ${meal('13:30', '🍲', 'Almuerzo', [
        '150g pescado blanco (merluza, reineta)',
        '1 taza de arroz integral',
        'Ensalada de repollo y zanahoria',
        'Verduras salteadas (pimientos, cebolla)',
        'Aceite de oliva'
      ])}
      
      ${meal('16:30', '🍌', 'Colación Pre-Entreno', [
        '1 plátano',
        '1 puñado de almendras (15 unidades)',
        'Agua'
      ])}
      
      ${meal('19:00', '🍖', 'Cena Post-Entreno', [
        '180g pechuga de pollo',
        '1 camote mediano asado (150g)',
        'Brócoli al vapor',
        'Ensalada verde',
        'Agua abundante'
      ])}
    </div>`,

  jueves: `
    <div class="diet-header">
      <div class="diet-badge">Día de Cardio HIIT</div>
      <h2>Jueves - Plan Nutricional</h2>
      <p>Día de HIIT. Carbohidratos controlados, hidratación extra.</p>
    </div>
    <div class="diet-grid">
      ${meal('07:00', '🍳', 'Desayuno', [
        'Tortilla de 3 huevos con verduras',
        '1/3 taza avena con canela',
        '1 puñado de fresas',
        'Café negro'
      ])}
      
      ${meal('10:30', '🥜', 'Colación', [
        '2 cucharadas mantequilla de maní',
        '1 manzana verde',
        'Té verde'
      ])}
      
      ${meal('13:30', '🥘', 'Almuerzo', [
        '150g carne de res magra',
        '1/2 taza legumbres (lentejas o garbanzos)',
        'Ensalada abundante',
        'Verduras asadas',
        'Limón y especias'
      ])}
      
      ${meal('16:30', '🍊', 'Colación', [
        '1 naranja',
        '20g proteína en polvo con agua',
        '10 almendras'
      ])}
      
      ${meal('19:30', '🐟', 'Cena', [
        '150g atún o salmón',
        'Ensalada gigante (lechuga, pepino, tomate, rábano)',
        'Espárragos a la plancha',
        'Sin carbohidratos',
        'Agua con limón'
      ])}
    </div>`,

  viernes: `
    <div class="diet-header">
      <div class="diet-badge">Día de Fuerza</div>
      <h2>Viernes - Plan Nutricional</h2>
      <p>Último día de entrenamiento de la semana. Recarga moderada de carbohidratos.</p>
    </div>
    <div class="diet-grid">
      ${meal('07:00', '🥞', 'Desayuno', [
        'Panqueque de avena (40g avena + 2 huevos + plátano)',
        '1 cucharada miel (opcional)',
        'Café con leche descremada'
      ])}
      
      ${meal('10:30', '🥛', 'Colación', [
        '200g yogur griego',
        '1 cucharada de semillas de calabaza',
        '5 nueces'
      ])}
      
      ${meal('13:30', '🍗', 'Almuerzo', [
        '150g muslo de pollo sin piel',
        '1 taza de arroz basmati',
        'Ensalada césar (sin aderezo cremoso)',
        'Verduras al wok',
        'Aceite de oliva'
      ])}
      
      ${meal('16:30', '🥤', 'Colación Pre-Entreno', [
        'Batido: 1 plátano + 1 scoop proteína + agua',
        '1 cucharada de avena cruda'
      ])}
      
      ${meal('19:00', '🥩', 'Cena Post-Entreno', [
        '180g filete de res magro',
        '1 papa mediana al horno',
        'Ensalada de rúcula con tomate',
        'Brócoli y zanahoria al vapor',
        'Agua abundante'
      ])}
    </div>`,

  sabado: `
    <div class="diet-header">
      <div class="diet-badge">Descanso Activo</div>
      <h2>Sábado - Plan Nutricional</h2>
      <p>Día de descanso activo. Alimentación balanceada, permite pequeña flexibilidad.</p>
    </div>
    <div class="diet-grid">
      ${meal('08:00', '🍳', 'Desayuno', [
        '2 huevos + 2 claras revueltos',
        '2 tostadas integrales',
        'Palta (1/2 unidad)',
        '1 taza de frutos del bosque',
        'Café con leche'
      ])}
      
      ${meal('11:00', '🥤', 'Colación', [
        'Batido verde: espinaca + plátano + proteína + agua',
        '1 puñado de nueces'
      ])}
      
      ${meal('14:00', '🍽️', 'Almuerzo', [
        '150g pescado (a elección)',
        '1 taza de quinoa',
        'Ensalada mediterránea',
        'Verduras asadas variadas',
        'Aceite de oliva y limón'
      ], 'Comida principal del día - comer despacio')}
      
      ${meal('17:00', '🍎', 'Colación', [
        '1 manzana',
        '2 cucharadas de hummus',
        'Bastones de zanahoria y apio',
        'Té de hierbas'
      ])}
      
      ${meal('20:00', '🥗', 'Cena Ligera', [
        'Ensalada grande con pollo desmenuzado (100g)',
        'Variedad de verduras crudas',
        'Semillas de girasol',
        'Vinagreta casera',
        'Infusión digestiva'
      ], 'Permitida 1 comida trampa moderada (almuerzo o cena)')}
    </div>`,

  domingo: `
    <div class="diet-header">
      <div class="diet-badge">Descanso Total</div>
      <h2>Domingo - Plan Nutricional</h2>
      <p>Día de recuperación completa. Hidratación extra, preparación para la semana.</p>
    </div>
    <div class="diet-grid">
      ${meal('08:30', '🥣', 'Desayuno', [
        'Bowl de yogur griego con granola casera (30g)',
        'Frutas variadas (plátano, fresas, kiwi)',
        '1 cucharada de miel',
        'Café o té'
      ])}
      
      ${meal('11:30', '🥜', 'Colación', [
        'Mix de frutos secos (30g)',
        '1 fruta de estación',
        'Agua con limón'
      ])}
      
      ${meal('14:30', '🍲', 'Almuerzo Familiar', [
        '150g proteína a elección (pollo, carne, pescado)',
        'Ensalada abundante',
        'Porción moderada de carbohidrato (arroz, pasta, papa)',
        'Verduras cocidas',
        'Postre: fruta fresca'
      ], 'Disfrutar en familia - comer consciente')}
      
      ${meal('17:30', '☕', 'Colación', [
        'Café con leche',
        '2 cuadros de chocolate oscuro (70% cacao)',
        '10 almendras'
      ])}
      
      ${meal('20:00', '🥙', 'Cena', [
        'Omelette de claras con verduras',
        'Ensalada verde simple',
        'Sin carbohidratos complejos',
        'Infusión relajante (manzanilla, tilo)'
      ], 'Preparar comidas para el lunes')}
    </div>`
};

// Información adicional
const infoContent = {
  reglas: `
    <div class="info-header">
      <h2>📋 Reglas Básicas del Plato</h2>
      <p>Guía simple para cada comida principal</p>
    </div>
    <div class="info-grid">
      <div class="info-card">
        <div class="info-icon">🍖</div>
        <h3>Proteínas (1/2 plato)</h3>
        <ul>
          <li>Pollo, pechuga de pavo</li>
          <li>Pescados: salmón, atún, merluza</li>
          <li>Carne magra: lomo, posta</li>
          <li>Huevos (3-4 diarios)</li>
          <li>Legumbres: lentejas, garbanzos</li>
        </ul>
      </div>
      
      <div class="info-card">
        <div class="info-icon">🥬</div>
        <h3>Verduras (1/2 plato)</h3>
        <ul>
          <li>Brócoli, coliflor, espárragos</li>
          <li>Espinaca, lechuga, rúcula</li>
          <li>Zapallo italiano, berenjena</li>
          <li>Tomate, pepino, pimientos</li>
          <li>Cebolla, ajo, champiñones</li>
        </ul>
      </div>
      
      <div class="info-card">
        <div class="info-icon">🍚</div>
        <h3>Carbohidratos (tamaño puño)</h3>
        <ul>
          <li>Arroz integral o basmati</li>
          <li>Quinoa, avena</li>
          <li>Papa o camote cocido</li>
          <li>Pan integral (moderado)</li>
          <li>Legumbres</li>
        </ul>
        <p class="info-note">⚠️ Mayor cantidad post-entrenamiento</p>
      </div>
      
      <div class="info-card full">
        <div class="info-icon">⏰</div>
        <h3>Horarios Clave</h3>
        <ul>
          <li>✅ Desayunar dentro de 1 hora al despertar</li>
          <li>✅ No saltarse el almuerzo</li>
          <li>✅ Entrenar antes de la cena (18:00-19:00)</li>
          <li>✅ Cena liviana después de entrenar</li>
          <li>❌ Evitar ayunos largos sin indicación médica</li>
        </ul>
      </div>
    </div>`,
  
  evitar: `
    <div class="info-header">
      <h2>🚫 Alimentos a Evitar o Reducir Mucho</h2>
      <p>Especialmente importante por resistencia a la insulina</p>
    </div>
    <div class="info-grid">
      <div class="info-card danger">
        <div class="info-icon">🍬</div>
        <h3>Azúcares y Procesados</h3>
        <ul>
          <li>Azúcar blanca, morena, miel en exceso</li>
          <li>Bebidas azucaradas (jugos, néctares)</li>
          <li>Refrescos y bebidas energéticas</li>
          <li>Pasteles, tortas, galletas dulces</li>
          <li>Cereales azucarados</li>
        </ul>
      </div>
      
      <div class="info-card warning">
        <div class="info-icon">🍞</div>
        <h3>Carbohidratos Refinados</h3>
        <ul>
          <li>Pan blanco, marraqueta</li>
          <li>Arroz blanco (preferir integral)</li>
          <li>Pasta blanca</li>
          <li>Productos de panadería</li>
          <li>Snacks empaquetados</li>
        </ul>
      </div>
      
      <div class="info-card danger">
        <div class="info-icon">🍟</div>
        <h3>Frituras y Grasas Trans</h3>
        <ul>
          <li>Frituras en general</li>
          <li>Comida rápida</li>
          <li>Empanadas fritas</li>
          <li>Sopaipillas</li>
          <li>Aceites recalentados</li>
        </ul>
      </div>
      
      <div class="info-card warning">
        <div class="info-icon">⏰</div>
        <h3>Malos Hábitos</h3>
        <ul>
          <li>Comer muy tarde (después 21:00)</li>
          <li>Saltarse comidas</li>
          <li>Picar entre comidas sin control</li>
          <li>Comer viendo TV o distraído</li>
          <li>No masticar bien</li>
        </ul>
      </div>
    </div>`,
  
  preferir: `
    <div class="info-header">
      <h2>✅ Alimentos Preferidos</h2>
      <p>Incluir diariamente para mejores resultados</p>
    </div>
    <div class="info-grid">
      <div class="info-card success">
        <div class="info-icon">💧</div>
        <h3>Hidratación</h3>
        <ul>
          <li>Agua: 2-2.5 litros diarios</li>
          <li>Té verde o negro (sin azúcar)</li>
          <li>Café solo (máximo 3 al día)</li>
          <li>Agua con limón</li>
          <li>Infusiones de hierbas</li>
        </ul>
      </div>
      
      <div class="info-card success">
        <div class="info-icon">🥑</div>
        <h3>Grasas Saludables</h3>
        <ul>
          <li>Aceite de oliva: 1 cucharada por comida</li>
          <li>Palta: 1/2 unidad al día</li>
          <li>Frutos secos: 1 puñado (20-30g)</li>
          <li>Semillas: chía, linaza, calabaza</li>
          <li>Pescados grasos: salmón, atún</li>
        </ul>
      </div>
      
      <div class="info-card success">
        <div class="info-icon">🥛</div>
        <h3>Lácteos</h3>
        <ul>
          <li>Yogur griego natural sin azúcar</li>
          <li>Queso fresco bajo en grasa</li>
          <li>Leche descremada (moderada)</li>
          <li>Requesón</li>
        </ul>
      </div>
      
      <div class="info-card success">
        <div class="info-icon">🥜</div>
        <h3>Snacks Saludables</h3>
        <ul>
          <li>Almendras, nueces, castañas</li>
          <li>Frutas enteras (no jugos)</li>
          <li>Vegetales crudos con hummus</li>
          <li>Huevo duro</li>
          <li>Yogur con semillas</li>
        </ul>
      </div>
    </div>`,
  
  habitos: `
    <div class="info-header">
      <h2>💡 Hábitos Clave para el Éxito</h2>
      <p>Pequeños cambios que generan grandes resultados</p>
    </div>
    <div class="info-grid">
      <div class="info-card">
        <div class="info-icon big">🚶</div>
        <h3>Caminar Después de Comer</h3>
        <p>10-15 minutos después del almuerzo y cena</p>
        <ul>
          <li>Mejora digestión</li>
          <li>Controla glicemia</li>
          <li>Aumenta gasto calórico</li>
        </ul>
      </div>
      
      <div class="info-card">
        <div class="info-icon big">😴</div>
        <h3>Dormir 7-8 Horas</h3>
        <p>Descanso de calidad es fundamental</p>
        <ul>
          <li>Recuperación muscular</li>
          <li>Regula hormonas del hambre</li>
          <li>Mejora metabolismo</li>
        </ul>
      </div>
      
      <div class="info-card">
        <div class="info-icon big">🥢</div>
        <h3>Comer Despacio</h3>
        <p>Masticar bien cada bocado</p>
        <ul>
          <li>Mejor digestión</li>
          <li>Mayor saciedad</li>
          <li>Menor hinchazón</li>
        </ul>
      </div>
      
      <div class="info-card">
        <div class="info-icon big">💪</div>
        <h3>Entrenar Consistente</h3>
        <p>Aunque sea suave, no faltar</p>
        <ul>
          <li>Crear hábito</li>
          <li>Progreso acumulativo</li>
          <li>Mejor que perfecto</li>
        </ul>
      </div>
      
      <div class="info-card full results">
        <div class="info-icon big">📊</div>
        <h3>Resultados Esperables en 6 Meses</h3>
        <div class="results-grid">
          <div>✅ Pérdida de 8-15 kg de grasa</div>
          <div>✅ Reducción visible de grasa abdominal</div>
          <div>✅ Aumento de fuerza y masa muscular</div>
          <div>✅ Mejor control de glicemia</div>
          <div>✅ Más energía durante el día</div>
          <div>✅ Mejora en resistencia física</div>
          <div>✅ Mejor calidad de sueño</div>
          <div>✅ Reducción de medidas corporales</div>
        </div>
      </div>
      
      <div class="info-card full success">
        <h3>🎯 Recuerda</h3>
        <p><strong>La consistencia es más importante que la perfección.</strong></p>
        <p>Un día de excesos no arruina tu progreso, pero abandonar sí. Sigue adelante. 💪</p>
      </div>
    </div>`
};

// Cargar día
function loadDay(day){
  const content = document.getElementById('dietContent');
  
  content.style.opacity = '0';
  
  setTimeout(() => {
    content.innerHTML = dietPlans[day];
    
    setTimeout(() => {
      content.style.opacity = '1';
    }, 50);
  }, 300);
  
  // Marcar botón activo
  document.querySelectorAll('.day-btn, .info-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Cerrar menú móvil
  const sidebar = document.getElementById('sidebar');
  if(sidebar.classList.contains('mobile-open')){
    toggleMobileMenu();
  }
}

// Cargar información
function loadInfo(info){
  const content = document.getElementById('dietContent');
  
  content.style.opacity = '0';
  
  setTimeout(() => {
    content.innerHTML = infoContent[info];
    
    setTimeout(() => {
      content.style.opacity = '1';
    }, 50);
  }, 300);
  
  // Marcar botón activo
  document.querySelectorAll('.day-btn, .info-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Cerrar menú móvil
  const sidebar = document.getElementById('sidebar');
  if(sidebar.classList.contains('mobile-open')){
    toggleMobileMenu();
  }
}