/* ═══════════════════════════════════════════════════════════
   SAKURA BISTRÓ — APP.JS
   Japanese Restaurant Management System
   Full interactive application logic
═══════════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────
   DATA — MENU
───────────────────────────────────────── */
const MENU = {
  entrada: [
    {
      id: 1, name: 'Gyozas al Vapor', jpName: '餃子',
      desc: 'Deliciosas empanadillas japonesas rellenas de cerdo y verduras, servidas con salsa ponzu y jengibre rallado.',
      price: 8500, spicy: false, allergens: ['gluten','dairy'],
      img: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80',
      tags: ['gluten']
    },
    {
      id: 2, name: 'Gyozas Fritas', jpName: '揚げ餃子',
      desc: 'Versión crujiente de las gyozas, fritas en aceite vegetal hasta dorarlas. Rellenas de pollo y cebollín.',
      price: 9200, allergens: ['gluten'],
      img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80',
      tags: ['gluten']
    },
    {
      id: 3, name: 'Arrolados de Primavera', jpName: '春巻き',
      desc: 'Rollitos crocantes rellenos de fideos de arroz, zanahoria, brote de soja y camarones. Salsa agridulce.',
      price: 7800, allergens: ['gluten','shellfish'],
      img: 'https://i.blogs.es/40e6e2/rollitos_primavera/650_1200.jpg',
      tags: ['shellfish']
    },
    {
      id: 4, name: 'Wantán Frito', jpName: 'ワンタン揚げ',
      desc: 'Masas delicadas de wantán fritas con relleno de queso crema y cangrejo. Crujientes y sabrosas.',
      price: 7200, allergens: ['gluten','dairy','shellfish'],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXtfL2X60V6DRw2fdzWKnVp-jP48ySTHqJw&s',
      tags: ['dairy','shellfish']
    },
    
    {
      id: 6, name: 'Tempura de Verduras', jpName: '野菜天ぷら',
      desc: 'Selección de vegetales de temporada rebozados en masa ligera y fritos. Berenjena, zapallo, brócoli y zapallito.',
      price: 8900, allergens: ['gluten'],
      img: 'https://newluxbrand.com/wp-content/uploads/2022/02/tempura-de-verduras-Newlux-1024x1024.jpg',
      tags: ['vegan','gluten']
    },
    {
      id: 7, name: 'Tempura de Camarones', jpName: '海老天ぷら',
      desc: 'Camarones king jumbo en tempura dorada y crujiente. Acompañados de tentsuyu para mojar.',
      price: 12500, allergens: ['gluten','shellfish'],
      img: 'https://tofuu.getjusto.com/orioneat-local/resized2/DEnmZgoctGsgWwBhx-2400-x.webp',
      tags: ['shellfish']
    },
    {
      id: 8, name: 'Sashimi Mixto', jpName: '刺身盛り合わせ',
      desc: 'Selección premium de 12 piezas: salmón, atún, reineta y pulpo cortados por nuestro chef. Sin arroz.',
      price: 18500, allergens: ['shellfish'],
      img: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&q=80',
      tags: []
    },
    {
      id: 9, name: 'Sashimi de Salmón', jpName: 'サーモン刺身',
      desc: '8 piezas de salmón del pacífico cortado en lascas generosas. Acompañado de wasabi y jengibre encurtido.',
      price: 13800, allergens: [],
      img: 'https://www.manusmenu.com/wp-content/uploads/2016/06/salmon-sashimi-served-with-ponzu-and-wasabi.webp',
      tags: []
    }
  ],
  fondo: [
    {
      id: 11, name: 'Ramen Tonkotsu', jpName: 'とんこつラーメン',
      desc: 'Caldo de hueso de cerdo cocido 12 hrs, fideos ramen, chashu de cerdo, huevo ajitsuke, nori y negi.',
      price: 14800, allergens: ['gluten','dairy'],
      img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
      tags: []
    },
    {
      id: 12, name: 'Ramen Miso', jpName: '味噌ラーメン',
      desc: 'Caldo intenso de miso hokkaido con mantequilla de maíz, chashu, menma y huevo. Reconfortante y umami.',
      price: 14200, allergens: ['gluten','dairy'],
      img: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&q=80',
      tags: []
    },
    {
      id: 13, name: 'Ramen Shoyu', jpName: '醤油ラーメン',
      desc: 'Caldo liviano de pollo y soya, acompañado de chashu de pollo, bambú y naruto. La versión más tradicional.',
      price: 13500, allergens: ['gluten'],
      img: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=400&q=80',
      tags: []
    },
    {
      id: 14, name: 'Sushi Omakase (10 pzs)', jpName: 'おまかせ寿司',
      desc: 'Selección del chef: 10 nigiri premium con los mejores ingredientes del día. Salmón, atún, erizo y más.',
      price: 24500, allergens: ['shellfish'],
      img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=80',
      tags: []
    },
    {
      id: 15, name: 'Rolls Variados (8 pzs)', jpName: 'ロール寿司',
      desc: 'Roll mixto del día, este pletillo nos entrega una variable selecion de sushi del restaurante.',
      price: 19800, allergens: ['gluten','dairy','shellfish'],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMv1oja227Owvm1pNDeB5Ts_OO3hRQ7o1P8g&s',
      tags: ['spicy']
    },
    {
      id: 17, name: 'Yakiniku (Res Premium)', jpName: '焼き肉',
      desc: 'Cortes de wagyu y res premium para cocción en parrilla a la mesa. Incluye 4 salsas y guarniciones.',
      price: 32000, allergens: ['gluten'],
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
      tags: []
    },
    {
      id: 18, name: 'Gohan Karaage', jpName: 'からあげ定食',
      desc: 'Teishoku completo: pollo karaage crujiente, arroz gohan, miso soup, tsukemono y ensalada de wakame.',
      price: 12800, allergens: ['gluten'],
      img: 'https://tofuu.getjusto.com/orioneat-local/resized2/7hnSFGmwYwRc7M3nG-512-x.webp',
      tags: []
    },
    
    {
      id: 20, name: 'Chirashi Sushi', jpName: 'ちらし寿司',
      desc: 'Bowl de arroz shari cubierto con sashimi variado, huevas de masago, aguacate y pepino. Fresco y completo.',
      price: 17800, allergens: ['shellfish'],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMbvzqkdLHKn4fW-CWTstEap0x9L-FWH5CTg&s',
      tags: []
    }
  ],
  postre: [
    {
      id: 21, name: 'Mochi de Matcha (4 pzs)', jpName: '抹茶餅',
      desc: 'Mochi artesanal relleno de pasta de té matcha ceremonial y anko de judía dulce. Suave y aromático.',
      price: 4800, allergens: ['dairy'],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRneupSWI12qsPt5fE15KWt9y51TIg2coZx6Q&s',
      tags: ['vegan']
    },
    {
      id: 22, name: 'Mochi Variado (4 pzs)', jpName: 'もち盛り合わせ',
      desc: 'Cuatro mochis artesanales: matcha, sakura, fresa y chocolate negro. Perfectos para compartir.',
      price: 7200, allergens: ['dairy'],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0T-_VNVn82SnTH73aRCoKHC_HtOWI1ogJiQ&s',
      tags: []
    },
    {
      id: 23, name: 'Dorayaki', jpName: 'どら焼き',
      desc: 'Pancakes japoneses esponjosos rellenos de anko (pasta de judía roja azucarada). Clásico wagashi.',
      price: 4200, allergens: ['gluten','dairy'],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQ8ku07iCUC9yyjVVHdav0rqOxVDDnsb9wA&s',
      tags: []
    },
    {
      id: 24, name: 'Matcha Cheesecake', jpName: '抹茶チーズケーキ',
      desc: 'Cheesecake japonés aireado con esencia de matcha premium de Uji, base de galleta y coulis de frambuesa.',
      price: 6500, allergens: ['gluten','dairy'],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPBJZAeEKANu1yTQpsI_qYLjDcVj5ZjjsWQ&s',
      tags: []
    },
    {
      id: 25, name: 'Helado Matcha', jpName: '抹茶アイス',
      desc: 'Helado artesanal de matcha japonés, intenso y cremoso. Servido con mochi de arroz y azuki.',
      price: 5200, allergens: ['dairy'],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq4zRlpF2th5_BMFzkDdG1CY1zbpCizE2IJg&s',
      tags: []
    },
    {
      id: 26, name: 'Helado de Miso Negro', jpName: '黒みそアイス',
      desc: 'Helado único de miso negro de Kioto, equilibrio perfecto entre dulce, salado y umami.',
      price: 5600, allergens: ['dairy'],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOndSEDBwOzgoHc_T5B-ApQaOR6dGKUD9lw&s',
      tags: []
    },
    {
      id: 27, name: 'Tiramisú de Matcha', jpName: '抹茶ティラミス',
      desc: 'Reinvención japonesa del tiramisú clásico: capas de bizcocho de matcha, mascarpone y polvo de matcha ceremonial.',
      price: 6800, allergens: ['gluten','dairy'],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrcmd1IzlC5hwPGzQhEFVctl1VOqxWWJKs0w&s',
      tags: []
    },
    {
      id: 28, name: 'Selva negra', jpName: 'ジャングルミルク',
      desc: 'Postre tipico de selva negra con crema y frutas.',
      price: 4500, allergens: ['gluten','dairy'],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaGe5dOZVFAw5AScPRLwNNESGq68F-8alBg&s',
      tags: []
    }
  ],
  bebestibles: [
    {
      id: 29, name: 'Sake Junmai (copa)', jpName: '純米酒',
      desc: 'Sake artesanal puro de arroz, seco y delicado con notas florales. Servido frío a 8°C.',
      price: 6800, allergens: ['gluten'],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYeAJUDsi7zCet_2p8R1EKc2eBM9iLgzXcg&s',
      tags: []
    },
    {
      id: 30, name: 'Matcha Latte', jpName: '抹茶ラテ',
      desc: 'Té matcha ceremonial de Uji batido con leche de avena cremosa. Caliente o frío. Antioxidante natural.',
      price: 4500, allergens: ['dairy'],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYREKmrpUmT-A5H-SA_a36PlxUS4xRe0dMzA&s',
      tags: []
    },
    {
      id: 31, name: 'Yuzu Sour', jpName: 'ゆず・サワー',
      desc: 'Cóctel refrescante de yuzu fresco, shochu, agua mineral y miel de flores silvestres. Sin alcohol disponible.',
      price: 5800, allergens: [],
      img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80',
      tags: []
    },
    {
      id: 32, name: 'Ramune', jpName: 'ラムネ',
      desc: 'Bebida carbonatada japonesa clásica con bolita de mármol en la botella. Sabor a limón y soda.',
      price: 3200, allergens: [],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtw6IymwrxSDQ88xbpaiuURapFISxl4p5RDA&s',
      tags: ['vegan']
    },
    {
      id: 33, name: 'Té Hojicha Frío', jpName: '冷たいほうじ茶',
      desc: 'Té verde tostado japonés, servido frío con hielo y un toque de jazmín. Bajo en cafeína.',
      price: 3800, allergens: [],
      img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
      tags: ['vegan','diabetic']
    },
    {
      id: 34, name: 'Sapporo Draft (500ml)', jpName: 'サッポロビール',
      desc: 'Cerveza japonesa premium Sapporo, lager dorada con sabor limpio y refrescante.',
      price: 5500, allergens: ['gluten'],
      img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80',
      tags: []
    },
    {
      id: 35, name: 'Jugos de fruta', jpName: 'フルーツジュース',
      desc: 'Jugos naturales con pulpa de frutas frescas.',
      price: 5200, allergens: [],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5iwRuQYzRAOpz3lGga_-hVFFxVbSzuhRjdg&s',
      tags: []
    },
    {
      id: 36, name: 'Bebidas', jpName: '飲み物',
      desc: 'Bebidas en envase de vidrio',
      price: 5200, allergens: [],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3kuWqFogejYGsfq0jDoBrDlBTzU9P_j0y0A&shttps://images.unsplash.com/photo-1583898350903-99d8f15c6f4b?w=400&q=80',
      tags: []
    }
  ]
};

