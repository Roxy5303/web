/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - name: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  // OBJECT 1
  {
    id: "00a1",
    title: "Anti-Acne Face Mask",
    description: "Neem and Turmeric mask that treats and prevents acne",
    price: 39,
    discontinued: false,
    categories: ["00a"],
    image: "https://github.com/Roxy5303/web/blob/main/src/img/IMG_2894.jpg?raw=true"
  },

  // OBJECT 2
  {
    id: "00a2",
    title: "Brightening Face Mask",
    description:
      "A gentle natural orange peel mask with vitamin C, visibly brightening for an at-home facial that reveals smooth, even-looking skin.",
    price: 49,
    discontinued: false,
    categories: ["00a"],
    image: "https://i.pinimg.com/originals/e2/d9/b6/e2d9b68d01c4b9fe4c84ee0b0179c5a9.jpg"
  },

  // OBJECT 3
  {
    id: "00a3",
    title: "Rice and Honey scrub",
    description:
      " Natural Scub with rice and honey to gently exfoliate dead skin and remove dark spots.",
    price: 79,
    discontinued: false,
    categories: ["00a"],
    image:
      "https://github.com/Roxy5303/web/blob/main/src/img/rice_flour_and_honey_scrub_shutterstock_286868465__1509534795.jpg?raw=true"
  },

  // OBJECT 4
  {
    id: "00a4",
    title: "Lavender Essential Oil",
    description:
      "100% pure lavender essential oil used for skin, hair and also as an aroma therapy. Calms and sooths the mind. ",
    price: 29,
    discontinued: false,
    categories: ["00a"],
    image:
      "https://cdn.shopify.com/s/files/1/0037/7690/5283/articles/lavender-essential-oil-natural-skin_1024x400.jpg?v=1635175282"
  },

  // OBJECT 5
  {
    id: "00a5",
    title: "Tea Tree Essential Oil",
    description:
      "100% pure tea tree essential oil used for skin, hair and also as an aroma therapy. Calms and sooths the mind. ",
    price: 29,
    discontinued: true,
    categories: ["00a"],
    image: "https://github.com/Roxy5303/web/blob/main/src/img/Eucalyptus-oil-12.jpg?raw=true"
  },

  // OBJECT 6
  {
    id: "00b1",
    title: "Almond Oil",
    description: "100% pure almond oil. used for hair as well as skin. With Vitamin E",
    price: 9.5,
    discontinued: false,
    categories: ["00b"],
    image: "https://github.com/Roxy5303/web/blob/main/src/img/almond-oil.png?raw=true"
  },

  // OBJECT 7
  {
    id: "00b2",
    title: "Castor Oil",
    description: "100% pure Castor oil used for hair growth.",
    price: 10,
    discontinued: false,
    categories: ["00b"],
    image:
      "https://static-bebeautiful-in.unileverservices.com/1200/900/DIY-castor-oil-hacks_mobilehome.jpg"
  },

  // OBJECT 8
  {
    id: "00b3",
    title: "Mustard Oil",
    description: "100% pure Castor oil to maintain darker black hair and make stronger hair.",
    price: 6.35,
    discontinued: false,
    categories: ["00b"],
    image: "https://static.toiimg.com/thumb/55067936.cms?resizemode=4&width=800"
  },

  // OBJECT 9
  {
    id: "00c1",
    title: "Coconut body oil",
    description: "100% pure coconut body oil to moisturize or for  body massage ",
    price: 7,
    discontinued: false,
    categories: ["00c"],
    image:
      "https://static01.nyt.com/images/2019/06/02/health/02well_coconut/02well_coconut-mobileMasterAt3x-v2.jpg"
  },

  // OBJECT 10
  {
    id: "00c2",
    title: "Coffee Body Scrub",
    description:
      "Coffee scrub for body, exfoliates and removed dead skin and makes the skin feels softer and smoother ",
    price: 30,
    discontinued: false,
    categories: ["00c"],
    image: "https://github.com/Roxy5303/web/blob/main/src/img/diy-coffee-scrub-1.jpg?raw=true"
  },

  // OBJECT 11
  {
    id: "00d1",
    title: " Lip tint",
    description: " Natural Lip tint made with the goodness of rose and aloe extract.",
    price: 20,
    discontinued: false,
    categories: ["00d"],
    image: "https://github.com/Roxy5303/web/blob/main/src/img/APC_0016.jpg?raw=true"
  },

  // OBJECT 13
  {
    id: "00d2",
    title: "Cheek Tint",
    description:
      "Natural Cheek tint made with the goodness of beetroot, rose and aloe extract. Gives Natural glow to the skin.",
    price: 20,
    discontinued: false,
    categories: ["00d"],
    image: "https://github.com/Roxy5303/web/blob/main/src/img/APC_0011.jpg?raw=true"
  },

  // OBJECT 10
  {
    id: "00d3",
    title: "Kohl Kajal",
    description: "Naturally made kohl kajal with coconut and almond ash with camphor extract. ",
    price: 10,
    discontinued: true,
    categories: ["00d"],
    image: "https://github.com/Roxy5303/web/blob/main/src/img/kajal.jpeg?raw=true"
  }
];
