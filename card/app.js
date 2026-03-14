/* ============================================================
   VELOCE — app.js  |  60 cars, full interactivity
   ============================================================ */

/* ── DATA: 60 CARS ────────────────────────────────────────── */
const CARS = [
  /* CIUDAD */
  { id:1, brand:"Toyota", model:"Corolla", year:2024, cat:"ciudad", origin:"🇯🇵", hp:140, kml:"14 km/l", seats:5, price:42000, badge:"available",
    img:"https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&q=80",
    colors:["#1A1A2E","#E8E8E8","#B22222","#1E90FF"] },
  { id:2, brand:"Honda", model:"Civic Type R", year:2024, cat:"ciudad", origin:"🇯🇵", hp:315, kml:"10 km/l", seats:5, price:75000, badge:"new",
    img:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80",
    colors:["#CC0000","#1A1A1A","#FFFFFF","#0047AB"] },
  { id:3, brand:"Volkswagen", model:"Golf GTI", year:2023, cat:"ciudad", origin:"🇩🇪", hp:245, kml:"11 km/l", seats:5, price:58000, badge:"available",
    img:"https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&q=80",
    colors:["#CC0000","#1A1A1A","#C0C0C0","#FFFFFF"] },
  { id:4, brand:"Hyundai", model:"i30 N", year:2024, cat:"ciudad", origin:"🇰🇷", hp:280, kml:"12 km/l", seats:5, price:52000, badge:"available",
    img:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    colors:["#003087","#E8E8E8","#1A1A1A","#C0C0C0"] },
  { id:5, brand:"BYD", model:"Seal", year:2024, cat:"ciudad", origin:"🇨🇳", hp:313, kml:"Eléctrico", seats:5, price:48000, badge:"new",
    img:"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=600&q=80",
    colors:["#003153","#FFFFFF","#1C1C1C","#8B0000"] },
  { id:6, brand:"Kia", model:"Cerato GT", year:2023, cat:"ciudad", origin:"🇰🇷", hp:201, kml:"13 km/l", seats:5, price:38000, badge:"available",
    img:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80",
    colors:["#F02020","#1A1A1A","#C0C0C0","#FFFFFF"] },
  { id:7, brand:"Renault", model:"Clio RS", year:2023, cat:"ciudad", origin:"🇫🇷", hp:200, kml:"12 km/l", seats:5, price:35000, badge:"available",
    img:"https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=600&q=80",
    colors:["#FFD700","#F02020","#1A1A1A","#FFFFFF"] },
  { id:8, brand:"MINI", model:"Cooper S", year:2024, cat:"ciudad", origin:"🇬🇧", hp:192, kml:"11 km/l", seats:4, price:65000, badge:"available",
    img:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80",
    colors:["#CC0000","#2B2B2B","#FFFFFF","#005B99"] },
  { id:9, brand:"Chery", model:"Tiggo 2", year:2024, cat:"ciudad", origin:"🇨🇳", hp:113, kml:"16 km/l", seats:5, price:22000, badge:"offer",
    img:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80",
    colors:["#C0392B","#2C3E50","#BDC3C7","#1ABC9C"] },
  { id:10, brand:"Mazda", model:"3 Sedan", year:2024, cat:"ciudad", origin:"🇯🇵", hp:186, kml:"14 km/l", seats:5, price:44000, badge:"available",
    img:"https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&q=80",
    colors:["#8B0000","#1A1A1A","#E8E8E8","#2C3E50"] },

  /* SUV / JEEP */
  { id:11, brand:"Toyota", model:"RAV4 Hybrid", year:2024, cat:"suv", origin:"🇯🇵", hp:222, kml:"17 km/l", seats:5, price:72000, badge:"available",
    img:"https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80",
    colors:["#2C3E50","#BDC3C7","#FFFFFF","#C0392B"] },
  { id:12, brand:"Ford", model:"Escape Titanium", year:2024, cat:"suv", origin:"🇺🇸", hp:250, kml:"13 km/l", seats:5, price:68000, badge:"available",
    img:"https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&q=80",
    colors:["#1A1A1A","#BDC3C7","#003153","#FFFFFF"] },
  { id:13, brand:"Jeep", model:"Wrangler Rubicon", year:2024, cat:"suv", origin:"🇺🇸", hp:285, kml:"10 km/l", seats:5, price:95000, badge:"new",
    img:"https://images.unsplash.com/photo-1625231338027-c12dd14b7ad5?w=600&q=80",
    colors:["#556B2F","#FF8C00","#1A1A1A","#BDC3C7"] },
  { id:14, brand:"Hyundai", model:"Tucson N Line", year:2024, cat:"suv", origin:"🇰🇷", hp:230, kml:"14 km/l", seats:5, price:59000, badge:"available",
    img:"https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80",
    colors:["#1A1A1A","#E8E8E8","#2C3E50","#C0392B"] },
  { id:15, brand:"BMW", model:"X3 M40i", year:2024, cat:"suv", origin:"🇩🇪", hp:382, kml:"11 km/l", seats:5, price:120000, badge:"available",
    img:"https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
    colors:["#1A1A1A","#FFFFFF","#003153","#C0C0C0"] },
  { id:16, brand:"Volvo", model:"XC60 Recharge", year:2024, cat:"suv", origin:"🇸🇪", hp:455, kml:"Plug-in", seats:5, price:105000, badge:"new",
    img:"https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&q=80",
    colors:["#1C1C1C","#DCDCDC","#8B4513","#003153"] },
  { id:17, brand:"GWM", model:"Haval H6 HEV", year:2024, cat:"suv", origin:"🇨🇳", hp:243, kml:"18 km/l", seats:5, price:42000, badge:"offer",
    img:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80",
    colors:["#1A1A1A","#BDC3C7","#FFFFFF","#003087"] },
  { id:18, brand:"Land Rover", model:"Defender 110", year:2024, cat:"suv", origin:"🇬🇧", hp:300, kml:"10 km/l", seats:7, price:140000, badge:"available",
    img:"https://images.unsplash.com/photo-1543796076-c92f7a1bde96?w=600&q=80",
    colors:["#556B2F","#1A1A1A","#DCDCDC","#8B6914"] },
  { id:19, brand:"Kia", model:"Sportage GT", year:2024, cat:"suv", origin:"🇰🇷", hp:265, kml:"13 km/l", seats:5, price:55000, badge:"available",
    img:"https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600&q=80",
    colors:["#C0392B","#1A1A1A","#E8E8E8","#2C3E50"] },
  { id:20, brand:"Changan", model:"CS75 Plus", year:2024, cat:"suv", origin:"🇨🇳", hp:233, kml:"13 km/l", seats:5, price:32000, badge:"offer",
    img:"https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&q=80",
    colors:["#2C3E50","#BDC3C7","#8B0000","#FFFFFF"] },

  /* CAMIONETAS / PICKUP */
  { id:21, brand:"Ford", model:"F-150 Raptor", year:2024, cat:"pickup", origin:"🇺🇸", hp:450, kml:"8 km/l", seats:5, price:130000, badge:"available",
    img:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80",
    colors:["#FF4500","#1A1A1A","#BDC3C7","#003153"] },
  { id:22, brand:"Toyota", model:"Hilux GR Sport", year:2024, cat:"pickup", origin:"🇯🇵", hp:224, kml:"10 km/l", seats:5, price:75000, badge:"new",
    img:"https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600&q=80",
    colors:["#1A1A1A","#BDC3C7","#FFFFFF","#8B4513"] },
  { id:23, brand:"Mitsubishi", model:"L200 Triton", year:2024, cat:"pickup", origin:"🇯🇵", hp:181, kml:"11 km/l", seats:5, price:55000, badge:"available",
    img:"https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=600&q=80",
    colors:["#FFFFFF","#1A1A1A","#C0392B","#2C3E50"] },
  { id:24, brand:"Chevrolet", model:"S10 High Country", year:2024, cat:"pickup", origin:"🇺🇸", hp:200, kml:"10 km/l", seats:5, price:60000, badge:"available",
    img:"https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80",
    colors:["#8B0000","#1A1A1A","#BDC3C7","#FFFFFF"] },
  { id:25, brand:"Nissan", model:"Navara Pro-4X", year:2024, cat:"pickup", origin:"🇯🇵", hp:190, kml:"11 km/l", seats:5, price:58000, badge:"available",
    img:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80",
    colors:["#1A1A1A","#C0C0C0","#003153","#556B2F"] },
  { id:26, brand:"RAM", model:"1500 TRX", year:2024, cat:"pickup", origin:"🇺🇸", hp:702, kml:"7 km/l", seats:5, price:180000, badge:"new",
    img:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80",
    colors:["#FF4500","#1A1A1A","#DCDCDC","#003153"] },
  { id:27, brand:"VW", model:"Amarok V6", year:2024, cat:"pickup", origin:"🇩🇪", hp:258, kml:"10 km/l", seats:5, price:72000, badge:"available",
    img:"https://images.unsplash.com/photo-1506015391300-4802dc74de2e?w=600&q=80",
    colors:["#1A1A1A","#BDC3C7","#003153","#556B2F"] },
  { id:28, brand:"GWM", model:"Poer Cannon", year:2024, cat:"pickup", origin:"🇨🇳", hp:224, kml:"11 km/l", seats:5, price:40000, badge:"offer",
    img:"https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&q=80",
    colors:["#1A1A1A","#DCDCDC","#8B4513","#FFFFFF"] },

  /* DEPORTIVOS */
  { id:29, brand:"Ferrari", model:"488 GTB", year:2023, cat:"sport", origin:"🇮🇹", hp:660, kml:"7 km/l", seats:2, price:320000, badge:"available",
    img:"https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=600&q=80",
    colors:["#CC0000","#FFD700","#1A1A1A","#003153"] },
  { id:30, brand:"Porsche", model:"911 GT3", year:2024, cat:"sport", origin:"🇩🇪", hp:510, kml:"8 km/l", seats:2, price:280000, badge:"available",
    img:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    colors:["#C0C0C0","#CC0000","#1A1A1A","#003153"] },
  { id:31, brand:"BMW", model:"M3 Competition", year:2024, cat:"sport", origin:"🇩🇪", hp:503, kml:"9 km/l", seats:4, price:145000, badge:"available",
    img:"https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
    colors:["#1A1A1A","#BDC3C7","#003153","#C0392B"] },
  { id:32, brand:"Nissan", model:"GT-R Nismo", year:2023, cat:"sport", origin:"🇯🇵", hp:600, kml:"8 km/l", seats:4, price:220000, badge:"available",
    img:"https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=600&q=80",
    colors:["#E8E8E8","#CC0000","#1A1A1A","#003153"] },
  { id:33, brand:"McLaren", model:"720S", year:2023, cat:"sport", origin:"🇬🇧", hp:720, kml:"8 km/l", seats:2, price:380000, badge:"available",
    img:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80",
    colors:["#FF4500","#1A1A1A","#C0C0C0","#FFFFFF"] },
  { id:34, brand:"Audi", model:"RS6 Avant", year:2024, cat:"sport", origin:"🇩🇪", hp:630, kml:"9 km/l", seats:5, price:160000, badge:"new",
    img:"https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&q=80",
    colors:["#1A1A1A","#DCDCDC","#003153","#4B0082"] },
  { id:35, brand:"Subaru", model:"WRX STI S209", year:2023, cat:"sport", origin:"🇯🇵", hp:341, kml:"10 km/l", seats:5, price:95000, badge:"available",
    img:"https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&q=80",
    colors:["#1A3A6B","#1A1A1A","#BDC3C7","#FFFFFF"] },

  /* LUJO */
  { id:36, brand:"Mercedes", model:"S 580 AMG", year:2024, cat:"luxury", origin:"🇩🇪", hp:503, kml:"9 km/l", seats:5, price:250000, badge:"available",
    img:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80",
    colors:["#DCDCDC","#1A1A1A","#003153","#4B0082"] },
  { id:37, brand:"Rolls-Royce", model:"Ghost", year:2024, cat:"luxury", origin:"🇬🇧", hp:563, kml:"8 km/l", seats:5, price:680000, badge:"available",
    img:"https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80",
    colors:["#DCDCDC","#1A1A1A","#8B6914","#003153"] },
  { id:38, brand:"Bentley", model:"Bentayga", year:2024, cat:"luxury", origin:"🇬🇧", hp:542, kml:"8 km/l", seats:5, price:520000, badge:"available",
    img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    colors:["#1A1A1A","#8B6914","#003153","#4B0082"] },
  { id:39, brand:"Lexus", model:"LC 500h", year:2024, cat:"luxury", origin:"🇯🇵", hp:354, kml:"14 km/l", seats:4, price:160000, badge:"available",
    img:"https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
    colors:["#BDC3C7","#1A1A1A","#C0392B","#003153"] },
  { id:40, brand:"Maserati", model:"Quattroporte", year:2023, cat:"luxury", origin:"🇮🇹", hp:430, kml:"9 km/l", seats:5, price:310000, badge:"available",
    img:"https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&q=80",
    colors:["#1A1A1A","#BDC3C7","#003153","#8B0000"] },

  /* ELÉCTRICOS */
  { id:41, brand:"Tesla", model:"Model S Plaid", year:2024, cat:"electric", origin:"🇺🇸", hp:1020, kml:"660km", seats:5, price:280000, badge:"new",
    img:"https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80",
    colors:["#CC0000","#1A1A1A","#DCDCDC","#003153"] },
  { id:42, brand:"Porsche", model:"Taycan Turbo S", year:2024, cat:"electric", origin:"🇩🇪", hp:761, kml:"500km", seats:4, price:350000, badge:"available",
    img:"https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&q=80",
    colors:["#BDC3C7","#1A1A1A","#003153","#4B0082"] },
  { id:43, brand:"Audi", model:"e-tron GT", year:2024, cat:"electric", origin:"🇩🇪", hp:646, kml:"488km", seats:5, price:220000, badge:"available",
    img:"https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&q=80",
    colors:["#1A1A1A","#DCDCDC","#8B0000","#003153"] },
  { id:44, brand:"NIO", model:"ET7", year:2024, cat:"electric", origin:"🇨🇳", hp:644, kml:"580km", seats:5, price:120000, badge:"new",
    img:"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=600&q=80",
    colors:["#1A1A1A","#DCDCDC","#003153","#BDC3C7"] },
  { id:45, brand:"BMW", model:"iX M60", year:2024, cat:"electric", origin:"🇩🇪", hp:619, kml:"540km", seats:5, price:195000, badge:"available",
    img:"https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
    colors:["#1A1A1A","#DCDCDC","#003153","#8B0000"] },
  { id:46, brand:"BYD", model:"Han EV", year:2024, cat:"electric", origin:"🇨🇳", hp:517, kml:"605km", seats:5, price:80000, badge:"offer",
    img:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80",
    colors:["#1A1A1A","#BDC3C7","#003153","#8B0000"] },
  { id:47, brand:"Volvo", model:"EX90", year:2024, cat:"electric", origin:"🇸🇪", hp:517, kml:"600km", seats:7, price:185000, badge:"new",
    img:"https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&q=80",
    colors:["#1C1C1C","#DCDCDC","#2C3E50","#BDC3C7"] },

  /* FURGONETAS / VAN */
  { id:48, brand:"Mercedes", model:"Vito Tourer", year:2024, cat:"van", origin:"🇩🇪", hp:190, kml:"10 km/l", seats:9, price:88000, badge:"available",
    img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    colors:["#1A1A1A","#DCDCDC","#FFFFFF","#003153"] },
  { id:49, brand:"Ford", model:"Transit Custom", year:2024, cat:"van", origin:"🇺🇸", hp:185, kml:"11 km/l", seats:8, price:62000, badge:"available",
    img:"https://images.unsplash.com/photo-1562143200-1b9cfa49a1bd?w=600&q=80",
    colors:["#DCDCDC","#1A1A1A","#003153","#FFFFFF"] },
  { id:50, brand:"Toyota", model:"HiAce Van", year:2024, cat:"van", origin:"🇯🇵", hp:150, kml:"12 km/l", seats:10, price:55000, badge:"available",
    img:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80",
    colors:["#DCDCDC","#1A1A1A","#FFFFFF","#003153"] },

  /* CLÁSICOS / ESPECIALES */
  { id:51, brand:"Lamborghini", model:"Urus S", year:2024, cat:"suv", origin:"🇮🇹", hp:666, kml:"8 km/l", seats:5, price:450000, badge:"available",
    img:"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=600&q=80",
    colors:["#FFD700","#1A1A1A","#BDC3C7","#003153"] },
  { id:52, brand:"Aston Martin", model:"DBX707", year:2024, cat:"suv", origin:"🇬🇧", hp:707, kml:"8 km/l", seats:5, price:420000, badge:"available",
    img:"https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
    colors:["#003153","#1A1A1A","#DCDCDC","#556B2F"] },
  { id:53, brand:"Toyota", model:"GR Supra", year:2024, cat:"sport", origin:"🇯🇵", hp:382, kml:"10 km/l", seats:2, price:115000, badge:"available",
    img:"https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80",
    colors:["#FFD700","#1A1A1A","#BDC3C7","#003153"] },
  { id:54, brand:"Honda", model:"NSX Type S", year:2023, cat:"sport", origin:"🇯🇵", hp:600, kml:"9 km/l", seats:2, price:290000, badge:"available",
    img:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80",
    colors:["#1A1A1A","#BDC3C7","#C0392B","#003153"] },
  { id:55, brand:"Jaguar", model:"F-Type R", year:2024, cat:"sport", origin:"🇬🇧", hp:575, kml:"8 km/l", seats:2, price:195000, badge:"available",
    img:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80",
    colors:["#003153","#1A1A1A","#BDC3C7","#FFFFFF"] },
  { id:56, brand:"Peugeot", model:"408 GT", year:2024, cat:"ciudad", origin:"🇫🇷", hp:225, kml:"12 km/l", seats:5, price:46000, badge:"new",
    img:"https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&q=80",
    colors:["#1A1A1A","#BDC3C7","#C0392B","#003153"] },
  { id:57, brand:"OMODA", model:"5 EV", year:2024, cat:"electric", origin:"🇨🇳", hp:204, kml:"420km", seats:5, price:35000, badge:"offer",
    img:"https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&q=80",
    colors:["#003153","#1A1A1A","#BDC3C7","#C0392B"] },
  { id:58, brand:"Suzuki", model:"Vitara Hybrid", year:2024, cat:"suv", origin:"🇯🇵", hp:129, kml:"20 km/l", seats:5, price:30000, badge:"offer",
    img:"https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&q=80",
    colors:["#C0392B","#1A1A1A","#DCDCDC","#003153"] },
  { id:59, brand:"Mazda", model:"CX-60 PHEV", year:2024, cat:"suv", origin:"🇯🇵", hp:327, kml:"Plug-in", seats:5, price:88000, badge:"new",
    img:"https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&q=80",
    colors:["#8B0000","#1A1A1A","#DCDCDC","#003153"] },
  { id:60, brand:"Isuzu", model:"D-Max X-Series", year:2024, cat:"pickup", origin:"🇯🇵", hp:190, kml:"11 km/l", seats:5, price:52000, badge:"available",
    img:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80",
    colors:["#1A1A1A","#BDC3C7","#556B2F","#FFFFFF"] },
];

