//Womans collection
import p1_img from "../WomensCollection/product_1.jpg";
import p2_img from "../WomensCollection/product_2.jpg";
import p3_img from "../WomensCollection/product_3.jpg";
import p4_img from "../WomensCollection/product_4.jpg";
import p5_img from "../WomensCollection/product_5.jpg";
import p6_img from "../WomensCollection/product_6.jpg";
import p7_img from "../WomensCollection/product_7.jpg";
import p8_img from "../WomensCollection/product_8.jpg";
import p9_img from "../WomensCollection/product_9.jpg";
import p10_img from "../WomensCollection/product_10.jpg";
import p11_img from "../WomensCollection/product_11.jpg";
import p12_img from "../WomensCollection/product_12.jpg";
import p13_img from "../WomensCollection/product_13.jpg";
import p14_img from "../WomensCollection/product_14.jpg";
import p15_img from "../WomensCollection/product_15.jpg";
import p16_img from "../WomensCollection/product_16.jpg";
import p17_img from "../WomensCollection/product_17.jpg";

//Mens Collections
import p18_img from "../MensCollection/product_1.jpg";
import p19_img from "../MensCollection/product_2.jpg";
import p20_img from "../MensCollection/product_3.jpg";
import p21_img from "../MensCollection/product_4.jpg";
import p22_img from "../MensCollection/product_5.jpg";
import p23_img from "../MensCollection/product_6.jpg";
import p24_img from "../MensCollection/product_7.jpg";
import p25_img from "../MensCollection/product_8.jpg";
import p26_img from "../MensCollection/product_9.jpg";
import p27_img from "../MensCollection/product_10.jpg";
import p28_img from "../MensCollection/product_11.jpg";
import p29_img from "../MensCollection/product_12.jpg";
import p30_img from "../MensCollection/product_13.jpg";
import p31_img from "../MensCollection/product_14.jpg";
import p32_img from "../MensCollection/product_15.jpg";

//Kids Collections
import p33_img from "../KidsCollection/product_1.jpg";
import p34_img from "../KidsCollection/product_2.jpg";
import p35_img from "../KidsCollection/product_3.jpg";
import p36_img from "../KidsCollection/product_4.jpg";
import p37_img from "../KidsCollection/product_5.jpg";
import p38_img from "../KidsCollection/product_6.jpg";
import p39_img from "../KidsCollection/product_7.jpg";
import p40_img from "../KidsCollection/product_8.jpg";
import p41_img from "../KidsCollection/product_9.jpg";
import p42_img from "../KidsCollection/product_10.jpg";
import p43_img from "../KidsCollection/product_11.jpg";
import p44_img from "../KidsCollection/product_12.jpg";
import p45_img from "../KidsCollection/product_13.jpg";
import p46_img from "../KidsCollection/product_14.jpg";
import p47_img from "../KidsCollection/product_15.jpg";


