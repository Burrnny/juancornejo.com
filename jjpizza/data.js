// JJ Pizza — datos de ejemplo (precios promedio California) y textos EN/ES
(function () {
const S = {
  hello:['Hi, María','Hola, María'], crave:['Pizza and handmade pupusas','Pizza y pupusas hechas a mano'],
  mPickup:['Pickup','Para llevar'], mDelivery:['Delivery','A domicilio'], mDine:['Dine-in','En el local'],
  stampCard:['JJ stamp card','Tarjeta de sellos JJ'], promos:['Deals','Promos'],
  reorder:['Order again','Repetir último pedido'], reorderBtn:['Reorder','Repetir'],
  menu:['Menu','Menú'], buildTitle:['Build your pizza','Arma tu pizza'], buildSub:['Half & half, your dough, your crust','Mitad y mitad, tu masa, tu orilla'], start:['Start','Empezar'],
  popular:['Most ordered','Las más pedidas'], wheel:['JJ Wheel','Ruleta JJ'], spinReady:['1 free spin this week','1 giro gratis esta semana'], spinUsed:['Next spin on Monday','Próximo giro el lunes'],
  challenge:['Weekly challenge','Reto de la semana'], challengeText:['Order 2 pizzas by Sunday → +1 stamp','Pide 2 pizzas antes del domingo → +1 sello'], challengeDone:['Done! Bonus stamp added','¡Listo! Sello extra agregado'],
  openHours:['Open · 11 am – 10 pm','Abierto · 11 am – 10 pm'], search:['Search pizza, wings, pupusas…','Busca pizza, wings, pupusas…'],
  from:['from','desde'], noResults:['Nothing matches your search','No encontramos nada con esa búsqueda'],
  size:['Size','Tamaño'], dough:['Dough','Masa'], edge:['Crust','Orilla'], sauce:['Sauce','Salsa'], cheese:['Cheese','Queso'], toppings:['Toppings','Ingredientes'], meats:['Meats','Carnes'], veggies:['Veggies','Vegetales'],
  halfHint:['Left half, whole pizza or right half','Mitad izquierda, toda o mitad derecha'], L:['Left','Izq.'], R:['Right','Der.'],
  add:['Add','Agregar'], required:['Required','Obligatorio'], optional:['Optional','Opcional'],
  cart:['Your order','Tu pedido'], addMore:['Add more items','Agregar más cosas'], emptyCart:['Your order is empty','Tu pedido está vacío'], emptySub:['Start with a pizza fresh out of the oven.','Empieza con una pizza recién salida del horno.'], seeMenu:['See menu','Ver menú'],
  orderType:['Order type','Tipo de pedido'], asap:['ASAP · ~20 min','Lo antes posible · ~20 min'], pickupAt:['Pick up at 1139 E 18th St, Antioch','Recoge en 1139 E 18th St, Antioch'],
  address:['Delivery address','Dirección de entrega'], table:['Table','Mesa'], tableHint:['Or scan the QR code on your table','O escanea el código QR de tu mesa'],
  freeDel:['Free delivery unlocked','Entrega gratis desbloqueada'], freeDelLeft:['Add {x} more for free delivery','Te faltan {x} para entrega gratis'],
  payment:['Payment','Pago'], cash:['Cash','Efectivo'], cashP:['Pay when you pick up','Pagas al recoger'], cashD:['Pay the driver','Pagas al recibir'], cashT:['Pay at the counter','Pagas en caja'],
  transfer:['Bank transfer (Zelle)','Transferencia (Zelle)'], transferSub:['Send it before we start cooking','Envíala antes de que empecemos a cocinar'],
  zelleNote:['Send {x} via Zelle to (925) 477-6683 · JJ Pizza. We confirm it before your pizza goes in the oven.','Envía {x} por Zelle al (925) 477-6683 · JJ Pizza. Confirmamos el pago antes de meter tu pizza al horno.'],
  coupon:['Coupon','Cupón'], code:['Code','Código'], apply:['Apply','Aplicar'], remove:['Remove','Quitar'], badCode:["That code isn't valid",'Ese código no es válido'],
  subtotal:['Subtotal','Subtotal'], discount:['Discount','Descuento'], deliveryFee:['Delivery','Entrega'], free:['Free','Gratis'], tax:['Tax (9.75%)','Impuestos (9.75%)'], total:['Total','Total'],
  earnsN:['This order earns {n} stamps','Este pedido suma {n} sellos'], earns1:['This order earns 1 stamp','Este pedido suma 1 sello'], earns0:['Only pizzas earn stamps','Solo las pizzas suman sellos'],
  place:['Place order','Hacer pedido'], orders:['Orders','Pedidos'], live:['Live','En vivo'], orderNo:['Order','Pedido'],
  stP:[['Received','In the oven','Ready','Picked up'],['Recibido','En el horno','Listo','Recogido']],
  stD:[['Received','In the oven','On the way','Delivered'],['Recibido','En el horno','En camino','Entregado']],
  stT:[['Received','In the oven','To your table','Served'],['Recibido','En el horno','A tu mesa','Servido']],
  titleP:[['We got your order','It’s in the oven','Ready for pickup!','Picked up'],['Recibimos tu pedido','Está en el horno','¡Listo para recoger!','Recogido']],
  titleD:[['We got your order','It’s in the oven','On the way!','Delivered'],['Recibimos tu pedido','Está en el horno','¡Va en camino!','Entregado']],
  titleT:[['We got your order','It’s in the oven','Heading to your table','Served'],['Recibimos tu pedido','Está en el horno','Va para tu mesa','Servido']],
  eta:['Around {t}','Aprox. {t}'], done:['Enjoy! Thanks for ordering with JJ','¡Buen provecho! Gracias por pedir en JJ'],
  directions:['Directions','Cómo llegar'], driver:['Carlos · gray Honda Civic','Carlos · Honda Civic gris'],
  notifyMe:['Notify me when it’s ready','Avisarme cuando esté listo'], advance:['Next status (demo)','Siguiente estado (demo)'],
  stampsAdded:['+{n} stamps added to your card','+{n} sellos agregados a tu tarjeta'],
  rate:['Rate your order','Califica tu pedido'], rateSub:['How was it?','¿Qué tal estuvo?'], send:['Send','Enviar'], thanks:['Thanks for rating!','¡Gracias por calificar!'], commentPh:['Anything else? (optional)','¿Algo más? (opcional)'],
  tags:[['Piping hot','On time','Great taste','Good portion'],['Bien caliente','A tiempo','Buen sabor','Buena porción']],
  noActive:['No orders in progress','No tienes pedidos en curso'], orderNow:['Order now','Pedir ahora'], history:['Past orders','Pedidos anteriores'],
  rewardsTitle:['Your stamps','Tus sellos'], rewardsSub:['10 pizzas = 1 free large pizza','10 pizzas = 1 pizza grande gratis'],
  leftN:['{n} more pizzas to your free one','Te faltan {n} pizzas para la gratis'], left1:['1 more pizza to your free one!','¡Te falta 1 pizza para la gratis!'],
  unlocked:['Free large pizza unlocked!','¡Pizza grande gratis desbloqueada!'], unlockedSub:['Up to 3 toppings, any dough.','Hasta 3 ingredientes, la masa que quieras.'], redeem:['Redeem now','Canjear ahora'], inCart:['It’s in your order','Ya está en tu pedido'],
  moreWays:['More ways to earn','Más formas de ganar'], invite:['Invite a friend','Invita a un amigo'], inviteSub:['+1 stamp each on their first order','+1 sello para cada uno en su primer pedido'],
  birthday:['Birthday','Cumpleaños'], birthdaySub:['Free small pizza on your birthday week','Pizza chica gratis en tu semana de cumpleaños'],
  how:['How it works','Cómo funciona'], how1:['Every pizza you order earns 1 stamp.','Cada pizza que pides suma 1 sello.'], how2:['Collect 10 and your next large pizza is free.','Junta 10 y tu siguiente pizza grande es gratis.'], how3:['Stamps land when you get your order.','Los sellos se suman al recibir tu pedido.'],
  stampHistory:['Stamp history','Historial de sellos'], wheelSub:['One spin a week. Win stamps, discounts and treats.','Un giro por semana. Gana sellos, descuentos y antojos.'],
  spin:['Spin','Girar'], spinning:['Spinning…','Girando…'], won:['You won','Ganaste'], comeBack:['Come back Monday for another spin','Vuelve el lunes por otro giro'],
  useNow:['Use on my order','Usar en mi pedido'], addFree:['Add to my order','Agregar a mi pedido'], seeStamps:['See my stamps','Ver mis sellos'], resetSpin:['Reset spin (demo)','Reiniciar giro (demo)'],
  member:['JJ customer since 2026','Cliente JJ desde 2026'], language:['Language','Idioma'], favorites:['Favorites','Favoritos'], noFavs:['Tap the heart on any menu item to save it here.','Toca el corazón en el menú para guardar tus favoritos aquí.'],
  yourCode:['Your code','Tu código'], copy:['Copy','Copiar'], copied:['Code copied','Código copiado'], inviteStats:['1 friend joined · 1 pending','1 amigo se unió · 1 pendiente'],
  notifications:['Notifications','Notificaciones'], nReady:['My order is ready','Mi pedido está listo'], nPromos:['Deals and coupons','Promos y cupones'], nSpin:['Weekly spin reminder','Recordatorio de la ruleta'],
  store:['Store','Tienda'], hours:['Mon – Sun · 11 am – 10 pm','Lun – Dom · 11 am – 10 pm'], call:['Call','Llamar'],
  tabHome:['Home','Inicio'], tabMenu:['Menu','Menú'], tabStamps:['Stamps','Sellos'], tabOrders:['Orders','Pedidos'], tabProfile:['Profile','Perfil'],
  added:['Added to your order','Agregado a tu pedido'], viewOrder:['View order','Ver pedido'], now:['now','ahora'],
  nTitleP:['Your order is ready!','¡Tu pedido está listo!'], nBodyP:['Come pick it up at 1139 E 18th St.','Pasa por él a 1139 E 18th St.'],
  nTitleD:['Your order is on the way','Tu pedido va en camino'], nBodyD:['Carlos will be there in about 12 minutes.','Carlos llega en unos 12 minutos.'],
  nTitleT:['Fresh out of the oven!','¡Recién salido del horno!'], nBodyT:['We’re bringing it to table {t}.','Lo llevamos a la mesa {t}.'],
  nStampsT:['+{n} stamps','+{n} sellos'], nStampsB:['Thanks for your order. You’re at {s}/10.','Gracias por tu pedido. Llevas {s}/10.'],
  freePizza:['Free large pizza','Pizza grande gratis'], soldOut:['Sold out','Agotado'], soldOutToast:['Sold out today','Agotado por hoy'],
  closedNow:['The store isn’t taking online orders right now','La tienda no está recibiendo pedidos en este momento'], closedBtn:['Not taking orders right now','No estamos recibiendo pedidos'], reward:['Reward','Premio'], items1:['1 item','1 artículo'], itemsN:['{n} items','{n} artículos'],
};
const SIZES = [
  {id:'S',inch:'10"',n:['Small','Chica'],add:0,dot:18},{id:'M',inch:'12"',n:['Medium','Mediana'],add:3,dot:23},
  {id:'L',inch:'14"',n:['Large','Grande'],add:6,dot:28},{id:'XL',inch:'16"',n:['X-Large','Familiar'],add:9,dot:33}];
const TOP_PRICE = {S:1.25,M:1.5,L:1.75,XL:2};
const DOUGHS = [{id:'hand',n:['Hand-tossed','Tradicional'],add:0},{id:'thin',n:['Thin','Delgada'],add:0},{id:'pan',n:['Thick pan','Gruesa'],add:1.5},{id:'gf',n:['Gluten-free','Sin gluten'],add:3}];
const EDGES = [{id:'classic',n:['Classic','Clásica'],add:0},{id:'stuffed',n:['Cheese-stuffed','Rellena de queso'],add:2.5},{id:'garlic',n:['Garlic parm','Ajo y parmesano'],add:1}];
const SAUCES = [{id:'red',n:['Tomato','Tomate'],add:0},{id:'white',n:['Garlic white','Blanca de ajo'],add:0},{id:'bbq',n:['BBQ','BBQ'],add:0},{id:'pesto',n:['Pesto','Pesto'],add:1},{id:'buffalo',n:['Buffalo','Búfalo'],add:0}];
const CHEESES = [{id:'reg',n:['Regular','Normal'],add:0},{id:'light',n:['Light','Poco'],add:0},{id:'extra',n:['Extra','Extra'],add:1.5},{id:'vegan',n:['Vegan','Vegano'],add:2}];
const TOPS = [
  {id:'pep',g:'m',n:['Pepperoni','Pepperoni'],c:'#B8321D'},{id:'sau',g:'m',n:['Italian sausage','Salchicha italiana'],c:'#7B4A2B'},
  {id:'bac',g:'m',n:['Bacon','Tocino'],c:'#D06A57'},{id:'ham',g:'m',n:['Ham','Jamón'],c:'#EFA3A0'},
  {id:'chk',g:'m',n:['Grilled chicken','Pollo asado'],c:'#E3C893'},{id:'bef',g:'m',n:['Ground beef','Carne molida'],c:'#6A4026'},
  {id:'mus',g:'v',n:['Mushrooms','Champiñones'],c:'#BFA88A'},{id:'bpp',g:'v',n:['Bell peppers','Pimiento verde'],c:'#3F9A33'},
  {id:'oni',g:'v',n:['Red onions','Cebolla morada'],c:'#A0559D'},{id:'oli',g:'v',n:['Black olives','Aceitunas negras'],c:'#2A2622'},
  {id:'jal',g:'v',n:['Jalapeños','Jalapeños'],c:'#4E9A2E'},{id:'pin',g:'v',n:['Pineapple','Piña'],c:'#E9B92E'},
  {id:'tom',g:'v',n:['Tomatoes','Tomate'],c:'#DB4A33'},{id:'spi',g:'v',n:['Spinach','Espinaca'],c:'#2F6B28'},{id:'bas',g:'v',n:['Fresh basil','Albahaca'],c:'#3D8F31'}];
const W = a => Object.fromEntries(a.map(i => [i, 'W']));
const CATS = [
  {id:'pizza',n:['Pizzas','Pizzas'],icon:'local_pizza'},{id:'burger',n:['Burgers','Burgers'],icon:'lunch_dining'},
  {id:'pasta',n:['Pastas','Pastas'],icon:'dinner_dining'},{id:'wings',n:['Wings','Wings'],icon:'local_fire_department'},
  {id:'pupusa',n:['Pupusas','Pupusas'],icon:'tapas'},{id:'drink',n:['Drinks','Bebidas'],icon:'local_drink'},{id:'dessert',n:['Desserts','Postres'],icon:'bakery_dining'}];
const ITEMS = [
  {id:'pepperoni',cat:'pizza',n:['Pepperoni','Pepperoni'],d:['Loaded with crispy-edged pepperoni.','Bien cargada de pepperoni con orillita crujiente.'],p:14.49,tops:W(['pep']),tag:['Top seller','La más pedida']},
  {id:'jj',cat:'pizza',n:['JJ Special','Especial JJ'],d:['Pepperoni, sausage, mushrooms, red onion and jalapeño.','Pepperoni, salchicha, champiñones, cebolla morada y jalapeño.'],p:17.99,tops:W(['pep','sau','mus','oni','jal']),tag:['House','De la casa']},
  {id:'cheese',cat:'pizza',n:['Cheese','Queso'],d:['Mozzarella and our house tomato sauce.','Mozzarella y nuestra salsa de tomate de la casa.'],p:12.99,tops:{}},
  {id:'supreme',cat:'pizza',n:['Supreme','Suprema'],d:['Pepperoni, sausage, bell pepper, onion, mushrooms and olives.','Pepperoni, salchicha, pimiento, cebolla, champiñones y aceitunas.'],p:16.99,tops:W(['pep','sau','bpp','oni','mus','oli'])},
  {id:'meat',cat:'pizza',n:['Meat Lovers','Carnívora'],d:['Pepperoni, sausage, bacon, ham and ground beef.','Pepperoni, salchicha, tocino, jamón y carne molida.'],p:17.49,tops:W(['pep','sau','bac','ham','bef'])},
  {id:'hawaiian',cat:'pizza',n:['Hawaiian','Hawaiana'],d:['Ham and pineapple. Sweet and salty.','Jamón y piña. Dulce y saladita.'],p:15.49,tops:W(['ham','pin'])},
  {id:'bbq',cat:'pizza',n:['BBQ Chicken','Pollo BBQ'],d:['BBQ sauce, grilled chicken, bacon and red onion.','Salsa BBQ, pollo asado, tocino y cebolla morada.'],p:16.49,tops:W(['chk','bac','oni']),sauce:'bbq'},
  {id:'margherita',cat:'pizza',n:['Margherita','Margarita'],d:['Tomato, fresh basil and mozzarella.','Tomate, albahaca fresca y mozzarella.'],p:14.99,tops:W(['tom','bas'])},
  {id:'veggie',cat:'pizza',n:['Veggie','Vegetariana'],d:['Mushrooms, bell pepper, onion, olives, tomato and spinach.','Champiñones, pimiento, cebolla, aceitunas, tomate y espinaca.'],p:15.49,tops:W(['mus','bpp','oni','oli','tom','spi'])},
  {id:'cheeseburger',cat:'burger',n:['Classic Cheeseburger','Hamburguesa clásica'],d:['1/3 lb patty, American cheese, lettuce, tomato and pickles. With fries.','Carne de 1/3 lb, queso americano, lechuga, tomate y pepinillos. Con papas.'],p:12.99,opt:'burger'},
  {id:'baconbbq',cat:'burger',n:['Bacon BBQ Burger','Burger BBQ con tocino'],d:['Bacon, cheddar, onion rings and BBQ sauce. With fries.','Tocino, cheddar, aros de cebolla y salsa BBQ. Con papas.'],p:14.49,opt:'burger'},
  {id:'jalburger',cat:'burger',n:['Jalapeño Burger','Burger jalapeña'],d:['Pepper jack, grilled jalapeños and chipotle mayo. With fries.','Pepper jack, jalapeños asados y mayonesa de chipotle. Con papas.'],p:13.99,opt:'burger',tag:['Spicy','Picante']},
  {id:'spaghetti',cat:'pasta',n:['Spaghetti & Meatballs','Espagueti con albóndigas'],d:['Marinara, three meatballs and parmesan. With garlic bread.','Marinara, tres albóndigas y parmesano. Con pan de ajo.'],p:14.99,opt:'pasta'},
  {id:'alfredo',cat:'pasta',n:['Fettuccine Alfredo','Fettuccine Alfredo'],d:['Creamy parmesan sauce. With garlic bread.','Salsa cremosa de parmesano. Con pan de ajo.'],p:13.99,opt:'pasta'},
  {id:'ziti',cat:'pasta',n:['Baked Ziti','Ziti al horno'],d:['Ziti, marinara, ricotta and melted mozzarella.','Ziti, marinara, ricotta y mozzarella gratinada.'],p:14.49,opt:'pasta'},
  {id:'wings',cat:'wings',n:['Bone-in Wings','Alitas con hueso'],d:['Crispy wings tossed in your sauce, with celery and dip.','Alitas crujientes bañadas en tu salsa, con apio y aderezo.'],p:9.99,opt:'wings',prices:{'6':9.99,'10':15.99,'20':29.99}},
  {id:'boneless',cat:'wings',n:['Boneless Wings','Boneless'],d:['All-white-meat bites tossed in your sauce.','Trocitos de pechuga bañados en tu salsa.'],p:8.99,opt:'wings',prices:{'6':8.99,'10':13.99,'20':25.99}},
  {id:'pupusa',cat:'pupusa',n:['Pupusa','Pupusa'],d:['Handmade corn pupusa with curtido and tomato salsa.','Pupusa de maíz hecha a mano, con curtido y salsa de tomate.'],p:3.99,opt:'pupusa',tag:['Handmade','Hecha a mano']},
  {id:'pupusa3',cat:'pupusa',n:['Pupusa plate (3)','Plato de 3 pupusas'],d:['Three pupusas with curtido and salsa.','Tres pupusas con curtido y salsa.'],p:10.99,opt:'pupusa'},
  {id:'soda',cat:'drink',n:['Fountain soda','Refresco de máquina'],d:['Large, 32 oz.','Grande, 32 oz.'],p:2.49,opt:'soda'},
  {id:'soda2l',cat:'drink',n:['2-liter soda','Refresco de 2 litros'],d:['For the whole table.','Para toda la mesa.'],p:3.99,opt:'soda'},
  {id:'horchata',cat:'drink',n:['Horchata','Horchata'],d:['Homemade, 24 oz.','Hecha en casa, 24 oz.'],p:3.49},
  {id:'agua',cat:'drink',n:['Agua fresca','Agua fresca'],d:['Jamaica or tamarind, 24 oz.','De jamaica o tamarindo, 24 oz.'],p:3.49,opt:'agua'},
  {id:'churros',cat:'dessert',n:['Churros (4)','Churros (4)'],d:['Cinnamon sugar with chocolate dip.','Con azúcar y canela, y chocolate para mojar.'],p:5.49},
  {id:'cinna',cat:'dessert',n:['Cinnamon sticks','Palitos de canela'],d:['Pizza dough, butter, cinnamon and icing.','Masa de pizza, mantequilla, canela y glaseado.'],p:6.49},
  {id:'tresleches',cat:'dessert',n:['Tres leches','Pastel de tres leches'],d:['A homemade slice.','Rebanada hecha en casa.'],p:4.99},
  {id:'combo',cat:'promo',n:['Family combo','Combo familiar'],d:['2 large 1-topping pizzas, 10 wings and a 2-liter soda.','2 pizzas grandes de 1 ingrediente, 10 alitas y refresco de 2 litros.'],p:39.99,stamps:2},
  {id:'custom',cat:'pizza',n:['Custom pizza','Pizza a tu gusto'],d:['',''],p:12.99,tops:{}},
];
ITEMS.forEach(i => { if (i.id !== 'custom') i.img = 'img/menu/' + i.id + '.webp'; });
const CAT_IMG = { pizza:'pepperoni', burger:'cheeseburger', pasta:'spaghetti', wings:'wings', pupusa:'pupusa3', drink:'horchata', dessert:'churros' };
CATS.forEach(c => { c.img = 'img/menu/' + CAT_IMG[c.id] + '.webp'; });
const OPTS = {
  burger:[{id:'side',n:['Side','Acompañante'],req:1,ch:[{id:'fries',n:['Fries','Papas fritas'],add:0},{id:'rings',n:['Onion rings','Aros de cebolla'],add:1.5},{id:'salad',n:['Side salad','Ensalada'],add:1}]},
          {id:'extra',n:['Add-ons','Extras'],many:1,ch:[{id:'patty',n:['Extra patty','Carne extra'],add:3.5},{id:'bacon',n:['Bacon','Tocino'],add:2},{id:'avo',n:['Avocado','Aguacate'],add:1.5}]}],
  pasta:[{id:'add',n:['Add protein','Agrega proteína'],many:1,ch:[{id:'chicken',n:['Grilled chicken','Pollo asado'],add:3},{id:'shrimp',n:['Shrimp','Camarón'],add:4.5}]}],
  wings:[{id:'count',n:['How many?','¿Cuántas?'],req:1,priced:1,ch:[{id:'6',n:['6 pieces','6 piezas']},{id:'10',n:['10 pieces','10 piezas']},{id:'20',n:['20 pieces','20 piezas']}]},
         {id:'flavor',n:['Sauce','Salsa'],req:1,ch:[{id:'buffalo',n:['Buffalo','Búfalo']},{id:'bbq',n:['BBQ','BBQ']},{id:'lemon',n:['Lemon pepper','Limón pimienta']},{id:'garlic',n:['Garlic parmesan','Ajo parmesano']},{id:'mango',n:['Mango habanero','Mango habanero']}]},
         {id:'dip',n:['Dip','Aderezo'],req:1,ch:[{id:'ranch',n:['Ranch','Ranch']},{id:'blue',n:['Blue cheese','Queso azul']}]}],
  pupusa:[{id:'fill',n:['Filling','Relleno'],req:1,ch:[{id:'queso',n:['Cheese','Queso']},{id:'revuelta',n:['Revuelta (pork, beans, cheese)','Revuelta']},{id:'frijol',n:['Beans & cheese','Frijol con queso']},{id:'loroco',n:['Loroco & cheese','Loroco con queso']},{id:'chicharron',n:['Chicharrón & cheese','Chicharrón con queso'],add:0.5}]}],
  soda:[{id:'flavor',n:['Flavor','Sabor'],req:1,ch:[{id:'cola',n:['Cola','Cola']},{id:'diet',n:['Diet cola','Cola de dieta']},{id:'lemon',n:['Lemon-lime','Lima-limón']},{id:'orange',n:['Orange','Naranja']}]}],
  agua:[{id:'flavor',n:['Flavor','Sabor'],req:1,ch:[{id:'jamaica',n:['Jamaica','Jamaica']},{id:'tamarindo',n:['Tamarind','Tamarindo']}]}],
};
const COUPONS = {
  JJBIENVENIDO:{pct:15,d:['15% off your first app order','15% en tu primer pedido en la app']},
  MARTES2X1:{bogo:1,d:['Tuesdays: 2nd pizza free','Martes: la 2ª pizza gratis']},
  RULETA10:{pct:10,d:['10% off · wheel prize','10% · premio de la ruleta']},
  RULETA5:{off:5,min:25,d:['$5 off orders $25+ · wheel prize','$5 menos en pedidos de $25+ · ruleta']},
};
const PRIZES = [
  {icon:'local_pizza',n:['+1 stamp','+1 sello'],w:18,stamps:1},
  {icon:'sell',n:['10% off','10% desc.'],w:16,coupon:'RULETA10'},
  {icon:'local_drink',n:['Free soda','Refresco gratis'],w:16,item:'soda',sel:{flavor:'cola'}},
  {icon:'confirmation_number',n:['$5 off','$5 menos'],w:12,coupon:'RULETA5'},
  {icon:'local_pizza',n:['+2 stamps','+2 sellos'],w:8,stamps:2},
  {icon:'tapas',n:['Free pupusa','Pupusa gratis'],w:12,item:'pupusa',sel:{fill:'queso'}},
  {icon:'bakery_dining',n:['Free churros','Churros gratis'],w:10,item:'churros',sel:{}},
  {icon:'replay',n:['Next time','Otra vez'],w:8},
];
const THEME = {
  // Papel y tinta cálidos sacados de las fotos (harina, nogal); el verde y el rojo
  // del logo quedan como acentos con significado, no como fondo de todo.
  '--bg':'#F5EFE6','--onbg':'#1F1A15','--onbg2':'#6F665C',
  '--card':'#FFFFFF','--ink':'#1F1A15','--mut':'#6F665C','--line':'#E6DDD0','--soft':'#EFE7DA',
  '--hdr':'#F5EFE6','--onhdr':'#1F1A15','--onhdr2':'#6F665C',
  '--pri':'#2E6B1F','--onpri':'#FFFFFF','--cta':'#B5321A','--oncta':'#FFFFFF','--price':'#1F1A15',
  '--disp':"'Archivo'",'--dw':'780','--ds':'106%','--dk':'1','--dt':'-.012em','--dtt':'none','--dsh':'none',
  '--r':'14px','--rb':'12px',
  '--tab':'#FBF8F3','--tabink':'#8A8177','--tabon':'#2E6B1F',
  '--sc':'#2E6B1F','--onsc':'#FFFFFF','--stamp':'#B5321A','--onstamp':'#FFFFFF',
  '--wa':'#2E6B1F','--wat':'#FFFFFF','--wb':'#F1E6CF','--wbt':'#1F1A15','--wc':'#B5321A','--wct':'#FFFFFF'};
// Un solo tema. Los nombres antiguos apuntan al mismo para no romper estado guardado.
const THEMES = { letrero:THEME, horno:THEME, pancarta:THEME };
const STYLE_META = [
  {id:'letrero',name:'JJ',desc:'',c:['#2E6B1F','#B5321A','#F5EFE6'],font:"'Archivo'",stretch:'106%',w:780},
];
window.JJ = {S,SIZES,TOP_PRICE,DOUGHS,EDGES,SAUCES,CHEESES,TOPS,CATS,ITEMS,OPTS,COUPONS,PRIZES,THEMES,STYLE_META};
})();