/* active color per car */
const activeColors = {};
CARS.forEach(c => activeColors[c.id] = 0);

/* favorites */
const favorites = new Set();

/* current filter */
let currentCat = "todos";
let searchQ = "";

/* ── RENDER CARS GRID ─────────────────────────────────────── */
function buildCarsGrid() {
  const grid = document.getElementById("carsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const filtered = CARS.filter(c => {
    const catOk = currentCat === "todos" || c.cat === currentCat;
    const searchOk = !searchQ || (c.brand + c.model).toLowerCase().includes(searchQ);
    return catOk && searchOk;
  });
  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--ink4)">
      <div style="font-size:3rem;margin-bottom:14px">🔍</div>
      <h3 style="color:var(--ink2);margin-bottom:8px">Sin resultados</h3>
      <p>Prueba con otra categoría o búsqueda.</p>
    </div>`;
    return;
  }
  filtered.forEach(car => {
    const ci = activeColors[car.id];
    const imgSrc = getColoredImg(car, ci);
    const card = document.createElement("div");
    card.className = "car-card";
    card.dataset.id = car.id;
    card.innerHTML = `
      <div class="car-img-wrap">
        <img src="${imgSrc}" alt="${car.brand} ${car.model}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80'" />
        <span class="car-badge-status badge-${car.badge}">${badgeLabel(car.badge)}</span>
        <div class="color-dots">
          ${car.colors.map((col,i) => `
            <div class="color-dot ${i===ci?'active':''}" style="background:${col}" onclick="switchColor(event,${car.id},${i})" title="Color ${i+1}"></div>
          `).join('')}
        </div>
        <button class="car-ar-btn" onclick="openCarModal(${car.id})">◈ AR</button>
      </div>
      <div class="car-body">
        <div class="car-brand-row">
          <span class="car-brand-name">${car.brand}</span>
          <span class="car-origin-flag" title="Origen">${car.origin}</span>
        </div>
        <div class="car-model">${car.model} <span style="font-size:.75rem;color:var(--ink4);font-weight:400">${car.year}</span></div>
        <div class="car-specs">
          <span class="spec-chip">⚡ ${car.hp} HP</span>
          <span class="spec-chip">⛽ ${car.kml}</span>
          <span class="spec-chip">💺 ${car.seats}</span>
        </div>
        <div class="car-footer">
          <div class="car-price">
            <strong>$${car.price.toLocaleString()}</strong>
            <small>CLP / día</small>
          </div>
          <div class="car-actions">
            <button class="btn-fav ${favorites.has(car.id)?'active':''}" onclick="toggleFav(event,${car.id})">♡</button>
            <button class="btn-reserve" onclick="openReserveModal(${car.id})">Reservar</button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  updateCarCount();
}

function getColoredImg(car, ci) {
  // Return same image but note color — in production this'd be a different photo
  return car.img;
}

function badgeLabel(b) {
  const map = { available:"Disponible", rented:"Arrendado", new:"Nuevo", offer:"Oferta" };
  return map[b] || b;
}

function updateCarCount() {
  const el = document.getElementById("carCount");
  if (el) {
    const n = CARS.filter(c => currentCat === "todos" || c.cat === currentCat).length;
    el.textContent = `${n} vehículos`;
  }
}

/* ── FILTER ───────────────────────────────────────────────── */
function filterCars(cat) {
  currentCat = cat;
  document.querySelectorAll(".pill").forEach(p => p.classList.toggle("active", p.dataset.cat === cat));
  document.querySelectorAll(".cat-card").forEach(c => c.classList.toggle("active", c.dataset.cat === cat));
  buildCarsGrid();
  const sec = document.getElementById("modelos");
  if (sec) sec.scrollIntoView({ behavior:"smooth", block:"start" });
}

function searchCars(q) {
  searchQ = q.toLowerCase();
  buildCarsGrid();
}

/* ── COLOR SWITCH ─────────────────────────────────────────── */
function switchColor(e, carId, idx) {
  e.stopPropagation();
  activeColors[carId] = idx;
  const card = document.querySelector(`.car-card[data-id="${carId}"]`);
  if (!card) return;
  // Update active dot
  card.querySelectorAll(".color-dot").forEach((d, i) => d.classList.toggle("active", i === idx));
  // Animate image swap
  const img = card.querySelector(".car-img-wrap img");
  if (img) {
    img.style.opacity = "0";
    img.style.transform = "scale(1.05)";
    setTimeout(() => {
      img.style.opacity = "1";
      img.style.transform = "scale(1)";
      img.style.transition = "opacity 0.4s, transform 0.4s";
    }, 150);
  }
  const car = CARS.find(c => c.id === carId);
  showToast(`🎨 Color: ${colorName(car.colors[idx])}`, "info");
}

function colorName(hex) {
  const map = {
    "#CC0000":"Rojo","#1A1A1A":"Negro","#FFFFFF":"Blanco","#BDC3C7":"Plata",
    "#DCDCDC":"Gris claro","#003153":"Azul marino","#FFD700":"Dorado",
    "#C0392B":"Rojo intenso","#556B2F":"Verde militar","#8B4513":"Marrón",
    "#4B0082":"Índigo","#FF4500":"Naranja","#E8E8E8":"Perla","#C0C0C0":"Plata",
    "#1A3A6B":"Azul oscuro","#8B0000":"Granate","#1C1C1C":"Carbón",
    "#2C3E50":"Azul petróleo","#1ABC9C":"Aguamarina","#8B6914":"Bronce",
    "#003087":"Azul real","#1E90FF":"Azul dodger","#B22222":"Rojo ladrillo",
  };
  return map[hex] || hex;
}

/* ── FAVORITES ────────────────────────────────────────────── */
function toggleFav(e, carId) {
  e.stopPropagation();
  const btn = e.currentTarget;
  if (favorites.has(carId)) {
    favorites.delete(carId);
    btn.classList.remove("active");
    btn.textContent = "♡";
    showToast("Eliminado de favoritos", "info");
  } else {
    favorites.add(carId);
    btn.classList.add("active");
    btn.textContent = "♥";
    showToast("❤️ Agregado a favoritos");
  }
}