/* ─────────────────────────────────────────
   DATA — EVENTS
───────────────────────────────────────── */
const EVENTS = [
  {
    name: 'Noche Omakase', date: 'Sáb 22 Marzo 2025',
    desc: 'Una experiencia gastronómica de 8 tiempos guiada por nuestro chef Kenji Tanaka. Cada plato revela una historia de Japón. Maridaje de sake incluido.',
    price: '$68.000 por persona',
    img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80'
  },
  {
    name: 'Clase de Ramen Artesanal', date: 'Dom 30 Marzo 2025',
    desc: 'Aprende de la mano de nuestros cocineros la preparación del caldo tonkotsu durante 12 horas. Teoría, práctica y almuerzo incluido.',
    price: '$45.000 por persona',
    img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80'
  },
  {
    name: 'Festival Sakura', date: 'Vie 4 Abril 2025',
    desc: 'Celebración de la floración de los cerezos con menú especial de temporada, sake premium y decoración temática de sakura en todo el local.',
    price: '$38.000 por persona',
    img: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&q=80'
  },
  {
    name: 'Sake & Sushi Pairing', date: 'Jue 10 Abril 2025',
    desc: 'El sommelier Hiroshi Yamamoto guía una experiencia de maridaje entre 6 tipos de sake y 18 piezas de nigiri premium seleccionados especialmente.',
    price: '$52.000 por persona',
    img: 'https://images.unsplash.com/photo-1617196034197-74c1483b7a3c?w=600&q=80'
  }
];

/* ─────────────────────────────────────────
   DATA — TABLES
───────────────────────────────────────── */
const TABLES = [
  { id:1, seats:2, zone:'Terraza', status:'free', reservation:null },
  { id:2, seats:2, zone:'Terraza', status:'occupied', reservation:null },
  { id:3, seats:4, zone:'Terraza', status:'reserved', reservation:{ name:'Valentina Morales', time:'20:00', persons:4 } },
  { id:4, seats:4, zone:'Terraza', status:'free', reservation:null },
  { id:5, seats:2, zone:'Salón Principal', status:'free', reservation:null },
  { id:6, seats:4, zone:'Salón Principal', status:'occupied', reservation:null },
  { id:7, seats:6, zone:'Salón Principal', status:'occupied', reservation:null },
  { id:8, seats:4, zone:'Salón Principal', status:'reserved', reservation:{ name:'Grupo Empresarial', time:'20:30', persons:4 } },
  { id:9, seats:2, zone:'Salón Principal', status:'free', reservation:null },
  { id:10, seats:4, zone:'Salón Principal', status:'free', reservation:null },
  { id:11, seats:8, zone:'Salón Privado', status:'reserved', reservation:{ name:'Cumpleaños Familia Ríos', time:'21:00', persons:8 } },
  { id:12, seats:6, zone:'Salón Privado', status:'free', reservation:null },
];

/* ─────────────────────────────────────────
   DATA — INVENTORY
───────────────────────────────────────── */
const INVENTORY_MP = [
  { id:1, name:'Salmón del Pacífico', category:'Pescados', qty:8, unit:'kg', min:4, max:20, cost:12000 },
  { id:2, name:'Atún Premium', category:'Pescados', qty:3, unit:'kg', min:3, max:12, cost:28000 },
  { id:3, name:'Arroz Koshihikari', category:'Granos', qty:25, unit:'kg', min:10, max:40, cost:2800 },
  { id:4, name:'Cerdo (Chashu)', category:'Carnes', qty:12, unit:'kg', min:5, max:20, cost:5500 },
  { id:5, name:'Fideos Ramen', category:'Pastas', qty:18, unit:'kg', min:8, max:30, cost:1200 },
  { id:6, name:'Pasta de Miso', category:'Condimentos', qty:5, unit:'kg', min:2, max:10, cost:3500 },
  { id:7, name:'Salsa de Soja', category:'Condimentos', qty:12, unit:'lt', min:4, max:20, cost:900 },
  { id:8, name:'Huevas de Masago', category:'Pescados', qty:1, unit:'kg', min:2, max:5, cost:18000 },
  { id:9, name:'Aguacate', category:'Frutas/Veg', qty:30, unit:'unid', min:20, max:80, cost:800 },
  { id:10, name:'Nori (Alga)', category:'Secos', qty:200, unit:'hojas', min:100, max:400, cost:180 },
  { id:11, name:'Sake de cocina', category:'Licores', qty:8, unit:'lt', min:4, max:15, cost:2200 },
  { id:12, name:'Matcha Ceremonial', category:'Tés', qty:0.8, unit:'kg', min:0.5, max:3, cost:45000 },
];

const INVENTORY_IMP = [
  { id:1, name:'Palillos (pares)', qty:300, min:150, unit:'pares' },
  { id:2, name:'Platillos para dipping', qty:80, min:50, unit:'unid' },
  { id:3, name:'Tazones de ramen', qty:45, min:30, unit:'unid' },
  { id:4, name:'Tablas de madera sushi', qty:24, min:20, unit:'unid' },
  { id:5, name:'Sillas', qty:56, min:40, unit:'unid' },
  { id:6, name:'Mesas', qty:12, min:12, unit:'unid' },
  { id:7, name:'Servilletas de tela', qty:200, min:120, unit:'unid' },
  { id:8, name:'Copas de sake', qty:60, min:40, unit:'unid' },
  { id:9, name:'Tenedores', qty:90, min:60, unit:'unid' },
  { id:10, name:'Cucharas soperas', qty:75, min:50, unit:'unid' },
];

