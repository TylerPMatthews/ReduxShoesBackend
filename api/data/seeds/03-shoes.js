exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("shoes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("shoes").insert([
        {
          shoe_id: 1,
          shoe_gender: "m",
          shoe_brand: "Nike",
          shoe_title: "Nike Air VaporMax Evo",
          shoe_desription:
            "The Nike Air VaporMax Evo puts Air Max DNA under the microscope, showcasing the distinguishing features of 7 Nike icons. It puts the must-haves from the pantheon of Air into one shoe, letting you step into a new world rooted in history, innovation and everything Max.",
          shoe_price: 200,
          shoe_img:
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d7abd19c-b69f-4de5-9ed3-dd7763435147/air-vapormax-evo-mens-shoe-WhLBpv.jpg",
          shoe_size: ["10", "11", "12", "13"],
          shoe_color: ["Wolf Grey Anthracite"],
          shoe_count: 0,
          inCart: false,
        },
        {
          shoe_id: 2,
          shoe_gender: "m",
          shoe_brand: "Nike",
          shoe_title: "Nike Air Max 97 EOI",
          shoe_desription:
            "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 EOI lets you push your style full speed ahead. Blending design cues, materials and colors from other '90s classics with its revolutionary full-length Nike Air unit, it lets you ride in first-class comfort while celebrating the Air Max journey.",
          shoe_price: 180,
          shoe_img:
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/14fea361-07bd-41b4-a679-2a4e4c040a70/air-max-97-eoi-mens-shoe-nCfNVm.jpg",
          shoe_size: ["5", "6", "7", "8", "9", "10", "11"],
          shoe_color: ["Light Graphite/Black/Persian Violet/Obsidian"],
          shoe_count: 0,
          inCart: false,
        },
        {
          shoe_id: 3,
          shoe_gender: "w",
          shoe_brand: "Nike",
          shoe_title: "Nike Air Vapormax 2020 FK",
          shoe_desription:
            "Designed with sustainability in mind, the Nike Air VaporMax 2020 Flyknit is made from at least 50% recycled content by weight. That’s a lot of trash! As part of Nike’s journey towards lowering our impact, we’re discovering new ways to put our waste to good use. By utilizing leftover materials, recycled polyester, recycled foam, and a Nike Air sole made from at least 75% recycled TPU, the VaporMax 2020 Flyknit marks the next step towards our ultimate goal of zero carbon and zero waste.",
          shoe_price: 220,
          shoe_img:
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/438a8cba-174b-4915-b613-1496cb47f6a6/air-vapormax-2020-fk-womens-shoe-CQLbRH.jpg",
          shoe_size: ["5", "6", "7", "8"],
          shoe_color: ["Black White"],
          shoe_count: 0,
          inCart: false,
        },
        {
          shoe_id: 4,
          shoe_gender: "w",
          shoe_brand: "Nike",
          shoe_title: "Nike Air Max Viva",
          shoe_desription:
            "Designed with every woman in mind, the mixed material upper of the Nike Air Max Viva features a plush collar, detailed patterning and intricate stitching. The new lacing system uses 2 separate laces constructed from heavy-duty tech chord, letting you find the perfect fit. Mixing comfort with style, it combines Nike Air with a lifted foam heel for and unbelievable ride that looks as good as it feels.",
          shoe_price: 140,
          shoe_img:
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6b22eeb1-4101-4407-bd93-6e8416566d9d/air-max-viva-womens-shoe-3XCCfF.jpg",
          shoe_size: ["5", "6", "7", "8", "9", "10"],
          shoe_color: ["Abyss/Plum Dust"],
          shoe_count: 0,
          inCart: false,
        },
        {
          shoe_id: 5,
          shoe_gender: "m",
          shoe_brand: "Adidas",
          shoe_title: "ZX 2K BOOST SHOES",
          shoe_desription:
            "Some people live in the past. Some only think of the future. Lace up in these adidas ZX 2K Boost Shoes and see the value in both. Reworking '80s technical runners from the archive, a sandwich mesh upper pairs with futuristic TPU overlays for a look that's part past, part future. Bold logo graphics stand out on the comfortable Boost midsole for a purely modern edge.",
          shoe_price: 180,
          shoe_img:
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/4e4654faed44440f9a1fac8400a2788e_9366/ZX_2K_Boost_Shoes_White_FX7030.jpg",
          shoe_size: ["5", "6", "7", "8", "9", "10"],
          shoe_color: ["Orange"],
          shoe_count: 0,
          inCart: false,
        },
        {
          shoe_id: 6,
          shoe_gender: "m",
          shoe_brand: "Adidas",
          shoe_title: "ULTRABOOST 21 SHOES",
          shoe_desription:
            "Prototype after prototype. Innovation after innovation. Testing after testing. Meet us in the hot pursuit of the pinnacle harmonization of weight, cushioning, and responsiveness. Ultraboost 21. Say hello to incredible energy return.",
          shoe_price: 180,
          shoe_img:
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/e2f709630da14ed38625ac9100603d54_9366/Ultraboost_21_Shoes_Black_FY0306.jpg",
          shoe_size: ["5", "6", "7", "8", "9", "10"],
          shoe_color: ["Black"],
          shoe_count: 0,
          inCart: false,
        },
      ]);
    });
};