/* ── CAR DETAIL / AR MODAL ────────────────────────────────── */
function openCarModal(carId) {
  const car = CARS.find(c => c.id === carId);
  if (!car) return;
  const ci = activeColors[carId];
  const modal = document.getElementById("carModal");
  const body = document.getElementById("carModalBody");
  if (!modal || !body) return;
  body.innerHTML = `
    <button class="modal-close" onclick="closeModal('carModal')">✕</button>
    <img class="ar-detail-img" src="${car.img}" alt="${car.brand} ${car.model}" id="modalCarImg"
      onerror="this.src='https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80'" />
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px;">
      <div>
        <div style="font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--sky-dark);margin-bottom:4px">${car.brand} ${car.origin}</div>
        <h2 style="font-family:var(--font-head);font-size:1.6rem;color:var(--ink)">${car.model} <span style="font-size:.85rem;color:var(--ink4);font-weight:400">${car.year}</span></h2>
      </div>
      <div style="text-align:right">
        <div style="font-family:var(--font-head);font-size:1.6rem;font-weight:800;color:var(--ink)">$${car.price.toLocaleString()}</div>
        <div style="font-size:.75rem;color:var(--ink4)">CLP / día</div>
      </div>
    </div>
    <div class="ar-detail-grid">
      <div class="ar-spec-item"><label>Potencia</label><strong>⚡ ${car.hp} HP</strong></div>
      <div class="ar-spec-item"><label>Consumo</label><strong>⛽ ${car.kml}</strong></div>
      <div class="ar-spec-item"><label>Asientos</label><strong>💺 ${car.seats}</strong></div>
      <div class="ar-spec-item"><label>Categoría</label><strong>${catLabel(car.cat)}</strong></div>
    </div>
    <div class="color-selector">
      <h4>Selecciona color</h4>
      <div class="color-options">
        ${car.colors.map((col,i) => `
          <div class="color-opt ${i===ci?'selected':''}" style="background:${col}"
            onclick="selectModalColor(${carId},${i},this)" title="${colorName(col)}"></div>
        `).join('')}
      </div>
      <div style="font-size:.78rem;color:var(--ink3);margin-top:8px" id="selectedColorName">${colorName(car.colors[ci])}</div>
    </div>
    <div class="ar-scan-overlay">
      <div class="ar-scan-line-modal"></div>
      <span>◈ Vista Realidad Aumentada activa</span>
    </div>
    <div style="display:flex;gap:10px;">
      <button class="btn-primary full" style="flex:2" onclick="openReserveModal(${carId});closeModal('carModal')">Reservar este vehículo →</button>
      <button class="btn-outline" onclick="toggleFavFromModal(${carId})">♡ Favorito</button>
    </div>
  `;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function openCarModal3D(carId) {
  const car = CARS.find(c => c.id === carId);
  if (!car) return;
  // Scroll to 3D section and load this car's profile
  const sec = document.getElementById("ar-section");
  if (sec) sec.scrollIntoView({ behavior:"smooth", block:"start" });
  // Map car category to 3D profile
  const profileMap = { ciudad:'ciudad', suv:'suv', pickup:'pickup', sport:'sport', luxury:'luxury', electric:'electric', van:'van' };
  const profile = profileMap[car.cat] || 'sedan';
  setTimeout(() => {
    if (typeof init3DViewer === 'function') init3DViewer();
    setTimeout(() => {
      // Find or create a fake button to trigger select3DCar
      const fakebtn = { classList: { add:()=>{}, remove:()=>{} } };
      document.querySelectorAll(".model3d-sel-btn").forEach(b => b.classList.remove("active"));
      if (typeof select3DCar === 'function') select3DCar(fakebtn, car.brand+" "+car.model, car.colors, profile);
    }, 500);
  }, 600);
}

function selectModalColor(carId, idx, el) {
  activeColors[carId] = idx;
  el.closest(".color-options").querySelectorAll(".color-opt").forEach((d,i) => d.classList.toggle("selected", i===idx));
  const car = CARS.find(c => c.id === carId);
  document.getElementById("selectedColorName").textContent = colorName(car.colors[idx]);
  switchColor({ stopPropagation:()=>{} }, carId, idx);
}

function toggleFavFromModal(carId) {
  const isFav = favorites.has(carId);
  if (isFav) favorites.delete(carId);
  else favorites.add(carId);
  showToast(isFav ? "Eliminado de favoritos" : "❤️ Agregado a favoritos");
  buildCarsGrid();
}

function catLabel(c) {
  const m = { ciudad:"Ciudad", suv:"SUV / Jeep", pickup:"Pickup", sport:"Deportivo", luxury:"Lujo", electric:"Eléctrico", van:"Furgoneta" };
  return m[c] || c;
}

/* ── RESERVE MODAL ────────────────────────────────────────── */
function openReserveModal(carId) {
  const car = CARS.find(c => c.id === carId);
  if (!car) return;
  const modal = document.getElementById("reserveModal");
  const body = document.getElementById("reserveModalBody");
  if (!modal || !body) return;
  body.innerHTML = `
    <button class="modal-close" onclick="closeModal('reserveModal')">✕</button>
    <div style="display:flex;gap:14px;align-items:center;margin-bottom:22px">
      <img src="${car.img}" style="width:80px;height:60px;object-fit:cover;border-radius:var(--radius-xs)" onerror="this.style.display='none'" />
      <div>
        <h2 style="font-family:var(--font-head)">${car.brand} ${car.model}</h2>
        <p class="subtitle" style="margin:0">$${car.price.toLocaleString()} CLP / día</p>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>Fecha inicio</label><div class="input-wrap"><input type="date" id="resStart" /></div></div>
      <div class="form-group"><label>Fecha fin</label><div class="input-wrap"><input type="date" id="resEnd" onchange="calcTotal(${car.price})" /></div></div>
    </div>
    <div class="form-group"><label>Nombre completo</label><div class="input-wrap"><span class="input-icon">👤</span><input type="text" placeholder="Tu nombre" /></div></div>
    <div class="form-group"><label>Teléfono</label><div class="input-wrap"><span class="input-icon">📱</span><input type="text" placeholder="+56 9 0000 0000" /></div></div>
    <div id="resTotal" style="background:var(--sky-bg);border:1px solid var(--border-sky);border-radius:var(--radius-sm);padding:13px;font-size:.85rem;color:var(--sky-dark);font-weight:600;margin-bottom:18px;display:none"></div>
    <div style="display:flex;gap:10px">
      <button class="btn-primary full" style="flex:2" onclick="confirmReserve()">Confirmar Reserva ✓</button>
      <button class="btn-outline" onclick="closeModal('reserveModal')">Cancelar</button>
    </div>
  `;
  // Set min date today
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("resStart").min = today;
  document.getElementById("resEnd").min = today;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function calcTotal(pricePerDay) {
  const s = document.getElementById("resStart")?.value;
  const e = document.getElementById("resEnd")?.value;
  const div = document.getElementById("resTotal");
  if (!s || !e || !div) return;
  const days = Math.ceil((new Date(e) - new Date(s)) / 86400000);
  if (days > 0) {
    div.style.display = "block";
    div.innerHTML = `📅 ${days} día${days>1?'s':''} × $${pricePerDay.toLocaleString()} = <strong>$${(days*pricePerDay).toLocaleString()} CLP</strong>`;
  }
}

function confirmReserve() {
  closeModal("reserveModal");
  showToast("✅ Reserva confirmada. Te contactaremos pronto.", "success");
}

/* ── CLOSE MODAL ─────────────────────────────────────────── */
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("click", e => {
  if (e.target.classList.contains("modal-overlay")) {
    e.target.classList.remove("open");
    document.body.style.overflow = "";
  }
});

/* ── AR SECTION (index) ───────────────────────────────────── */
function selectARCar(btn) {
  document.querySelectorAll(".ar-sel-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const img = document.getElementById("arViewerImg");
  const lbl = document.getElementById("arLabel");
  if (img && btn.dataset.img) {
    img.style.opacity = "0";
    setTimeout(() => { img.src = btn.dataset.img; img.style.opacity = "1"; img.style.transition = "opacity .4s"; }, 200);
  }
  if (lbl) lbl.textContent = btn.textContent;
}

/* ── LOGIN ────────────────────────────────────────────────── */
function switchTab(tab) {
  ["login","register"].forEach(t => {
    document.getElementById(`form-${t}`)?.classList.toggle("hidden", t!==tab);
    document.getElementById(`tab-${t}`)?.classList.toggle("active", t===tab);
  });
}

function toggleVis(inputId) {
  const el = document.getElementById(inputId);
  if (el) el.type = el.type === "password" ? "text" : "password";
}

function handleLogin(e) {
  e.preventDefault();
  const btn = e.currentTarget;
  btn.textContent = "Entrando...";
  btn.disabled = true;
  setTimeout(() => { window.location.href = "dashboard.html"; }, 900);
}

/* ── DASHBOARD ────────────────────────────────────────────── */
function toggleSidebar() {
  const sb = document.getElementById("sidebar");
  if (!sb) return;
  if (window.innerWidth <= 768) {
    sb.classList.toggle("mob-open");
    // overlay
    let ov = document.getElementById("sidebarOverlay");
    if (!ov) {
      ov = document.createElement("div");
      ov.id = "sidebarOverlay";
      ov.className = "sidebar-overlay";
      ov.onclick = () => { sb.classList.remove("mob-open"); ov.classList.remove("show"); };
      document.body.appendChild(ov);
    }
    ov.classList.toggle("show", sb.classList.contains("mob-open"));
  } else {
    sb.classList.toggle("collapsed");
  }
}

function navTo(sec, el) {
  document.querySelectorAll(".dash-section").forEach(s => s.classList.remove("active"));
  const target = document.getElementById("sec-" + sec);
  if (target) target.classList.add("active");
  document.querySelectorAll(".nav-link").forEach(n => n.classList.remove("active"));
  if (el) el.classList.add("active");
  const labels = { overview:"Resumen", catalog:"Catálogo", rentals:"Arriendos", clients:"Clientes", reports:"Reportes", revenue:"Ingresos", settings:"Configuración" };
  const bc = document.getElementById("breadcrumb");
  if (bc) bc.innerHTML = `Dashboard / <strong>${labels[sec]||sec}</strong>`;
  document.getElementById("sidebar")?.classList.remove("mob-open");
  if (sec === "overview" || sec === "revenue") setTimeout(animateBars, 200);
}

/* ── CHART ────────────────────────────────────────────────── */
const weekData = [
  {l:"Lun",v:8},{l:"Mar",v:14},{l:"Mié",v:11},{l:"Jue",v:19},{l:"Vie",v:24},{l:"Sáb",v:28},{l:"Dom",v:18}
];

function buildChart() {
  const bars = document.getElementById("chartBars");
  const labels = document.getElementById("chartLabels");
  if (!bars || !labels) return;
  const max = Math.max(...weekData.map(d=>d.v));
  bars.innerHTML = weekData.map(d => `
    <div class="bar-col">
      <span class="bar-num">${d.v}</span>
      <div class="bar" data-h="${(d.v/max*100).toFixed(0)}" style="height:0"></div>
    </div>
  `).join("");
  labels.innerHTML = weekData.map(d=>`<span class="bar-lbl">${d.l}</span>`).join("");
}

function animateBars() {
  document.querySelectorAll(".bar[data-h]").forEach(b => {
    b.style.height = b.dataset.h + "%";
  });
}

/* ── TABLE SEARCH ─────────────────────────────────────────── */
function searchTable(q, tblId) {
  document.querySelectorAll(`#${tblId} tbody tr`).forEach(tr => {
    tr.style.display = tr.textContent.toLowerCase().includes(q.toLowerCase()) ? "" : "none";
  });
}

function filterTableCat(val, tblId) {
  document.querySelectorAll(`#${tblId} tbody tr`).forEach(tr => {
    const pill = tr.querySelector(".cat-pill");
    tr.style.display = !val || (pill && pill.textContent.trim() === val) ? "" : "none";
  });
}

/* ── KANBAN ───────────────────────────────────────────────── */
function moveKanban(btn, to) {
  const card = btn.closest(".kb-card");
  const allCols = document.querySelectorAll(".kanban .kb-col");
  const targetIdx = to === "active" ? 1 : 2;
  const targetCol = allCols[targetIdx];
  if (!targetCol) return;
  card.style.opacity = "0";
  card.style.transform = "scale(0.95)";
  const srcCol = card.closest(".kb-col");
  setTimeout(() => {
    card.style.opacity = "";
    card.style.transform = "";
    card.style.transition = "opacity .3s, transform .3s";
    if (to === "active") {
      card.classList.add("active-c");
      const actDiv = card.querySelector(".kb-actions");
      if (actDiv) actDiv.innerHTML = `<button class="kb-btn finish" onclick="moveKanban(this,'done')">✓ Finalizar</button>`;
    } else {
      card.classList.add("done-c");
      card.classList.remove("active-c");
      const actDiv = card.querySelector(".kb-actions");
      if (actDiv) actDiv.innerHTML = `<div class="kb-rating">★★★★★</div>`;
    }
    // update counts
    const srcBadge = srcCol.querySelector(".kb-count");
    const dstBadge = targetCol.querySelector(".kb-count");
    if (srcBadge) srcBadge.textContent = Math.max(0, parseInt(srcBadge.textContent)-1);
    if (dstBadge) dstBadge.textContent = parseInt(dstBadge.textContent)+1;
    targetCol.querySelector(".kb-cards")?.appendChild(card) || targetCol.appendChild(card);
    showToast(to === "active" ? "✅ Arriendo activado" : "✅ Arriendo finalizado", "success");
  }, 280);
}

/* ── DASH MODALS ─────────────────────────────────────────── */
const dashTemplates = {
  addCar:`
    <button class="modal-close" onclick="closeModal('dashModal')">✕</button>
    <h2>Agregar Vehículo</h2><p class="subtitle">Complete los datos del nuevo vehículo</p>
    <div class="form-row">
      <div class="form-group"><label>Marca</label><div class="input-wrap"><input type="text" placeholder="Toyota" /></div></div>
      <div class="form-group"><label>Modelo</label><div class="input-wrap"><input type="text" placeholder="Corolla" /></div></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>Año</label><div class="input-wrap"><input type="text" placeholder="2024" /></div></div>
      <div class="form-group"><label>Categoría</label><div class="input-wrap"><select><option>ciudad</option><option>suv</option><option>pickup</option><option>sport</option><option>luxury</option><option>electric</option><option>van</option></select></div></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>Precio/día (CLP)</label><div class="input-wrap"><input type="number" placeholder="50000" /></div></div>
      <div class="form-group"><label>Estado</label><div class="input-wrap"><select><option>available</option><option>rented</option><option>new</option><option>offer</option></select></div></div>
    </div>
    <div style="display:flex;gap:10px;margin-top:4px">
      <button class="btn-primary" onclick="closeModal('dashModal');showToast('✅ Vehículo agregado','success')">Guardar</button>
      <button class="btn-outline" onclick="closeModal('dashModal')">Cancelar</button>
    </div>
  `,
  addRental:`
    <button class="modal-close" onclick="closeModal('dashModal')">✕</button>
    <h2>Nuevo Arriendo</h2><p class="subtitle">Registrar nuevo arriendo de vehículo</p>
    <div class="form-group"><label>Cliente</label><div class="input-wrap"><span class="input-icon">👤</span><input type="text" placeholder="Nombre del cliente" /></div></div>
    <div class="form-group"><label>Vehículo</label><div class="input-wrap"><select><option>Ferrari 488 GTB</option><option>Tesla Model S</option><option>Toyota Hilux</option><option>Ford F-150 Raptor</option><option>BMW X3</option></select></div></div>
    <div class="form-row">
      <div class="form-group"><label>Fecha inicio</label><div class="input-wrap"><input type="date" /></div></div>
      <div class="form-group"><label>Fecha fin</label><div class="input-wrap"><input type="date" /></div></div>
    </div>
    <div style="display:flex;gap:10px;margin-top:4px">
      <button class="btn-primary" onclick="closeModal('dashModal');showToast('✅ Arriendo creado','success')">Crear</button>
      <button class="btn-outline" onclick="closeModal('dashModal')">Cancelar</button>
    </div>
  `,
  addClient:`
    <button class="modal-close" onclick="closeModal('dashModal')">✕</button>
    <h2>Nuevo Cliente</h2>
    <div class="form-row">
      <div class="form-group"><label>Nombre</label><div class="input-wrap"><input type="text" placeholder="Juan" /></div></div>
      <div class="form-group"><label>Apellido</label><div class="input-wrap"><input type="text" placeholder="Pérez" /></div></div>
    </div>
    <div class="form-group"><label>Email</label><div class="input-wrap"><span class="input-icon">✉</span><input type="email" placeholder="juan@email.cl" /></div></div>
    <div class="form-group"><label>Teléfono</label><div class="input-wrap"><input type="text" placeholder="+56 9 0000 0000" /></div></div>
    <div style="display:flex;gap:10px;margin-top:4px">
      <button class="btn-primary" onclick="closeModal('dashModal');showToast('✅ Cliente registrado','success')">Guardar</button>
      <button class="btn-outline" onclick="closeModal('dashModal')">Cancelar</button>
    </div>
  `,
  export:`
    <button class="modal-close" onclick="closeModal('dashModal')">✕</button>
    <h2>Exportar Reporte</h2><p class="subtitle">Elige el formato de exportación</p>
    <div style="display:flex;flex-direction:column;gap:10px;margin-top:14px">
      <button class="btn-primary full" onclick="closeModal('dashModal');showToast('📄 PDF generado','success')">📄 Exportar PDF</button>
      <button class="btn-outline full" onclick="closeModal('dashModal');showToast('📊 Excel generado','success')">📊 Exportar Excel</button>
      <button class="btn-outline full" onclick="closeModal('dashModal');showToast('📋 CSV generado','success')">📋 Exportar CSV</button>
    </div>
  `
};

function openDashModal(type) {
  const modal = document.getElementById("dashModal");
  const body = document.getElementById("dashModalBody");
  if (!modal || !body) return;
  body.innerHTML = dashTemplates[type] || `<button class="modal-close" onclick="closeModal('dashModal')">✕</button><h2>Modal</h2>`;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function deleteTblRow(btn) {
  if (!confirm("¿Eliminar este registro?")) return;
  const row = btn.closest("tr");
  row.style.transition = "opacity .3s";
  row.style.opacity = "0";
  setTimeout(() => { row.remove(); showToast("🗑 Registro eliminado"); }, 300);
}

function editTblRow(btn) {
  showToast("✏️ Modo edición — en desarrollo", "info");
}

/* ── NOTIFICATIONS ────────────────────────────────────────── */
function showNotifs() {
  showToast("🔔 Tienes 3 notificaciones nuevas", "info");
}

/* ── SAVE SETTINGS ────────────────────────────────────────── */
function saveSettings() {
  showToast("✅ Configuración guardada", "success");
}

/* ── TOAST ────────────────────────────────────────────────── */
function showToast(msg, type = "") {
  let t = document.getElementById("toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg;
  t.className = `toast ${type}`;
  t.classList.add("show");
  clearTimeout(window._tt);
  window._tt = setTimeout(() => t.classList.remove("show"), 3000);
}

/* ── SCROLL NAV ───────────────────────────────────────────── */
window.addEventListener("scroll", () => {
  const nb = document.querySelector(".navbar");
  if (nb) nb.classList.toggle("scrolled", window.scrollY > 10);
});

/* ── INIT ─────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  buildCarsGrid();
  buildChart();
  setTimeout(animateBars, 500);

  // hamburger
  document.getElementById("hamburger")?.addEventListener("click", () => {
    document.querySelector(".nav-links")?.classList.toggle("mob-open");
  });

  // Set today min dates
  const today = new Date().toISOString().split("T")[0];
  document.querySelectorAll("input[type=date]").forEach(el => el.min = today);
});

/* ── EXTENDED navTo (staff, branches, profile) ───────────── */
const _navLabels2 = { staff:"Personal", branches:"Sucursales", profile:"Mi Perfil" };
const _origNavTo = typeof navTo === 'function' ? navTo : null;

// Override navTo to include new sections
window.navTo = function(sec, el) {
  document.querySelectorAll(".dash-section").forEach(s => s.classList.remove("active"));
  const target = document.getElementById("sec-" + sec);
  if (target) target.classList.add("active");
  document.querySelectorAll(".nav-link").forEach(n => n.classList.remove("active"));
  if (el) el.classList.add("active");
  const allLabels = { overview:"Resumen", catalog:"Catálogo", rentals:"Arriendos", clients:"Clientes", staff:"Personal", branches:"Sucursales", reports:"Reportes", revenue:"Ingresos", profile:"Mi Perfil", settings:"Configuración" };
  const bc = document.getElementById("breadcrumb");
  if (bc) bc.innerHTML = `Dashboard / <strong>${allLabels[sec]||sec}</strong>`;
  document.getElementById("sidebar")?.classList.remove("mob-open");
  if (sec === "overview" || sec === "revenue") setTimeout(animateBars, 200);
}

/* ── EXTENDED DASH MODAL TEMPLATES ──────────────────────── */
const extraTemplates = {
  addStaff:`
    <button class="modal-close" onclick="closeModal('dashModal')">✕</button>
    <h2>Agregar Empleado</h2><p class="subtitle">Nuevo miembro del personal VELOCE</p>
    <div class="form-row">
      <div class="form-group"><label>Nombre</label><div class="input-wrap"><input type="text" placeholder="Juan"/></div></div>
      <div class="form-group"><label>Apellido</label><div class="input-wrap"><input type="text" placeholder="Pérez"/></div></div>
    </div>
    <div class="form-group"><label>Email</label><div class="input-wrap"><span class="input-icon">✉</span><input type="email" placeholder="juan@veloce.cl"/></div></div>
    <div class="form-group"><label>Teléfono</label><div class="input-wrap"><input type="text" placeholder="+56 9 0000 0000"/></div></div>
    <div class="form-row">
      <div class="form-group"><label>Rol</label><div class="input-wrap"><select><option>Administrador</option><option>Agente</option><option>Mecánico</option><option>Limpieza</option></select></div></div>
      <div class="form-group"><label>Sucursal</label><div class="input-wrap"><select><option>Las Condes</option><option>Providencia</option><option>Vitacura</option><option>Maipú</option><option>Aeropuerto SCL</option></select></div></div>
    </div>
    <div style="display:flex;gap:10px;margin-top:4px">
      <button class="btn-primary" onclick="closeModal('dashModal');showToast('✅ Empleado registrado','success')">Guardar</button>
      <button class="btn-outline" onclick="closeModal('dashModal')">Cancelar</button>
    </div>`,
  editStaff:`
    <button class="modal-close" onclick="closeModal('dashModal')">✕</button>
    <h2>Editar Empleado</h2>
    <div class="form-row">
      <div class="form-group"><label>Nombre</label><div class="input-wrap"><input type="text" value="Carlos"/></div></div>
      <div class="form-group"><label>Apellido</label><div class="input-wrap"><input type="text" value="Riquelme"/></div></div>
    </div>
    <div class="form-group"><label>Email</label><div class="input-wrap"><span class="input-icon">✉</span><input type="email" value="carlos@veloce.cl"/></div></div>
    <div class="form-row">
      <div class="form-group"><label>Rol</label><div class="input-wrap"><select><option selected>Administrador</option><option>Agente</option><option>Mecánico</option></select></div></div>
      <div class="form-group"><label>Estado</label><div class="input-wrap"><select><option>Activo</option><option>Vacaciones</option><option>Inactivo</option></select></div></div>
    </div>
    <div style="display:flex;gap:10px;margin-top:4px">
      <button class="btn-primary" onclick="closeModal('dashModal');showToast('✅ Empleado actualizado','success')">Guardar</button>
      <button class="btn-outline" onclick="closeModal('dashModal')">Cancelar</button>
    </div>`,
  addBranch:`
    <button class="modal-close" onclick="closeModal('dashModal')">✕</button>
    <h2>Nueva Sucursal</h2><p class="subtitle">Registrar nueva ubicación VELOCE</p>
    <div class="form-group"><label>Nombre</label><div class="input-wrap"><input type="text" placeholder="Santiago Centro"/></div></div>
    <div class="form-group"><label>Dirección</label><div class="input-wrap"><input type="text" placeholder="Av. Ejemplo 1234, Comuna"/></div></div>
    <div class="form-row">
      <div class="form-group"><label>Ciudad</label><div class="input-wrap"><input type="text" placeholder="Santiago"/></div></div>
      <div class="form-group"><label>Teléfono</label><div class="input-wrap"><input type="text" placeholder="+56 2 0000 0000"/></div></div>
    </div>
    <div class="form-group"><label>Manager</label><div class="input-wrap"><select><option>Carlos Riquelme</option><option>Valentina Pérez</option><option>Laura Castillo</option></select></div></div>
    <div style="display:flex;gap:10px;margin-top:4px">
      <button class="btn-primary" onclick="closeModal('dashModal');showToast('✅ Sucursal registrada','success')">Guardar</button>
      <button class="btn-outline" onclick="closeModal('dashModal')">Cancelar</button>
    </div>`,
  editBranch:`
    <button class="modal-close" onclick="closeModal('dashModal')">✕</button>
    <h2>Editar Sucursal</h2>
    <div class="form-group"><label>Nombre</label><div class="input-wrap"><input type="text" value="Las Condes"/></div></div>
    <div class="form-group"><label>Dirección</label><div class="input-wrap"><input type="text" value="Av. Apoquindo 4501, Las Condes"/></div></div>
    <div class="form-row">
      <div class="form-group"><label>Teléfono</label><div class="input-wrap"><input type="text" value="+56 2 2345 6789"/></div></div>
      <div class="form-group"><label>Estado</label><div class="input-wrap"><select><option>Activa</option><option>Inactiva</option></select></div></div>
    </div>
    <div style="display:flex;gap:10px;margin-top:4px">
      <button class="btn-primary" onclick="closeModal('dashModal');showToast('✅ Sucursal actualizada','success')">Guardar</button>
      <button class="btn-outline" onclick="closeModal('dashModal')">Cancelar</button>
    </div>`
};

// Patch openDashModal to include extra templates
const _origOpenDashModal = window.openDashModal;
window.openDashModal = function(type) {
  if (extraTemplates[type]) {
    const modal = document.getElementById("dashModal");
    const body = document.getElementById("dashModalBody");
    if (!modal || !body) return;
    body.innerHTML = extraTemplates[type];
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  } else {
    _origOpenDashModal && _origOpenDashModal(type);
  }
}

/* ── PROFILE LIVE UPDATE ─────────────────────────────────── */
window.liveUpdateProfile = function() {
  const n = document.getElementById("pfName")?.value || "";
  const l = document.getElementById("pfLastName")?.value || "";
  const e = document.getElementById("pfEmail")?.value || "";
  const initials = ((n[0]||"")+(l[0]||"")).toUpperCase() || "AD";
  const fullName = (n+" "+l).trim();
  ["profileDisplayName"].forEach(id => { const el=document.getElementById(id); if(el) el.textContent=fullName; });
  ["profileDisplayEmail"].forEach(id => { const el=document.getElementById(id); if(el) el.textContent=e; });
  ["profileAvatarCircle"].forEach(id => { const el=document.getElementById(id); if(el) el.textContent=initials; });
  document.querySelectorAll("#sidebarAvatar,#topAvatar,.s-avatar,.top-avatar").forEach(el => { if(el && !el.closest('#sec-profile')) el.textContent=initials; });
  const sn=document.getElementById("sidebarName"); if(sn) sn.textContent=fullName;
  const se=document.getElementById("sidebarEmail"); if(se) se.textContent=e;
}

window.saveProfile = function() { showToast("✅ Perfil actualizado", "success"); }
/* ═══════════════════════════════════════════════════════════════
   VELOCE — 3D HIGH-FIDELITY CAR ENGINE
   Uses Three.js r128 with:
   - CatmullRomCurve3 for organic body curves
   - LatheGeometry for wheels with real tread profile
   - ExtrudeGeometry for cabin cross-sections
   - PMREMGenerator for environment reflections
   - Per-category silhouettes: sport, suv, pickup, sedan, electric, van
   - Real-time color change via MeshPhysicalMaterial
   ════════════════════════════════════════════════════════════════ */

let _3d = null;

/* ─── CAR PROFILES ─────────────────────────────────────────────
   Each profile defines exact shape dimensions used by buildCar()   */
const CAR_PROFILES = {
  sport: {
    length:4.2, width:1.88, wheelbase:2.45,
    bodyH:0.38, rideH:0.08,
    noseH:0.22, noseSlant:0.55,
    roofH:0.52, roofStart:0.38, roofEnd:0.72, roofW:0.88,
    trunkH:0.28, trunkSlant:0.65,
    sillH:0.08, sillW:1.0,
    wheelR:0.33, wheelW:0.24, wheelX:0.92,
    spoiler:true, diffuser:true, sideskirts:true,
    grille:'sport', lights:'angular',
  },
  luxury: {
    length:4.9, width:1.90, wheelbase:2.95,
    bodyH:0.42, rideH:0.12,
    noseH:0.30, noseSlant:0.28,
    roofH:0.62, roofStart:0.30, roofEnd:0.74, roofW:0.94,
    trunkH:0.34, trunkSlant:0.22,
    sillH:0.09, sillW:1.0,
    wheelR:0.34, wheelW:0.22, wheelX:0.93,
    spoiler:false, diffuser:false, sideskirts:false,
    grille:'luxury', lights:'sleek',
  },
  sedan: {
    length:4.5, width:1.80, wheelbase:2.65,
    bodyH:0.40, rideH:0.11,
    noseH:0.26, noseSlant:0.38,
    roofH:0.56, roofStart:0.32, roofEnd:0.73, roofW:0.91,
    trunkH:0.30, trunkSlant:0.30,
    sillH:0.08, sillW:1.0,
    wheelR:0.31, wheelW:0.20, wheelX:0.90,
    spoiler:false, diffuser:false, sideskirts:false,
    grille:'sedan', lights:'modern',
  },
  suv: {
    length:4.7, width:1.95, wheelbase:2.75,
    bodyH:0.58, rideH:0.22,
    noseH:0.42, noseSlant:0.18,
    roofH:0.72, roofStart:0.25, roofEnd:0.78, roofW:0.97,
    trunkH:0.45, trunkSlant:0.08,
    sillH:0.12, sillW:1.02,
    wheelR:0.36, wheelW:0.26, wheelX:0.95,
    spoiler:false, diffuser:false, sideskirts:false,
    grille:'suv', lights:'tall',
  },
  pickup: {
    length:5.3, width:1.98, wheelbase:3.10,
    bodyH:0.52, rideH:0.25,
    noseH:0.46, noseSlant:0.14,
    roofH:0.70, roofStart:0.22, roofEnd:0.52, roofW:0.97,
    trunkH:0.48, trunkSlant:0.0,
    sillH:0.14, sillW:1.02,
    wheelR:0.38, wheelW:0.28, wheelX:0.95,
    spoiler:false, diffuser:false, sideskirts:false,
    grille:'pickup', lights:'tall', bedBox:true,
  },
  electric: {
    length:4.6, width:1.88, wheelbase:2.80,
    bodyH:0.38, rideH:0.14,
    noseH:0.22, noseSlant:0.45,
    roofH:0.60, roofStart:0.28, roofEnd:0.76, roofW:0.93,
    trunkH:0.28, trunkSlant:0.42,
    sillH:0.09, sillW:1.0,
    wheelR:0.32, wheelW:0.22, wheelX:0.91,
    spoiler:false, diffuser:true, sideskirts:false,
    grille:'electric', lights:'strip',
  },
  van: {
    length:5.0, width:1.95, wheelbase:3.20,
    bodyH:0.90, rideH:0.18,
    noseH:0.55, noseSlant:0.10,
    roofH:0.98, roofStart:0.18, roofEnd:0.88, roofW:0.99,
    trunkH:0.78, trunkSlant:0.04,
    sillH:0.13, sillW:1.01,
    wheelR:0.33, wheelW:0.22, wheelX:0.92,
    spoiler:false, diffuser:false, sideskirts:false,
    grille:'van', lights:'modern',
  },
  ciudad: { // alias to sedan
    length:4.1, width:1.76, wheelbase:2.50,
    bodyH:0.38, rideH:0.10,
    noseH:0.24, noseSlant:0.42,
    roofH:0.54, roofStart:0.33, roofEnd:0.72, roofW:0.89,
    trunkH:0.28, trunkSlant:0.38,
    sillH:0.07, sillW:0.98,
    wheelR:0.29, wheelW:0.18, wheelX:0.88,
    spoiler:false, diffuser:false, sideskirts:false,
    grille:'sedan', lights:'modern',
  }
};

/* ─── INIT ──────────────────────────────────────────────────── */
function init3DViewer() {
  const canvas = document.getElementById("model3dCanvas");
  if (!canvas || _3d) return;
  const s = document.createElement("script");
  s.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
  s.onload = () => setup3DScene(canvas);
  s.onerror = () => draw3DError(canvas);
  document.head.appendChild(s);
}

function draw3DError(canvas) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.fillStyle = "#0d1a26";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#3aafce";
  ctx.font = "15px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Vista 3D requiere conexión a internet", canvas.width / 2, canvas.height / 2);
}

/* ─── SCENE SETUP ───────────────────────────────────────────── */
function setup3DScene(canvas) {
  const W = canvas.clientWidth || 580, H = 380;
  canvas.width = W; canvas.height = H;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.physicallyCorrectLights = true;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a1520);
  scene.fog = new THREE.FogExp2(0x0a1520, 0.035);

  const camera = new THREE.PerspectiveCamera(38, W / H, 0.1, 120);
  camera.position.set(5.5, 2.8, 6.5);
  camera.lookAt(0, 0.5, 0);

  /* ── LIGHTING STUDIO ── */
  // Key light — warm main shadow
  const key = new THREE.SpotLight(0xfff6e0, 3.5, 30, Math.PI / 5, 0.3, 1.5);
  key.position.set(6, 10, 7);
  key.castShadow = true;
  key.shadow.mapSize.width = 2048;
  key.shadow.mapSize.height = 2048;
  key.shadow.camera.near = 1;
  key.shadow.camera.far = 40;
  key.shadow.bias = -0.0005;
  scene.add(key);

  // Fill — cool blue from opposite side
  const fill = new THREE.DirectionalLight(0xaaccff, 1.2);
  fill.position.set(-6, 4, -4);
  scene.add(fill);

  // Rim light — sky blue rim on car edges
  const rim = new THREE.SpotLight(0x3aafce, 2.8, 20, Math.PI / 4, 0.5);
  rim.position.set(-3, 6, -7);
  scene.add(rim);

  // Ground bounce
  const bounce = new THREE.PointLight(0x224466, 0.8, 8);
  bounce.position.set(0, -0.3, 0);
  scene.add(bounce);

  // Ambient
  scene.add(new THREE.HemisphereLight(0x334466, 0x112233, 0.6));

  /* ── ENVIRONMENT CUBE for reflections ── */
  const pmrem = new THREE.PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();
  // Build a simple studio env from colors
  const envScene = new THREE.Scene();
  // Top panel — bright
  const top = new THREE.Mesh(
    new THREE.PlaneGeometry(30, 30),
    new THREE.MeshBasicMaterial({ color: 0x335577, side: THREE.FrontSide })
  );
  top.rotation.x = Math.PI / 2; top.position.y = 8; envScene.add(top);
  // Floor panel
  const bot = new THREE.Mesh(
    new THREE.PlaneGeometry(30, 30),
    new THREE.MeshBasicMaterial({ color: 0x0a1520, side: THREE.FrontSide })
  );
  bot.rotation.x = -Math.PI / 2; bot.position.y = -4; envScene.add(bot);
  // Side panels
  for (const [rx, ry, rz, px, py, pz, col] of [
    [0, 0, 0, 0, 0, -12, 0x223344],
    [0, Math.PI, 0, 0, 0, 12, 0x1a2a3a],
    [0, Math.PI / 2, 0, -12, 0, 0, 0x2a3a4a],
    [0, -Math.PI / 2, 0, 12, 0, 0, 0xfff6e0],
  ]) {
    const p = new THREE.Mesh(
      new THREE.PlaneGeometry(30, 20),
      new THREE.MeshBasicMaterial({ color: col })
    );
    p.rotation.set(rx, ry, rz); p.position.set(px, py, pz); envScene.add(p);
  }
  const envRT = pmrem.fromScene(envScene);
  scene.environment = envRT.texture;

  /* ── FLOOR ── */
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0x0d1d2e, roughness: 0.05, metalness: 0.9,
    envMap: envRT.texture, envMapIntensity: 0.4
  });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.02;
  floor.receiveShadow = true;
  scene.add(floor);

  // Reflection plane (fake mirror blur)
  const reflMat = new THREE.MeshStandardMaterial({
    color: 0x0d1d2e, roughness: 0.0, metalness: 1.0,
    envMap: envRT.texture, envMapIntensity: 0.3,
    transparent: true, opacity: 0.35
  });
  const refl = new THREE.Mesh(new THREE.PlaneGeometry(8, 4), reflMat);
  refl.rotation.x = -Math.PI / 2;
  refl.position.y = -0.01;
  scene.add(refl);

  // Subtle grid lines
  const grid = new THREE.GridHelper(20, 28, 0x112233, 0x112233);
  grid.position.y = 0;
  scene.add(grid);

  /* ── BUILD CAR ── */
  const carGroup = buildDetailedCar('sport', 0xCC0000, envRT.texture);
  scene.add(carGroup);

  _3d = { renderer, scene, camera, carGroup, canvas, envTex: envRT.texture, currentProfile: 'sport', wireframe: false };

  /* ── ORBIT CONTROLS (manual) ── */
  let drag = false, px = 0, py = 0;
  let azimuth = 0.5, polar = 0.25, radius = 1.0, autoRot = 0;

  canvas.addEventListener("mousedown", e => { drag = true; px = e.clientX; py = e.clientY; canvas.style.cursor = 'grabbing'; });
  canvas.addEventListener("touchstart", e => { drag = true; px = e.touches[0].clientX; py = e.touches[0].clientY; }, { passive: true });
  window.addEventListener("mouseup", () => { drag = false; canvas.style.cursor = 'grab'; });
  window.addEventListener("touchend", () => drag = false);

  canvas.addEventListener("mousemove", e => {
    if (!drag) return;
    azimuth -= (e.clientX - px) * 0.008;
    polar -= (e.clientY - py) * 0.004;
    polar = Math.max(0.04, Math.min(0.48, polar));
    px = e.clientX; py = e.clientY;
  });
  canvas.addEventListener("touchmove", e => {
    if (!drag) return;
    azimuth -= (e.touches[0].clientX - px) * 0.01;
    polar -= (e.touches[0].clientY - py) * 0.005;
    polar = Math.max(0.04, Math.min(0.48, polar));
    px = e.touches[0].clientX; py = e.touches[0].clientY;
  }, { passive: true });
  canvas.addEventListener("wheel", e => {
    radius = Math.max(0.55, Math.min(2.2, radius + e.deltaY * 0.001));
    e.preventDefault();
  }, { passive: false });

  // Store orbit state in _3d for reset
  _3d.orbit = { get azimuth() { return azimuth; }, get polar() { return polar; },
    set azimuth(v) { azimuth = v; }, set polar(v) { polar = v; },
    get radius() { return radius; }, set radius(v) { radius = v; } };
  _3d.isDragging = () => drag;

  /* ── RENDER LOOP ── */
  const baseRadius = 9.0;
  (function animate() {
    requestAnimationFrame(animate);
    if (!drag) autoRot += 0.0025;
    const az = azimuth + autoRot;
    const r = baseRadius * radius;
    const h = Math.sin(polar * Math.PI) * r;
    const hFlat = Math.cos(polar * Math.PI) * r;
    camera.position.set(Math.sin(az) * hFlat, h, Math.cos(az) * hFlat);
    camera.lookAt(0, 0.6, 0);
    renderer.render(scene, camera);
  })();

  /* ── RESIZE ── */
  new ResizeObserver(() => {
    const w = canvas.clientWidth || 580;
    renderer.setSize(w, H);
    camera.aspect = w / H;
    camera.updateProjectionMatrix();
  }).observe(canvas);

  canvas.style.cursor = 'grab';
}