let all_product = [
  // WOMEN
  { id: 1, name: "Printed V-Neck Ethnic Top", category: "women", image: p1_img, new_price: 49, old_price: 79 },
  { id: 2, name: "Solid Yellow Kurta", category: "women", image: p2_img, new_price: 59, old_price: 99 },
  { id: 3, name: "Solid Red Kurta", category: "women", image: p3_img, new_price: 69, old_price: 109 },
  { id: 4, name: "Black Printed Kurta", category: "women", image: p4_img, new_price: 89, old_price: 139 },
  { id: 5, name: "Olive Printed Shirt", category: "women", image: p5_img, new_price: 79, old_price: 119 },
  { id: 6, name: "Short Printed Tunic Dress", category: "women", image: p6_img, new_price: 54, old_price: 84 },
  { id: 7, name: "Floral A-Line Tunic Dress", category: "women", image: p7_img, new_price: 74, old_price: 114 },
  { id: 8, name: "Black Floral Tunic Dress", category: "women", image: p8_img, new_price: 59, old_price: 94 },
  { id: 9, name: "White Fringe Top", category: "women", image: p9_img, new_price: 119, old_price: 179 },
  { id: 10, name: "Casual Zip Hoodie", category: "women", image: p10_img, new_price: 94, old_price: 139 },
  { id: 11, name: "Black & White Ethnic Suit", category: "women", image: p11_img, new_price: 84, old_price: 129 },
  { id: 12, name: "Denim Jacket", category: "women", image: p12_img, new_price: 139, old_price: 199 },
  { id: 13, name: "Long Black Winter Overcoat", category: "women", image: p13_img, new_price: 179, old_price: 249 },
  { id: 14, name: "Brown Ethnic Dress", category: "women", image: p14_img, new_price: 39, old_price: 69 },
  { id: 15, name: "Blue Ethnic Skirt & Top Set", category: "women", image: p15_img, new_price: 29, old_price: 59 },
  { id: 16, name: "Printed Lounge Set", category: "women", image: p16_img, new_price: 64, old_price: 99 },
  { id: 17, name: "Yellow Ethnic Skirt & Top Set", category: "women", image: p17_img, new_price: 34, old_price: 69 },

  // MEN
  { id: 18, name: "Casual Shirt", category: "men", image: p18_img, new_price: 54, old_price: 89 },
  { id: 19, name: "Slim Fit Shirt", category: "men", image: p19_img, new_price: 49, old_price: 84 },
  { id: 20, name: "Printed Shirt", category: "men", image: p20_img, new_price: 29, old_price: 49 },
  { id: 21, name: "Checked Casual Shirt", category: "men", image: p21_img, new_price: 44, old_price: 74 },
  { id: 22, name: "Formal Shirt", category: "men", image: p22_img, new_price: 59, old_price: 94 },
  { id: 23, name: "Layered Shirt with T-Shirt", category: "men", image: p23_img, new_price: 69, old_price: 109 },
  { id: 24, name: "Formal Blazer Set", category: "men", image: p24_img, new_price: 79, old_price: 119 },
  { id: 25, name: "Classic Formal Suit", category: "men", image: p25_img, new_price: 39, old_price: 64 },
  { id: 26, name: "Premium Formal Suit", category: "men", image: p26_img, new_price: 74, old_price: 109 },
  { id: 27, name: "White Formal Shirt", category: "men", image: p27_img, new_price: 49, old_price: 84 },
  { id: 28, name: "Stylish Winter Jacket", category: "men", image: p28_img, new_price: 89, old_price: 129 },
  { id: 29, name: "Checked Shirt", category: "men", image: p29_img, new_price: 94, old_price: 139 },
  { id: 30, name: "Formal Leather Shoes", category: "men", image: p30_img, new_price: 84, old_price: 119 },
  { id: 31, name: "Men's Boots", category: "men", image: p31_img, new_price: 69, old_price: 109 },
  { id: 32, name: "Premium Formal Shoes", category: "men", image: p32_img, new_price: 119, old_price: 179 },

  // KIDS
  { id: 33, name: "Black Kids T-Shirt", category: "kid", image: p33_img, new_price: 59, old_price: 89 },
  { id: 34, name: "Multicolor Kids T-Shirt", category: "kid", image: p34_img, new_price: 129, old_price: 189 },
  { id: 35, name: "Yellow Kids T-Shirt", category: "kid", image: p35_img, new_price: 99, old_price: 149 },
  { id: 36, name: "Blue Kids T-Shirt", category: "kid", image: p36_img, new_price: 74, old_price: 114 },
  { id: 37, name: "Pink Kids T-Shirt", category: "kid", image: p37_img, new_price: 44, old_price: 69 },
  { id: 38, name: "Green Kids T-Shirt", category: "kid", image: p38_img, new_price: 29, old_price: 54 },
  { id: 39, name: "Kids Party Dress", category: "kid", image: p39_img, new_price: 49, old_price: 79 },
  { id: 40, name: "Kids White Winter Hoodie", category: "kid", image: p40_img, new_price: 84, old_price: 119 },
  { id: 41, name: "Kids Red Winter Hoodie", category: "kid", image: p41_img, new_price: 64, old_price: 94 },
  { id: 42, name: "Kids Casual Shirt", category: "kid", image: p42_img, new_price: 34, old_price: 59 },
  { id: 43, name: "Kids Sweater", category: "kid", image: p43_img, new_price: 54, old_price: 84 },
  { id: 44, name: "Kids Party Wear Dress", category: "kid", image: p44_img, new_price: 74, old_price: 109 },
  { id: 45, name: "Kids Party Shirt", category: "kid", image: p45_img, new_price: 49, old_price: 79 },
  { id: 46, name: "Kids Stylish Shirt", category: "kid", image: p46_img, new_price: 89, old_price: 129 },
  { id: 47, name: "Kids Formal Suit", category: "kid", image: p47_img, new_price: 59, old_price: 94 },
]; 55
export default all_product;