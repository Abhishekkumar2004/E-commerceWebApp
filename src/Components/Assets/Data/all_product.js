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
import p27_img from "../MensCollection/product_10.PNG";
import p28_img from "../MensCollection/product_11.png";
import p29_img from "../MensCollection/product_12.png";
import p30_img from "../MensCollection/product_13.png";
import p31_img from "../MensCollection/product_14.png";
import p32_img from "../MensCollection/product_15.png";

//Kids Collections
import p33_img from "../KidsCollection/product_1.png";
import p34_img from "../KidsCollection/product_2.png";
import p35_img from "../KidsCollection/product_3.png";
import p36_img from "../KidsCollection/product_4.png";
import p37_img from "../KidsCollection/product_5.png";
import p38_img from "../KidsCollection/product_6.png";
import p39_img from "../KidsCollection/product_7.png";
import p40_img from "../KidsCollection/product_8.png";
import p41_img from "../KidsCollection/product_9.png";
import p42_img from "../KidsCollection/product_10.png";
import p43_img from "../KidsCollection/product_11.png";
import p44_img from "../KidsCollection/product_12.png";
import p45_img from "../KidsCollection/product_13.png";
import p46_img from "../KidsCollection/product_14.png";
import p47_img from "../KidsCollection/product_15.png";