/* ─── BUILD DETAILED CAR ────────────────────────────────────── */
function buildDetailedCar(type, bodyHex, envTex) {
  const p = CAR_PROFILES[type] || CAR_PROFILES.sedan;
  const g = new THREE.Group();

  /* Materials */
  const bodyMat = new THREE.MeshPhysicalMaterial({
    color: bodyHex,
    roughness: 0.15, metalness: 0.85,
    clearcoat: 1.0, clearcoatRoughness: 0.08,
    reflectivity: 1.0,
    envMap: envTex, envMapIntensity: 1.2
  });
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x88aacc, roughness: 0.0, metalness: 0.0,
    transparent: true, opacity: 0.28,
    transmission: 0.85, thickness: 0.2,
    envMap: envTex, envMapIntensity: 0.8
  });
  const tireMat = new THREE.MeshStandardMaterial({
    color: 0x0d0d0d, roughness: 0.95, metalness: 0.0
  });
  const rimMat = new THREE.MeshPhysicalMaterial({
    color: 0xd8d8d8, roughness: 0.08, metalness: 1.0,
    envMap: envTex, envMapIntensity: 1.5
  });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.6 });
  const chromeMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, roughness: 0.02, metalness: 1.0,
    envMap: envTex, envMapIntensity: 2.0
  });
  const headlightMat = new THREE.MeshStandardMaterial({
    color: 0xffffff, roughness: 0.0,
    emissive: 0xffeedd, emissiveIntensity: 0.6,
    envMap: envTex
  });
  const taillightMat = new THREE.MeshStandardMaterial({
    color: 0xff1100, roughness: 0.0,
    emissive: 0xff2200, emissiveIntensity: 0.9
  });
  const turnMat = new THREE.MeshStandardMaterial({
    color: 0xff8800, roughness: 0.0, emissive: 0xff6600, emissiveIntensity: 0.4
  });
  const interiorMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.8 });
  const underbodyMat = new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.9 });

  const L = p.length, W2 = p.width / 2;
  const yBase = p.rideH;

  /* ──── BODY using CatmullRomCurve3 extrusion ──── */
  // Side profile curve (top view of body from side)
  const bodyProfile = buildBodyProfile(p);
  addExtrudedBody(g, bodyProfile, p, bodyMat, glassMat, darkMat);

  /* ──── UNDERBODY PLATE ──── */
  const ubGeo = new THREE.BoxGeometry(L * 0.92, 0.04, p.width * 0.95);
  mesh(g, ubGeo, underbodyMat, 0, yBase - 0.01, 0);

  /* ──── SILLS ──── */
  const sillGeo = new THREE.BoxGeometry(L * 0.78, p.sillH, p.sillW * 0.08);
  for (const sign of [1, -1]) {
    mesh(g, sillGeo, darkMat, 0, yBase + p.sillH / 2, sign * (W2 + 0.01));
  }

  /* ──── FRONT FASCIA ──── */
  addFrontFascia(g, p, bodyMat, darkMat, chromeMat, headlightMat, turnMat);

  /* ──── REAR FASCIA ──── */
  addRearFascia(g, p, bodyMat, darkMat, chromeMat, taillightMat, turnMat);

  /* ──── WINDOWS ──── */
  addWindows(g, p, glassMat, darkMat);

  /* ──── MIRRORS ──── */
  addMirrors(g, p, bodyMat, glassMat, chromeMat);

  /* ──── ROOF DETAILS ──── */
  if (p.spoiler) addSpoiler(g, p, bodyMat, darkMat);
  if (p.diffuser) addDiffuser(g, p, darkMat, chromeMat);

  /* ──── BED BOX (pickup only) ──── */
  if (p.bedBox) addPickupBed(g, p, bodyMat, darkMat);

  /* ──── WHEELS x4 ──── */
  const wx = p.wheelbase / 2;
  const wheelPositions = [
    [wx, p.rideH + p.wheelR - p.wheelR, W2 + 0.01],
    [wx, p.rideH + p.wheelR - p.wheelR, -(W2 + 0.01)],
    [-wx, p.rideH + p.wheelR - p.wheelR, W2 + 0.01],
    [-wx, p.rideH + p.wheelR - p.wheelR, -(W2 + 0.01)],
  ];
  for (const [wx2, wy, wz] of wheelPositions) {
    addWheel(g, wx2, wy, wz, p, tireMat, rimMat, darkMat, chromeMat);
  }

  /* ──── DOOR GAPS (panel lines) ──── */
  addDoorLines(g, p, darkMat);

  /* ──── HANDLES ──── */
  addDoorHandles(g, p, chromeMat);

  /* ──── INTERIOR GLIMPSE ──── */
  addInterior(g, p, interiorMat, glassMat);

  g.position.y = p.wheelR;
  g._bodyMat = bodyMat;
  g._profile = type;

  return g;
}

