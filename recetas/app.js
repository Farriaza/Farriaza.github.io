/* ============================================================
   USERS DATA
============================================================ */
const USERS=[
  {id:1,username:'yuki chef',password:'1234',nombre:'Yuki Tanaka',email:'yuki@wanoryori.jp',especialidad:'Itamae',bio:'Itamae con 12 años de experiencia en sushi. Apasionada del pescado fresco y la técnica tradicional japonesa. Formada en Osaka y Tokio.',instagram:'@yuki_sushimaster',avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200'},
  {id:2,username:'ramen ken',password:'1234',nombre:'Kenji Mori',email:'kenji@wanoryori.jp',especialidad:'Chef',bio:'Chef especializado en sopas japonesas. Mi ramen tonkotsu ha ganado premios en Tokyo y Osaka. 15 años de pasión por el caldo.',instagram:'@ramen_ken',avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'},
  {id:3,username:'hana sweets',password:'1234',nombre:'Hana Yoshida',email:'hana@wanoryori.jp',especialidad:'Estudiante',bio:'Estudiante de pastelería japonesa en Tokio. Especialista en wagashi y postres modernos con influencia zen. Amo el matcha.',instagram:'@hana_wagashi',avatar:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200'},
  {id:4,username:'taro izakaya',password:'1234',nombre:'Taro Nakamura',email:'taro@wanoryori.jp',especialidad:'Chef',bio:'Dueño de un izakaya en Kyoto. Cocina familiar japonesa con ingredientes locales y de temporada. Especialista en parrilla.',instagram:'@izakaya_taro',avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200'},
  {id:5,username:'sofia cucina',password:'1234',nombre:'Sofía Romano',email:'sofia@wanoryori.jp',especialidad:'Chef',bio:'Chef italiana afincada en Madrid. Me apasiona la pasta fresca artesanal y los sabores del Mediterráneo. Cocina con alma.',instagram:'@sofia_cucina',avatar:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200'},
  {id:6,username:'carlos mx',password:'1234',nombre:'Carlos Mendoza',email:'carlos@wanoryori.jp',especialidad:'Aficionado',bio:'Cocinero autodidacta mexicano. Amo los sabores de mi tierra: moles, tacos y pozoles. La comida es identidad y familia.',instagram:'@carlos_sabores',avatar:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200'},
  {id:7,username:'Fernando',password:'1234',nombre:'Tu Nombre',email:'tu@email.com',especialidad:'Aficionado',bio:'Apasionado de la cocina mundial. Aquí comparto mis recetas favoritas de todas partes del mundo.',instagram:'@mi_usuario',avatar:'https://raw.githubusercontent.com/Farriaza/img/main/yo1.jpg'}
];

/* ============================================================
   RECETAS DATA  (8 categorías × ~8 recetas + recetas "mi_usuario")
============================================================ */
let RECETAS=[
/* ---- SOPAS Y RAMEN ---- */
{id:1,autorId:2,titulo:'Ramen Tonkotsu Clásico',descripcion:'El auténtico ramen de caldo de cerdo cremoso con 18 horas de cocción lenta. Un tazón que reconforta el alma.',categoria:'Sopas y Ramen',imagen:'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600',ingredientes:['400g huesos de cerdo','200g panceta','2 paquetes fideos ramen','4 huevos marinados','4 lonchas chashu pork','1 taza maíz dulce','2 hojas nori','4 ramas cebollín','1 cda pasta miso','2L agua'],pasos:['Blanquear huesos 10 min y escurrir','Tostar en horno 200°C 20 min','Cocer con 2L agua 12-18 horas','Preparar chashu enrollando la panceta 2 horas','Marinar huevos en salsa 6 horas','Cocer fideos y dividir en bowls','Colar caldo y sazonar con miso','Servir y añadir toppings'],fecha:'2025-10-15',publicado:true},
{id:2,autorId:2,titulo:'Shoyu Ramen de Tokyo',descripcion:'Caldo transparente y profundo con base de soja. El ramen más elegante de Japón.',categoria:'Sopas y Ramen',imagen:'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=600',ingredientes:['1L dashi de pollo','4 cda salsa de soja','2 cda mirin','1 cda aceite de sésamo','2 paq fideos ramen','6 lonchas chashu','Menma y nori'],pasos:['Preparar dashi cociendo carcasas 2h','Sazonar con soja, mirin y sal','Añadir unas gotas aceite sésamo','Cocer fideos al dente','Servir caldo caliente sobre fideos','Añadir toppings'],fecha:'2025-11-01',publicado:true},
{id:3,autorId:2,titulo:'Miso Ramen de Hokkaido',descripcion:'El ramen más robusto del norte de Japón. Caldo de miso intenso con mantequilla y maíz.',categoria:'Sopas y Ramen',imagen:'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600',ingredientes:['3 cda miso blanco','1 cda miso rojo','1L caldo de pollo','200g carne picada cerdo','1 cda togarashi','1 taza maíz','Nube de mantequilla'],pasos:['Saltear carne con ajo','Añadir togarashi','Disolver miso en caldo caliente','Cocer fideos y dividir','Verter caldo con carne','Añadir maíz y mantequilla'],fecha:'2025-11-20',publicado:true},
{id:4,autorId:2,titulo:'Spicy Tantanmen',descripcion:'Ramen picante de sésamo al estilo Sichuan-japonés. Adictivamente cremoso y con un punto de fuego.',categoria:'Sopas y Ramen',imagen:'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=600',ingredientes:['Pasta de sésamo tahini','Pasta de chile doubanjiang','Caldo de pollo 1L','200g carne picada','Fideos ramen finos','Cebollín y sésamo'],pasos:['Mezclar tahini con caldo y llevar a fuego','Añadir doubanjiang al gusto','Dorar la carne picada con ajo','Cocer fideos','Servir con carne encima y decorar'],fecha:'2025-12-05',publicado:true},
{id:5,autorId:4,titulo:'Tsukemen (Ramen Mojado)',descripcion:'Fideos fríos para mojar en caldo caliente concentrado. Una experiencia única en textura.',categoria:'Sopas y Ramen',imagen:'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600',ingredientes:['Fideos gruesos wavy','Caldo concentrado de cerdo','Vinagre de arroz','Aceite de ajo','Narumaki y nori'],pasos:['Cocer fideos y enfriar en agua helada','Preparar caldo concentrado reduciendo 30 min','Añadir vinagre y aceite de ajo','Servir fideos fríos junto al caldo caliente','Mojar cada bocado antes de comer'],fecha:'2025-12-15',publicado:true},
{id:6,autorId:2,titulo:'Shio Ramen (Ramen de Sal)',descripcion:'El ramen más delicado: caldo de pollo cristalino sazonado únicamente con sal marina.',categoria:'Sopas y Ramen',imagen:'https://images.squarespace-cdn.com/content/60ff20587f00f42b9b296006/1628886565247-9FES3I08LY25O5ES0O46/Shio+ramen+aut%C3%A9ntico.JPG?format=1500w&content-type=image%2Fjpeg',ingredientes:['Carcasas de pollo 1kg','Algas kombu','Sal marina fina','Sake 2 cda','Fideos ramen finos','Cebollín y limón'],pasos:['Cocer carcasas y kombu 3h a fuego bajo','Colar con gasa para caldo cristalino','Sazonar solo con sal y sake','Cocer fideos separadamente','Montar el bowl con delicadeza'],fecha:'2026-01-10',publicado:true},
{id:7,autorId:7,titulo:'Gazpacho Andaluz',descripcion:'El rey de los platos fríos españoles. Tomate, pepino y pimiento en armonía perfecta. Un clásico de verano.',categoria:'Sopas y Ramen',imagen:'https://images.unsplash.com/photo-1544025162-d76694265947?w=600',ingredientes:['1kg tomates maduros','1 pepino','1 pimiento rojo','1 diente de ajo','4 cda aceite de oliva virgen','2 cda vinagre de Jerez','Pan remojado 50g','Sal'],pasos:['Trocear todas las verduras','Remojar el pan 5 min en agua','Batir todo junto con aceite','Colar y sazonar con sal y vinagre','Enfriar 2 horas en nevera','Servir con tropezones'],fecha:'2026-01-20',publicado:true},
{id:8,autorId:5,titulo:'Ribollita Toscana',descripcion:'Sopa campesina italiana de pan y verduras. Reconfortante, profunda y con siglos de historia en cada cucharada.',categoria:'Sopas y Ramen',imagen:'https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?w=600',ingredientes:['400g judías cannellini','200g kale (col rizada)','2 zanahorias','2 tallos apio','400g tomate triturado','Pan toscano seco','Aceite oliva','Salvia y romero'],pasos:['Sofreír verduras con aceite y hierbas','Añadir tomates y cocer 20 min','Incorporar judías y caldo','Añadir el pan duro y remover','Cocer hasta que espese','Servir con hilo de aceite virgen'],fecha:'2026-02-05',publicado:true},

/* ---- SUSHI Y SASHIMI ---- */
{id:9,autorId:1,titulo:'Nigiri Salmón Premium',descripcion:'Nigiri tradicional con salmón sashimi grade. La técnica perfecta para moldear arroz y equilibrar sabores.',categoria:'Sushi y Sashimi',imagen:'https://www.salmonchile.cl/assets/uploads/2025/03/42.-Salmon-Nigiri-Sushi-3-scaled.webp',ingredientes:['300g salmón sashimi grade','2 tazas arroz sushi','3 cda vinagre de arroz','1 cda azúcar','Wasabi y salsa de soja','Jengibre encurtido'],pasos:['Lavar arroz 5 veces','Cocer con 2.5 tazas agua','Sazonar con vinagre azucarado','Cortar salmón en lonchas 5mm','Moldear arroz ovalado con manos húmedas','Poner wasabi y colocar salmón'],fecha:'2025-10-20',publicado:true},
{id:10,autorId:1,titulo:'Temaki Vegano',descripcion:'Cono de sushi vegano con aguacate, pepino, tofu ahumado y mango. Fresco y visualmente impresionante.',categoria:'Sushi y Sashimi',imagen:'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600',ingredientes:['1 aguacate','1 pepino japonés','150g tofu ahumado','½ mango','Arroz sushi','8 hojas nori','Salsa ponzu'],pasos:['Cortar verduras en bastoncillos','Tomar nori en la palma','Colocar arroz en mitad izquierda','Añadir ingredientes en diagonal','Enrollar formando cono','Servir con ponzu'],fecha:'2025-11-15',publicado:true},
{id:11,autorId:1,titulo:'Chirashi Sushi',descripcion:'Tazón de arroz sushi con sashimi variado. Colorido, fresco y lleno de umami.',categoria:'Sushi y Sashimi',imagen:'https://asianinspirations.com.au/wp-content/uploads/2023/09/CHI-11.jpg',ingredientes:['2 tazas arroz sushi','100g salmón sashimi','80g atún sashimi','60g gambas cocidas','Huevas de salmón ikura','Pepino y aguacate','Nori en juliana'],pasos:['Preparar arroz y extender en bowl','Cortar salmón y atún en lonchas','Arreglar ingredientes visualmente','Añadir ikura decorativamente','Completar con nori y aguacate'],fecha:'2025-12-10',publicado:true},
{id:12,autorId:1,titulo:'California Roll',descripcion:'El roll más famoso fuera de Japón. Cangrejo, aguacate y pepino envueltos en arroz crujiente.',categoria:'Sushi y Sashimi',imagen:'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600',ingredientes:['200g surimi o cangrejo real','1 aguacate maduro','1 pepino','Arroz sushi 2 tazas','Nori 4 hojas','Semillas sésamo negro','Tobiko opcional'],pasos:['Extender arroz sobre nori','Dar la vuelta (arroz hacia abajo)','Poner relleno en el centro','Enrollar apretando con esterilla','Rebozar en sésamo','Cortar en 8 piezas limpias'],fecha:'2026-01-05',publicado:true},
{id:13,autorId:1,titulo:'Sashimi de Atún Akami',descripcion:'Cortes perfectos de atún rojo maguro. Pureza absoluta, sin más ingrediente que la técnica del cuchillo.',categoria:'Sushi y Sashimi',imagen:'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600',ingredientes:['300g atún akami sashimi grade','Salsa de soja','Wasabi fresco','Jengibre gari','Hoja shiso','Daikon rallado'],pasos:['Refrigerar el atún 30 min antes de cortar','Usar cuchillo yanagiba bien afilado','Cortar en ángulo de 45° lonchas 7mm','Disponer en abanico sobre hielo','Acompañar con condimentos'],fecha:'2026-01-25',publicado:true},
{id:14,autorId:7,titulo:'Ceviche Peruano Clásico',descripcion:'El más fresco de los platos latinoamericanos. Leche de tigre, ají amarillo y pescado blanco curado en minutos.',categoria:'Sushi y Sashimi',imagen:'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=600',ingredientes:['500g corvina o lenguado fresco','Jugo de 8 limas','2 ajíes amarillos','1 cebolla roja en pluma','Cilantro fresco','Sal','Choclo y camote para servir'],pasos:['Cortar el pescado en cubos de 2cm','Macerar con sal 2 min','Añadir ají amarillo procesado','Exprimir limas sobre el pescado','Agregar cebolla y cilantro','Mezclar y servir inmediatamente'],fecha:'2026-02-10',publicado:true},

/* ---- TEMPURA Y FRITURAS ---- */
{id:15,autorId:4,titulo:'Karaage de Pollo',descripcion:'El pollo frito japonés más crujiente. Marinado en jengibre y soja, frito dos veces para perfección.',categoria:'Tempura y Frituras',imagen:'https://images.unsplash.com/photo-1562802378-063ec186a863?w=600',ingredientes:['500g muslos pollo sin hueso','3 cda salsa de soja','2 cda sake','1 cda mirin','Ajo y jengibre rallados','4 cda fécula de maíz','Aceite para freír'],pasos:['Cortar pollo en trozos 3cm','Marinar 30 min mínimo','Rebozar con fécula y harina','Freír a 170°C 3 min','Reposar 2 min','Freír de nuevo a 190°C 2 min','Escurrir y servir'],fecha:'2025-11-10',publicado:true},
{id:16,autorId:4,titulo:'Tempura de Camarones',descripcion:'Camarones envueltos en la masa más ligera y crujiente. El secreto está en el agua helada.',categoria:'Tempura y Frituras',imagen:'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=600',ingredientes:['12 camarones grandes','1 taza harina tempura','1 taza agua helada','1 huevo','Aceite de girasol','Salsa tentsuyu','Daikon rallado'],pasos:['Pelar camarones dejando cola','Hacer incisiones para estirar','Mezclar harina con agua helada y huevo (no sobrebatir)','Sumergir camarones en masa','Freír a 180°C hasta dorado pálido','Servir con tentsuyu'],fecha:'2025-12-01',publicado:true},
{id:17,autorId:4,titulo:'Gyoza de Cerdo',descripcion:'Dumplings japoneses crujientes por abajo y tiernos por arriba. El snack definitivo del izakaya.',categoria:'Tempura y Frituras',imagen:'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600',ingredientes:['200g carne picada cerdo','150g col china','2 dientes ajo','Jengibre fresco','2 cda salsa de soja','1 cda aceite sésamo','30 obleas gyoza'],pasos:['Picar col y salar 10 min, exprimir','Mezclar carne con condimentos','Rellenar y plegar obleas','Freír en sartén 2 min','Añadir agua, tapar 4 min','Destapar y evaporar'],fecha:'2026-01-15',publicado:true},
{id:18,autorId:5,titulo:'Arancini Sicilianos',descripcion:'Las bolas de arroz fritas más famosas de Italia. Rellenas de ragú y mozzarella fundida.',categoria:'Tempura y Frituras',imagen:'https://www.divinacocina.es/wp-content/uploads/2024/03/rancini-relleno-de-carne-OK.jpg',ingredientes:['400g arroz arborio','Ragú de carne','150g mozzarella','2 huevos','Pan rallado','Aceite para freír','Azafrán'],pasos:['Cocer arroz con azafrán hasta cremoso','Enfriar completamente','Tomar puñado de arroz, rellenar con ragú y mozzarella','Formar bola compacta','Rebozar en huevo y pan rallado','Freír a 180°C hasta dorado'],fecha:'2025-11-25',publicado:true},
{id:19,autorId:6,titulo:'Churros con Chocolate',descripcion:'Los churros perfectos: crujientes por fuera, tiernos por dentro. Con chocolate espeso a la española.',categoria:'Tempura y Frituras',imagen:'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600',ingredientes:['200g harina','250ml agua','1 cda azúcar','Pizca de sal','Aceite para freír','200g chocolate negro','200ml nata','Azúcar con canela'],pasos:['Hervir agua con azúcar y sal','Incorporar harina de golpe y mezclar','Poner en manga con boquilla estrella','Freír a 180°C hasta dorado','Rebozar en azúcar canela','Fundir chocolate con nata para dippear'],fecha:'2025-12-20',publicado:true},
{id:20,autorId:7,titulo:'Croquetas de Jamón',descripcion:'Las croquetas más cremosas de España. Bechamel sedosa con jamón ibérico en cada bocado.',categoria:'Tempura y Frituras',imagen:'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600',ingredientes:['150g jamón ibérico picado','100g mantequilla','150g harina','1L leche entera','Nuez moscada','2 huevos','Pan rallado fino'],pasos:['Hacer roux con mantequilla y harina','Añadir leche caliente poco a poco','Incorporar jamón y nuez moscada','Cocer 15 min removiendo','Enfriar en bandeja plana cubierta','Dar forma, rebozar y freír a 180°C'],fecha:'2026-02-20',publicado:true},

/* ---- PLATOS DE ARROZ ---- */
{id:21,autorId:1,titulo:'Oyakodon (Pollo y Huevo)',descripcion:'El donburi más reconfortante: pollo y huevo pochados en caldo dashi sobre arroz blanco.',categoria:'Platos de Arroz',imagen:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600',ingredientes:['300g pollo en trozos','3 huevos','1 cebolla','4 cda salsa de soja','3 cda mirin','1 taza dashi','2 tazas arroz cocido'],pasos:['Cocer cebolla en dashi 3 min','Añadir pollo y sazonar','Batir huevos sin mezclar demasiado','Verter huevo sobre el guiso','Tapar 30 segundos, retirar del fuego','Servir sobre arroz caliente'],fecha:'2025-10-10',publicado:true},
{id:22,autorId:4,titulo:'Katsudon',descripcion:'Tonkatsu crujiente sobre arroz bañado en huevo. El plato de la victoria en la cultura japonesa estudiantil.',categoria:'Platos de Arroz',imagen:'https://images.unsplash.com/photo-1547592180-85f173990554?w=600',ingredientes:['1 tonkatsu (chuleta empanada)','2 huevos','½ cebolla','Dashi 150ml','Salsa de soja y mirin','Arroz japonés cocido'],pasos:['Preparar y freír el tonkatsu','Cocer cebolla en dashi sazonado','Cortar tonkatsu en tiras','Añadir sobre la cebolla','Verter huevo batido encima','Tapar brevemente y servir sobre arroz'],fecha:'2025-12-25',publicado:true},
{id:23,autorId:5,titulo:'Risotto al Parmesano',descripcion:'El rey de los arroces italianos. Cremoso sin nata, solo el almidón del arroz y mucho parmesano.',categoria:'Platos de Arroz',imagen:'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600',ingredientes:['350g arroz carnaroli','1L caldo de pollo caliente','1 cebolla','150ml vino blanco seco','80g mantequilla','120g parmesano rallado','Aceite de oliva'],pasos:['Sofreír cebolla en aceite 5 min','Añadir arroz y tostar 2 min','Verter vino y evaporar','Ir añadiendo caldo cazo a cazo','Al dente: retirar del fuego','Mantecar con mantequilla y parmesano','Reposar 2 min y servir'],fecha:'2025-11-05',publicado:true},
{id:24,autorId:6,titulo:'Arroz a la Mexicana',descripcion:'El arroz rojo de la cocina mexicana: guisado con jitomate, ajo y caldo. Acompañamiento perfecto.',categoria:'Platos de Arroz',imagen:'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600',ingredientes:['2 tazas arroz de grano largo','3 jitomates licuados','½ cebolla','2 dientes ajo','2 tazas caldo de pollo','Aceite vegetal','Sal y pimienta'],pasos:['Freír el arroz en aceite hasta dorado','Añadir cebolla y ajo picados','Agregar jitomate licuado','Mover hasta que se absorba','Añadir caldo caliente','Cocer tapado 20 min a fuego bajo'],fecha:'2025-12-15',publicado:true},
{id:25,autorId:7,titulo:'Paella Valenciana',descripcion:'La auténtica paella de Valencia: pollo, conejo, judías verdes y el sofrito perfecto con azafrán.',categoria:'Platos de Arroz',imagen:'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600',ingredientes:['400g arroz bomba','300g pollo troceado','200g conejo','200g judías verdes','Tomate maduro','Azafrán y pimentón','Caldo de pollo 1.2L','Aceite de oliva'],pasos:['Sofreír pollo y conejo en aceite hasta dorar','Añadir judías y sofreír','Incorporar tomate rallado y pimentón','Añadir arroz y sofrito 2 min','Verter caldo caliente','Poner azafrán y no mover','Cocer 18 min a fuego decreciente','Dejar reposar 5 min'],fecha:'2026-01-30',publicado:true},

/* ---- FIDEOS ---- */
{id:26,autorId:2,titulo:'Yakisoba Clásico',descripcion:'Fideos de trigo salteados con verduras y carne. Sabor ahumado característico del teppan japonés.',categoria:'Fideos',imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxnex45JoaPqbuebMXSNZovMKTUuczlp_TPQ&s',ingredientes:['200g fideos yakisoba','150g cerdo en tiras','½ col china','1 zanahoria','2 cda salsa yakisoba','Aceite de girasol','Aonori y beni shoga'],pasos:['Saltear la carne a fuego alto','Añadir verduras y remover','Incorporar fideos cocidos','Añadir salsa yakisoba','Remover a fuego alto 2 min','Decorar con aonori y jengibre rojo'],fecha:'2025-10-25',publicado:true},
{id:27,autorId:2,titulo:'Pad Thai Casero',descripcion:'El wok más famoso de Tailandia adaptado con técnica japonesa. Dulce, salado y ligeramente ácido.',categoria:'Fideos',imagen:'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600',ingredientes:['200g fideos arroz planos','150g gambas','2 huevos','100g brotes de soja','Salsa tamarindo 3 cda','Salsa de pescado 2 cda','Cacahuetes tostados','Lima'],pasos:['Remojar fideos 20 min en agua tibia','Saltear gambas en wok caliente','Apartar y scramble los huevos','Añadir fideos escurridos','Salsear con tamarindo y pescado','Añadir brotes y mezclar','Servir con cacahuetes y lima'],fecha:'2025-11-30',publicado:true},
{id:28,autorId:5,titulo:'Spaghetti Carbonara',descripcion:'La carbonara romana auténtica: sin nata, solo huevo, guanciale y pecorino. La técnica marca la diferencia.',categoria:'Fideos',imagen:'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600',ingredientes:['400g spaghetti','200g guanciale o panceta','4 yemas de huevo','1 huevo entero','100g pecorino romano rallado','Pimienta negra abundante'],pasos:['Cocer pasta en agua muy salada','Dorar guanciale a fuego medio hasta crujiente','Mezclar yemas con pecorino y pimienta','Reservar 1 taza agua de cocción','Escurrir pasta al dente','Mezclar fuera del fuego con huevo','Añadir agua pasta para cremosidad'],fecha:'2025-12-08',publicado:true},
{id:29,autorId:6,titulo:'Fideos con Mole Negro',descripcion:'Sopa de fideos mexicana con mole negro complejo. Pimientos secos, especias y chocolate en armonía.',categoria:'Fideos',imagen:'https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?w=600',ingredientes:['200g fideos secos tostados','300ml mole negro','1L caldo de pollo','1 pechuga de pollo deshebrada','Queso fresco','Crema mexicana','Aguacate'],pasos:['Tostar los fideos en aceite sin parar','Añadir mole negro diluido en caldo','Cocer los fideos en la salsa 10 min','Añadir pollo deshebrado','Servir con queso, crema y aguacate'],fecha:'2026-01-08',publicado:true},

/* ---- YAKITORI Y PARRILLA ---- */
{id:30,autorId:4,titulo:'Yakitori de Pollo',descripcion:'Brochetas glaseadas con tare de soja y mirin. La esencia del izakaya japonés.',categoria:'Yakitori y Parrilla',imagen:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',ingredientes:['400g muslos pollo','100g piel pollo','8 brochetas bambú','4 cda salsa de soja','3 cda mirin','2 cda sake','1 cda azúcar'],pasos:['Remojar brochetas 30 min','Preparar tare: soja+mirin+sake+azúcar hervir 5 min','Ensartar 3-4 piezas por brocheta','Asar a fuego alto 4 min por lado','Glasear con tare en cada vuelta','Servir caliente'],fecha:'2025-10-30',publicado:true},
{id:31,autorId:4,titulo:'Yakiniku Wagyu',descripcion:'Carne de res wagyu a la parrilla japonesa. Marmoleado perfecto que se funde en la boca.',categoria:'Yakitori y Parrilla',imagen:'https://images.unsplash.com/photo-1544025162-d76694265947?w=600',ingredientes:['300g wagyu A5 en lonchas finas','Salsa yakiniku de soja-mirin','Ajo en láminas','Aceite de sésamo','Cebollín','Arroz blanco japonés'],pasos:['Calentar parrilla o piedra volcánica','Marinar wagyu 5 min en salsa','Cocer lonchas 30-45 segundos por lado','No sobrecocinar para mantener el umami','Servir con ajo frito y cebollín'],fecha:'2025-12-20',publicado:true},
{id:32,autorId:4,titulo:'Asado Coreano Galbi',descripcion:'Costillas marinadas al estilo coreano. Sesión de parrilla en la mesa con banchan de acompañamiento.',categoria:'Yakitori y Parrilla',imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6fm1zYUIZv_uBXcNFY5Q7ku-v2Qq75AXVQ&s',ingredientes:['1kg costillas corte coreano','4 cda salsa de soja','2 cda azúcar moreno','1 kiwi triturado','2 dientes ajo','1 cda aceite sésamo','Cebolla rallada'],pasos:['Marinar costillas 4h mínimo con todos los ingredientes','El kiwi ablanda la carne por sus enzimas','Parrilla muy caliente 3 min por lado','Glasear con el marinado restante','Servir con hojas lechuga para wraps','Acompañar con kimchi y arroz'],fecha:'2026-01-18',publicado:true},
{id:33,autorId:6,titulo:'Tacos al Pastor',descripcion:'Los tacos más icónicos de México: cerdo marinado en achiote, asado en trompo vertical y servido con piña.',categoria:'Yakitori y Parrilla',imagen:'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=600',ingredientes:['1kg cerdo en lonchas','Pasta de achiote 3 cda','Jugo de naranja','Vinagre de piña','2 jitomates asados','Cilantro y cebolla','Tortillas de maíz','Piña al gusto'],pasos:['Marinar cerdo en achiote, naranja y vinagre 2h','Asar en parrilla muy caliente o comal','Picar fino en tabla','Calentar tortillas','Servir con cilantro, cebolla y piña','Añadir salsa verde al gusto'],fecha:'2025-11-28',publicado:true},
{id:34,autorId:7,titulo:'Churrasco Argentino',descripcion:'El ritual del asado argentino: tira de asado, morcilla y chimichurri. Fuego lento y paciencia.',categoria:'Yakitori y Parrilla',imagen:'https://images.unsplash.com/photo-1558030006-450675393462?w=600',ingredientes:['1.5kg tira de asado','500g entraña','1 chorizo criollo','Sal parrilla gruesa','Para chimichurri: perejil, orégano, ajo, aceite, vinagre'],pasos:['Encender el fuego con leña dura 1h antes','Solo sal gruesa en la carne','Poner la tira del lado del hueso primero 20 min','Dar la vuelta 15 min más','Preparar chimichurri mezclando todo','Dejar reposar la carne 5 min antes de cortar'],fecha:'2026-02-15',publicado:true},

/* ---- POSTRES ---- */
{id:35,autorId:3,titulo:'Mochi de Matcha',descripcion:'Suaves bolitas de mochi rellenas de anko y polvo de matcha ceremonial.',categoria:'Postres',imagen:'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600',ingredientes:['200g mochiko','150ml agua','3 cda matcha ceremonial','100g azúcar glas','150g anko (pasta judías rojas)'],pasos:['Mezclar mochiko, matcha y azúcar','Añadir agua poco a poco','Microondas 2 min, mezclar, 1 min más','Extender sobre superficie con fécula','Cortar círculos 8cm','Envolver bolitas de anko con el mochi'],fecha:'2025-10-05',publicado:true},
{id:36,autorId:3,titulo:'Dorayaki de Vainilla',descripcion:'Los famosos pancakes japoneses rellenos de anko y crema de vainilla. La merienda de Doraemon.',categoria:'Postres',imagen:'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600',ingredientes:['2 huevos','80g azúcar','1 cda miel','120g harina','½ cdita bicarbonato','200g anko','100ml nata vainilla'],pasos:['Batir huevos y azúcar','Añadir miel y bicarbonato disuelto','Tamizar harina e incorporar','Reposar 15 min','Cocer en sartén antiadherente','Rellenar con anko y nata'],fecha:'2025-11-20',publicado:true},
{id:37,autorId:5,titulo:'Tiramisú Clásico',descripcion:'El postre italiano por excelencia. Capas de mascarpone, espresso y savoiardi que se funden.',categoria:'Postres',imagen:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600',ingredientes:['500g mascarpone','4 huevos','100g azúcar','300ml espresso frío','200g bizcochos savoiardi','Cacao puro en polvo','4 cda Marsala opcional'],pasos:['Separar yemas y claras','Batir yemas con azúcar hasta blanquear','Incorporar mascarpone','Montar claras a punto de nieve','Mezclar con movimientos envolventes','Mojar savoiardi en espresso','Montar capas y espolvorear cacao','Refrigerar 4 horas mínimo'],fecha:'2025-12-15',publicado:true},
{id:38,autorId:6,titulo:'Tres Leches Mexicano',descripcion:'El pastel más esponjoso bañado en tres lácteos. Una tradición de cumpleaños que no puede faltar.',categoria:'Postres',imagen:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600',ingredientes:['4 huevos','200g azúcar','200g harina','1 cdita polvo hornear','400ml leche condensada','400ml leche evaporada','200ml crema de leche','Nata montada y fresa'],pasos:['Batir huevos y azúcar hasta triplicar','Incorporar harina tamizada','Hornear 180°C 25 min','Mezclar las tres leches','Pinchar el bizcocho y bañar','Refrigerar 2 horas','Decorar con nata y fresas'],fecha:'2026-01-10',publicado:true},
{id:39,autorId:7,titulo:'Crème Brûlée',descripcion:'El postre francés más elegante: natilla de vainilla bajo una capa de caramelo crocante.',categoria:'Postres',imagen:'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600',ingredientes:['500ml nata entera','6 yemas de huevo','120g azúcar','1 vaina vainilla','Azúcar extra para quemar'],pasos:['Infusionar nata con vainilla 30 min','Batir yemas con azúcar','Mezclar nata caliente con yemas poco a poco','Colar y verter en moldes','Hornear al baño maría 160°C 40 min','Enfriar y quemar el azúcar con soplete'],fecha:'2026-02-25',publicado:true},

/* ---- BEBIDAS ---- */
{id:40,autorId:3,titulo:'Matcha Latte Casero',descripcion:'Bebida japonesa con matcha ceremonial. Aprende la técnica del chasen tradicional.',categoria:'Bebidas',imagen:'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=600',ingredientes:['2 cditas matcha ceremonial','60ml agua 70°C','200ml leche avena','1 cdita miel','Hielo para versión fría'],pasos:['Tamizar el matcha','Añadir agua a 70°C (no hervir)','Batir con chasen en W hasta espuma','Espumar la leche de avena','Verter leche sobre el matcha','Endulzar al gusto'],fecha:'2025-10-15',publicado:true},
{id:41,autorId:3,titulo:'Sakura Lemonade',descripcion:'Limonada con sirope de flor de cerezo. Rosa, floral y perfecta para la temporada de hanami.',categoria:'Bebidas',imagen:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600',ingredientes:['Sirope de sakura 60ml','Jugo de 2 limones','300ml agua con gas','Flores de cerezo en salmuera','Hielo y rodaja de limón'],pasos:['Diluir sirope en 100ml agua fría','Añadir jugo de limón','Verter sobre hielo abundante','Completar con agua con gas','Decorar con flor de cerezo y limón'],fecha:'2025-11-25',publicado:true},
{id:42,autorId:6,titulo:'Horchata de Chufa Mexicana',descripcion:'La horchata de arroz mexicana: cremosa, canelada y fría. El sabor de las tardes de verano.',categoria:'Bebidas',imagen:'https://comidaschilenas.com/wp-content/uploads/2023/11/Receta-de-agua-de-horchata-mexicana.jpg.webp',ingredientes:['200g arroz remojado','1 canela en rama','100g azúcar','1L agua fría','Leche al gusto','Pizca de vainilla'],pasos:['Remojar arroz con canela 8 horas','Licuar con el agua de remojo','Colar con tela muy fina','Añadir azúcar y vainilla','Completar con más agua','Servir muy frío con canela en polvo'],fecha:'2025-12-25',publicado:true},
{id:43,autorId:5,titulo:'Espresso Martini',descripcion:'El cóctel más trendy de los últimos años. Vodka, espresso y licor de café en perfecta proporción.',categoria:'Bebidas',imagen:'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600',ingredientes:['45ml vodka','30ml espresso frío','20ml licor de café Kahlúa','10ml sirope de azúcar','Granos de café para decorar','Hielo abundante'],pasos:['Enfriar la copa de martini','Preparar un espresso y enfriar','En coctelera: vodka, espresso, Kahlúa y sirope','Añadir hielo y agitar 15 seg enérgico','Colar en copa fría','Decorar con 3 granos de café'],fecha:'2026-01-15',publicado:true},
{id:44,autorId:7,titulo:'Agua de Jamaica',descripcion:'La bebida más refrescante de México. Flor de jamaica seca que da un rojo intenso y sabor ácido único.',categoria:'Bebidas',imagen:'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600',ingredientes:['100g flor de jamaica seca','1.5L agua','150g azúcar','Jugo de 1 limón','Hielo y menta'],pasos:['Hervir el agua con la jamaica 5 min','Apagar y reposar 10 min','Colar exprimiendo bien las flores','Añadir azúcar y remover','Enfriar y añadir limón','Servir con hielo y menta'],fecha:'2026-02-08',publicado:true},

/* ---- COCINA ITALIANA ---- */
{id:45,autorId:5,titulo:'Lasagna Boloñesa',descripcion:'La lasagna clásica italiana en su versión más auténtica: ragú lento de 4 horas y bechamel perfecta.',categoria:'Cocina Italiana',imagen:'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600',ingredientes:['12 láminas lasagna','500g carne picada mixta','400ml tomate triturado','1 cebolla y zanahoria','500ml bechamel casera','Parmesano rallado abundante','Vino tinto 150ml'],pasos:['Preparar ragú con sofrito y carne 4 horas a fuego bajo','Añadir vino y tomates','Preparar bechamel espesa','Alternar capas: lasagna, ragú, bechamel','Terminar con bechamel y parmesano','Hornear 180°C 40 min con papel los primeros 20'],fecha:'2025-10-20',publicado:true},
{id:46,autorId:5,titulo:'Pizza Napolitana Margherita',descripcion:'La pizza más pura: masa fermentada 48h, tomate San Marzano y mozzarella di bufala. Cero artificios.',categoria:'Cocina Italiana',imagen:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600',ingredientes:['500g harina 00','325ml agua','3g levadura seca','10g sal','Tomate San Marzano','200g mozzarella di bufala','Albahaca fresca','Aceite oliva virgen extra'],pasos:['Amasar y fermentar 48h en frío','Atemperar y formar bola','Estirar a mano sin rodillo','Salsear con tomate triturado crudo','Añadir mozzarella en trozos','Hornear a máxima temperatura (250°C+) 7 min','Añadir albahaca al salir'],fecha:'2025-11-08',publicado:true},
{id:47,autorId:5,titulo:'Penne all\'Arrabbiata',descripcion:'Pasta picante romana con ajo y chile. Sencilla y explosiva. Lista en 20 minutos.',categoria:'Cocina Italiana',imagen:'https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?w=600',ingredientes:['400g penne rigate','400g tomate pelado','4 dientes ajo','2 chiles secos','Aceite oliva virgen','Perejil fresco','Sal'],pasos:['Sofreír ajo laminado con chile en aceite','No quemar, solo dorar','Añadir tomate y romper con cuchara','Cocer 15 min a fuego medio','Cocer pasta muy al dente','Terminar la pasta en la salsa 2 min','Añadir perejil al servir'],fecha:'2025-12-05',publicado:true},
{id:48,autorId:7,titulo:'Ossobuco alla Milanese',descripcion:'Jarrete de ternera braseado a la milanesa con gremolata y risotto alla Milanese de acompañamiento.',categoria:'Cocina Italiana',imagen:'https://images.unsplash.com/photo-1547592180-85f173990554?w=600',ingredientes:['4 piezas jarrete ternera','1 cebolla y apio','2 zanahorias','400ml vino blanco','400g tomate','Caldo de carne','Gremolata: ajo, limón, perejil'],pasos:['Enharinar y sellar el jarrete','Sofreír el sofrito fino','Añadir vino y evaporar','Incorporar tomate y caldo','Brascar 2h a 160°C tapado','Preparar gremolata y añadir al final','Servir sobre risotto azafranado'],fecha:'2026-02-18',publicado:true},

/* ---- COCINA MEXICANA ---- */
{id:49,autorId:6,titulo:'Enchiladas Verdes',descripcion:'Tortillas bañadas en salsa verde de tomatillo con pollo deshebrado. El almuerzo mexicano por excelencia.',categoria:'Cocina Mexicana',imagen:'https://www.cocinadelirante.com/sites/default/files/images/2018/09/receta-facil-de-salsa-verde-para-enchilada.jpg',ingredientes:['12 tortillas de maíz','500g pollo cocido deshebrado','500g tomatillos','3 chiles serrano','1 diente ajo','Crema, queso fresco y cebolla para servir'],pasos:['Cocer tomatillos y chiles en agua','Licuar con ajo y sal','Freír ligeramente las tortillas','Rellenar con pollo y enrollar','Bañar con salsa verde','Decorar con crema, queso y cebolla'],fecha:'2025-10-28',publicado:true},
{id:50,autorId:6,titulo:'Pozole Rojo',descripcion:'Sopa festiva de hominy y carne de cerdo con chile guajillo. El plato de las grandes celebraciones.',categoria:'Cocina Mexicana',imagen:'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600',ingredientes:['800g hominy cocido','500g maciza cerdo','4 chiles guajillo','2 chiles ancho','1 cebolla entera','4 dientes ajo','Orégano y comino'],pasos:['Cocer la carne con cebolla y ajo 1.5h','Hidratar y licuar chiles','Colar la salsa y freír 5 min','Unir caldo de carne con salsa','Añadir hominy y la carne deshebrada','Cocer 20 min más y ajustar sazón','Servir con tostadas, lechuga y orégano'],fecha:'2025-12-28',publicado:true},
{id:51,autorId:7,titulo:'Mole Poblano',descripcion:'El rey de las salsas mexicanas: más de 30 ingredientes fundidos en armonía. Chocolate y chile en perfección.',categoria:'Cocina Mexicana',imagen:'https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?w=600',ingredientes:['4 chiles mulato','4 chiles ancho','2 chiles pasilla','50g chocolate amargo','Cacahuetes y pepitas','Plátano macho frito','Caldo de pollo','Tortilla tostada','Especias: canela, clavo, pimienta'],pasos:['Tostar y remojar los chiles','Freír por separado cada ingrediente sólido','Licuar todo en partes con caldo','Freír la pasta de mole en olla caliente','Añadir el caldo restante y el chocolate','Cocer 45 min removiendo frecuentemente','Ajustar sal y consistencia'],fecha:'2026-01-22',publicado:true},

/* ---- MIS USUARIO recetas ---- */
{id:52,autorId:7,titulo:'Ramen de Casa',descripcion:'Mi primer intento de ramen con lo que tenía en la nevera. Quedó sorprendentemente bien.',categoria:'Sopas y Ramen',imagen:'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600',ingredientes:['2 paquetes fideos instant','2 huevos','Cebollín','Salsa de soja','Aceite de sésamo','Lo que haya en la nevera'],pasos:['Hervir el caldo con soja','Cocer los fideos','Cocer los huevos 6 min','Añadir todo al bowl','Decorar con cebollín y sésamo'],fecha:'2026-02-01',publicado:true},
{id:53,autorId:7,titulo:'Tacos de Carnitas',descripcion:'Carnitas de cerdo cocidas a fuego lento hasta quedar doradas y crujientes. Irresistibles.',categoria:'Cocina Mexicana',imagen:'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=600',ingredientes:['1kg paleta cerdo','1 naranja','1 limón','3 dientes ajo','Sal gruesa','Manteca de cerdo','Tortillas de maíz'],pasos:['Trocear la carne en cubos grandes','Cocer en manteca a fuego bajo 2h','Añadir jugo de naranja y limón','Subir fuego para dorar','Desmenuzar en tabla','Servir en tortillas con salsa'],fecha:'2026-02-28',publicado:true},
{id:54,autorId:7,titulo:'Pasta con Tomate Casero',descripcion:'Mi pasta del domingo: sencilla, con tomates cherry asados en el horno y mucho ajo.',categoria:'Cocina Italiana',imagen:'https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?w=600',ingredientes:['400g spaghetti','500g tomates cherry','5 dientes ajo','Aceite oliva','Albahaca fresca','Parmesano'],pasos:['Asar tomates y ajo en horno 200°C 25 min','Triturar ligeramente con tenedor','Cocer pasta al dente','Mezclar pasta caliente con la salsa','Añadir albahaca y parmesano','Servir inmediatamente'],fecha:'2026-03-01',publicado:true},
{id:55,autorId:7,titulo:'Salmón a la Plancha',descripcion:'Mi receta express para días ocupados. Salmón crujiente en 10 minutos con ensalada fresca.',categoria:'Yakitori y Parrilla',imagen:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600',ingredientes:['2 filetes salmón','Aceite de oliva','Sal y pimienta','Limón','Eneldo fresco','Ensalada mixta'],pasos:['Secar el salmón con papel','Sazonar con sal y pimienta','Plancha muy caliente con aceite','3 min por lado hasta dorado','Servir con limón y eneldo','Acompañar con la ensalada'],fecha:'2026-03-05',publicado:true}
];

let UID=56;

/* ============================================================
   STATE
============================================================ */
let CU=null;
let CV='inicio';
let editId=null;
let delId=null;
let sq='';
let acat='Todas';

/* ============================================================
   UTILS
============================================================ */
const $=id=>document.getElementById(id);
const userById=id=>USERS.find(u=>u.id===id);
const byUser=uid=>RECETAS.filter(r=>r.autorId===uid);
const trunc=(s,n)=>s.length>n?s.slice(0,n)+'...':s;

function toast(msg,type='success'){
  const t=$('toast');
  t.innerHTML=({success:'✅',error:'❌',info:'ℹ️'}[type]||'')+' '+msg;
  t.className=`toast ${type} show`;
  setTimeout(()=>t.classList.remove('show'),3200);
}

/* ============================================================
   INDEX RENDER
============================================================ */
function renderIndex(){
  // hint users
  $('hintUsers').innerHTML=USERS.map(u=>`
    <div class="hint-chip" onclick="quickLogin(${u.id})">
      <strong>${u.username}</strong> · ${u.especialidad}
    </div>`).join('');

  // preview cards
  $('indexCards').innerHTML=RECETAS.slice(0,10).map(r=>`
    <div class="idx-card" onclick="showLoginModal()">
      <img src="${r.imagen}" alt="${r.titulo}" onerror="this.src='https://images.unsplash.com/photo-1546549039-49b9a2c09b1a?w=400'">
      <div class="idx-card-body">
        <span class="cat-tag">${r.categoria}</span>
        <h3>${r.titulo}</h3>
        <p>${trunc(r.descripcion,65)}</p>
      </div>
    </div>`).join('');
}

function quickLogin(uid){
  const u=USERS.find(x=>x.id===uid);
  if(u) enterApp(u);
}

function showLoginModal(){ $('loginOv').classList.add('active'); }

/* ============================================================
   AUTH EVENTS
============================================================ */
$('openLogin').onclick=()=>$('loginOv').classList.add('active');
$('openRegister').onclick=()=>$('regOv').classList.add('active');
$('closeLogin').onclick=()=>$('loginOv').classList.remove('active');
$('closeReg').onclick=()=>$('regOv').classList.remove('active');
$('goReg').onclick=()=>{$('loginOv').classList.remove('active');$('regOv').classList.add('active')};
$('goLi').onclick=()=>{$('regOv').classList.remove('active');$('loginOv').classList.add('active')};

['loginOv','regOv'].forEach(id=>{
  $(id).addEventListener('click',e=>{if(e.target===$(id))$(id).classList.remove('active')});
});

$('doLogin').onclick=()=>{
  const u=$('liU').value.trim();
  const p=$('liP').value;
  const user=USERS.find(x=>x.username===u&&x.password===p);
  $('liErr').style.display=user?'none':'block';
  if(user){enterApp(user);}
};

$('doReg').onclick=()=>{
  const u=$('rusr').value.trim(),nom=$('rnom').value.trim(),em=$('reml').value.trim(),p1=$('rp1').value,p2=$('rp2').value;
  const err=$('rErr');
  if(!u||!nom||!em||!p1){err.style.display='block';err.textContent='Completa todos los campos';return;}
  if(p1!==p2){err.style.display='block';err.textContent='Las contraseñas no coinciden';return;}
  if(USERS.find(x=>x.username===u)){err.style.display='block';err.textContent='El usuario ya existe';return;}
  const nu={id:USERS.length+1,username:u,password:p1,nombre:nom,email:em,especialidad:'Aficionado',bio:'',instagram:'',avatar:`https://ui-avatars.com/api/?name=${encodeURIComponent(nom)}&background=b71c1c&color=fff&size=200`};
  USERS.push(nu);
  err.style.display='none';
  $('regOv').classList.remove('active');
  enterApp(nu);
};

$('doLogout').onclick=()=>{
  CU=null;
  $('appLayout').style.display='none';
  $('indexPage').style.display='block';
  renderIndex();
};

function enterApp(user){
  CU=user;
  ['loginOv','regOv'].forEach(id=>$(id).classList.remove('active'));
  $('indexPage').style.display='none';
  $('appLayout').style.display='block';
  updateUI();
  nav('inicio');
}

function updateUI(){
  $('sbName').textContent=CU.username;
  $('sbRole').textContent=CU.especialidad;
  $('sbAv').src=CU.avatar;
  $('tbName').textContent=CU.username;
  $('tbAv').src=CU.avatar;
}

/* ============================================================
   NAV
============================================================ */
document.querySelectorAll('[data-view]').forEach(b=>{
  b.addEventListener('click',()=>nav(b.dataset.view));
});

function nav(v){
  CV=v;
  document.querySelectorAll('.view').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.sb-btn[data-view]').forEach(b=>b.classList.remove('active'));
  const el=$('view-'+v);
  if(el)el.classList.add('active');
  document.querySelectorAll(`[data-view="${v}"]`).forEach(b=>b.classList.add('active'));
  if(v==='inicio')renderInicio();
  if(v==='recetas')renderRecetas();
  if(v==='panel')renderPanel();
  if(v==='perfil')loadPerfil();
  if(v==='subir')resetSubir();
  // sync bottom nav
  document.querySelectorAll('.bn-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===v));
}

/* ============================================================
   SEARCH
============================================================ */
$('gSearch').addEventListener('input',e=>{
  sq=e.target.value.toLowerCase();
  if(CV==='recetas')renderRecetas();
  if(CV==='inicio')renderInicio();
});

/* ============================================================
   INICIO
============================================================ */
function renderInicio(){
  let mr=byUser(CU.id);
  if(sq)mr=mr.filter(r=>r.titulo.toLowerCase().includes(sq)||r.categoria.toLowerCase().includes(sq));
  const cats=[...new Set(RECETAS.map(r=>r.categoria))];
  $('statsBar').innerHTML=`
    <div class="stat-card"><div class="stat-icon">📝</div><div><div class="stat-num">${byUser(CU.id).length}</div><div class="stat-label">Mis recetas</div></div></div>
    <div class="stat-card"><div class="stat-icon">🌐</div><div><div class="stat-num">${RECETAS.length}</div><div class="stat-label">Recetas totales</div></div></div>
    <div class="stat-card"><div class="stat-icon">🏷️</div><div><div class="stat-num">${cats.length}</div><div class="stat-label">Categorías</div></div></div>
    <div class="stat-card"><div class="stat-icon">👥</div><div><div class="stat-num">${USERS.length}</div><div class="stat-label">Usuarios</div></div></div>`;
  const g=$('inicioGrid');
  if(!mr.length){g.innerHTML=`<div class="empty"><div class="ei">🍜</div><h3>${sq?'Sin resultados':'Aún no tienes recetas'}</h3><p>${sq?'Prueba otro término':'Sube tu primera receta'}</p></div>`;return;}
  g.innerHTML=mr.map(r=>card(r,true)).join('');
}

/* ============================================================
   RECETAS
============================================================ */
function renderRecetas(){
  const cats=['Todas',...new Set(RECETAS.map(r=>r.categoria))];
  $('filtrosBar').innerHTML=cats.map(c=>`<button class="flt ${c===acat?'active':''}" onclick="fcat('${c}')">${c}</button>`).join('');
  let f=RECETAS;
  if(acat!=='Todas')f=f.filter(r=>r.categoria===acat);
  if(sq)f=f.filter(r=>r.titulo.toLowerCase().includes(sq)||r.descripcion.toLowerCase().includes(sq)||r.categoria.toLowerCase().includes(sq));
  const g=$('recGrid');
  if(!f.length){g.innerHTML=`<div class="empty"><div class="ei">🔍</div><h3>Sin resultados</h3></div>`;return;}
  g.innerHTML=f.map(r=>card(r,r.autorId===CU.id)).join('');
}

function fcat(c){acat=c;renderRecetas();}

/* ============================================================
   CARD
============================================================ */
function card(r,own){
  const a=userById(r.autorId);
  return`<article class="card">
    <div class="card-iw">
      <img src="${r.imagen}" alt="${r.titulo}" onerror="this.src='https://images.unsplash.com/photo-1546549039-49b9a2c09b1a?w=400'">
      <span class="card-badge">${r.categoria}</span>
    </div>
    <div class="card-body">
      <span class="card-cat">${r.categoria}</span>
      <h3>${r.titulo}</h3>
      <p>${trunc(r.descripcion,95)}</p>
      <div class="card-meta">
        <div class="av-chip"><img src="${a?a.avatar:''}" alt="${a?a.username:''}">${a?a.username:'?'}</div>
        <span class="dot"></span><span>${a?a.especialidad:''}</span>
        <span class="dot"></span><span>${r.fecha}</span>
      </div>
      <div class="card-acts">
        <button class="cbtn pri" onclick="openRM(${r.id})">Ver receta</button>
        ${own?`<button class="cbtn out" onclick="openEM(${r.id})">Editar</button><button class="cbtn del" onclick="confirmDel(${r.id})">Eliminar</button>`:''}
      </div>
    </div>
  </article>`;
}

/* ============================================================
   RECETA MODAL
============================================================ */
function openRM(id){
  const r=RECETAS.find(x=>x.id===id);if(!r)return;
  const a=userById(r.autorId);
  $('rmImg').src=r.imagen;
  $('rmT').textContent=r.titulo;
  $('rmMeta').innerHTML=`<span>📂 ${r.categoria}</span><span>👤 ${a?a.username:'?'}</span><span>🏅 ${a?a.especialidad:''}</span><span>📅 ${r.fecha}</span>`;
  $('rmIng').innerHTML=r.ingredientes.map(i=>`<li>${i}</li>`).join('');
  $('rmPas').innerHTML=r.pasos.map(p=>`<li>${p}</li>`).join('');
  $('rmOv').classList.add('open');
}
function cRM(){$('rmOv').classList.remove('open')}
$('rmOv').addEventListener('click',e=>{if(e.target===$('rmOv'))cRM()});

/* ============================================================
   SUBIR
============================================================ */
function resetSubir(){
  ['sT','sD','sImg','sIng','sPas'].forEach(id=>$(id).value='');
  $('sCat').value='';
  $('prevT').textContent='Título de la receta';
  $('prevD').textContent='Descripción breve...';
  $('prevImg').src='https://images.unsplash.com/photo-1546549039-49b9a2c09b1a?w=400';
  $('okBanner').classList.remove('show');
}
$('sT').addEventListener('input',e=>{$('prevT').textContent=e.target.value||'Título de la receta'});
$('sD').addEventListener('input',e=>{$('prevD').textContent=e.target.value||'Descripción breve...'});
$('sImg').addEventListener('input',e=>{if(e.target.value)$('prevImg').src=e.target.value});

$('pubBtn').onclick=()=>{
  const t=$('sT').value.trim(),d=$('sD').value.trim(),img=$('sImg').value.trim();
  const cat=$('sCat').value,ing=$('sIng').value.trim(),pas=$('sPas').value.trim();
  if(!t||!d||!cat||!ing||!pas){toast('Completa todos los campos requeridos','error');return;}
  RECETAS.unshift({id:UID++,autorId:CU.id,titulo:t,descripcion:d,categoria:cat,
    imagen:img||'https://images.unsplash.com/photo-1546549039-49b9a2c09b1a?w=400',
    ingredientes:ing.split('\n').filter(l=>l.trim()),
    pasos:pas.split('\n').filter(l=>l.trim()),
    fecha:new Date().toISOString().split('T')[0],publicado:true});
  $('okBanner').classList.add('show');
  toast('¡Receta publicada! 🎉','success');
  setTimeout(()=>nav('panel'),1600);
};

/* ============================================================
   PANEL
============================================================ */
function renderPanel(){
  const mr=byUser(CU.id);
  const tb=$('panelBody');
  if(!mr.length){tb.innerHTML=`<tr><td colspan="6" style="text-align:center;padding:2.5rem;color:#999">No tienes recetas. ¡Sube la primera!</td></tr>`;return;}
  tb.innerHTML=mr.map(r=>`<tr>
    <td><img class="timg" src="${r.imagen}" onerror="this.src='https://images.unsplash.com/photo-1546549039-49b9a2c09b1a?w=100'"></td>
    <td><strong>${r.titulo}</strong></td>
    <td>${r.categoria}</td>
    <td><span class="sbadge ${r.publicado?'pub':'bor'}">${r.publicado?'Publicado':'Borrador'}</span></td>
    <td>${r.fecha}</td>
    <td><div class="pacts">
      <button class="pbtn edit" onclick="openEM(${r.id})">Editar</button>
      <button class="pbtn del" onclick="confirmDel(${r.id})">Eliminar</button>
    </div></td>
  </tr>`).join('');
}

/* ============================================================
   EDIT MODAL
============================================================ */
function openEM(id){
  const r=RECETAS.find(x=>x.id===id);if(!r)return;
  if(r.autorId!==CU.id){toast('Solo puedes editar tus recetas','error');return;}
  editId=id;
  $('eT').value=r.titulo;$('eD').value=r.descripcion;$('eImg').value=r.imagen||'';
  $('eCat').value=r.categoria;
  $('eIng').value=r.ingredientes.join('\n');$('ePas').value=r.pasos.join('\n');
  $('emOv').classList.add('open');
}
function cEM(){$('emOv').classList.remove('open');editId=null;}
function saveEdit(){
  if(!editId)return;
  const idx=RECETAS.findIndex(r=>r.id===editId);if(idx===-1)return;
  RECETAS[idx]={...RECETAS[idx],
    titulo:$('eT').value.trim(),descripcion:$('eD').value.trim(),
    imagen:$('eImg').value.trim()||RECETAS[idx].imagen,
    categoria:$('eCat').value,
    ingredientes:$('eIng').value.split('\n').filter(l=>l.trim()),
    pasos:$('ePas').value.split('\n').filter(l=>l.trim())};
  cEM();toast('Receta actualizada ✏️','success');
  if(CV==='panel')renderPanel();
  if(CV==='inicio')renderInicio();
  if(CV==='recetas')renderRecetas();
}
$('emOv').addEventListener('click',e=>{if(e.target===$('emOv'))cEM()});

/* ============================================================
   DELETE
============================================================ */
function confirmDel(id){delId=id;$('confOv').classList.add('open');}
function cConf(){$('confOv').classList.remove('open');delId=null;}
$('confDel').onclick=()=>{
  if(!delId)return;
  RECETAS=RECETAS.filter(r=>r.id!==delId);
  cConf();toast('Receta eliminada','info');
  renderPanel();
};

/* ============================================================
   PERFIL
============================================================ */
function loadPerfil(){
  $('perfPrev').src=CU.avatar||`https://ui-avatars.com/api/?name=${encodeURIComponent(CU.nombre)}&background=b71c1c&color=fff&size=200`;
  $('pUsr').value=CU.username;$('pEml').value=CU.email;
  $('pBio').value=CU.bio||'';$('pEsp').value=CU.especialidad;
  $('pInsta').value=CU.instagram||'';$('perfFoto').value='';
}
$('perfFoto').addEventListener('input',e=>{if(e.target.value)$('perfPrev').src=e.target.value});
function guardarPerfil(){
  const foto=$('perfFoto').value.trim();
  CU.username=$('pUsr').value.trim();CU.email=$('pEml').value.trim();
  CU.bio=$('pBio').value.trim();CU.especialidad=$('pEsp').value;
  CU.instagram=$('pInsta').value.trim();
  if(foto)CU.avatar=foto;
  const idx=USERS.findIndex(u=>u.id===CU.id);
  if(idx!==-1)USERS[idx]={...CU};
  updateUI();toast('Perfil actualizado 👤','success');
}
function cancelarPerfil(){loadPerfil();toast('Cambios descartados','info');}

/* ============================================================
   KEYBOARD
============================================================ */
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){cRM();cEM();cConf();['loginOv','regOv'].forEach(id=>$(id).classList.remove('active'));}
});


/* ============================================================
   HAMBURGER & MOBILE SIDEBAR
============================================================ */
const hamBtn = document.getElementById('hamBtn');
const sbOverlay = document.getElementById('sbOverlay');
const sidebar = document.querySelector('.sidebar');

function openSidebar(){
  sidebar.classList.add('open');
  sbOverlay.classList.add('open');
  hamBtn.classList.add('open');
  document.body.style.overflow='hidden';
}

function closeSidebar(){
  sidebar.classList.remove('open');
  sbOverlay.classList.remove('open');
  hamBtn.classList.remove('open');
  document.body.style.overflow='';
}

hamBtn.addEventListener('click', ()=>{
  sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
});

sbOverlay.addEventListener('click', closeSidebar);

// Close sidebar when a nav item is clicked on mobile
document.querySelectorAll('.sb-btn[data-view]').forEach(b=>{
  b.addEventListener('click', ()=>{
    if(window.innerWidth <= 768) closeSidebar();
  });
});

// Sync bottom nav active state
function syncBottomNav(v){
  document.querySelectorAll('.bn-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.view === v);
  });
}

// Hook bottom nav buttons
document.querySelectorAll('.bn-btn[data-view]').forEach(b=>{
  b.addEventListener('click', ()=> nav(b.dataset.view));
});


/* INIT */
renderIndex();

// Prefill login for demo convenience
$('liU').value='Fernando';$('liP').value='1234';