let all_product = [
  // WOMEN
  {
    id: 1,
    name: "Floral Summer Top",
    category: "women",
    image: p1_img,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 2,
    name: "Casual White Blouse",
    category: "women",
    image: p2_img,
    new_price: 65,
    old_price: 100,
  },
  {
    id: 3,
    name: "Elegant Office Shirt",
    category: "women",
    image: p3_img,
    new_price: 70,
    old_price: 110,
  },
  {
    id: 4,
    name: "Printed Peplum Top",
    category: "women",
    image: p4_img,
    new_price: 90,
    old_price: 140,
  },
  {
    id: 5,
    name: "Casual Denim Shirt",
    category: "women",
    image: p5_img,
    new_price: 80,
    old_price: 120,
  },
  {
    id: 6,
    name: "Stylish Crop Top",
    category: "women",
    image: p6_img,
    new_price: 55,
    old_price: 85,
  },
  {
    id: 7,
    name: "Long Sleeve Tunic",
    category: "women",
    image: p7_img,
    new_price: 75,
    old_price: 115,
  },
  {
    id: 8,
    name: "Summer Sleeveless Top",
    category: "women",
    image: p8_img,
    new_price: 60,
    old_price: 95,
  },
  {
    id: 9,
    name: "Slim Fit Jacket",
    category: "women",
    image: p9_img,
    new_price: 120,
    old_price: 180,
  },
  {
    id: 10,
    name: "Casual Hoodie",
    category: "women",
    image: p10_img,
    new_price: 95,
    old_price: 140,
  },
  {
    id: 11,
    name: "Formal Shirt",
    category: "women",
    image: p11_img,
    new_price: 85,
    old_price: 130,
  },
  {
    id: 12,
    name: "Denim Jacket",
    category: "women",
    image: p12_img,
    new_price: 140,
    old_price: 200,
  },
  {
    id: 13,
    name: "Winter Coat",
    category: "women",
    image: p13_img,
    new_price: 180,
    old_price: 250,
  },
  {
    id: 14,
    name: "Kids Hoodie Orange",
    category: "kid",
    image: p14_img,
    new_price: 40,
    old_price: 70,
  },
  {
    id: 15,
    name: "Kids Cartoon T-Shirt",
    category: "women",
    image: p15_img,
    new_price: 30,
    old_price: 60,
  },
  {
    id: 16,
    name: "Kids Winter Jacket",
    category: "women",
    image: p16_img,
    new_price: 65,
    old_price: 100,
  },
  {
    id: 17,
    name: "Kids Casual Shirt",
    category: "women",
    image: p17_img,
    new_price: 35,
    old_price: 70,
  },
  //Mens Collection
  {
    id: 18,
    name: "Kids Party Wear",
    category: "men",
    image: p18_img,
    new_price: 55,
    old_price: 90,
  },
  {
    id: 19,
    name: "Kids Printed Hoodie",
    category: "men",
    image: p19_img,
    new_price: 50,
    old_price: 85,
  },
  {
    id: 20,
    name: "Kids Summer Shorts",
    category: "men",
    image: p20_img,
    new_price: 25,
    old_price: 50,
  },
  {
    id: 21,
    name: "Kids Casual Dress",
    category: "men",
    image: p21_img,
    new_price: 45,
    old_price: 75,
  },
  {
    id: 22,
    name: "Kids Winter Sweater",
    category: "men",
    image: p22_img,
    new_price: 60,
    old_price: 95,
  },
  {
    id: 23,
    name: "Kids Track Suit",
    category: "men",
    image: p23_img,
    new_price: 70,
    old_price: 110,
  },
  {
    id: 24,
    name: "Kids Fashion Jacket",
    category: "men",
    image: p24_img,
    new_price: 80,
    old_price: 120,
  },
  {
    id: 25,
    name: "Kids Printed Shirt",
    category: "men",
    image: p25_img,
    new_price: 35,
    old_price: 65,
  },
  {
    id: 26,
    name: "Kids Jeans Outfit",
    category: "men",
    image: p26_img,
    new_price: 75,
    old_price: 110,
  },
  {
    id: 27,
    name: "Kids Casual Hoodie",
    category: "men",
    image: p27_img,
    new_price: 50,
    old_price: 85,
  },
  {
    id: 28,
    name: "Kids Stylish Jacket",
    category: "men",
    image: p28_img,
    new_price: 90,
    old_price: 130,
  },
  {
    id: 29,
    name: "Trendy Women Jacket",
    category: "men",
    image: p29_img,
    new_price: 95,
    old_price: 140,
  },
  {
    id: 30,
    name: "Women Casual Hoodie",
    category: "men",
    image: p30_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 31,
    name: "Women Stylish Top",
    category: "men",
    image: p31_img,
    new_price: 70,
    old_price: 110,
  },
  {
    id: 32,
    name: "Women Party Dress",
    category: "men",
    image: p32_img,
    new_price: 120,
    old_price: 180,
  },
  // KIDS collection
  {
    id: 33,
    name: "Men Casual T-Shirt",
    category: "kid",
    image: p33_img,
    new_price: 60,
    old_price: 90,
  },
  {
    id: 34,
    name: "Men Sports Jacket",
    category: "kid",
    image: p34_img,
    new_price: 130,
    old_price: 190,
  },
  {
    id: 35,
    name: "Men Hoodie Black",
    category: "kid",
    image: p35_img,
    new_price: 100,
    old_price: 150,
  },
  {
    id: 36,
    name: "Men Casual Shirt Blue",
    category: "kid",
    image: p36_img,
    new_price: 75,
    old_price: 115,
  },

  {
    id: 37,
    name: "Kids Hoodie Blue",
    category: "kid",
    image: p37_img,
    new_price: 45,
    old_price: 70,
  },
  {
    id: 38,
    name: "Kids Cartoon Shirt",
    category: "kid",
    image: p38_img,
    new_price: 30,
    old_price: 55,
  },
  {
    id: 39,
    name: "Kids Party Dress",
    category: "kid",
    image: p39_img,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 40,
    name: "Kids Winter Coat",
    category: "kid",
    image: p40_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 41,
    name: "Kids Jeans Outfit",
    category: "kid",
    image: p41_img,
    new_price: 65,
    old_price: 95,
  },
  {
    id: 42,
    name: "Kids Casual Shirt",
    category: "kid",
    image: p42_img,
    new_price: 35,
    old_price: 60,
  },
  {
    id: 43,
    name: "Kids Sweater",
    category: "kid",
    image: p43_img,
    new_price: 55,
    old_price: 85,
  },
  {
    id: 44,
    name: "Kids Jacket Red",
    category: "kid",
    image: p44_img,
    new_price: 75,
    old_price: 110,
  },
  {
    id: 45,
    name: "Kids Hoodie Green",
    category: "kid",
    image: p45_img,
    new_price: 50,
    old_price: 80,
  },
  {
    id: 46,
    name: "Kids Stylish Coat",
    category: "kid",
    image: p46_img,
    new_price: 90,
    old_price: 130,
  },
  {
    id: 47,
    name: "Kids Winter Hoodie",
    category: "kid",
    image: p47_img,
    new_price: 60,
    old_price: 95,
  },
];

export default all_product;