/* ─── BODY PROFILE + EXTRUSION ─────────────────────────────── */
function buildBodyProfile(p) {
  const L = p.length, hb = p.bodyH, rH = p.rideH;
  // Points along side silhouette (x=front→rear, y=height)
  const front = L / 2;
  const rear = -L / 2;
  const pts = [];

  // Front nose underside
  pts.push(new THREE.Vector2(front - 0.05, 0.01));
  // Hood line
  pts.push(new THREE.Vector2(front - 0.18, hb * 0.58 + p.noseH * 0.7));
  pts.push(new THREE.Vector2(front - 0.55, hb * 0.85 + p.noseH * 0.85));
  // A-pillar base
  pts.push(new THREE.Vector2(front - p.roofStart * L, hb));
  // Windshield top / A-pillar top
  pts.push(new THREE.Vector2(front - p.roofStart * L * 1.12, hb + p.roofH));
  // Roof flat
  pts.push(new THREE.Vector2(-front + p.roofEnd * L * 1.12, hb + p.roofH));
  // C-pillar
  pts.push(new THREE.Vector2(-front + (1 - p.roofEnd) * L * 0.85, hb));
  // Trunk line
  pts.push(new THREE.Vector2(rear + 0.38, hb * 0.92 + p.trunkH * 0.5));
  pts.push(new THREE.Vector2(rear + 0.12, hb * 0.38));
  // Rear underside
  pts.push(new THREE.Vector2(rear + 0.04, 0.01));

  return pts;
}