/* ─────────────────────────────────────────
   DATA — STAFF
───────────────────────────────────────── */
const STAFF = [
  { id:1, name:'Kenji Tanaka', role:'Chef Principal', dept:'Cocina', schedule:'L-S 10:00-23:00', status:'active', phone:'+56 9 8765 4321', email:'kenji@sakura.cl', photo:'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=200&q=80', weekHours:{ L:'M',Ma:'M',Mi:'M',J:'M',V:'M',S:'M',D:'OFF' } },
  { id:2, name:'Hiroshi Nakamura', role:'Cocinero Sushiman', dept:'Cocina', schedule:'Ma-D 12:00-23:00', status:'active', phone:'+56 9 7654 3210', email:'hiroshi@sakura.cl', photo:'https://images.unsplash.com/photo-1583394293214-0de91dc8ca9f?w=200&q=80', weekHours:{ L:'OFF',Ma:'T',Mi:'T',J:'T',V:'T',S:'T',D:'T' } },
  { id:3, name:'Carlos Fuentes', role:'Cocinero Ramen', dept:'Cocina', schedule:'L-V 10:00-22:00', status:'active', phone:'+56 9 6543 2109', email:'carlos@sakura.cl', photo:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', weekHours:{ L:'M',Ma:'M',Mi:'M',J:'M',V:'M',S:'OFF',D:'OFF' } },
  { id:4, name:'Valentina Cruz', role:'Garzón', dept:'Sala', schedule:'Ma-S 18:00-00:00', status:'active', phone:'+56 9 5432 1098', email:'vale@sakura.cl', photo:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', weekHours:{ L:'OFF',Ma:'N',Mi:'N',J:'N',V:'N',S:'N',D:'OFF' } },
  { id:5, name:'Felipe Morales', role:'Garzón', dept:'Sala', schedule:'J-L 12:00-22:00', status:'active', phone:'+56 9 4321 0987', email:'fmorales@sakura.cl', photo:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', weekHours:{ L:'T',Ma:'OFF',Mi:'OFF',J:'T',V:'T',S:'T',D:'T' } },
  { id:6, name:'Sofía Rodríguez', role:'Cajera', dept:'Caja', schedule:'L-S 12:00-22:00', status:'active', phone:'+56 9 3210 9876', email:'sofia@sakura.cl', photo:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', weekHours:{ L:'T',Ma:'T',Mi:'T',J:'T',V:'T',S:'T',D:'OFF' } },
  { id:7, name:'Andrés López', role:'Barman', dept:'Bar', schedule:'M-D 18:00-02:00', status:'active', phone:'+56 9 2109 8765', email:'andres@sakura.cl', photo:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80', weekHours:{ L:'OFF',Ma:'N',Mi:'N',J:'N',V:'N',S:'N',D:'N' } },
  { id:8, name:'Patricia Soto', role:'Limpieza', dept:'Operaciones', schedule:'L-V 08:00-16:00', status:'active', phone:'+56 9 1098 7654', email:'paty@sakura.cl', photo:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80', weekHours:{ L:'M',Ma:'M',Mi:'M',J:'M',V:'M',S:'OFF',D:'OFF' } },
  { id:9, name:'Diego Vega', role:'Coopera (Ayudante)', dept:'Cocina', schedule:'L-V 11:00-20:00', status:'off', phone:'+56 9 0987 6543', email:'diego@sakura.cl', photo:'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80', weekHours:{ L:'M',Ma:'M',Mi:'M',J:'M',V:'M',S:'OFF',D:'OFF' } },
  { id:10, name:'Mariana Ortiz', role:'Administradora', dept:'Administración', schedule:'L-V 09:00-18:00', status:'active', phone:'+56 9 9876 5432', email:'mariana@sakura.cl', photo:'https://images.unsplash.com/photo-1491349174775-aaaefdd81942?w=200&q=80', weekHours:{ L:'M',Ma:'M',Mi:'M',J:'M',V:'M',S:'OFF',D:'OFF' } },
];

/* ─────────────────────────────────────────
   DATA — ORDERS / KITCHEN
───────────────────────────────────────── */
let ORDERS = [
  { id:'P-001', table:7, status:'preparing', time:'20:14', waiter:'Valentina Cruz', items:[
    { menuId:11, name:'Ramen Tonkotsu', qty:2, price:14800, mods:'Sin picante (un niño)' },
    { menuId:8, name:'Sashimi Mixto', qty:1, price:18500, mods:'' },
    { menuId:34, name:'Sapporo Draft', qty:2, price:5500, mods:'' },
  ]},
  { id:'P-002', table:2, status:'ready', time:'20:02', waiter:'Felipe Morales', items:[
    { menuId:1, name:'Gyozas al Vapor', qty:2, price:8500, mods:'Sin gluten (celíaco)' },
    { menuId:18, name:'Gohan Karaage', qty:1, price:12800, mods:'' },
  ]},
  { id:'P-003', table:6, status:'pending', time:'20:22', waiter:'Valentina Cruz', items:[
    { menuId:6, name:'Tempura de Verduras', qty:3, price:8900, mods:'' },
    { menuId:15, name:'Rolls Variados', qty:2, price:19800, mods:'Sin mariscos (alergia)' },
    { menuId:33, name:'Té Hojicha Frío', qty:3, price:3800, mods:'' },
  ]},
  { id:'P-004', table:5, status:'pending', time:'20:27', waiter:'Felipe Morales', items:[
    { menuId:4, name:'Wantán Frito', qty:2, price:7200, mods:'' },
    { menuId:16, name:'Yakitori Parrilla', qty:1, price:16500, mods:'' },
  ]},
];

/* ─────────────────────────────────────────
   DATA — SALES
───────────────────────────────────────── */
const SALES_DATA = {
  weekly: [62000, 84000, 53000, 97000, 128000, 156000, 88000],
  weekDays: ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'],
  tables: [
    { table:2, items:[{ name:'Gyozas al Vapor x2', price:17000 },{ name:'Gohan Karaage x1', price:12800 }], status:'cerrada', waiter:'Felipe Morales' },
    { table:6, items:[{ name:'Tempura Verduras x3', price:26700 },{ name:'Rolls Variados x2', price:39600 },{ name:'Té Hojicha x3', price:11400 }], status:'abierta', waiter:'Valentina Cruz' },
    { table:7, items:[{ name:'Ramen Tonkotsu x2', price:29600 },{ name:'Sashimi Mixto x1', price:18500 },{ name:'Sapporo x2', price:11000 }], status:'abierta', waiter:'Valentina Cruz' },
    { table:11, items:[{ name:'Omakase Sushi x4', price:98000 },{ name:'Sake Junmai x4', price:27200 },{ name:'Mochi Variado x2', price:14400 }], status:'abierta', waiter:'Felipe Morales' },
  ]
};

/* ─────────────────────────────────────────
   DATA — RECIPES
───────────────────────────────────────── */
const RECIPES = [
  {
    id:1, name:'Ramen Tonkotsu', jpName:'豚骨ラーメン', yield:1,
    img:'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
    ingredients:[
      { name:'Caldo de huesos', qty:400, unit:'ml' },
      { name:'Fideos ramen', qty:120, unit:'g' },
      { name:'Chashu (cerdo)', qty:80, unit:'g' },
      { name:'Huevo ajitsuke', qty:1, unit:'unid' },
      { name:'Nori (alga)', qty:2, unit:'hojas' },
      { name:'Cebollín', qty:10, unit:'g' },
      { name:'Menma (bambú)', qty:30, unit:'g' },
      { name:'Aceite de sésamo', qty:5, unit:'ml' },
    ],
    steps:[
      'Hervir el caldo de huesos durante 12 horas hasta obtener una textura lechosa y espesa. Sazonar con sal y salsa de soja.',
      'Cocinar los fideos ramen en agua hirviendo por 2 minutos hasta al dente. Escurrir y reservar.',
      'Calentar el caldo en una olla aparte. Agregar el aceite de sésamo al final.',
      'Preparar el tazón: colocar los fideos y verter el caldo caliente encima.',
      'Cubrir con el chashu cortado en rodajas, el huevo cortado a la mitad, menma, nori y cebollín picado.',
      'Servir inmediatamente para preservar la temperatura óptima del caldo.',
    ]
  },
  {
    id:2, name:'Gyozas al Vapor', jpName:'蒸し餃子', yield:6,
    img:'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80',
    ingredients:[
      { name:'Masa wonton', qty:6, unit:'hojas' },
      { name:'Carne de cerdo molida', qty:80, unit:'g' },
      { name:'Repollo', qty:40, unit:'g' },
      { name:'Cebollín', qty:20, unit:'g' },
      { name:'Jengibre rallado', qty:5, unit:'g' },
      { name:'Salsa de soja', qty:10, unit:'ml' },
      { name:'Aceite de sésamo', qty:5, unit:'ml' },
    ],
    steps:[
      'Picar finamente el repollo, el cebollín y rallar el jengibre. Mezclar con la carne de cerdo.',
      'Sazonar la mezcla con salsa de soja, aceite de sésamo, sal y pimienta blanca.',
      'Colocar una cucharadita del relleno en cada masa. Doblar y plegar el borde en forma de media luna.',
      'Cocinar al vapor en una vaporera de bambú durante 8-10 minutos.',
      'Servir de inmediato con salsa ponzu, jengibre encurtido y aceite chili.',
    ]
  },
  {
    id:3, name:'Sashimi Mixto', jpName:'刺身盛り合わせ', yield:1,
    img:'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&q=80',
    ingredients:[
      { name:'Salmón premium', qty:60, unit:'g' },
      { name:'Atún premium', qty:60, unit:'g' },
      { name:'Reineta', qty:40, unit:'g' },
      { name:'Pulpo cocido', qty:30, unit:'g' },
      { name:'Wasabi fresco', qty:5, unit:'g' },
      { name:'Jengibre encurtido', qty:20, unit:'g' },
      { name:'Salsa de soja premium', qty:15, unit:'ml' },
      { name:'Daikon rallado', qty:20, unit:'g' },
    ],
    steps:[
      'Mantener el pescado en refrigeración entre 0-2°C hasta el momento del corte.',
      'Cortar el salmón y atún en lascas de 0.5-0.8 cm de grosor con un movimiento limpio del cuchillo yanagiba.',
      'El pulpo debe estar previamente cocido y enfriado. Cortar en rodajas delgadas.',
      'Preparar el plato con hielo picado cubierto con una hoja de shiso o daikon rallado.',
      'Disponer las piezas en abanico, agrupando por tipo de pescado. El wasabi va al lado.',
      'Servir inmediatamente con salsa de soja en platillo separado.',
    ]
  },
  {
    id:4, name:'Mochi de Matcha', jpName:'抹茶餅', yield:4,
    img:'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80',
    ingredients:[
      { name:'Harina de arroz glutinoso', qty:100, unit:'g' },
      { name:'Matcha ceremonial', qty:8, unit:'g' },
      { name:'Azúcar', qty:60, unit:'g' },
      { name:'Agua', qty:120, unit:'ml' },
      { name:'Pasta anko (judía)', qty:120, unit:'g' },
      { name:'Maicena (para amasar)', qty:30, unit:'g' },
    ],
    steps:[
      'Mezclar la harina de arroz con el matcha tamizado, el azúcar y el agua hasta obtener una masa homogénea.',
      'Cubrir con film plástico y cocinar en microondas por 2 minutos. Remover y cocinar 1 minuto más.',
      'Espolvorear la superficie de trabajo con maicena. Extender la masa caliente con paleta húmeda.',
      'Dividir en 4 porciones. Formar bolas de anko de 30g cada una.',
      'Envolver cada bola de anko con la masa de mochi, sellando bien los bordes.',
      'Refrigerar 30 minutos antes de servir. Conservar hasta 24 hrs en frío.',
    ]
  }
];

/* ═══════════════════════════════════════════
   APPLICATION STATE
═══════════════════════════════════════════ */
const STATE = {
  currentRole: 'admin',
  currentPage: 'dashboard',
  menuTab: 'entrada',
  orderMenuTab: 'entrada',
  invTab: 'mp',
  staffTab: 'all',
  cart: [],
  currentAllergyIndex: null,
  selectedOrderTable: 1,
  kitchenRefreshInterval: null,
  clockInterval: null,
  editingStaffId: null,
};

/* ═══════════════════════════════════════════
   UTILS
═══════════════════════════════════════════ */
const Utils = {
  notify(msg, type = 'success') {
    const el = document.getElementById('notification');
    const txt = document.getElementById('notif-text');
    const icon = el.querySelector('.notif-icon');
    txt.textContent = msg;
    const icons = { success:'fa-check-circle', error:'fa-times-circle', info:'fa-info-circle', warn:'fa-exclamation-triangle' };
    icon.className = `notif-icon fas ${icons[type]||icons.success}`;
    el.className = `notification ${type} show`;
    clearTimeout(el._timeout);
    el._timeout = setTimeout(() => el.classList.remove('show'), 3500);
  },
  fmtCLP(n) { return '$' + Math.round(n).toLocaleString('es-CL'); },
  scrollTo(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); },
  scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); },
  allItems() { return Object.values(MENU).flat(); },
  findItem(id) { return Utils.allItems().find(i => i.id === id); },
  getStockClass(qty, max) {
    const pct = qty / max;
    if (pct >= 0.6) return { cls: 'sf-high', label: 'OK', badge: 'badge-green' };
    if (pct >= 0.3) return { cls: 'sf-mid', label: 'Bajo', badge: 'badge-orange' };
    return { cls: 'sf-low', label: 'Crítico', badge: 'badge-red' };
  },
  allergenLabel(key) {
    return { gluten:'Sin Gluten', dairy:'Sin Lácteos', diabetic:'Diabético', vegan:'Vegano', shellfish:'Sin Mariscos', nuts:'Sin Frutos Secos', spicy:'Sin Picante' }[key] || key;
  },
  roleName(r) {
    return { admin:'Administrador', garzon:'Garzón', cocina:'Cocina', cajero:'Cajero', barman:'Barman' }[r] || r;
  },
  deptRoles: {
    'Cocina':['Chef Principal','Cocinero Sushiman','Cocinero Ramen','Coopera (Ayudante)'],
    'Sala':['Garzón'],
    'Bar':['Barman'],
    'Caja':['Cajera','Cajero'],
    'Operaciones':['Limpieza'],
    'Administración':['Administrador','Administradora']
  }
};

/* ═══════════════════════════════════════════
   MAIN APP
═══════════════════════════════════════════ */
const APP = {
  /* ─── PUBLIC ─── */
  scrollTo: Utils.scrollTo,
  scrollToTop: Utils.scrollToTop,

  initPublic() {
    const today = new Date().toISOString().split('T')[0];
    const rf = document.getElementById('res-fecha');
    if (rf) rf.value = today;
    this.renderMenuTabs();
    this.renderMenuGrid();
    this.renderEvents();
  },

  renderMenuTabs() {
    const tabConfig = [
      { key:'entrada', label:'Entradas', emoji:'🥟' },
      { key:'fondo', label:'Fondos', emoji:'🍜' },
      { key:'postre', label:'Postres', emoji:'🍡' },
      { key:'bebestibles', label:'Bebestibles', emoji:'🍶' },
    ];
    const ct = document.getElementById('menu-tabs-public');
    if (!ct) return;
    ct.innerHTML = tabConfig.map(t =>
      `<button class="menu-tab ${t.key===STATE.menuTab?'active':''}" onclick="APP.setMenuTab('${t.key}')">
        <span class="tab-emoji">${t.emoji}</span>${t.label}
      </button>`
    ).join('');
  },

  renderMenuGrid() {
    const ct = document.getElementById('menu-grid-public');
    if (!ct) return;
    const items = MENU[STATE.menuTab] || [];
    const tagMap = {
      gluten:'<span class="tag tag-gluten">🌾 Gluten</span>',
      dairy:'<span class="tag tag-dairy">🥛 Lácteos</span>',
      vegan:'<span class="tag tag-vegan">🌱 Vegano</span>',
      diabetic:'<span class="tag tag-diabetic">💙 Diabético</span>',
      shellfish:'<span class="tag tag-shellfish">🦐 Mariscos</span>',
      spicy:'<span class="tag tag-spicy">🌶 Picante</span>',
    };
    ct.innerHTML = items.map(item => `
      <div class="menu-card">
        <div class="menu-card-img">
          <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'">
          <div class="menu-card-price-badge">${Utils.fmtCLP(item.price)}</div>
        </div>
        <div class="menu-card-body">
          <div class="menu-card-name">${item.name}</div>
          <div class="menu-card-jp">${item.jpName}</div>
          <div class="menu-card-desc">${item.desc}</div>
          <div class="menu-card-footer">
            <div class="menu-card-tags">${(item.tags||[]).map(t=>tagMap[t]||'').join('')}</div>
            <button class="btn btn-primary btn-sm" onclick="APP.scrollTo('reservas-section')">Reservar</button>
          </div>
        </div>
      </div>`).join('');
  },

  setMenuTab(tab) {
    STATE.menuTab = tab;
    this.renderMenuTabs();
    this.renderMenuGrid();
  },

  renderEvents() {
    const ct = document.getElementById('events-grid');
    if (!ct) return;
    ct.innerHTML = EVENTS.map(e => `
      <div class="event-card">
        <div class="event-banner">
          <img src="${e.img}" alt="${e.name}" loading="lazy">
          <div class="event-banner-overlay"></div>
          <div class="event-date-badge">📅 ${e.date}</div>
        </div>
        <div class="event-body">
          <div class="event-name">${e.name}</div>
          <div class="event-desc">${e.desc}</div>
          <div class="event-footer">
            <div class="event-price">${e.price}</div>
            <button class="btn btn-primary btn-sm" onclick="APP.scrollTo('reservas-section')">Reservar</button>
          </div>
        </div>
      </div>`).join('');
  },

  submitReserva() {
    const nombre = document.getElementById('res-nombre')?.value.trim();
    const tel = document.getElementById('res-tel')?.value.trim();
    const fecha = document.getElementById('res-fecha')?.value;
    if (!nombre || !tel || !fecha) { Utils.notify('Completa todos los campos requeridos', 'error'); return; }
    const freeTable = TABLES.find(t => t.status === 'free');
    if (freeTable) { freeTable.status = 'reserved'; freeTable.reservation = { name: nombre, time: document.getElementById('res-hora')?.value, persons: document.getElementById('res-personas')?.value }; }
    document.getElementById('reserva-form-wrap').classList.add('hidden');
    document.getElementById('reserva-success').classList.remove('hidden');
    Utils.notify(`¡Reserva confirmada para ${nombre}!`, 'success');
  },

  resetReserva() {
    document.getElementById('reserva-form-wrap').classList.remove('hidden');
    document.getElementById('reserva-success').classList.add('hidden');
  },

  /* ─── LOGIN ─── */
  showLogin() { document.getElementById('login-overlay').classList.remove('hidden'); this.buildLoginRoles(); },
  hideLogin() { document.getElementById('login-overlay').classList.add('hidden'); },

  buildLoginRoles() {
    const roles = [
      { key:'admin', label:'Admin', icon:'👑' },
      { key:'garzon', label:'Garzón', icon:'🍽️' },
      { key:'cocina', label:'Cocina', icon:'👨‍🍳' },
      { key:'cajero', label:'Cajero', icon:'💳' },
      { key:'barman', label:'Barman', icon:'🍶' },
    ];
    const ct = document.getElementById('login-roles');
    if (!ct) return;
    ct.innerHTML = roles.map(r =>
      `<div class="role-btn ${r.key===STATE.currentRole?'active':''}" data-role="${r.key}" onclick="APP.selectRole(this)">
        <span class="role-icon">${r.icon}</span>${r.label}
      </div>`
    ).join('');
  },

  selectRole(el) {
    document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    STATE.currentRole = el.dataset.role;
  },

  doLogin() {
    const user = document.getElementById('login-user')?.value;
    const pass = document.getElementById('login-pass')?.value;
    if (!user || !pass) { Utils.notify('Ingresa usuario y contraseña', 'error'); return; }
    this.hideLogin();
    document.getElementById('public-site').classList.add('hidden');
    document.getElementById('admin-shell').classList.remove('hidden');
    this.setupAdminShell();
    Utils.notify(`Bienvenido, ${Utils.roleName(STATE.currentRole)}`, 'success');
  },

  doLogout() {
    document.getElementById('public-site').classList.remove('hidden');
    document.getElementById('admin-shell').classList.add('hidden');
    STATE.cart = [];
    if (STATE.clockInterval) { clearInterval(STATE.clockInterval); STATE.clockInterval = null; }
    Utils.notify('Sesión cerrada correctamente', 'info');
  },

  /* ─── ADMIN SHELL ─── */
  setupAdminShell() {
    const rolePages = {
      admin: [
        { section:'General', items:[
          { id:'dashboard', icon:'fa-tachometer-alt', label:'Dashboard' },
          { id:'mapa', icon:'fa-map-marker-alt', label:'Mapa de Mesas' },
        ]},
        { section:'Operaciones', items:[
          { id:'pedidos', icon:'fa-list-alt', label:'Pedidos' },
          { id:'tomar-pedido', icon:'fa-pen-to-square', label:'Tomar Pedido' },
          { id:'cocina', icon:'fa-fire', label:'Cocina (Vista)' },
        ]},
        { section:'Gestión', items:[
          { id:'inventario', icon:'fa-boxes-stacked', label:'Inventario' },
          { id:'personal', icon:'fa-users', label:'Personal' },
          { id:'ventas', icon:'fa-chart-bar', label:'Ventas' },
          { id:'recetas', icon:'fa-book-open', label:'Recetas' },
        ]},
      ],
      garzon: [
        { section:'Sala', items:[
          { id:'mapa', icon:'fa-map-marker-alt', label:'Mapa de Mesas' },
          { id:'tomar-pedido', icon:'fa-pen-to-square', label:'Tomar Pedido' },
          { id:'pedidos', icon:'fa-list-alt', label:'Mis Pedidos' },
        ]},
      ],
      cocina: [
        { section:'Cocina', items:[
          { id:'cocina', icon:'fa-fire', label:'Pedidos Cocina' },
        ]},
      ],
      cajero: [
        { section:'Caja', items:[
          { id:'ventas', icon:'fa-chart-bar', label:'Ventas & Boletas' },
          { id:'mapa', icon:'fa-map-marker-alt', label:'Mapa de Mesas' },
        ]},
      ],
      barman: [
        { section:'Bar', items:[
          { id:'pedidos', icon:'fa-list-alt', label:'Pedidos Bar' },
          { id:'inventario', icon:'fa-boxes-stacked', label:'Inventario Bar' },
        ]},
      ],
    };

    const sections = rolePages[STATE.currentRole] || rolePages.admin;
    const firstPage = sections[0].items[0].id;
    STATE.currentPage = firstPage;

    const nav = document.getElementById('sidebar-nav');
    nav.innerHTML = sections.map(sec => `
      <div class="sidebar-section-label">${sec.section}</div>
      ${sec.items.map(p =>
        `<button class="sidebar-item ${p.id===STATE.currentPage?'active':''}" data-page="${p.id}" onclick="APP.goTo('${p.id}')">
          <i class="fas ${p.icon}"></i> ${p.label}
        </button>`
      ).join('')}
    `).join('');

    const staffMember = STAFF.find(s => s.role.toLowerCase().includes(STATE.currentRole) || (STATE.currentRole==='admin' && s.role==='Administradora'));
    const avatarEl = document.getElementById('user-avatar');
    if (staffMember && staffMember.photo) {
      avatarEl.innerHTML = `<img src="${staffMember.photo}" alt="${staffMember.name}">`;
    } else {
      avatarEl.textContent = Utils.roleName(STATE.currentRole)[0].toUpperCase();
      avatarEl.innerHTML = Utils.roleName(STATE.currentRole)[0].toUpperCase();
    }
    document.getElementById('user-name-display').textContent = staffMember ? staffMember.name : Utils.roleName(STATE.currentRole);
    document.getElementById('user-role-display').textContent = staffMember ? staffMember.role : Utils.roleName(STATE.currentRole);

    const roleColors = { admin:'badge-gold', garzon:'badge-sky', cocina:'badge-red', cajero:'badge-green', barman:'badge-sakura' };
    document.getElementById('sidebar-role-badge').innerHTML = `<span class="badge ${roleColors[STATE.currentRole]||'badge-gray'}">${Utils.roleName(STATE.currentRole)}</span>`;

    this.startClock();
    this.goTo(firstPage);
  },

  startClock() {
    if (STATE.clockInterval) clearInterval(STATE.clockInterval);
    const el = document.getElementById('admin-clock');
    const update = () => { if (el) el.textContent = new Date().toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit', second: '2-digit' }); };
    update();
    STATE.clockInterval = setInterval(update, 1000);
  },

  goTo(page) {
    STATE.currentPage = page;
    document.querySelectorAll('.sidebar-item').forEach(el => {
      el.classList.toggle('active', el.dataset.page === page);
    });
    const titles = {
      dashboard: 'Dashboard', mapa: 'Mapa de Mesas', inventario: 'Inventario',
      personal: 'Gestión de Personal', ventas: 'Sistema de Ventas',
      pedidos: 'Pedidos Activos', 'tomar-pedido': 'Tomar Pedido',
      cocina: 'Vista Cocina', recetas: 'Recetas & Calculadora'
    };
    document.getElementById('admin-page-title').textContent = titles[page] || page;
    document.getElementById('admin-content').innerHTML = '';
    this.renderPage(page);
  },

  renderPage(page) {
    const ct = document.getElementById('admin-content');
    const renderers = {
      dashboard: () => this.renderDashboard(),
      mapa: () => this.renderMapa(),
      inventario: () => this.renderInventario(),
      personal: () => this.renderPersonal(),
      ventas: () => this.renderVentas(),
      pedidos: () => this.renderPedidos(),
      'tomar-pedido': () => this.renderTomarPedido(),
      cocina: () => this.renderCocina(),
      recetas: () => this.renderRecetas(),
    };
    if (renderers[page]) { ct.innerHTML = renderers[page](); this.initPageEvents(page); }
    else { ct.innerHTML = '<div class="card card-body"><p>Página en construcción</p></div>'; }
  },

  initPageEvents(page) {
    if (page === 'tomar-pedido') this.buildOrderBuilder();
    if (page === 'cocina') this.setupKitchenRefresh();
    else if (STATE.kitchenRefreshInterval) { clearInterval(STATE.kitchenRefreshInterval); STATE.kitchenRefreshInterval = null; }
  },

  /* ─── DASHBOARD ─── */
  renderDashboard() {
    const free = TABLES.filter(t => t.status === 'free').length;
    const occ = TABLES.filter(t => t.status === 'occupied').length;
    const res = TABLES.filter(t => t.status === 'reserved').length;
    const todayTotal = SALES_DATA.tables.reduce((a,t) => a + t.items.reduce((b,i) => b+i.price, 0), 0);
    const lowStock = [...INVENTORY_MP, ...INVENTORY_IMP.map(i => ({...i, max: i.min*2}))].filter(i => i.qty <= i.min);

    return `
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-icon si-orange"><i class="fas fa-chair"></i></div><div><div class="stat-val">${occ}</div><div class="stat-label">Mesas Ocupadas</div></div></div>
      <div class="stat-card"><div class="stat-icon si-green"><i class="fas fa-check-circle"></i></div><div><div class="stat-val">${free}</div><div class="stat-label">Mesas Libres</div></div></div>
      <div class="stat-card"><div class="stat-icon si-sky"><i class="fas fa-calendar-check"></i></div><div><div class="stat-val">${res}</div><div class="stat-label">Reservas Hoy</div></div></div>
      <div class="stat-card"><div class="stat-icon si-sakura"><i class="fas fa-list-alt"></i></div><div><div class="stat-val">${ORDERS.length}</div><div class="stat-label">Pedidos Activos</div></div></div>
      <div class="stat-card"><div class="stat-icon si-gold"><i class="fas fa-yen-sign"></i></div><div><div class="stat-val">${Utils.fmtCLP(todayTotal)}</div><div class="stat-label">Ventas del Día</div><div class="stat-delta up">↑ +12% vs ayer</div></div></div>
    </div>
    <div class="dash-grid">
      <div class="card">
        <div class="card-header">
          <div class="card-title"><i class="fas fa-fire"></i> Pedidos en Curso</div>
          <button class="btn btn-ghost btn-sm" onclick="APP.goTo('pedidos')">Ver todos</button>
        </div>
        <div class="card-body" style="padding:0">
          ${ORDERS.map(o => `
          <div style="display:flex;align-items:center;gap:14px;padding:14px 20px;border-bottom:1px solid var(--border)">
            <div style="font-family:var(--font-head);font-size:20px;font-weight:700;color:var(--sky);min-width:50px">M${o.table}</div>
            <div style="flex:1">
              <div style="font-size:13px;font-weight:600">${o.items.length} productos · ${o.waiter}</div>
              <div style="font-size:11px;color:var(--ink3);margin-top:2px">⏱ ${o.time}</div>
            </div>
            <span class="badge ${o.status==='ready'?'badge-green':o.status==='preparing'?'badge-sky':'badge-orange'}">${{pending:'En espera',preparing:'Preparando',ready:'¡Listo!'}[o.status]}</span>
          </div>`).join('')}
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <div class="card-title"><i class="fas fa-exclamation-triangle"></i> Alertas de Stock</div>
          <button class="btn btn-ghost btn-sm" onclick="APP.goTo('inventario')">Inventario</button>
        </div>
        <div class="card-body" style="padding:0">
          ${lowStock.length === 0 ? '<div style="padding:20px;text-align:center;color:var(--ink3);font-size:13px">✅ Todo el stock en niveles óptimos</div>' : 
          lowStock.map(i => `
          <div style="display:flex;align-items:center;gap:12px;padding:12px 20px;border-bottom:1px solid var(--border)">
            <i class="fas fa-box" style="color:#E74C3C;font-size:13px"></i>
            <span style="flex:1;font-size:13px;font-weight:600">${i.name}</span>
            <span class="badge badge-red">${i.qty} ${i.unit}</span>
          </div>`).join('')}
        </div>
      </div>
    </div>`;
  },

  /* ─── MAPA ─── */
  renderMapa() {
    const zones = [...new Set(TABLES.map(t => t.zone))];
    const statusLabel = { free:'Libre', reserved:'Reservada', occupied:'Ocupada' };
    const statusClass = { free:'ts-free', reserved:'ts-reserved', occupied:'ts-occupied' };
    return `
    <div class="map-container">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:12px">
        <h3 style="font-family:var(--font-head);font-size:20px;font-weight:700">Plano del Restaurante</h3>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <span class="badge badge-green">Libres: ${TABLES.filter(t=>t.status==='free').length}</span>
          <span class="badge badge-orange">Ocupadas: ${TABLES.filter(t=>t.status==='occupied').length}</span>
          <span class="badge badge-red">Reservadas: ${TABLES.filter(t=>t.status==='reserved').length}</span>
        </div>
      </div>
      <div class="map-legend">
        <div class="legend-item"><div class="legend-dot ld-free"></div>Libre</div>
        <div class="legend-item"><div class="legend-dot ld-occupied"></div>Ocupada</div>
        <div class="legend-item"><div class="legend-dot ld-reserved"></div>Reservada</div>
      </div>
      <div class="map-zones">
        ${zones.map(zone => `
        <div>
          <div class="map-zone-label"><i class="fas fa-torii-gate" style="color:var(--sky)"></i> ${zone}</div>
          <div class="tables-row">
            ${TABLES.filter(t => t.zone === zone).map(t => `
            <div class="table-spot ${statusClass[t.status]}" onclick="APP.showTableDetail(${t.id})">
              <div class="t-num">${t.id}</div>
              <div class="t-seats"><i class="fas fa-user"></i> ${t.seats}</div>
              <div class="t-status-lbl">${statusLabel[t.status]}</div>
            </div>`).join('')}
          </div>
        </div>`).join('')}
      </div>
    </div>`;
  },

  showTableDetail(tableId) {
    const t = TABLES.find(x => x.id === tableId);
    if (!t) return;
    const order = ORDERS.find(o => o.table === tableId);
    const statusColors = { free:'badge-green', reserved:'badge-red', occupied:'badge-orange' };
    const statusNames = { free:'Libre', reserved:'Reservada', occupied:'Ocupada' };
    let html = `<div style="display:flex;gap:10px;align-items:center;margin-bottom:16px;flex-wrap:wrap">
      <span class="badge ${statusColors[t.status]}">${statusNames[t.status]}</span>
      <span style="font-size:13px;color:var(--ink3)"><i class="fas fa-users"></i> ${t.seats} personas · ${t.zone}</span>
    </div>`;
    if (t.reservation) {
      html += `<div style="background:var(--ivory2);border-radius:var(--radius-xs);padding:12px 16px;margin-bottom:16px;font-size:13px">
        <div style="font-weight:700;margin-bottom:4px">📋 Reserva</div>
        <div>${t.reservation.name} · ${t.reservation.time} · ${t.reservation.persons} personas</div>
      </div>`;
    }
    if (order) {
      const total = order.items.reduce((a,i) => a + i.price*i.qty, 0);
      html += `<div style="font-weight:700;font-size:14px;margin-bottom:10px">Pedido Activo:</div>`;
      html += order.items.map(i => `<div style="padding:8px 0;border-bottom:1px solid var(--border);font-size:13px"><b>${i.qty}x ${i.name}</b> · ${Utils.fmtCLP(i.price*i.qty)}${i.mods?`<div style="font-size:11px;color:var(--sky-dark);margin-top:2px">⚠ ${i.mods}</div>`:''}</div>`).join('');
      html += `<div style="text-align:right;margin-top:10px;font-size:16px;font-weight:700;color:var(--sky)">Total: ${Utils.fmtCLP(total)}</div>`;
    }
    const actionMap = {
      free: `<button class="btn btn-primary" style="width:100%;justify-content:center" onclick="APP.changeTableStatus(${t.id},'occupied')"><i class="fas fa-chair"></i> Marcar como Ocupada</button>`,
      occupied: `<div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-success" style="flex:1;justify-content:center" onclick="APP.changeTableStatus(${t.id},'free')"><i class="fas fa-check"></i> Liberar Mesa</button>${order?`<button class="btn btn-gold btn-sm" onclick="APP.generateInvoice('${order.id}')"><i class="fas fa-receipt"></i> Boleta</button>`:''}</div>`,
      reserved: `<div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-primary" style="flex:1;justify-content:center" onclick="APP.changeTableStatus(${t.id},'occupied')"><i class="fas fa-check"></i> Confirmar Llegada</button><button class="btn btn-danger btn-sm" onclick="APP.changeTableStatus(${t.id},'free')">Cancelar</button></div>`,
    };
    html += `<div style="margin-top:16px">${actionMap[t.status]||''}</div>`;
    document.getElementById('td-title').textContent = `Mesa ${t.id} — ${t.zone}`;
    document.getElementById('td-sub').textContent = order ? `Garzón: ${order.waiter}` : '';
    document.getElementById('td-content').innerHTML = html;
    document.getElementById('table-detail-overlay').classList.remove('hidden');
  },

  changeTableStatus(id, status) {
    const t = TABLES.find(x => x.id === id);
    if (t) { t.status = status; if (status === 'free') t.reservation = null; }
    this.closeModal('table-detail-overlay');
    if (STATE.currentPage === 'mapa') this.renderPage('mapa');
    Utils.notify(`Mesa ${id}: ${status==='free'?'Liberada':status==='occupied'?'Ocupada':'Reservada'}`, 'success');
  },

  /* ─── INVENTARIO ─── */
  renderInventario() {
    const data = STATE.invTab === 'mp' ? INVENTORY_MP : INVENTORY_IMP;
    return `
    <div class="inv-tabs">
      <button class="inv-tab ${STATE.invTab==='mp'?'active':''}" onclick="APP.setInvTab('mp')"><i class="fas fa-seedling"></i> Materia Prima</button>
      <button class="inv-tab ${STATE.invTab==='imp'?'active':''}" onclick="APP.setInvTab('imp')"><i class="fas fa-tools"></i> Implementos</button>
    </div>
    <div class="card" style="padding:0;overflow:hidden">
      <div class="card-header">
        <div class="card-title"><i class="fas fa-boxes-stacked"></i> ${STATE.invTab==='mp'?'Materia Prima':'Implementos y Utensilios'}</div>
        <button class="btn btn-primary btn-sm" onclick="APP.addInventoryItem()"><i class="fas fa-plus"></i> Agregar</button>
      </div>
      <div style="overflow-x:auto">
        <table class="data-table">
          <thead><tr>
            <th>Nombre</th>
            ${STATE.invTab==='mp'?'<th>Categoría</th>':''}
            <th>Cantidad</th>
            <th>Stock</th>
            <th>Estado</th>
            ${STATE.invTab==='mp'?'<th>Costo/u</th>':''}
            <th>Acciones</th>
          </tr></thead>
          <tbody>
            ${data.map(i => {
              const max = i.max || i.min*2;
              const pct = Math.min(100, Math.round((i.qty / max)*100));
              const sc = Utils.getStockClass(i.qty, max);
              return `<tr>
                <td><b>${i.name}</b></td>
                ${STATE.invTab==='mp'?`<td><span class="badge badge-gray">${i.category}</span></td>`:''}
                <td><b>${i.qty}</b> <span style="color:var(--ink3);font-size:12px">${i.unit}</span></td>
                <td>
                  <div class="stock-bar"><div class="stock-fill ${sc.cls}" style="width:${pct}%"></div></div>
                  <div style="font-size:10px;color:var(--ink4);margin-top:2px">${pct}%</div>
                </td>
                <td><span class="badge ${sc.badge}">${sc.label}</span></td>
                ${STATE.invTab==='mp'?`<td style="color:var(--ink3);font-size:13px">${Utils.fmtCLP(i.cost)}</td>`:''}
                <td>
                  <div style="display:flex;gap:6px">
                    <button class="btn btn-ghost btn-xs" onclick="APP.editInventoryItem(${i.id},'${STATE.invTab}')"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-success btn-xs" onclick="APP.addStock(${i.id},'${STATE.invTab}')"><i class="fas fa-plus"></i></button>
                  </div>
                </td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
  },

  setInvTab(tab) { STATE.invTab = tab; this.renderPage('inventario'); },

  addInventoryItem() {
    const name = prompt('Nombre del ítem:');
    if (!name) return;
    const qty = parseFloat(prompt('Cantidad inicial:') || '0');
    const unit = prompt('Unidad (kg, lt, unid, etc):') || 'unid';
    if (STATE.invTab === 'mp') {
      const cat = prompt('Categoría:') || 'Otros';
      INVENTORY_MP.push({ id: Date.now(), name, category: cat, qty, unit, min: Math.round(qty*0.3), max: qty*2, cost: 0 });
    } else {
      INVENTORY_IMP.push({ id: Date.now(), name, qty, unit, min: Math.round(qty*0.3) });
    }
    this.renderPage('inventario');
    Utils.notify(`${name} agregado al inventario`, 'success');
  },

  editInventoryItem(id, tab) {
    const arr = tab === 'mp' ? INVENTORY_MP : INVENTORY_IMP;
    const item = arr.find(i => i.id === id);
    if (!item) return;
    const newQty = parseFloat(prompt(`Nueva cantidad para "${item.name}":`, item.qty));
    if (isNaN(newQty)) return;
    item.qty = newQty;
    this.renderPage('inventario');
    Utils.notify(`${item.name} actualizado`, 'success');
  },

  addStock(id, tab) {
    const arr = tab === 'mp' ? INVENTORY_MP : INVENTORY_IMP;
    const item = arr.find(i => i.id === id);
    if (!item) return;
    const add = parseFloat(prompt(`Agregar stock a "${item.name}" (actual: ${item.qty} ${item.unit}):`) || '0');
    if (isNaN(add) || add <= 0) return;
    item.qty += add;
    this.renderPage('inventario');
    Utils.notify(`Stock de ${item.name} actualizado a ${item.qty} ${item.unit}`, 'success');
  },

  /* ─── PERSONAL ─── */
  renderPersonal() {
    const depts = ['all', ...new Set(STAFF.map(s => s.dept))];
    const filtered = STATE.staffTab === 'all' ? STAFF : STAFF.filter(s => s.dept === STATE.staffTab);
    return `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:12px">
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        ${depts.map(d => `<button class="inv-tab ${STATE.staffTab===d?'active':''}" onclick="APP.setStaffTab('${d}')">${d==='all'?'Todos':d}</button>`).join('')}
      </div>
      <div style="display:flex;gap:8px">
        <span class="badge badge-green">Activos: ${STAFF.filter(s=>s.status==='active').length}</span>
        <span class="badge badge-gray">Libre hoy: ${STAFF.filter(s=>s.status==='off').length}</span>
        <button class="btn btn-primary btn-sm" onclick="APP.addStaff()"><i class="fas fa-user-plus"></i> Agregar</button>
      </div>
    </div>
    <div class="staff-grid">
      ${filtered.map(s => `
      <div class="staff-card">
        <div class="staff-photo"><img src="${s.photo}" alt="${s.name}" onerror="this.parentElement.textContent='${s.name[0]}'"></div>
        <div class="staff-name">${s.name}</div>
        <div class="staff-role-lbl">${s.role}</div>
        <div class="staff-schedule-badge">${s.schedule}</div>
        <span class="badge ${s.status==='active'?'badge-green':'badge-gray'}" style="margin-bottom:14px">${s.status==='active'?'✓ En turno':'Libre hoy'}</span>
        <div class="staff-actions">
          <button class="btn btn-primary btn-sm" onclick="APP.editStaff(${s.id})"><i class="fas fa-edit"></i> Editar</button>
          <button class="btn btn-ghost btn-sm" onclick="APP.showSchedule(${s.id})"><i class="fas fa-calendar"></i></button>
          <button class="btn btn-danger btn-sm" onclick="APP.toggleStaffStatus(${s.id})">${s.status==='active'?'<i class="fas fa-pause"></i>':'<i class="fas fa-play"></i>'}</button>
        </div>
      </div>`).join('')}
    </div>`;
  },

  setStaffTab(tab) { STATE.staffTab = tab; this.renderPage('personal'); },

  editStaff(id) {
    const s = STAFF.find(x => x.id === id);
    if (!s) return;
    STATE.editingStaffId = id;
    const deptOptions = Object.keys(Utils.deptRoles).map(d => `<option ${s.dept===d?'selected':''}>${d}</option>`).join('');
    const roleOptions = Object.values(Utils.deptRoles).flat().map(r => `<option ${s.role===r?'selected':''}>${r}</option>`).join('');
    document.getElementById('staff-edit-title').textContent = `Editar — ${s.name}`;
    document.getElementById('staff-edit-content').innerHTML = `
      <div style="text-align:center;margin-bottom:20px">
        <div class="staff-photo" style="margin:0 auto 10px;width:80px;height:80px"><img src="${s.photo}" alt="${s.name}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Nombre</label><input id="se-name" value="${s.name}"></div>
        <div class="form-group"><label>Teléfono</label><input id="se-phone" value="${s.phone}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Email</label><input type="email" id="se-email" value="${s.email}"></div>
        <div class="form-group"><label>Departamento</label><select id="se-dept">${deptOptions}</select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Cargo</label><select id="se-role">${roleOptions}</select></div>
        <div class="form-group"><label>Horario</label><input id="se-schedule" value="${s.schedule}"></div>
      </div>
      <div class="form-group"><label>URL Foto</label><input id="se-photo" value="${s.photo}"></div>
      <div class="modal-actions">
        <button class="btn btn-ghost" onclick="APP.closeModal('staff-edit-overlay')">Cancelar</button>
        <button class="btn btn-primary" onclick="APP.saveStaff()"><i class="fas fa-save"></i> Guardar</button>
      </div>`;
    document.getElementById('staff-edit-overlay').classList.remove('hidden');
  },

  saveStaff() {
    const s = STAFF.find(x => x.id === STATE.editingStaffId);
    if (!s) return;
    s.name = document.getElementById('se-name').value;
    s.phone = document.getElementById('se-phone').value;
    s.email = document.getElementById('se-email').value;
    s.dept = document.getElementById('se-dept').value;
    s.role = document.getElementById('se-role').value;
    s.schedule = document.getElementById('se-schedule').value;
    s.photo = document.getElementById('se-photo').value;
    this.closeModal('staff-edit-overlay');
    this.renderPage('personal');
    Utils.notify(`${s.name} actualizado correctamente`, 'success');
  },

  addStaff() {
    const name = prompt('Nombre del nuevo empleado:');
    if (!name) return;
    const roles = Object.values(Utils.deptRoles).flat();
    const role = prompt('Cargo:\n' + roles.join(', ')) || 'Garzón';
    const dept = Object.entries(Utils.deptRoles).find(([, v]) => v.includes(role))?.[0] || 'Sala';
    STAFF.push({
      id: Date.now(), name, role, dept, schedule: 'L-V 12:00-22:00', status: 'active',
      phone: '', email: '', photo: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=3AAFCE&color=fff&size=200`,
      weekHours: { L:'T',Ma:'T',Mi:'T',J:'T',V:'T',S:'OFF',D:'OFF' }
    });
    this.renderPage('personal');
    Utils.notify(`${name} agregado al equipo`, 'success');
  },

  toggleStaffStatus(id) {
    const s = STAFF.find(x => x.id === id);
    if (!s) return;
    s.status = s.status === 'active' ? 'off' : 'active';
    this.renderPage('personal');
    Utils.notify(`${s.name}: ${s.status==='active'?'Activado':'Marcado como libre hoy'}`, 'info');
  },

  showSchedule(id) {
    const s = STAFF.find(x => x.id === id);
    if (!s) return;
    const days = ['L','Ma','Mi','J','V','S','D'];
    const dayNames = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
    const shiftOptions = [
      { key:'M', label:'Mañana', sub:'08:00–16:00', cls:'shift-morning' },
      { key:'T', label:'Tarde', sub:'12:00–22:00', cls:'shift-evening' },
      { key:'N', label:'Noche', sub:'18:00–02:00', cls:'shift-full' },
      { key:'OFF', label:'Libre', sub:'Descanso', cls:'shift-off' },
    ];
    document.getElementById('schedule-title').textContent = `Horario — ${s.name}`;
    let html = `
    <div style="margin-bottom:16px">
      <img src="${s.photo}" alt="${s.name}" style="width:50px;height:50px;border-radius:50%;object-fit:cover;margin-right:12px;vertical-align:middle">
      <span style="font-size:14px;font-weight:600">${s.role} · ${s.dept}</span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:8px;margin-bottom:16px">
      ${days.map((d, i) => {
        const cur = s.weekHours?.[d] || 'OFF';
        const shift = shiftOptions.find(sh => sh.key === cur) || shiftOptions[3];
        return `<div style="text-align:center">
          <div style="font-size:11px;font-weight:700;color:var(--ink3);margin-bottom:6px">${dayNames[i].slice(0,3)}</div>
          <select class="sch-sel" data-day="${d}" data-staff="${id}" onchange="APP.updateShift(${id},'${d}',this.value)" style="padding:5px 4px;font-size:11px;font-weight:600;border-radius:6px;text-align:center">
            ${shiftOptions.map(sh => `<option value="${sh.key}" ${sh.key===cur?'selected':''}>${sh.label}</option>`).join('')}
          </select>
          <div class="${shift.cls} shift-cell" style="margin-top:4px;font-size:10px">${shift.sub}</div>
        </div>`;
      }).join('')}
    </div>
    <div style="background:var(--ivory2);border-radius:var(--radius-xs);padding:12px 16px;font-size:13px">
      <div style="font-weight:600;margin-bottom:6px">Resumen de la semana:</div>
      <div style="display:flex;gap:16px;flex-wrap:wrap">
        ${shiftOptions.filter(sh=>sh.key!=='OFF').map(sh => `<span><b>${Object.values(s.weekHours||{}).filter(v=>v===sh.key).length}</b> días ${sh.label.toLowerCase()}</span>`).join(' · ')}
        · <span><b>${Object.values(s.weekHours||{}).filter(v=>v==='OFF').length}</b> días libres</span>
      </div>
    </div>
    <div class="modal-actions" style="margin-top:16px">
      <button class="btn btn-ghost" onclick="APP.closeModal('schedule-overlay')">Cerrar</button>
      <button class="btn btn-primary" onclick="APP.closeModal('schedule-overlay');APP.renderPage('personal');Utils.notify('Horario guardado','success')"><i class="fas fa-save"></i> Guardar Horario</button>
    </div>`;
    document.getElementById('schedule-content').innerHTML = html;
    document.getElementById('schedule-overlay').classList.remove('hidden');
  },

  updateShift(staffId, day, value) {
    const s = STAFF.find(x => x.id === staffId);
    if (!s) return;
    if (!s.weekHours) s.weekHours = {};
    s.weekHours[day] = value;
    Utils.notify(`Turno del ${day} actualizado a ${value}`, 'info');
  },

  /* ─── VENTAS ─── */
  renderVentas() {
    const maxVal = Math.max(...SALES_DATA.weekly);
    const totalDay = SALES_DATA.tables.reduce((a, t) => a + t.items.reduce((b,i) => b+i.price, 0), 0);
    return `
    <div class="stats-grid" style="margin-bottom:24px">
      <div class="stat-card"><div class="stat-icon si-gold"><i class="fas fa-yen-sign"></i></div><div><div class="stat-val">${Utils.fmtCLP(totalDay)}</div><div class="stat-label">Total del Día</div></div></div>
      <div class="stat-card"><div class="stat-icon si-green"><i class="fas fa-receipt"></i></div><div><div class="stat-val">${SALES_DATA.tables.length}</div><div class="stat-label">Cuentas del Día</div></div></div>
      <div class="stat-card"><div class="stat-icon si-sky"><i class="fas fa-users"></i></div><div><div class="stat-val">${Utils.fmtCLP(Math.round(totalDay/SALES_DATA.tables.length))}</div><div class="stat-label">Ticket Promedio</div></div></div>
    </div>
    <div class="sales-cols">
      <div>
        <div class="card" style="margin-bottom:22px;padding:0;overflow:hidden">
          <div class="card-header">
            <div class="card-title"><i class="fas fa-table"></i> Detalle por Mesa</div>
          </div>
          <div style="overflow-x:auto">
          <table class="data-table">
            <thead><tr><th>Mesa</th><th>Productos</th><th>Total</th><th>Garzón</th><th>Estado</th><th>Acciones</th></tr></thead>
            <tbody>
              ${SALES_DATA.tables.map(t => {
                const total = t.items.reduce((a,i) => a+i.price, 0);
                return `<tr>
                  <td><b style="font-family:var(--font-head);font-size:16px">M${t.table}</b></td>
                  <td>${t.items.length} ítems</td>
                  <td><b style="color:var(--sky)">${Utils.fmtCLP(total)}</b></td>
                  <td style="font-size:12px;color:var(--ink3)">${t.waiter}</td>
                  <td><span class="badge ${t.status==='cerrada'?'badge-green':t.status==='abierta'?'badge-sky':'badge-red'}">${t.status}</span></td>
                  <td>
                    <div style="display:flex;gap:6px">
                      <button class="btn btn-ghost btn-xs" onclick="APP.showSaleDetail(${t.table})"><i class="fas fa-eye"></i></button>
                      <button class="btn btn-gold btn-xs" onclick="APP.generateInvoiceFromTable(${t.table})"><i class="fas fa-receipt"></i></button>
                    </div>
                  </td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
          </div>
        </div>
        <div class="chart-container">
          <div style="font-family:var(--font-head);font-size:17px;font-weight:700;margin-bottom:18px"><i class="fas fa-chart-bar" style="color:var(--sky);margin-right:8px"></i>Ventas Semanales</div>
          <div class="chart-bars">
            ${SALES_DATA.weekly.map((v,i) => `
            <div class="chart-bar-wrap">
              <div class="chart-val">${Utils.fmtCLP(v/1000)}K</div>
              <div class="chart-bar" style="height:${Math.max(6,Math.round((v/maxVal)*160))}px" title="${SALES_DATA.weekDays[i]}: ${Utils.fmtCLP(v)}"></div>
              <div class="chart-label">${SALES_DATA.weekDays[i]}</div>
            </div>`).join('')}
          </div>
        </div>
      </div>
      <div>
        <div class="card" id="sale-detail-panel" style="padding:22px">
          <div style="text-align:center;padding:30px;color:var(--ink4)">
            <i class="fas fa-receipt" style="font-size:36px;display:block;margin-bottom:12px"></i>
            <div style="font-size:14px">Selecciona una mesa para ver el detalle</div>
          </div>
        </div>
      </div>
    </div>`;
  },

  showSaleDetail(tableNum) {
    const t = SALES_DATA.tables.find(x => x.table === tableNum);
    if (!t) return;
    const total = t.items.reduce((a,i) => a+i.price, 0);
    const tax = Math.round(total * 0.19);
    const net = total - tax;
    document.getElementById('sale-detail-panel').innerHTML = `
      <div style="font-family:var(--font-head);font-size:18px;font-weight:700;margin-bottom:16px">Mesa ${t.table} — Detalle</div>
      <div style="margin-bottom:4px;font-size:12px;color:var(--ink3)">Garzón: ${t.waiter}</div>
      <div style="margin-bottom:16px"><span class="badge ${t.status==='cerrada'?'badge-green':'badge-sky'}">${t.status}</span></div>
      ${t.items.map(i => `
      <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px dashed var(--border);font-size:13px">
        <span>${i.name}</span><span style="font-weight:700">${Utils.fmtCLP(i.price)}</span>
      </div>`).join('')}
      <div style="padding:10px 0;display:flex;justify-content:space-between;font-size:13px;color:var(--ink3)"><span>Neto</span><span>${Utils.fmtCLP(net)}</span></div>
      <div style="padding:8px 0;display:flex;justify-content:space-between;font-size:13px;color:var(--ink3)"><span>IVA (19%)</span><span>${Utils.fmtCLP(tax)}</span></div>
      <div style="padding:10px 0;display:flex;justify-content:space-between;font-size:18px;font-weight:700;border-top:2px solid var(--ink);margin-top:6px">
        <span>Total</span><span style="color:var(--sky)">${Utils.fmtCLP(total)}</span>
      </div>
      <div style="display:flex;gap:8px;margin-top:16px">
        <button class="btn btn-primary" style="flex:1;justify-content:center" onclick="APP.generateInvoiceFromTable(${t.table})"><i class="fas fa-print"></i> Generar Boleta</button>
        ${t.status==='abierta'?`<button class="btn btn-success btn-sm" onclick="APP.closeTable(${t.table})"><i class="fas fa-check"></i> Cerrar Mesa</button>`:''}
      </div>`;
  },

  closeTable(tableNum) {
    const t = SALES_DATA.tables.find(x => x.table === tableNum);
    if (t) t.status = 'cerrada';
    const mt = TABLES.find(x => x.id === tableNum);
    if (mt) mt.status = 'free';
    this.renderPage('ventas');
    Utils.notify(`Mesa ${tableNum} cerrada y liberada`, 'success');
  },

  generateInvoiceFromTable(tableNum) {
    const t = SALES_DATA.tables.find(x => x.table === tableNum);
    if (!t) return;
    const total = t.items.reduce((a,i) => a+i.price, 0);
    this.showInvoice({ table: tableNum, waiter: t.waiter, items: t.items, total });
  },

  generateInvoice(orderId) {
    const o = ORDERS.find(x => x.id === orderId);
    if (!o) return;
    const items = o.items.map(i => ({ name:`${i.qty}x ${i.name}`, price: i.price * i.qty }));
    const total = items.reduce((a,i) => a+i.price, 0);
    this.showInvoice({ table: o.table, waiter: o.waiter, items, total });
  },

  showInvoice({ table, waiter, items, total }) {
    const tax = Math.round(total * 0.19);
    const net = total - tax;
    const now = new Date();
    const dateStr = now.toLocaleDateString('es-CL');
    const timeStr = now.toLocaleTimeString('es-CL', { hour:'2-digit', minute:'2-digit' });
    const folio = 'SAK-' + String(Math.floor(Math.random()*9000)+1000);
    document.getElementById('invoice-content').innerHTML = `
      <div class="invoice-preview">
        <div class="invoice-header">
          <div class="invoice-logo">桜 Sakura Bistró</div>
          <div style="font-size:12px;margin-top:4px;color:var(--ink3)">Av. Suecia 1234, Providencia, Santiago</div>
          <div style="font-size:12px;color:var(--ink3)">RUT: 76.234.567-8 · +56 2 2345 6789</div>
          <div style="margin-top:10px;font-size:14px;font-weight:700;color:var(--sky)">BOLETA ELECTRÓNICA</div>
          <div style="font-size:12px;color:var(--ink3)">${folio}</div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--ink3);margin-bottom:12px">
          <span>Fecha: ${dateStr} · ${timeStr}</span>
          <span>Mesa: ${table} · ${waiter}</span>
        </div>
        <div style="border-top:1px solid var(--border);margin-bottom:10px"></div>
        <div style="margin-bottom:4px;font-size:11px;font-weight:700;color:var(--ink3);text-transform:uppercase;letter-spacing:0.5px;display:flex;justify-content:space-between"><span>Producto</span><span>Total</span></div>
        ${items.map(i => `<div class="invoice-line"><span style="font-size:13px">${i.name}</span><span style="font-weight:600">${Utils.fmtCLP(i.price)}</span></div>`).join('')}
        <div class="invoice-line" style="color:var(--ink3);margin-top:4px"><span>Neto</span><span>${Utils.fmtCLP(net)}</span></div>
        <div class="invoice-line" style="color:var(--ink3)"><span>IVA (19%)</span><span>${Utils.fmtCLP(tax)}</span></div>
        <div class="invoice-total"><span>TOTAL A PAGAR</span><span style="color:var(--sky)">${Utils.fmtCLP(total)}</span></div>
        <div style="text-align:center;margin-top:16px;font-size:11px;color:var(--ink4);line-height:1.6">
          🎋 Arigatōgozaimashita — ありがとうございました<br>
          ¡Gracias por su visita! Esperamos verle pronto.
        </div>
      </div>`;
    document.getElementById('invoice-overlay').classList.remove('hidden');
  },

  /* ─── PEDIDOS ─── */
  renderPedidos() {
    return `
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px">
      <span class="badge badge-orange">En espera: ${ORDERS.filter(o=>o.status==='pending').length}</span>
      <span class="badge badge-sky">Preparando: ${ORDERS.filter(o=>o.status==='preparing').length}</span>
      <span class="badge badge-green">Listos: ${ORDERS.filter(o=>o.status==='ready').length}</span>
    </div>
    <div class="order-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px">
      ${ORDERS.map(o => this.buildOrderCard(o)).join('')}
      ${ORDERS.length===0?'<div style="padding:40px;text-align:center;color:var(--ink4);grid-column:1/-1"><i class="fas fa-check-circle" style="font-size:40px;display:block;margin-bottom:12px;color:#27AE60"></i>No hay pedidos activos</div>':''}
    </div>`;
  },

  buildOrderCard(o) {
    const totalOrder = o.items.reduce((a,i) => a + i.price*i.qty, 0);
    return `
    <div class="kitchen-order-card">
      <div class="koc-head ${o.status}">
        <div>
          <div class="koc-table">Mesa ${o.table} <span style="font-size:13px;font-weight:400;color:var(--ink3)">#${o.id}</span></div>
          <div style="font-size:11px;color:var(--ink3);margin-top:2px">${o.waiter}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:12px;color:var(--ink4)">⏱ ${o.time}</div>
          <span class="badge ${o.status==='ready'?'badge-green':o.status==='preparing'?'badge-sky':'badge-orange'}" style="margin-top:4px">${{pending:'En espera',preparing:'Preparando',ready:'¡Listo!'}[o.status]}</span>
        </div>
      </div>
      <div class="koc-items">
        ${o.items.map(i => `
        <div class="koc-item">
          <div>
            <div class="koc-item-name">${i.name}</div>
            ${i.mods?`<div class="koc-item-mod"><i class="fas fa-exclamation-triangle"></i> ${i.mods}</div>`:''}
          </div>
          <div class="koc-qty">×${i.qty}</div>
        </div>`).join('')}
        <div style="text-align:right;padding-top:8px;font-weight:700;font-size:14px;color:var(--sky)">${Utils.fmtCLP(totalOrder)}</div>
      </div>
      <div class="koc-foot">
        ${o.status==='pending'?`<button class="btn btn-primary btn-sm" style="flex:1;justify-content:center" onclick="APP.updateOrderStatus('${o.id}','preparing')"><i class="fas fa-fire"></i> Preparar</button>`:''}
        ${o.status==='preparing'?`<button class="btn btn-success btn-sm" style="flex:1;justify-content:center" onclick="APP.updateOrderStatus('${o.id}','ready')"><i class="fas fa-check"></i> ¡Listo!</button>`:''}
        ${o.status==='ready'?`<button class="btn btn-ghost btn-sm" style="flex:1;justify-content:center" onclick="APP.updateOrderStatus('${o.id}','delivered')"><i class="fas fa-check-double"></i> Entregado</button>`:''}
        <button class="btn btn-gold btn-sm" onclick="APP.generateInvoice('${o.id}')"><i class="fas fa-receipt"></i></button>
      </div>
    </div>`;
  },

  updateOrderStatus(id, status) {
    const o = ORDERS.find(x => x.id === id);
    if (!o) return;
    if (status === 'delivered') {
      ORDERS = ORDERS.filter(x => x.id !== id);
    } else { o.status = status; }
    this.renderPage(STATE.currentPage);
    Utils.notify(`Pedido ${id}: ${status==='preparing'?'En preparación':status==='ready'?'¡Listo para servir!':'Entregado'}`, 'success');
  },

  /* ─── TOMAR PEDIDO ─── */
  renderTomarPedido() {
    const tableOptions = TABLES.map(t => `<option value="${t.id}" ${STATE.selectedOrderTable===t.id?'selected':''}>Mesa ${t.id} (${t.seats}p - ${t.status})</option>`).join('');
    return `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:12px">
      <div style="display:flex;align-items:center;gap:12px">
        <label style="margin:0;white-space:nowrap">Mesa:</label>
        <select id="order-table-sel" style="width:220px" onchange="APP.setOrderTable(this.value)">${tableOptions}</select>
      </div>
      <button class="btn btn-ghost btn-sm" onclick="STATE.cart=[];APP.buildOrderBuilder()"><i class="fas fa-trash"></i> Limpiar Pedido</button>
    </div>
    <div class="order-builder-layout" id="order-builder-layout"></div>`;
  },

  setOrderTable(val) {
    STATE.selectedOrderTable = parseInt(val);
  },

  buildOrderBuilder() {
    const wrap = document.getElementById('order-builder-layout');
    if (!wrap) return;
    const tabConfig = [
      { key:'entrada', label:'Entradas', emoji:'🥟' },
      { key:'fondo', label:'Fondos', emoji:'🍜' },
      { key:'postre', label:'Postres', emoji:'🍡' },
      { key:'bebestibles', label:'Bebidas', emoji:'🍶' },
    ];
    const items = MENU[STATE.orderMenuTab] || [];
    const subtotal = STATE.cart.reduce((a,i) => a + i.price*i.qty, 0);
    const tax = Math.round(subtotal * 0.19);

    wrap.innerHTML = `
    <div class="order-menu-panel">
      <div class="order-menu-header">
        <div class="order-mini-tabs">
          ${tabConfig.map(t => `<button class="omini-tab ${t.key===STATE.orderMenuTab?'active':''}" onclick="APP.setOrderMenuTab('${t.key}')">${t.emoji} ${t.label}</button>`).join('')}
        </div>
      </div>
      <div class="order-items-grid">
        ${items.map(item => `
        <button class="order-item-btn" onclick="APP.addToCart(${item.id})">
          <div class="oib-img"><img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'"></div>
          <div class="oib-body">
            <div class="oib-name">${item.name}</div>
            <div class="oib-price">${Utils.fmtCLP(item.price)}</div>
          </div>
        </button>`).join('')}
      </div>
    </div>
    <div class="order-cart-panel">
      <div class="cart-header">
        <div class="cart-header-row">
          <div class="cart-title">🛒 Pedido M${STATE.selectedOrderTable||'?'}</div>
          <span class="badge badge-sky">${STATE.cart.reduce((a,i)=>a+i.qty,0)} items</span>
        </div>
      </div>
      <div class="cart-items-list">
        ${STATE.cart.length === 0 ?
          '<div class="cart-empty"><i class="fas fa-bowl-food"></i><div>Agrega platos al pedido</div></div>' :
          STATE.cart.map((item, idx) => `
          <div class="cart-item-row">
            <div class="cir-thumb"><img src="${item.img}" alt="${item.name}" onerror="this.style.display='none'"></div>
            <div class="cir-info">
              <div class="cir-name">${item.name}</div>
              ${item.mods?`<div class="cir-mods"><i class="fas fa-leaf"></i> ${item.mods}</div>`:''}
              <div class="cir-qty-row">
                <button class="qty-btn" onclick="APP.changeQty(${idx},-1)">−</button>
                <span style="font-weight:700;min-width:18px;text-align:center">${item.qty}</span>
                <button class="qty-btn" onclick="APP.changeQty(${idx},1)">+</button>
              </div>
            </div>
            <div class="cir-price">${Utils.fmtCLP(item.price*item.qty)}</div>
            <div class="cir-actions">
              <button class="cir-allergy-btn" onclick="APP.showAllergyModal(${idx})" title="Alergias/Modificaciones">🍃</button>
              <button class="cir-remove-btn" onclick="APP.removeFromCart(${idx})"><i class="fas fa-times"></i></button>
            </div>
          </div>`).join('')
        }
      </div>
      <div class="cart-footer">
        <div class="cart-totals">
          <div class="cart-subtotal"><span>Neto</span><span>${Utils.fmtCLP(subtotal-tax)}</span></div>
          <div class="cart-tax"><span>IVA 19%</span><span>${Utils.fmtCLP(tax)}</span></div>
          <div class="cart-grand">
            <span class="cart-grand-lbl">Total</span>
            <span class="cart-grand-val">${Utils.fmtCLP(subtotal)}</span>
          </div>
        </div>
        <button class="btn btn-primary" style="width:100%;justify-content:center" onclick="APP.submitOrder()">
          <i class="fas fa-paper-plane"></i> Enviar a Cocina
        </button>
      </div>
    </div>`;
  },

  setOrderMenuTab(tab) {
    STATE.orderMenuTab = tab;
    this.buildOrderBuilder();
  },

  addToCart(itemId) {
    const item = Utils.findItem(itemId);
    if (!item) return;
    const existing = STATE.cart.find(c => c.id === itemId && !c.mods);
    if (existing) { existing.qty++; }
    else { STATE.cart.push({ ...item, qty: 1, mods: '' }); }
    this.buildOrderBuilder();
  },

  removeFromCart(idx) {
    STATE.cart.splice(idx, 1);
    this.buildOrderBuilder();
  },

  changeQty(idx, delta) {
    STATE.cart[idx].qty += delta;
    if (STATE.cart[idx].qty <= 0) STATE.cart.splice(idx, 1);
    this.buildOrderBuilder();
  },

  submitOrder() {
    if (STATE.cart.length === 0) { Utils.notify('Agrega al menos un producto', 'error'); return; }
    const tableNum = STATE.selectedOrderTable || parseInt(document.getElementById('order-table-sel')?.value) || 1;
    const garzon = STAFF.find(s => s.role === 'Garzón' && s.status === 'active');
    const newOrder = {
      id: 'P-' + String(ORDERS.length + 100).padStart(3,'0'),
      table: tableNum,
      status: 'pending',
      time: new Date().toLocaleTimeString('es-CL', { hour:'2-digit', minute:'2-digit' }),
      waiter: garzon ? garzon.name : Utils.roleName(STATE.currentRole),
      items: STATE.cart.map(c => ({ menuId: c.id, name: c.name, qty: c.qty, price: c.price, mods: c.mods }))
    };
    ORDERS.push(newOrder);
    const t = TABLES.find(x => x.id === tableNum);
    if (t && t.status !== 'occupied') t.status = 'occupied';
    // Add to sales
    const existing = SALES_DATA.tables.find(t => t.table === tableNum);
    const newItems = STATE.cart.map(c => ({ name: `${c.qty}x ${c.name}`, price: c.price*c.qty }));
    if (existing) { existing.items.push(...newItems); }
    else { SALES_DATA.tables.push({ table: tableNum, items: newItems, status: 'abierta', waiter: newOrder.waiter }); }
    STATE.cart = [];
    this.buildOrderBuilder();
    Utils.notify(`¡Pedido ${newOrder.id} enviado a cocina! 🍳`, 'success');
  },

  /* ─── ALLERGY MODAL ─── */
  showAllergyModal(idx) {
    STATE.currentAllergyIndex = idx;
    const item = STATE.cart[idx];
    document.getElementById('allergy-item-name').textContent = item.name;
    const allergens = [
      { key:'gluten', label:'Sin Gluten', sub:'Para celíacos' },
      { key:'dairy', label:'Sin Lácteos', sub:'Intolerancia lactosa' },
      { key:'diabetic', label:'Diabético', sub:'Sin azúcar añadida' },
      { key:'vegan', label:'Vegano', sub:'Sin productos animales' },
      { key:'shellfish', label:'Sin Mariscos', sub:'Alergia a mariscos' },
      { key:'nuts', label:'Sin Frutos Secos', sub:'Alergia a nueces' },
      { key:'spicy', label:'Sin Picante', sub:'No tolera picante' },
      { key:'salt', label:'Bajo en Sal', sub:'Hipertensión/salud' },
    ];
    const activeMods = item.mods ? item.mods.split(',').map(m => m.trim()) : [];
    document.getElementById('allergy-grid').innerHTML = allergens.map(a => {
      const isActive = activeMods.some(m => m.toLowerCase().includes(a.key) || m === Utils.allergenLabel(a.key));
      return `
      <label class="allergy-check ${isActive?'checked':''}">
        <input type="checkbox" id="al-${a.key}" ${isActive?'checked':''} onchange="this.closest('.allergy-check').classList.toggle('checked',this.checked)">
        <div><div class="allergy-check-label">${a.label}</div><div class="allergy-check-sub">${a.sub}</div></div>
      </label>`;
    }).join('');
    document.getElementById('al-notes').value = '';
    document.getElementById('allergy-overlay').classList.remove('hidden');
  },

  applyAllergy() {
    if (STATE.currentAllergyIndex === null) return;
    const allergens = ['gluten','dairy','diabetic','vegan','shellfish','nuts','spicy','salt'];
    const active = allergens.filter(k => document.getElementById('al-'+k)?.checked).map(k => Utils.allergenLabel(k));
    const notes = document.getElementById('al-notes').value.trim();
    STATE.cart[STATE.currentAllergyIndex].mods = [...active, ...(notes?[notes]:[])].join(', ');
    this.closeModal('allergy-overlay');
    this.buildOrderBuilder();
    Utils.notify('Modificaciones aplicadas ✓', 'success');
  },

  /* ─── COCINA ─── */
  renderCocina() {
    const pending = ORDERS.filter(o => o.status === 'pending');
    const preparing = ORDERS.filter(o => o.status === 'preparing');
    const ready = ORDERS.filter(o => o.status === 'ready');
    const now = new Date().toLocaleTimeString('es-CL', { hour:'2-digit', minute:'2-digit', second:'2-digit' });
    return `
    <div class="kitchen-header">
      <div class="kitchen-title"><i class="fas fa-fire" style="color:var(--sky)"></i> Vista Cocina — Tiempo Real</div>
      <div class="kitchen-time" id="kitchen-clock">${now}</div>
    </div>
    <div class="kitchen-cols">
      <div>
        <div class="kitchen-col-head kch-pending">⏳ En espera (${pending.length})</div>
        ${pending.map(o => this.buildKitchenCard(o)).join('') || '<div style="text-align:center;padding:30px;color:var(--ink4);font-size:13px">Sin pedidos en espera</div>'}
      </div>
      <div>
        <div class="kitchen-col-head kch-preparing">🔥 Preparando (${preparing.length})</div>
        ${preparing.map(o => this.buildKitchenCard(o)).join('') || '<div style="text-align:center;padding:30px;color:var(--ink4);font-size:13px">Cocina libre</div>'}
      </div>
      <div>
        <div class="kitchen-col-head kch-ready">✅ Listos (${ready.length})</div>
        ${ready.map(o => this.buildKitchenCard(o)).join('') || '<div style="text-align:center;padding:30px;color:var(--ink4);font-size:13px">Ningún plato listo</div>'}
      </div>
    </div>`;
  },

  buildKitchenCard(o) {
    return `
    <div class="kitchen-order-card">
      <div class="koc-head ${o.status}">
        <div>
          <div class="koc-table">Mesa ${o.table}</div>
          <div style="font-size:11px;color:var(--ink3)">#${o.id} · ${o.waiter}</div>
        </div>
        <div style="font-size:12px;color:var(--ink4)">⏱ ${o.time}</div>
      </div>
      <div class="koc-items">
        ${o.items.map(i => `
        <div class="koc-item">
          <div>
            <div class="koc-item-name">${i.qty}× ${i.name}</div>
            ${i.mods?`<div class="koc-item-mod"><i class="fas fa-exclamation-triangle"></i> ${i.mods}</div>`:''}
          </div>
        </div>`).join('')}
      </div>
      <div class="koc-foot">
        ${o.status==='pending'?`<button class="btn btn-primary btn-sm" style="flex:1;justify-content:center" onclick="APP.updateOrderStatus('${o.id}','preparing');APP.renderPage('cocina')"><i class="fas fa-fire"></i> Iniciar</button>`:''}
        ${o.status==='preparing'?`<button class="btn btn-success btn-sm" style="flex:1;justify-content:center" onclick="APP.updateOrderStatus('${o.id}','ready');APP.renderPage('cocina')"><i class="fas fa-bell"></i> ¡Listo!</button>`:''}
        ${o.status==='ready'?`<button class="btn btn-ghost btn-sm" style="flex:1;justify-content:center" onclick="APP.updateOrderStatus('${o.id}','delivered');APP.renderPage('cocina')"><i class="fas fa-check-double"></i> Entregado</button>`:''}
      </div>
    </div>`;
  },

  setupKitchenRefresh() {
    const clock = document.getElementById('kitchen-clock');
    if (STATE.kitchenRefreshInterval) clearInterval(STATE.kitchenRefreshInterval);
    STATE.kitchenRefreshInterval = setInterval(() => {
      if (clock) clock.textContent = new Date().toLocaleTimeString('es-CL', { hour:'2-digit', minute:'2-digit', second:'2-digit' });
    }, 1000);
  },

  /* ─── RECETAS ─── */
  renderRecetas() {
    return `
    <div style="margin-bottom:20px">
      <h3 style="font-family:var(--font-head);font-size:20px;font-weight:700;margin-bottom:4px">Recetas & Calculadora de Producción</h3>
      <p style="color:var(--ink3);font-size:13px">Selecciona una receta para ver ingredientes y calcular cantidades según número de personas</p>
    </div>
    <div class="recipes-grid">
      ${RECIPES.map(r => `
      <div class="recipe-card">
        <div class="recipe-card-img"><img src="${r.img}" alt="${r.name}" loading="lazy" onerror="this.style.display='none'"></div>
        <div class="recipe-card-body">
          <div class="recipe-card-name">${r.name}</div>
          <div class="recipe-card-jp" style="font-family:var(--font-jp);font-size:12px;color:var(--ink4)">${r.jpName}</div>
          <div class="recipe-card-yield" style="font-size:12px;color:var(--ink3)">
            <i class="fas fa-users"></i> Rinde: ${r.yield} porción${r.yield>1?'es':''}
            · <i class="fas fa-leaf"></i> ${r.ingredients.length} ingredientes
          </div>
          <div class="recipe-card-footer">
            <button class="btn btn-primary btn-sm" onclick="APP.openRecipe(${r.id})"><i class="fas fa-calculator"></i> Ver & Calcular</button>
            <button class="btn btn-ghost btn-sm" onclick="APP.checkRecipeStock(${r.id})"><i class="fas fa-check-circle"></i> Stock</button>
          </div>
        </div>
      </div>`).join('')}
    </div>`;
  },

  openRecipe(id) {
    const r = RECIPES.find(x => x.id === id);
    if (!r) return;
    document.getElementById('recipe-modal-title').innerHTML = `${r.name} <span style="font-family:var(--font-jp);font-size:14px;color:var(--ink3)">${r.jpName}</span>`;
    this.renderRecipeCalc(r, 1);
    document.getElementById('recipe-overlay').classList.remove('hidden');
  },

  renderRecipeCalc(recipe, persons) {
    const ct = document.getElementById('recipe-modal-content');
    ct.innerHTML = `
    <img src="${recipe.img}" alt="${recipe.name}" style="width:100%;height:180px;object-fit:cover;border-radius:var(--radius-sm);margin-bottom:18px">
    <div class="recipe-calc">
      <div class="recipe-calc-title"><i class="fas fa-calculator" style="color:var(--sky)"></i> Calculadora de Producción</div>
      <div class="calc-persons-row">
        <label>Personas:</label>
        <button class="qty-btn" onclick="APP.changeRecipePersons(${recipe.id},-1)">−</button>
        <input class="calc-persons-input" type="number" id="recipe-persons-${recipe.id}" value="${persons}" min="1" max="200" onchange="APP.changeRecipePersons(${recipe.id},0,this.value)">
        <button class="qty-btn" onclick="APP.changeRecipePersons(${recipe.id},1)">+</button>
        <span style="font-size:13px;color:var(--ink3);margin-left:8px">× base ${recipe.yield}</span>
      </div>
      <div style="overflow-x:auto">
      <table class="recipe-ingredients-table">
        <thead><tr><th>Ingrediente</th><th>Por porción</th><th>Total (${persons}p)</th><th>Unidad</th></tr></thead>
        <tbody>
          ${recipe.ingredients.map(ing => {
            const total = +(ing.qty / recipe.yield * persons).toFixed(2);
            return `<tr>
              <td>${ing.name}</td>
              <td style="color:var(--ink3)">${+(ing.qty/recipe.yield).toFixed(2)}</td>
              <td class="qty-highlight">${total}</td>
              <td>${ing.unit}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
      </div>
    </div>
    <div class="recipe-steps" style="margin-top:22px">
      <div style="font-weight:700;font-size:14px;margin-bottom:14px;display:flex;align-items:center;gap:8px">
        <i class="fas fa-list-ol" style="color:var(--sky)"></i> Preparación
      </div>
      ${recipe.steps.map((step, i) => `
      <div class="recipe-step">
        <div class="step-num">${i+1}</div>
        <div class="step-text">${step}</div>
      </div>`).join('')}
    </div>`;
  },

  changeRecipePersons(recipeId, delta, directVal) {
    const input = document.getElementById(`recipe-persons-${recipeId}`);
    if (!input) return;
    let val = directVal !== undefined ? parseInt(directVal) : parseInt(input.value) + delta;
    if (isNaN(val) || val < 1) val = 1;
    if (val > 500) val = 500;
    input.value = val;
    const r = RECIPES.find(x => x.id === recipeId);
    if (r) this.renderRecipeCalc(r, val);
  },

  checkRecipeStock(id) {
    const r = RECIPES.find(x => x.id === id);
    if (!r) return;
    const issues = [];
    r.ingredients.forEach(ing => {
      const mp = INVENTORY_MP.find(i => i.name.toLowerCase().includes(ing.name.toLowerCase().split(' ')[0]));
      if (mp && mp.qty < ing.qty) { issues.push(`⚠ ${ing.name}: necesitas ${ing.qty}${ing.unit}, hay ${mp.qty}${mp.unit}`); }
    });
    if (issues.length === 0) {
      Utils.notify(`✅ ${r.name}: stock disponible para al menos 1 porción`, 'success');
    } else {
      alert(`Stock insuficiente para "${r.name}":\n\n${issues.join('\n')}\n\nRevisa el inventario.`);
    }
  },

  /* ─── MODAL HELPERS ─── */
  closeModal(id) { document.getElementById(id)?.classList.add('hidden'); },
};

/* ═══════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  APP.initPublic();
});