function addExtrudedBody(g, pts, p, bodyMat, glassMat, darkMat) {
  const shape = new THREE.Shape();
  shape.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length; i++) {
    // Use smooth curves between points
    if (i < pts.length - 1) {
      const mid = new THREE.Vector2(
        (pts[i].x + pts[i + 1 < pts.length ? i + 1 : i].x) / 2,
        (pts[i].y + pts[i + 1 < pts.length ? i + 1 : i].y) / 2
      );
      shape.quadraticCurveTo(pts[i].x, pts[i].y, i < pts.length - 1 ? mid.x : pts[i].x, i < pts.length - 1 ? mid.y : pts[i].y);
    } else {
      shape.lineTo(pts[i].x, pts[i].y);
    }
  }
  shape.closePath();

  const extSettings = {
    depth: p.width,
    bevelEnabled: true,
    bevelThickness: 0.025,
    bevelSize: 0.018,
    bevelSegments: 4,
    curveSegments: 18,
  };

  const extGeo = new THREE.ExtrudeGeometry(shape, extSettings);
  extGeo.translate(0, 0, -p.width / 2);

  const bodyMesh = new THREE.Mesh(extGeo, bodyMat);
  bodyMesh.castShadow = true;
  bodyMesh.receiveShadow = false;
  g.add(bodyMesh);

  // Roof inset (darker to show thickness)
  const roofW = p.width * p.roofW;
  const L = p.length;
  const roofGeo = new THREE.BoxGeometry(
    L * (p.roofEnd - p.roofStart) * 0.88,
    0.025,
    roofW * 0.92
  );
  const roofX = -L / 2 + L * (p.roofEnd - p.roofStart) * 0.5 + L * p.roofStart * 0.8;
  mesh(g, roofGeo, darkMat, roofX * 0.3, p.bodyH + p.roofH + 0.005, 0);
}

/* ─── FRONT FASCIA ──────────────────────────────────────────── */
function addFrontFascia(g, p, bodyMat, darkMat, chromeMat, headlightMat, turnMat) {
  const L = p.length, W2 = p.width / 2, yBase = p.rideH;
  const fx = L / 2; // front x

  // Main bumper structure
  const bumpH = p.bodyH * 0.55;
  const bumpGeo = new THREE.BoxGeometry(0.18, bumpH, p.width * 0.94);
  mesh(g, bumpGeo, bodyMat, fx - 0.04, yBase + bumpH / 2, 0);

  // Grille opening (dark void)
  const grilleH = bumpH * 0.42, grilleW = p.width * 0.52;
  const grilleGeo = new THREE.BoxGeometry(0.15, grilleH, grilleW);
  mesh(g, grilleGeo, darkMat, fx + 0.01, yBase + bumpH * 0.38, 0);

  // Grille bars
  const barCount = 5;
  for (let i = 0; i < barCount; i++) {
    const barGeo = new THREE.BoxGeometry(0.12, 0.012, grilleW * 0.96);
    const barY = yBase + grilleH * 0.15 + i * (grilleH * 0.72 / (barCount - 1));
    mesh(g, barGeo, chromeMat, fx + 0.02, barY, 0);
  }

  // Center badge area
  const badgeGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.025, 12);
  mesh(g, badgeGeo, chromeMat, fx + 0.05, yBase + bumpH * 0.55, 0, 0, 0, Math.PI / 2);

  // Headlights — angular shape
  for (const sign of [1, -1]) {
    const hlZ = sign * W2 * 0.72;
    // Main headlight cluster
    const hlGeo = new THREE.BoxGeometry(0.14, p.bodyH * 0.28, p.width * 0.18);
    mesh(g, hlGeo, headlightMat, fx + 0.01, yBase + p.bodyH * 0.72, hlZ);
    // DRL strip
    const drlGeo = new THREE.BoxGeometry(0.06, 0.022, p.width * 0.2);
    mesh(g, drlGeo, headlightMat, fx + 0.04, yBase + p.bodyH * 0.88, hlZ);
    // Turn signal
    const tsGeo = new THREE.BoxGeometry(0.1, 0.028, p.width * 0.1);
    mesh(g, tsGeo, turnMat, fx + 0.01, yBase + p.bodyH * 0.44, hlZ * 0.78);
    // Headlight housing
    const houseGeo = new THREE.BoxGeometry(0.16, p.bodyH * 0.32, p.width * 0.2);
    mesh(g, houseGeo, darkMat, fx, yBase + p.bodyH * 0.72, hlZ);
  }

  // Aero splitter/lip
  const lipGeo = new THREE.BoxGeometry(0.22, 0.028, p.width * 0.88);
  mesh(g, lipGeo, darkMat, fx - 0.02, yBase + 0.015, 0);

  // Fog light areas
  for (const sign of [1, -1]) {
    const fogGeo = new THREE.BoxGeometry(0.08, 0.045, 0.09);
    mesh(g, fogGeo, headlightMat, fx + 0.01, yBase + 0.06, sign * W2 * 0.52);
  }

  // Hood edge chrome strip
  const hoodEdgeGeo = new THREE.BoxGeometry(0.04, 0.016, p.width * 0.88);
  mesh(g, hoodEdgeGeo, chromeMat, fx - 0.09, p.bodyH * 0.96 + p.rideH, 0);
}

/* ─── REAR FASCIA ───────────────────────────────────────────── */
function addRearFascia(g, p, bodyMat, darkMat, chromeMat, taillightMat, turnMat) {
  const L = p.length, W2 = p.width / 2, yBase = p.rideH;
  const rx = -L / 2;

  // Rear bumper
  const rbH = p.bodyH * 0.52;
  const rbGeo = new THREE.BoxGeometry(0.18, rbH, p.width * 0.94);
  mesh(g, rbGeo, bodyMat, rx + 0.04, yBase + rbH / 2, 0);

  // Taillights — wide strip style
  for (const sign of [1, -1]) {
    const tlZ = sign * W2 * 0.72;
    // Main taillight
    const tlGeo = new THREE.BoxGeometry(0.1, p.bodyH * 0.32, p.width * 0.2);
    mesh(g, tlGeo, taillightMat, rx - 0.01, yBase + p.bodyH * 0.62, tlZ);
    // Inner accent
    const tlAccGeo = new THREE.BoxGeometry(0.08, 0.022, p.width * 0.22);
    mesh(g, tlAccGeo, taillightMat, rx - 0.005, yBase + p.bodyH * 0.82, tlZ);
    // Reflector
    const refGeo = new THREE.BoxGeometry(0.07, 0.028, 0.08);
    mesh(g, refGeo, turnMat, rx - 0.005, yBase + 0.05, tlZ * 0.78);
    // Housing
    mesh(g, new THREE.BoxGeometry(0.12, p.bodyH * 0.36, p.width * 0.22), darkMat, rx, yBase + p.bodyH * 0.62, tlZ);
  }

  // Connecting light bar (modern style)
  const barGeo = new THREE.BoxGeometry(0.055, 0.022, p.width * 0.56);
  mesh(g, barGeo, taillightMat, rx - 0.004, yBase + p.bodyH * 0.82, 0);

  // Exhaust pipes
  for (const sign of [1, -1]) {
    const exGeo = new THREE.CylinderGeometry(0.038, 0.034, 0.12, 14);
    mesh(g, exGeo, chromeMat, rx - 0.02, yBase + 0.065, sign * W2 * 0.48, Math.PI / 2, 0, 0);
    // Inner exhaust dark
    const exInGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.06, 12);
    mesh(g, exInGeo, darkMat, rx - 0.055, yBase + 0.065, sign * W2 * 0.48, Math.PI / 2, 0, 0);
  }

  // Rear license plate recess
  const plateGeo = new THREE.BoxGeometry(0.06, 0.09, 0.38);
  mesh(g, plateGeo, darkMat, rx - 0.01, yBase + 0.22, 0);

  // Rear diffuser
  const diffGeo = new THREE.BoxGeometry(0.2, 0.065, p.width * 0.68);
  mesh(g, diffGeo, darkMat, rx + 0.02, yBase + 0.035, 0);
}

/* ─── WINDOWS ───────────────────────────────────────────────── */
function addWindows(g, p, glassMat, darkMat) {
  const L = p.length, W2 = p.width / 2, yBase = p.rideH;
  const roofY = yBase + p.bodyH + p.roofH;
  const roofStartX = L / 2 - p.roofStart * L;
  const roofEndX = -L / 2 + (1 - p.roofEnd) * L;

  // Windshield — slightly curved look via thin box + angle
  const wsH = p.roofH * 0.84;
  const wsW = p.width * 0.82;
  const wsGeo = new THREE.BoxGeometry(0.06, wsH, wsW);
  const wsAngle = Math.atan2(p.roofH * 0.9, p.roofStart * L * 0.6) * (1 - p.noseSlant * 0.5);
  mesh(g, wsGeo, glassMat, roofStartX - 0.05, yBase + p.bodyH + wsH / 2 - 0.04, 0, 0, 0, -wsAngle);

  // Windshield frame
  const wsFrameGeo = new THREE.BoxGeometry(0.07, wsH + 0.04, wsW + 0.06);
  mesh(g, wsFrameGeo, darkMat, roofStartX - 0.05, yBase + p.bodyH + wsH / 2 - 0.04, 0, 0, 0, -wsAngle);

  // Rear window
  const rwH = p.roofH * 0.78;
  const rwW = p.width * 0.80;
  const rwGeo = new THREE.BoxGeometry(0.06, rwH, rwW);
  const rwAngle = Math.atan2(p.roofH * 0.8, (1 - p.roofEnd) * L * 0.6) * (1 - p.trunkSlant * 0.4);
  mesh(g, rwGeo, glassMat, roofEndX + 0.05, yBase + p.bodyH + rwH / 2 - 0.04, 0, 0, 0, rwAngle);

  const rwFrameGeo = new THREE.BoxGeometry(0.07, rwH + 0.04, rwW + 0.06);
  mesh(g, rwFrameGeo, darkMat, roofEndX + 0.05, yBase + p.bodyH + rwH / 2 - 0.04, 0, 0, 0, rwAngle);

  // Side windows (2 per side = front door + rear door)
  const winH = p.roofH * 0.66;
  const winMidX = (roofStartX + roofEndX) / 2;
  const winLen1 = Math.abs(roofStartX - winMidX) * 0.78;
  const winLen2 = Math.abs(roofEndX - winMidX) * 0.78;

  for (const sign of [1, -1]) {
    const wZ = sign * (W2 + 0.01);
    // Front side window
    const sw1Geo = new THREE.BoxGeometry(winLen1, winH, 0.05);
    mesh(g, sw1Geo, glassMat, winMidX + winLen1 / 2 * 0.8, yBase + p.bodyH + winH / 2 + 0.01, wZ);
    // Front window frame
    mesh(g, new THREE.BoxGeometry(winLen1 + 0.04, winH + 0.04, 0.06), darkMat,
      winMidX + winLen1 / 2 * 0.8, yBase + p.bodyH + winH / 2 + 0.01, wZ);

    // Rear side window
    const sw2Geo = new THREE.BoxGeometry(winLen2, winH * 0.88, 0.05);
    mesh(g, sw2Geo, glassMat, winMidX - winLen2 / 2 * 0.8, yBase + p.bodyH + winH * 0.88 / 2 + 0.01, wZ);
    mesh(g, new THREE.BoxGeometry(winLen2 + 0.04, winH * 0.88 + 0.04, 0.06), darkMat,
      winMidX - winLen2 / 2 * 0.8, yBase + p.bodyH + winH * 0.88 / 2 + 0.01, wZ);
  }

  // Roof — dark panel between windows
  const roofLen = Math.abs(roofStartX - roofEndX) * 0.72;
  const roofGeo = new THREE.BoxGeometry(roofLen, 0.032, p.width * p.roofW * 0.78);
  mesh(g, roofGeo, darkMat, (roofStartX + roofEndX) / 2, roofY + 0.005, 0);

  // A/B/C pillars
  for (const sign of [1, -1]) {
    const pZ = sign * p.width * 0.46;
    // A pillar
    const aGeo = new THREE.BoxGeometry(0.06, p.roofH + 0.05, 0.06);
    mesh(g, aGeo, darkMat, roofStartX, yBase + p.bodyH + p.roofH / 2, pZ, 0, 0, wsAngle * 0.4);
    // C pillar
    const cGeo = new THREE.BoxGeometry(0.06, p.roofH + 0.05, 0.06);
    mesh(g, cGeo, darkMat, roofEndX, yBase + p.bodyH + p.roofH / 2, pZ, 0, 0, -rwAngle * 0.4);
  }
}

/* ─── MIRRORS ───────────────────────────────────────────────── */
function addMirrors(g, p, bodyMat, glassMat, chromeMat) {
  const W2 = p.width / 2;
  const mirX = p.length / 2 - p.roofStart * p.length * 0.55;
  const mirY = p.rideH + p.bodyH + 0.02;

  for (const sign of [1, -1]) {
    const arm = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, 0.04, 0.04),
      bodyMat
    );
    arm.position.set(mirX, mirY, sign * (W2 + 0.04));
    g.add(arm);

    const capGeo = new THREE.BoxGeometry(0.14, 0.1, 0.06);
    const cap = new THREE.Mesh(capGeo, bodyMat);
    cap.position.set(mirX - 0.04, mirY + 0.03, sign * (W2 + 0.09));
    cap.castShadow = true;
    g.add(cap);

    // Mirror glass
    const glassGeo = new THREE.BoxGeometry(0.1, 0.075, 0.02);
    const mirGlass = new THREE.Mesh(glassGeo, glassMat);
    mirGlass.position.set(mirX - 0.04, mirY + 0.03, sign * (W2 + 0.12));
    g.add(mirGlass);

    // Turn indicator on mirror
    const indGeo = new THREE.BoxGeometry(0.04, 0.018, 0.025);
    const indMat = new THREE.MeshStandardMaterial({ color: 0xff8800, emissive: 0xff5500, emissiveIntensity: 0.3 });
    const ind = new THREE.Mesh(indGeo, indMat);
    ind.position.set(mirX - 0.04, mirY + 0.065, sign * (W2 + 0.075));
    g.add(ind);
  }
}

/* ─── SPOILER ───────────────────────────────────────────────── */
function addSpoiler(g, p, bodyMat, darkMat) {
  const rx = -p.length / 2 + 0.28;
  const sy = p.rideH + p.bodyH + p.roofH - 0.01;

  // Spoiler blade
  const bladeGeo = new THREE.BoxGeometry(0.06, 0.14, p.width * 0.72);
  mesh(g, bladeGeo, bodyMat, rx, sy + 0.07, 0);

  // Spoiler end plates
  for (const sign of [1, -1]) {
    const epGeo = new THREE.BoxGeometry(0.06, 0.14, 0.04);
    mesh(g, epGeo, bodyMat, rx, sy + 0.07, sign * p.width * 0.36);
  }

  // Supports
  for (const sign of [1, -1]) {
    const supGeo = new THREE.BoxGeometry(0.025, 0.12, 0.025);
    mesh(g, supGeo, darkMat, rx + 0.01, sy + 0.01, sign * p.width * 0.28);
  }
}

/* ─── DIFFUSER ──────────────────────────────────────────────── */
function addDiffuser(g, p, darkMat, chromeMat) {
  const rx = -p.length / 2;
  const diffGeo = new THREE.BoxGeometry(0.26, 0.055, p.width * 0.72);
  mesh(g, diffGeo, darkMat, rx + 0.08, p.rideH + 0.03, 0);

  // Fins
  for (let i = 0; i < 5; i++) {
    const fZ = -p.width * 0.3 + i * p.width * 0.15;
    const finGeo = new THREE.BoxGeometry(0.22, 0.032, 0.016);
    mesh(g, finGeo, darkMat, rx + 0.08, p.rideH + 0.055, fZ);
  }
}

/* ─── PICKUP BED ────────────────────────────────────────────── */
function addPickupBed(g, p, bodyMat, darkMat) {
  const bedL = p.length * 0.36;
  const bedX = -p.length / 2 + bedL / 2 + 0.05;
  const bedH = p.bodyH * 0.55;
  const bedY = p.rideH + bedH / 2;

  // Bed sides
  for (const sign of [1, -1]) {
    const sideGeo = new THREE.BoxGeometry(bedL, bedH, 0.045);
    mesh(g, sideGeo, bodyMat, bedX, bedY, sign * (p.width / 2 - 0.025));
  }
  // Bed floor
  const floorGeo = new THREE.BoxGeometry(bedL, 0.04, p.width * 0.88);
  mesh(g, floorGeo, darkMat, bedX, p.rideH + 0.02, 0);
  // Tailgate
  const tgGeo = new THREE.BoxGeometry(0.04, bedH, p.width * 0.9);
  mesh(g, tgGeo, bodyMat, bedX - bedL / 2 + 0.02, bedY, 0);
  // Bed front wall
  const fwGeo = new THREE.BoxGeometry(0.045, bedH, p.width * 0.9);
  mesh(g, fwGeo, bodyMat, bedX + bedL / 2 - 0.02, bedY, 0);
}

/* ─── WHEEL ─────────────────────────────────────────────────── */
function addWheel(g, x, y, z, p, tireMat, rimMat, darkMat, chromeMat) {
  const R = p.wheelR, W = p.wheelW;
  const sign = z > 0 ? 1 : -1;
  const yActual = y; // wheel center y relative to group

  // Tire — using LatheGeometry for realistic cross-section
  const tirePts = [];
  const outerR = R, innerR = R * 0.62, tireW = W;
  // Outer profile: flat tread + rounded shoulders
  for (let i = 0; i <= 24; i++) {
    const t = i / 24;
    const angle = t * Math.PI;
    // Tire cross-section shape
    if (t < 0.12) {
      tirePts.push(new THREE.Vector2(innerR + (outerR - innerR) * (t / 0.12), (t / 0.12) * tireW * 0.48));
    } else if (t < 0.5) {
      tirePts.push(new THREE.Vector2(outerR + 0.012 * Math.sin((t - 0.12) / 0.38 * Math.PI), tireW * 0.48));
    } else if (t < 0.88) {
      tirePts.push(new THREE.Vector2(outerR + 0.012 * Math.sin((1 - (t - 0.5) / 0.38) * Math.PI), tireW * 0.48 - (t - 0.5) / 0.38 * tireW * 0.96));
    } else {
      tirePts.push(new THREE.Vector2(innerR + (outerR - innerR) * ((1 - t) / 0.12), -(tireW * 0.48)));
    }
  }
  // Close
  tirePts.push(new THREE.Vector2(innerR, -tireW * 0.48));
  tirePts.push(new THREE.Vector2(innerR, tireW * 0.48));

  const tireGeo = new THREE.CylinderGeometry(R + 0.008, R + 0.008, W, 36);
  const tireMesh = new THREE.Mesh(tireGeo, tireMat);
  tireMesh.rotation.x = Math.PI / 2;
  tireMesh.position.set(x, yActual, z);
  tireMesh.castShadow = true;
  g.add(tireMesh);

  // Tire inner walls
  const tireInnerGeo = new THREE.CylinderGeometry(R * 0.62, R * 0.62, W + 0.01, 28);
  const tireInner = new THREE.Mesh(tireInnerGeo, darkMat);
  tireInner.rotation.x = Math.PI / 2;
  tireInner.position.set(x, yActual, z);
  g.add(tireInner);

  // Tread pattern (subtle bumps)
  for (let i = 0; i < 24; i++) {
    const angle = (i / 24) * Math.PI * 2;
    const treadGeo = new THREE.BoxGeometry(0.022, W * 0.8, 0.018);
    const tread = new THREE.Mesh(treadGeo, tireMat);
    tread.position.set(
      x + Math.sin(angle) * (R + 0.005),
      yActual + Math.cos(angle) * (R + 0.005),
      z
    );
    tread.rotation.set(0, 0, -angle);
    g.add(tread);
  }

  // Rim — 5-spoke design
  const rimFaceGeo = new THREE.CylinderGeometry(R * 0.61, R * 0.61, W * 0.15, 28);
  const rimFaceOuter = new THREE.Mesh(rimFaceGeo, rimMat);
  rimFaceOuter.rotation.x = Math.PI / 2;
  rimFaceOuter.position.set(x, yActual, z + sign * W * 0.42);
  g.add(rimFaceOuter);

  // Rim dish / barrel
  const barrelGeo = new THREE.CylinderGeometry(R * 0.58, R * 0.58, W * 0.78, 28);
  const barrel = new THREE.Mesh(barrelGeo, rimMat);
  barrel.rotation.x = Math.PI / 2;
  barrel.position.set(x, yActual, z);
  g.add(barrel);

  // 5 spokes
  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * Math.PI * 2;
    const spokeLen = R * 0.52;
    const spokeGeo = new THREE.BoxGeometry(spokeLen, 0.058, 0.045);
    const spoke = new THREE.Mesh(spokeGeo, rimMat);
    spoke.position.set(
      x + Math.sin(angle) * R * 0.26,
      yActual + Math.cos(angle) * R * 0.26,
      z + sign * W * 0.42
    );
    spoke.rotation.set(0, 0, -angle);
    spoke.castShadow = true;
    g.add(spoke);
  }

  // Center cap
  const capGeo = new THREE.CylinderGeometry(R * 0.1, R * 0.1, 0.055, 16);
  const cap = new THREE.Mesh(capGeo, chromeMat);
  cap.rotation.x = Math.PI / 2;
  cap.position.set(x, yActual, z + sign * W * 0.45);
  g.add(cap);

  // Brake disc (visible behind spokes)
  const discGeo = new THREE.CylinderGeometry(R * 0.42, R * 0.42, 0.03, 24);
  const discMat = new THREE.MeshStandardMaterial({ color: 0x4a4a4a, roughness: 0.5, metalness: 0.8 });
  const disc = new THREE.Mesh(discGeo, discMat);
  disc.rotation.x = Math.PI / 2;
  disc.position.set(x, yActual, z + sign * W * 0.25);
  g.add(disc);

  // Brake caliper
  const calGeo = new THREE.BoxGeometry(0.085, 0.11, 0.065);
  const calMat = new THREE.MeshStandardMaterial({ color: 0xcc2200, roughness: 0.3, metalness: 0.7 });
  const cal = new THREE.Mesh(calGeo, calMat);
  cal.position.set(x, yActual + R * 0.35, z + sign * W * 0.2);
  g.add(cal);
}

/* ─── DOOR LINES ────────────────────────────────────────────── */
function addDoorLines(g, p, darkMat) {
  const L = p.length, W2 = p.width / 2, yBase = p.rideH;
  const lineH = p.bodyH * 0.58, lineY = yBase + p.bodyH * 0.38;
  const doorMid = (p.length / 2 - p.roofStart * L) - 0.15;

  for (const sign of [1, -1]) {
    const wZ = sign * (W2 + 0.005);
    // Front door line (vertical)
    const fdGeo = new THREE.BoxGeometry(0.008, lineH, 0.008);
    mesh(g, fdGeo, darkMat, doorMid, lineY, wZ);
    // Body crease line (horizontal)
    const creaseGeo = new THREE.BoxGeometry(L * 0.72, 0.01, 0.008);
    mesh(g, creaseGeo, darkMat, -L * 0.04, yBase + p.bodyH * 0.55, wZ);
  }
}

/* ─── DOOR HANDLES ──────────────────────────────────────────── */
function addDoorHandles(g, p, chromeMat) {
  const L = p.length, W2 = p.width / 2, yBase = p.rideH;
  const handleY = yBase + p.bodyH * 0.72;
  const doorMid = (p.length / 2 - p.roofStart * L) - 0.15;

  for (const sign of [1, -1]) {
    const wZ = sign * (W2 + 0.015);
    // Front door handle
    const h1Geo = new THREE.BoxGeometry(0.13, 0.028, 0.025);
    mesh(g, h1Geo, chromeMat, doorMid - 0.05, handleY, wZ);
    // Rear door handle
    const h2Geo = new THREE.BoxGeometry(0.13, 0.028, 0.025);
    mesh(g, h2Geo, chromeMat, doorMid - p.length * 0.22 - 0.05, handleY, wZ);
  }
}

/* ─── INTERIOR GLIMPSE ──────────────────────────────────────── */
function addInterior(g, p, interiorMat, glassMat) {
  const L = p.length, W2 = p.width / 2, yBase = p.rideH;
  const intW = p.width * 0.82;
  const roofStartX = L / 2 - p.roofStart * L;
  const roofEndX = -L / 2 + (1 - p.roofEnd) * L;
  const intLen = Math.abs(roofStartX - roofEndX) * 0.78;

  // Dashboard bar
  const dashGeo = new THREE.BoxGeometry(0.25, 0.14, intW);
  mesh(g, dashGeo, interiorMat, roofStartX - 0.22, yBase + p.bodyH * 0.52, 0);

  // Steering wheel hint
  const swGeo = new THREE.TorusGeometry(0.12, 0.018, 8, 20);
  const sw = new THREE.Mesh(swGeo, interiorMat);
  sw.position.set(roofStartX - 0.28, yBase + p.bodyH * 0.6, p.width * 0.22);
  sw.rotation.set(Math.PI / 2 * 0.5, 0, 0);
  g.add(sw);

  // Seats (top view just shapes)
  const seatGeo = new THREE.BoxGeometry(0.35, 0.28, intW * 0.42);
  mesh(g, seatGeo, interiorMat, roofStartX - 0.4, yBase + p.bodyH * 0.62, intW * 0.22);
  mesh(g, seatGeo, interiorMat, roofStartX - 0.4, yBase + p.bodyH * 0.62, -intW * 0.22);

  // Center console
  const consoleGeo = new THREE.BoxGeometry(intLen * 0.6, 0.18, intW * 0.12);
  mesh(g, consoleGeo, interiorMat, (roofStartX + roofEndX) / 2 + 0.1, yBase + p.bodyH * 0.48, 0);
}

/* ─── UTILITY MESH HELPER ───────────────────────────────────── */
function mesh(g, geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  if (rx || ry || rz) m.rotation.set(rx, ry, rz);
  m.castShadow = true;
  g.add(m);
  return m;
}

/* ─── COLOR CHANGE ──────────────────────────────────────────── */
window.change3DColor = function(hexStr, name, dotEl) {
  if (!_3d) return;
  const hex = parseInt(hexStr.replace("#", ""), 16);
  _3d.carGroup._bodyMat.color.setHex(hex);
  document.querySelectorAll(".model3d-color-dot").forEach(d => d.classList.remove("active"));
  if (dotEl) dotEl.classList.add("active");
  const el = document.getElementById("model3dColorName");
  if (el) el.textContent = "Color: " + name;
  showToast("🎨 " + name, "info");
};

/* ─── SELECT CAR MODEL ──────────────────────────────────────── */
window.select3DCar = function(btn, name, colors, profileType) {
  document.querySelectorAll(".model3d-sel-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const titleEl = document.getElementById("model3dTitle");
  if (titleEl) titleEl.textContent = name;

  if (_3d) {
    // Remove old car
    _3d.scene.remove(_3d.carGroup);
    // Build new car with first color
    const hex = parseInt((colors[0] || "#CC0000").replace("#", ""), 16);
    const newCar = buildDetailedCar(profileType || 'sport', hex, _3d.envTex);
    _3d.scene.add(newCar);
    _3d.carGroup = newCar;
    _3d.currentProfile = profileType;

    // Reset camera angle
    if (_3d.orbit) { _3d.orbit.azimuth = 0.5; _3d.orbit.polar = 0.25; _3d.orbit.radius = 1.0; }
  }

  // Update color dots
  const cn = {
    "#CC0000": "Rojo", "#1A1A1A": "Negro", "#FFFFFF": "Blanco", "#BDC3C7": "Plata",
    "#DCDCDC": "Gris claro", "#003153": "Azul marino", "#FFD700": "Dorado",
    "#FF8C00": "Naranja", "#556B2F": "Verde militar", "#FF4500": "Naranja rojo",
    "#C0C0C0": "Cromo", "#8B6914": "Bronce", "#8B0000": "Granate",
    "#003087": "Azul real", "#1E90FF": "Azul dodger", "#B22222": "Rojo ladrillo",
    "#1A3A6B": "Azul oscuro", "#2C3E50": "Azul petróleo",
  };
  const container = document.getElementById("model3dColors");
  if (container) {
    container.innerHTML = colors.map((c, i) =>
      `<div class="model3d-color-dot ${i === 0 ? 'active' : ''}" style="background:${c}" onclick="change3DColor('${c}','${cn[c] || c}',this)"></div>`
    ).join("");
    const ne = document.getElementById("model3dColorName");
    if (ne) ne.textContent = "Color: " + (cn[colors[0]] || colors[0]);
  }
  showToast("◈ " + name + " cargado", "info");
};

/* ─── RESET CAMERA ──────────────────────────────────────────── */
window.reset3DCamera = function() {
  if (_3d && _3d.orbit) {
    _3d.orbit.azimuth = 0.5;
    _3d.orbit.polar = 0.25;
    _3d.orbit.radius = 1.0;
  }
  showToast("↺ Vista restablecida", "info");
};

/* ─── WIREFRAME ─────────────────────────────────────────────── */
window.toggle3DWireframe = function() {
  if (!_3d) return;
  _3d.wireframe = !_3d.wireframe;
  _3d.carGroup.traverse(o => {
    if (o.isMesh && o.material) o.material.wireframe = _3d.wireframe;
  });
  showToast("◫ Wireframe " + (_3d.wireframe ? "ON" : "OFF"), "info");
};

/* ─── AUTO INIT via IntersectionObserver ────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("model3dCanvas");
  if (canvas) {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { init3DViewer(); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(canvas);
  }
});
