import React, { useState } from 'react';
import "./css/farm.css";

// Updated nested crops data
const cropsData = {
  "Erode": {
    "Anthiyur": {
      "638501": [ { "crop": "Rice" }, { "crop": "Sugarcane" }, { "crop": "Wheat" }, { "crop": "Maize" } ]
    },
    "Bhavani": {
      "638301": [ { "crop": "Rice" }, { "crop": "Sugarcane" }, { "crop": "Cotton" }, { "crop": "Groundnut" } ],
      "638311": [ { "crop": "Cotton" }, { "crop": "Sugarcane" }, { "crop": "Wheat" }, { "crop": "Tomato" } ],
      "638312": [ { "crop": "Tomato" }, { "crop": "Rice" }, { "crop": "Chili" }, { "crop": "Onion" } ],
      "638314": [ { "crop": "Groundnut" }, { "crop": "Rice" }, { "crop": "Sugarcane" }, { "crop": "Wheat" } ],
      "638315": [ { "crop": "Chili" }, { "crop": "Rice" }, { "crop": "Onion" }, { "crop": "Cotton" } ],
      "638455": [ { "crop": "Maize" }, { "crop": "Sugarcane" }, { "crop": "Rice" }, { "crop": "Groundnut" } ],
      "638501": [ { "crop": "Wheat" }, { "crop": "Pulses" }, { "crop": "Rice" }, { "crop": "Sugarcane" } ],
      "638502": [ { "crop": "Pulses" }, { "crop": "Rice" }, { "crop": "Cotton" }, { "crop": "Tomato" } ],
      "638504": [ { "crop": "Tobacco" }, { "crop": "Groundnut" }, { "crop": "Cotton" }, { "crop": "Wheat" } ]
    },
    "Erode": {
      "638001": [ { "crop": "Rice" }, { "crop": "Sugarcane" }, { "crop": "Cotton" }, { "crop": "Chili" } ],
      "638002": [ { "crop": "Tomato" }, { "crop": "Onion" }, { "crop": "Groundnut" }, { "crop": "Cotton" } ],
      "638003": [ { "crop": "Chili" }, { "crop": "Rice" }, { "crop": "Sugarcane" }, { "crop": "Maize" } ],
      "638004": [ { "crop": "Maize" }, { "crop": "Wheat" }, { "crop": "Cotton" }, { "crop": "Tomato" } ],
      "638005": [ { "crop": "Tobacco" }, { "crop": "Groundnut" }, { "crop": "Chili" }, { "crop": "Wheat" } ],
      "638007": [ { "crop": "Wheat" }, { "crop": "Rice" }, { "crop": "Sugarcane" }, { "crop": "Maize" } ],
      "638009": [ { "crop": "Pulses" }, { "crop": "Groundnut" }, { "crop": "Tomato" }, { "crop": "Onion" } ],
      "638010": [ { "crop": "Barley" }, { "crop": "Rice" }, { "crop": "Cotton" }, { "crop": "Maize" } ],
      "638011": [ { "crop": "Mustard" }, { "crop": "Onion" }, { "crop": "Wheat" }, { "crop": "Sugarcane" } ],
      "638012": [ { "crop": "Groundnut" }, { "crop": "Chili" }, { "crop": "Rice" }, { "crop": "Cotton" } ],
      "638051": [ { "crop": "Soybean" }, { "crop": "Maize" }, { "crop": "Rice" }, { "crop": "Wheat" } ],
      "638052": [ { "crop": "Rice" }, { "crop": "Sugarcane" }, { "crop": "Maize" }, { "crop": "Groundnut" } ],
      "638053": [ { "crop": "Sugarcane" }, { "crop": "Rice" }, { "crop": "Chili" }, { "crop": "Cotton" } ],
      "638054": [ { "crop": "Cotton" }, { "crop": "Rice" }, { "crop": "Wheat" }, { "crop": "Groundnut" } ],
      "638055": [ { "crop": "Chili" }, { "crop": "Rice" }, { "crop": "Tomato" }, { "crop": "Onion" } ],
      "638056": [ { "crop": "Maize" }, { "crop": "Chili" }, { "crop": "Cotton" }, { "crop": "Sugarcane" } ],
      "638057": [ { "crop": "Tomato" }, { "crop": "Chili" }, { "crop": "Groundnut" }, { "crop": "Maize" } ],
      "638101": [ { "crop": "Onion" }, { "crop": "Cotton" }, { "crop": "Sugarcane" }, { "crop": "Rice" } ],
      "638102": [ { "crop": "Wheat" }, { "crop": "Rice" }, { "crop": "Tomato" }, { "crop": "Sugarcane" } ],
      "638103": [ { "crop": "Pulses" }, { "crop": "Cotton" }, { "crop": "Groundnut" }, { "crop": "Chili" } ],
      "638104": [ { "crop": "Mustard" }, { "crop": "Groundnut" }, { "crop": "Rice" }, { "crop": "Maize" } ],
      "638105": [ { "crop": "Groundnut" }, { "crop": "Rice" }, { "crop": "Chili" }, { "crop": "Cotton" } ],
      "638106": [ { "crop": "Rice" }, { "crop": "Sugarcane" }, { "crop": "Wheat" }, { "crop": "Chili" } ],
      "638107": [ { "crop": "Sugarcane" }, { "crop": "Rice" }, { "crop": "Cotton" }, { "crop": "Onion" } ],
      "638109": [ { "crop": "Cotton" }, { "crop": "Groundnut" }, { "crop": "Maize" }, { "crop": "Chili" } ],
      "638110": [ { "crop": "Chili" }, { "crop": "Rice" }, { "crop": "Tomato" }, { "crop": "Cotton" } ],
      "638112": [ { "crop": "Maize" }, { "crop": "Rice" }, { "crop": "Tomato" }, { "crop": "Cotton" } ],
      "638115": [ { "crop": "Tomato" }, { "crop": "Wheat" }, { "crop": "Rice" }, { "crop": "Sugarcane" } ],
      "638116": [ { "crop": "Barley" }, { "crop": "Onion" }, { "crop": "Groundnut" }, { "crop": "Chili" } ],
      "638151": [ { "crop": "Soybean" }, { "crop": "Maize" }, { "crop": "Rice" }, { "crop": "Cotton" } ],
      "638152": [ { "crop": "Pulses" }, { "crop": "Chili" }, { "crop": "Sugarcane" }, { "crop": "Wheat" } ],
      "638153": [ { "crop": "Rice" }, { "crop": "Sugarcane" }, { "crop": "Cotton" }, { "crop": "Onion" } ],
      "638154": [ { "crop": "Sugarcane" }, { "crop": "Rice" }, { "crop": "Groundnut" }, { "crop": "Maize" } ],
      "638313": [ { "crop": "Groundnut" }, { "crop": "Chili" }, { "crop": "Rice" }, { "crop": "Maize" } ],
      "638316": [ { "crop": "Cotton" }, { "crop": "Sugarcane" }, { "crop": "Wheat" }, { "crop": "Tomato" } ],
      "638454": [ { "crop": "Chili" }, { "crop": "Rice" }, { "crop": "Onion" }, { "crop": "Groundnut" } ],
      "638455": [ { "crop": "Maize" }, { "crop": "Sugarcane" }, { "crop": "Rice" }, { "crop": "Cotton" } ],
      "638456": [ { "crop": "Tomato" }, { "crop": "Chili" }, { "crop": "Wheat" }, { "crop": "Onion" } ],
      "638457": [ { "crop": "Onion" }, { "crop": "Groundnut" }, { "crop": "Tomato" }, { "crop": "Rice" } ],
      "638458": [ { "crop": "Wheat" }, { "crop": "Maize" }, { "crop": "Rice" }, { "crop": "Groundnut" } ],
      "638459": [ { "crop": "Pulses" }, { "crop": "Maize" }, { "crop": "Tomato" }, { "crop": "Wheat" } ],
      "638462": [ { "crop": "Mustard" }, { "crop": "Chili" }, { "crop": "Rice" }, { "crop": "Sugarcane" } ],
      "638476": [ { "crop": "Groundnut" }, { "crop": "Cotton" }, { "crop": "Maize" }, { "crop": "Wheat" } ],
      "638501": [ { "crop": "Rice" }, { "crop": "Sugarcane" }, { "crop": "Wheat" }, { "crop": "Maize" } ],
      "638502": [ { "crop": "Sugarcane" }, { "crop": "Rice" }, { "crop": "Cotton" }, { "crop": "Tomato" } ],
      "638503": [ { "crop": "Cotton" }, { "crop": "Maize" }, { "crop": "Rice" }, { "crop": "Onion" } ],
      "638504": [ { "crop": "Tomato" }, { "crop": "Cotton" }, { "crop": "Sugarcane" }, { "crop": "Groundnut" } ],
      "638505": [ { "crop": "Onion" }, { "crop": "Wheat" }, { "crop": "Rice" }, { "crop": "Cotton" } ],
      "638506": [ { "crop": "Groundnut" }, { "crop": "Tomato" }, { "crop": "Rice" }, { "crop": "Maize" } ],
      "638751": [ { "crop": "Chili" }, { "crop": "Cotton" }, { "crop": "Rice" }, { "crop": "Groundnut" } ],
      "638752": [ { "crop": "Maize" }, { "crop": "Rice" }, { "crop": "Sugarcane" }, { "crop": "Wheat" } ]
    },
  
    "Modkurichi": {
      "638104": [ { "crop": "Tomato" }, { "crop": "Wheat" }, { "crop": "Rice" }, { "crop": "Maize" } ]
    },
     "Perundurai": {
      
        "638052": [ { "crop": "Rice" }, { "crop": "Sugarcane" }, { "crop": "Chili" }, { "crop": "Cotton" } ],
        "638053": [ { "crop": "Sugarcane" }, { "crop": "Rice" }, { "crop": "Cotton" }, { "crop": "Wheat" } ],
        "638055": [ { "crop": "Cotton" }, { "crop": "Rice" }, { "crop": "Tomato" }, { "crop": "Groundnut" } ],
        "638056": [ { "crop": "Tomato" }, { "crop": "Maize" }, { "crop": "Rice" }, { "crop": "Sugarcane" } ],
        "638057": [ { "crop": "Groundnut" }, { "crop": "Rice" }, { "crop": "Chili" }, { "crop": "Maize" } ],
        "638110": [ { "crop": "Chili" }, { "crop": "Tomato" }, { "crop": "Cotton" }, { "crop": "Rice" } ],
        "638112": [ { "crop": "Maize" }, { "crop": "Rice" }, { "crop": "Groundnut" }, { "crop": "Chili" } ],
        "638116": [ { "crop": "Onion" }, { "crop": "Cotton" }, { "crop": "Wheat" }, { "crop": "Rice" } ],
        "638751": [ { "crop": "Wheat" }, { "crop": "Rice" }, { "crop": "Cotton" }, { "crop": "Maize" } ],
        "638752": [ { "crop": "Pulses" }, { "crop": "Wheat" }, { "crop": "Rice" }, { "crop": "Tomato" } ],
        "638812": [ { "crop": "Barley" }, { "crop": "Cotton" }, { "crop": "Rice" }, { "crop": "Groundnut" } ]
      },
      "Gobichettipalayam": {
     
        "638452": [ { "crop": "Rice" }, { "crop": "Sugarcane" }, { "crop": "Groundnut" }, { "crop": "Chili" } ],
        "638453": [ { "crop": "Sugarcane" }, { "crop": "Rice" }, { "crop": "Cotton" }, { "crop": "Chili" } ],
        "638454": [ { "crop": "Cotton" }, { "crop": "Sugarcane" }, { "crop": "Wheat" }, { "crop": "Tomato" } ],
        "638455": [ { "crop": "Tomato" }, { "crop": "Chili" }, { "crop": "Rice" }, { "crop": "Wheat" } ],
        "638456": [ { "crop": "Groundnut" }, { "crop": "Rice" }, { "crop": "Cotton" }, { "crop": "Sugarcane" } ],
        "638457": [ { "crop": "Chili" }, { "crop": "Tomato" }, { "crop": "Onion" }, { "crop": "Groundnut" } ],
        "638458": [ { "crop": "Maize" }, { "crop": "Rice" }, { "crop": "Chili" }, { "crop": "Cotton" } ],
        "638459": [ { "crop": "Wheat" }, { "crop": "Tomato" }, { "crop": "Rice" }, { "crop": "Sugarcane" } ],
        "638462": [ { "crop": "Pulses" }, { "crop": "Rice" }, { "crop": "Maize" }, { "crop": "Chili" } ],
        "638476": [ { "crop": "Barley" }, { "crop": "Groundnut" }, { "crop": "Chili" }, { "crop": "Maize" } ],
        "638503": [ { "crop": "Mustard" }, { "crop": "Rice" }, { "crop": "Groundnut" }, { "crop": "Cotton" } ],
        "638505": [ { "crop": "Groundnut" }, { "crop": "Maize" }, { "crop": "Rice" }, { "crop": "Chili" } ],
        "638506": [ { "crop": "Rice" }, { "crop": "Tomato" }, { "crop": "Wheat" }, { "crop": "Maize" } ]
      },
   "Sathyamangalam": {
      
        "638401": [ { "crop": "Rice" }, { "crop": "Sugarcane" }, { "crop": "Groundnut" }, { "crop": "Chili" } ],
        "638402": [ { "crop": "Sugarcane" }, { "crop": "Wheat" }, { "crop": "Rice" }, { "crop": "Maize" } ],
        "638451": [ { "crop": "Cotton" }, { "crop": "Rice" }, { "crop": "Sugarcane" }, { "crop": "Wheat" } ],
        "638459": [ { "crop": "Tomato" }, { "crop": "Rice" }, { "crop": "Wheat" }, { "crop": "Chili" } ],
        "638460": [ { "crop": "Groundnut" }, { "crop": "Rice" }, { "crop": "Cotton" }, { "crop": "Wheat" } ],
        "638461": [ { "crop": "Chili" }, { "crop": "Rice" }, { "crop": "Tomato" }, { "crop": "Maize" } ],
        "638503": [ { "crop": "Maize" }, { "crop": "Groundnut" }, { "crop": "Rice" }, { "crop": "Sugarcane" } ]
      },
  
      "Nambiyur": {
      "638458": [
        { "crop": "Rice" },
        { "crop": "Sugarcane" },
        { "crop": "Cotton" },
        { "crop": "Maize" },
        { "crop": "Groundnut" },
        { "crop": "Wheat" },
        { "crop": "Tomato" },
        { "crop": "Chili" },
        { "crop": "Onion" },
        { "crop": "Pulses" }
      ],
      "638110": [
        { "crop": "Chili" },
        { "crop": "Rice" },
        { "crop": "Tomato" },
        { "crop": "Cotton" },
        { "crop": "Maize" },
        { "crop": "Wheat" },
        { "crop": "Sugarcane" },
        { "crop": "Groundnut" }
      ]
    },
  
  
  }
  ,
  
  "Salem": {
    "Salem City": {
      "636001": [
        { "crop": "Tomato" },
        { "crop": "Brinjal" },
        { "crop": "Chili" },
        { "crop": "Groundnut" }
      ],
      "636002": [
        { "crop": "Maize" },
        { "crop": "Rice" },
        { "crop": "Cotton" }
      ],
      "636003": [
        { "crop": "Tomato" },
        { "crop": "Onion" }
      ]
    },
    "Attur": {
      "636101": [
        { "crop": "Rice" },
        { "crop": "Maize" },
        { "crop": "Red Gram" },
        { "crop": "Cotton" }
      ],
      "636102": [
        { "crop": "Wheat" },
        { "crop": "Groundnut" },
        { "crop": "Chili" }
      ],
      "636103": [
        { "crop": "Sorghum" },
        { "crop": "Tomato" }
      ],
      "636104": [
        { "crop": "Rice" },
        { "crop": "Onion" }
      ]
    },
    "Sankari": {
      "636001": [
        { "crop": "Rice" },
        { "crop": "Sugarcane" },
        { "crop": "Groundnut" },
        { "crop": "Tomato" }
      ],
      "636002": [
        { "crop": "Chili" },
        { "crop": "Cotton" },
        { "crop": "Banana" }
      ],
      "636003": [
        { "crop": "Maize" },
        { "crop": "Rice" },

      ],
      "637103": [
        { "crop": "Groundnut" },
        { "crop": "Cotton" },
        { "crop": "Rice" },
        { "crop": "Onion" }
      ]
    },
    "Omalur": {
      "636455": [
        { "crop": "Rice" },
        { "crop": "Groundnut" },
        { "crop": "Sugarcane" }
      ],
      "636456": [
        { "crop": "Cotton" },
        { "crop": "Maize" },
        { "crop": "Chili" }
      ],
      "636457": [
        { "crop": "Tomato" },
        { "crop": "Rice" }
      ],
      "636458": [
        { "crop": "Groundnut" },
        { "crop": "Banana" }
      ]
    },
    "Mettur": {
      "636401": [
        { "crop": "Rice" },
        { "crop": "Sugarcane" },
        { "crop": "Groundnut" }
      ],
      "636402": [
        { "crop": "Tomato" },
        { "crop": "Cotton" },
        { "crop": "Banana" }
      ],
      "636403": [
        { "crop": "Maize" },
        { "crop": "Rice" }
      ],
      "636404": [
        { "crop": "Groundnut" },
        { "crop": "Chili" }
      ]
    },
    "Namakkal": {
      "637001": [
        { "crop": "Groundnut" },
        { "crop": "Tomato" },
        { "crop": "Chili" }
      ],
      "637002": [
        { "crop": "Cotton" },
        { "crop": "Rice" },
        { "crop": "Maize" }
      ],
      "637003": [
        { "crop": "Sorghum" },
        { "crop": "Groundnut" }
      ],
      "637004": [
        { "crop": "Onion" },
        { "crop": "Tomato" }
      ]
    },
    "Vazhapadi": {
      "636111": [
        { "crop": "Cotton" },
        { "crop": "Groundnut" },
        { "crop": "Rice" }
      ],
      "636112": [
        { "crop": "Sugarcane" },
        { "crop": "Chili" },
        { "crop": "Banana" }
      ],
      "636113": [
        { "crop": "Maize" },
        { "crop": "Rice" }
      ],
      "636114": [
        { "crop": "Tomato" },
        { "crop": "Groundnut" }
      ]
    },
    "Kadayampatti": {
      "636201": [
        { "crop": "Rice" },
        { "crop": "Maize" },
        { "crop": "Groundnut" }
      ],
      "636202": [
        { "crop": "Sugarcane" },
        { "crop": "Cotton" },
        { "crop": "Chili" }
      ],
      "636203": [
        { "crop": "Banana" },
        { "crop": "Tomato" }
      ],
      "636204": [
        { "crop": "Rice" },
        { "crop": "Groundnut" }
      ]
    },
    "Peddanaickenpatti": {
      "636301": [
        { "crop": "Tomato" },
        { "crop": "Groundnut" },
        { "crop": "Rice" }
      ],
      "636302": [
        { "crop": "Chili" },
        { "crop": "Banana" },
        { "crop": "Cotton" }
      ],
      "636303": [
        { "crop": "Maize" },
        { "crop": "Rice" }
      ],
      "636304": [
        { "crop": "Groundnut" },
        { "crop": "Cotton" }
      ]
    },
    "Mecheri": {
      "636307": [
        { "crop": "Rice" },
        { "crop": "Sugarcane" },
        { "crop": "Groundnut" }
      ],
      "636308": [
        { "crop": "Maize" },
        { "crop": "Tomato" },
        { "crop": "Cotton" }
      ],
      "636309": [
        { "crop": "Groundnut" },
        { "crop": "Chili" }
      ],
      "636310": [
        { "crop": "Banana" },
        { "crop": "Rice" }
      ]
    }
  }
  // Additional districts can be added here...
};



const cropProcedures = {
  "Rice": [
    "1. Choose a suitable field that has a gentle slope and is well-drained to avoid waterlogging.\n\n",
    "2. Test soil for pH and nutrient levels before sowing to determine the required amendments.\n\n",
    "3. Clear the field of weeds, stubbles, and debris before plowing to ensure better soil aeration.\n\n",
    "4. Plow the field thoroughly to a depth of 15-20 cm to prepare for seedbed formation.\n\n",
    "5. Level the field using a leveling board to ensure uniform water distribution.\n\n",
    "6. Add organic manure or compost to improve soil structure and fertility.\n\n",
    "7. Soak the seeds for 24-48 hours in clean water to accelerate germination.\n\n",
    "8. Pre-germinate seeds by soaking and then drying them before sowing to increase uniformity in growth.\n\n",
    "9. Choose high-yielding and disease-resistant rice varieties suited to the local climate.\n\n",
    "10. For direct sowing, broadcast seeds evenly in a flooded field. For transplantation, sow seeds in a nursery bed.\n\n",
    "11. Transplant seedlings after 3-4 weeks, ensuring that each seedling is planted with 10-15 cm spacing.\n\n",
    "12. Maintain 2-5 cm of water in the field for the first 30 days of growth to encourage better root establishment.\n\n",
    "13. Gradually increase water depth to 5-7 cm once the rice plants have established.\n\n",
    "14. Fertilize with balanced fertilizers, applying nitrogen, phosphorus, and potassium according to the soil's nutrient needs.\n\n",
    "15. Apply nitrogen in splits at the tillering and panicle initiation stages to support plant growth.\n\n",
    "16. Top-dress fertilizers at the onset of tillering, flowering, and grain development stages to maximize yield.\n\n",
    "17. Maintain water levels at 5-7 cm during the active growing period and reduce them during the ripening phase.\n\n",
    "18. Weed regularly during the first 2 months to prevent competition for nutrients and water.\n\n",
    "19. Apply herbicides or perform manual weeding if necessary, especially in the early stages of crop growth.\n\n",
    "20. Control pests like stem borers, leaf folders, and rice weevils by using appropriate pesticides or organic methods.\n\n",
    "21. Check for diseases such as rice blast, bacterial blight, and brown spot regularly and treat accordingly.\n\n",
    "22. Practice crop rotation and maintain proper field hygiene to reduce disease pressure.\n\n",
    "23. Apply fungicides as needed to prevent fungal infections, especially during humid conditions.\n\n",
    "24. Monitor the rice crop for any signs of nutrient deficiencies and apply the necessary micronutrients.\n\n",
    "25. During the flowering stage, reduce water levels to allow the plant to prepare for grain formation.\n\n",
    "26. Inspect the field regularly for any signs of physical damage to plants from wind or pests and take corrective action.\n\n",
    "27. Harvest rice when the grains are fully mature and the plants have turned golden yellow, with a moisture content of around 20-25%.\n\n",
    "28. Use combine harvesters or manually cut the rice at the base with sharp tools to avoid damage to the grains.\n\n",
    "29. Allow the harvested rice to dry in the field for 1-2 days before threshing.\n\n",
    "30. Dry the harvested rice further under the sun until the moisture content is reduced to around 14% for safe storage.\n\n",
    "31. Store the rice in a cool, dry place in sacks or storage bins to prevent spoilage and pest infestation.\n\n",
    "32. Perform post-harvest processing such as milling and cleaning to obtain the final rice product.\n\n"
  ],

  "Banana": [
    "1. Select a suitable location with a warm, tropical climate for banana cultivation.\n\n",
    "2. Choose a well-drained, fertile soil with good organic content for optimal growth.\n\n",
    "3. Test the soil for pH levels, ensuring it is slightly acidic to neutral (pH 5.5-7.0).\n\n",
    "4. Clear the land of weeds, debris, and any other plants to prevent competition for nutrients.\n\n",
    "5. Dig planting holes that are 30-45 cm deep and wide to accommodate the banana suckers.\n\n",
    "6. Plant banana suckers or tissue-cultured plants into the holes, ensuring the corm is level with the soil.\n\n",
    "7. Space the plants 2-3 meters apart in rows to allow for proper growth and air circulation.\n\n",
    "8. Apply well-rotted compost or organic manure in the planting hole to enhance soil fertility.\n\n",
    "9. Water the newly planted suckers immediately after planting and maintain consistent moisture levels.\n\n",
    "10. Mulch around the base of the plants to retain moisture, reduce weed growth, and improve soil structure.\n\n",
    "11. Provide regular watering, especially during dry periods, as bananas require a lot of water for growth.\n\n",
    "12. Apply fertilizers at regular intervals, using a balanced mix of nitrogen, phosphorus, and potassium for healthy growth.\n\n",
    "13. Control pests like banana weevil, nematodes, and aphids with appropriate insecticides or organic solutions.\n\n",
    "14. Monitor for diseases such as Panama wilt, black sigatoka, and moko disease, and treat with fungicides or remove infected plants.\n\n",
    "15. During the growing phase, protect the plants from strong winds and heavy rains using windbreaks or supports.\n\n",
    "16. Prune dead leaves and damaged plant parts regularly to encourage healthy growth and prevent fungal infections.\n\n",
    "17. Keep the area around the banana plants free of weeds, which can compete for water and nutrients.\n\n",
    "18. Provide shade for young plants to avoid sunburn, especially in hotter climates.\n\n",
    "19. As the plant grows, remove suckers that are not required to ensure better nutrition for the main plant.\n\n",
    "20. Allow the banana fruit to develop fully on the plant before harvesting, typically 9-12 months after planting.\n\n",
    "21. Harvest bananas when the fruit has reached full size but is still green. Use a sharp knife to cut the bunches carefully.\n\n",
    "22. Handle harvested bananas gently to avoid bruising or damaging the fruit.\n\n",
    "23. Store bananas in a cool, dry place to ripen, and monitor for any signs of rot or disease during storage.\n\n",
    "24. After harvesting, cut back the plant to ground level and leave the sucker to grow, continuing the cycle of banana production.\n\n",
    "25. Practice crop rotation or intercropping with other plants to reduce pest buildup and improve soil health.\n\n"
  ],

  "Groundnut": [
    "1. Select a well-drained sandy loam soil with a slightly acidic to neutral pH (5.5 - 7.0) for groundnut cultivation.\n\n",
    "2. Prepare the field by plowing and harrowing to create a fine seedbed.\n\n",
    "3. Test the soil for nutrient levels and amend with organic compost or well-rotted manure.\n\n",
    "4. Groundnut requires warm soil temperatures between 25-30°C, so wait for the appropriate season to plant.\n\n",
    "5. Choose certified, disease-free seeds for sowing, preferably groundnut varieties suited to the local climate.\n\n",
    "6. Plant seeds in rows, maintaining a spacing of 30 cm between plants and 60 cm between rows.\n\n",
    "7. Sow seeds at a depth of 3-5 cm to ensure proper germination.\n\n",
    "8. Water the plants after sowing to facilitate germination, and ensure the soil remains moist but not waterlogged.\n\n",
    "9. After sowing, monitor the soil moisture closely, especially during dry periods, and water regularly.\n\n",
    "10. Mulch around the plants to conserve moisture, control weeds, and improve soil structure.\n\n",
    "11. Apply a balanced fertilizer rich in nitrogen, phosphorus, and potassium at planting time and during early growth stages.\n\n",
    "12. Control weeds in the early stages of growth by shallow cultivation or using herbicides.\n\n",
    "13. Monitor the crop regularly for pest infestations, including aphids, whiteflies, and groundnut pod borers, and treat accordingly.\n\n",
    "14. Look out for signs of diseases like rust, leaf spot, and wilt. Use fungicides if necessary, and remove infected plants.\n\n",
    "15. Groundnut requires good air circulation, so ensure proper row spacing and avoid overcrowding.\n\n",
    "16. Ensure that the crop receives sufficient sunlight, as groundnuts thrive in full sun.\n\n",
    "17. As the plants grow, provide support to the stems to prevent bending or breaking due to wind or rain.\n\n",
    "18. Remove any excess or non-productive plants to allow better nutrition to the remaining plants.\n\n",
    "19. Groundnuts are sensitive to water stress during pod formation, so ensure adequate water during this critical stage.\n\n",
    "20. Groundnuts generally take 4-5 months to reach maturity. Check for maturity when the leaves start yellowing.\n\n",
    "21. Harvest groundnuts when the leaves begin to yellow and the pods have hardened. Dig up the plants carefully using a fork or shovel.\n\n",
    "22. Dry the harvested plants for 1-2 weeks in a well-ventilated, shaded area to reduce moisture content.\n\n",
    "23. After drying, separate the groundnuts from the roots and remove any remaining soil or debris.\n\n",
    "24. Store the harvested groundnuts in cool, dry conditions to prevent mold or fungal growth during storage.\n\n",
    "25. Groundnut can be stored for extended periods if kept in airtight containers or sacks to prevent pest infestations.\n\n",
    "26. Practice crop rotation with legumes or other crops to improve soil health and reduce pest buildup.\n\n",
    "27. After harvesting, remove any remaining plant debris from the field to minimize the risk of disease and pests for the next crop cycle.\n\n"
  ],
  "Brinjal": [
    "1. Select a suitable variety of brinjal that is well-suited for your local climate and growing conditions.\n\n",
    "2. Choose a planting site that receives full sunlight for at least 6-8 hours a day.\n\n",
    "3. Brinjal prefers well-drained, fertile soil with a slightly acidic to neutral pH (5.5 to 7.0). Test the soil before planting.\n\n",
    "4. Prepare the soil by digging and loosening it to a depth of at least 30 cm (12 inches). Add compost or well-rotted organic matter to improve fertility.\n\n",
    "5. If planting in rows, space the brinjal plants about 45-60 cm (18-24 inches) apart to allow for proper air circulation and growth.\n\n",
    "6. Transplant brinjal seedlings when they are 6-8 weeks old, or when the danger of frost has passed.\n\n",
    "7. Dig holes for the seedlings and place them at the same depth as they were in the nursery. Water thoroughly after planting.\n\n",
    "8. Water the plants regularly to keep the soil moist but not waterlogged. Brinjal needs consistent moisture, especially during the flowering and fruiting stages.\n\n",
    "9. Mulch around the plants to retain soil moisture, suppress weeds, and regulate soil temperature.\n\n",
    "10. Brinjal plants need regular feeding. Use a balanced fertilizer at planting time and then every 3-4 weeks during the growing season.\n\n",
    "11. Apply additional potassium-rich fertilizers during the fruiting phase to promote healthy fruit development.\n\n",
    "12. Prune the plants regularly to remove dead or damaged leaves and stems. This will encourage strong growth and better airflow.\n\n",
    "13. Remove suckers (side shoots) that grow in the leaf axils to direct more energy into fruit production.\n\n",
    "14. Use stakes or cages to support the plants, especially indeterminate varieties. This keeps the fruits off the ground and helps prevent disease.\n\n",
    "15. Brinjal is prone to various pests like aphids, whiteflies, and caterpillars. Regularly inspect the plants and apply insecticidal soap or neem oil if needed.\n\n",
    "16. Watch out for fungal diseases such as powdery mildew and blight. If necessary, apply fungicides to protect the plants.\n\n",
    "17. Water the plants at the base to avoid wetting the leaves, which can encourage fungal diseases.\n\n",
    "18. If leaves start to yellow, it may indicate a nitrogen deficiency. Apply a nitrogen-rich fertilizer to correct the issue.\n\n",
    "19. Harvest brinjal when the fruits are firm, shiny, and have reached the full color of the variety. Overripe fruits may become bitter.\n\n",
    "20. Use pruning shears to cut the fruits from the plant, leaving a short stem to prevent damage to the fruit.\n\n",
    "21. After harvest, store the brinjal in a cool, dry place. Avoid storing them in plastic bags to prevent moisture buildup, which could cause rot.\n\n",
    "22. Rotate crops each year to avoid soil-borne diseases like verticillium wilt, which affect brinjal plants.\n\n",
    "23. Clean up plant debris after the growing season to reduce the risk of overwintering pests and diseases.\n\n",
    "24. Practice crop rotation by planting brinjal in different areas each season to prevent pest and disease buildup in the soil.\n\n",
    "25. Brinjal can also be grown as part of a companion planting system. Planting with basil or marigolds can help repel pests and improve growth.\n\n",
    "26. Regularly inspect the plants for any signs of nutrient deficiencies, pests, or diseases, and treat them promptly to ensure healthy growth.\n\n",
    "27. Space the plants adequately to prevent overcrowding, which can lead to poor air circulation and increased risk of disease.\n\n",
    "28. In hot climates, provide some shade during the hottest part of the day to protect the plants from heat stress and improve fruit production.\n\n",
    "29. Ensure that the soil is consistently moist, especially during dry spells, to prevent stress on the plants and ensure healthy fruit development.\n\n",
    "30. Practice good sanitation by cleaning gardening tools and equipment regularly to reduce the risk of transferring diseases between plants.\n\n"
  ]
,
  "Chili": [
    "1. Choose a variety of chili suitable for your local climate and growing conditions.\n\n",
    "2. Select a planting site with well-drained soil and full sunlight exposure (at least 6-8 hours a day).\n\n",
    "3. Prepare the soil by loosening it to a depth of 25-30 cm (10-12 inches). Add compost or organic matter to improve fertility.\n\n",
    "4. Chilli prefers slightly acidic to neutral soil with a pH range of 6.0 to 7.0. Test the soil and amend it accordingly.\n\n",
    "5. Start seeds indoors 8-10 weeks before the last frost date, or directly sow seeds in the garden once the soil is warm enough.\n\n",
    "6. Sow the chili seeds about 0.5 cm (1/4 inch) deep in seed trays or pots filled with seed-starting mix.\n\n",
    "7. Maintain a temperature of 20-30°C (68-86°F) for seed germination. Keep the soil moist but not waterlogged.\n\n",
    "8. Once the seedlings develop 2-3 true leaves, transplant them into individual pots or directly into the garden if the temperature is warm enough.\n\n",
    "9. Space the seedlings 30-45 cm (12-18 inches) apart to allow proper air circulation and growth.\n\n",
    "10. Water the plants regularly, ensuring the soil stays moist but not soggy. Avoid overhead watering to reduce the risk of fungal diseases.\n\n",
    "11. Mulch around the base of the plants to retain moisture, suppress weeds, and regulate soil temperature.\n\n",
    "12. Chilli plants require regular feeding. Apply a balanced fertilizer at planting time and then every 3-4 weeks during the growing season.\n\n",
    "13. During the flowering and fruiting stage, switch to a potassium-rich fertilizer to encourage healthy fruit development.\n\n",
    "14. Prune the plants to remove dead or damaged leaves and branches. Pinch the top of the plant to encourage bushier growth and more fruit production.\n\n",
    "15. Provide support to the chili plants using stakes or cages to prevent breakage from heavy fruit.\n\n",
    "16. Protect the plants from pests such as aphids, thrips, and whiteflies. Use organic pest control methods like neem oil or insecticidal soap.\n\n",
    "17. Monitor the plants regularly for signs of disease, such as powdery mildew, and treat with appropriate fungicides if necessary.\n\n",
    "18. Apply insect netting or row covers to prevent insect infestations, especially during the early stages of growth.\n\n",
    "19. Water the plants early in the day to allow the soil to dry by evening and reduce the risk of diseases.\n\n",
    "20. Regularly check for nutrient deficiencies such as yellowing leaves, which may indicate a nitrogen shortage. Adjust fertilizer accordingly.\n\n",
    "21. Once the fruits start to develop, continue to monitor the plants for proper hydration and nutrient levels.\n\n",
    "22. Harvest the chilies when they reach full size and color. The timing will depend on the variety, ranging from green to red or yellow.\n\n",
    "23. Use pruning shears to harvest the fruit, leaving a small stem attached to the chili to prevent damage.\n\n",
    "24. Store fresh chilies in a cool, dry place. Alternatively, you can dry or freeze the chilies for later use.\n\n",
    "25. After the harvest, remove any plant debris from the garden to reduce the chances of pests and diseases overwintering in the soil.\n\n",
    "26. Practice crop rotation to prevent soil-borne diseases from affecting future chili crops.\n\n",
    "27. Regularly clean your gardening tools to avoid transferring diseases between plants.\n\n",
    "28. If chili plants show signs of stress, such as wilting or stunted growth, check for root rot or soil compaction and adjust watering practices accordingly.\n\n",
    "29. Consider companion planting with marigolds, basil, or onions to repel pests and promote healthier chili plants.\n\n",
    "30. In hot climates, provide some afternoon shade during the peak summer heat to prevent the plants from heat stress.\n\n"
  ]
,
  "Onion": [
    "1. Choose the right onion variety based on your local climate. There are three main types: short-day, long-day, and intermediate-day onions.\n\n",
    "2. Onions prefer well-drained, loose soil rich in organic matter. Ensure the soil is slightly acidic with a pH between 6.0 and 7.0.\n\n",
    "3. Prepare the soil by tilling it to a depth of 20-25 cm (8-10 inches) and incorporate compost or organic matter to improve soil fertility.\n\n",
    "4. For best results, grow onions in full sun with at least 6-8 hours of direct sunlight per day.\n\n",
    "5. Onion seeds can be started indoors 8-10 weeks before the last expected frost date, or direct sow them outdoors when soil temperatures reach 10°C (50°F).\n\n",
    "6. If growing from sets (small bulbs), plant them 2.5 cm (1 inch) deep with the pointed end facing up.\n\n",
    "7. Space onion seeds or sets about 5-7 cm (2-3 inches) apart in rows 30-45 cm (12-18 inches) apart.\n\n",
    "8. If starting from seed, sow the seeds 1 cm (1/2 inch) deep in trays or seed beds, and keep the soil moist but not waterlogged.\n\n",
    "9. Water the plants regularly to maintain consistent soil moisture, but avoid over-watering, as onions can rot in soggy soil.\n\n",
    "10. Mulch the onion bed with organic mulch such as straw or grass clippings to retain moisture, control weeds, and regulate soil temperature.\n\n",
    "11. Apply a balanced fertilizer or a nitrogen-rich fertilizer when planting onions to support strong leaf growth. Follow up with additional feedings as the plants grow.\n\n",
    "12. Keep the soil evenly moist during the growing season, especially during bulbing. Water deeply once a week, depending on rainfall and soil conditions.\n\n",
    "13. Thin the onions once they develop their first few leaves, keeping the strongest plants and removing any weak or overcrowded ones.\n\n",
    "14. Watch for onion pests such as onion flies, thrips, and aphids. Use organic insecticides or companion planting to deter pests.\n\n",
    "15. Onions are susceptible to fungal diseases like downy mildew and rust. Use fungicides if needed and practice crop rotation to minimize the risk of disease.\n\n",
    "16. Ensure the onion plants have enough space for proper air circulation to reduce the chances of fungal infections.\n\n",
    "17. Control weeds around the onions to prevent them from competing for nutrients and water. Hand-pulling is recommended to avoid damaging the shallow roots.\n\n",
    "18. Once the onion bulbs begin to swell, reduce watering to allow the bulbs to mature and dry out slightly.\n\n",
    "19. When the onion tops begin to yellow and fall over, it’s a sign that they are ready to be harvested.\n\n",
    "20. Gently lift the onions from the ground using a fork or shovel, being careful not to damage the bulbs.\n\n",
    "21. After harvesting, allow the onions to cure in a dry, well-ventilated area for 2-3 weeks to dry out the necks and outer layers.\n\n",
    "22. Once the onions are fully cured, trim the roots and cut off the tops, leaving about 2.5 cm (1 inch) of the stem.\n\n",
    "23. Store the onions in a cool, dry, and dark place with good airflow to prevent spoilage. Proper storage can extend shelf life for several months.\n\n",
    "24. Rotate onion crops annually to avoid soil-borne diseases and pests from accumulating in the soil.\n\n",
    "25. If onions start to show signs of bolting (producing flower stalks), remove the flower stalks immediately to allow the bulbs to develop properly.\n\n",
    "26. In regions with harsh winters, onions can be overwintered in cold frames or greenhouses for an earlier harvest the following spring.\n\n",
    "27. If the soil is too heavy or compacted, consider growing onions in raised beds or containers for better drainage.\n\n",
    "28. Practice good sanitation by cleaning tools and removing plant debris to reduce the risk of spreading diseases.\n\n",
    "29. Use appropriate pest control measures to keep rodents, such as rats and mice, from eating the harvested onions.\n\n",
    "30. If the onion bulbs start to show signs of soft spots or mold, discard them to prevent the infection from spreading to other onions.\n\n"
  ]
,
  "Guava": [
    "1. Choose a guava variety suitable for your climate, such as tropical or subtropical varieties.\n\n",
    "2. Select a well-drained, loamy soil for guava cultivation. Guavas prefer a soil pH between 5.5 and 7.0.\n\n",
    "3. Prepare the planting site by clearing the area of weeds, rocks, and debris. Till the soil to a depth of 30-40 cm (12-16 inches).\n\n",
    "4. Plant guava trees in full sun for optimal growth, as they require 6-8 hours of sunlight per day.\n\n",
    "5. Dig a hole twice the size of the root ball of the guava sapling. The hole should be at least 60 cm (2 feet) wide and deep.\n\n",
    "6. Place the guava sapling in the hole and fill it with soil, ensuring the root crown is level with the soil surface.\n\n",
    "7. Water the guava sapling immediately after planting to help settle the soil and eliminate air pockets.\n\n",
    "8. Mulch the base of the guava tree with organic mulch, such as straw or leaves, to conserve moisture, suppress weeds, and improve soil health.\n\n",
    "9. Water the plant regularly, especially during dry spells, but avoid over-watering, as guavas do not like waterlogged soil.\n\n",
    "10. Guava trees benefit from regular pruning. Trim any dead or diseased branches to promote healthy growth.\n\n",
    "11. Fertilize the guava tree with a balanced fertilizer or organic compost every 3-4 months during the growing season.\n\n",
    "12. For young guava trees, apply a nitrogen-rich fertilizer to encourage leaf growth. For mature trees, switch to a balanced fertilizer.\n\n",
    "13. Keep the area around the guava tree free of weeds to reduce competition for nutrients and water.\n\n",
    "14. Guava trees are susceptible to pests such as fruit flies, aphids, and scale insects. Monitor for pests and use appropriate pest control methods.\n\n",
    "15. Keep an eye out for fungal diseases like powdery mildew and leaf spot. Use fungicides if necessary, and ensure proper spacing between trees for air circulation.\n\n",
    "16. Water deeply during fruit development to promote healthy fruit growth, but avoid excessive watering that can lead to root rot.\n\n",
    "17. Once the tree starts producing fruit, ensure that the guava fruits are evenly spaced on the branches to allow proper growth.\n\n",
    "18. Thin out excess fruit to ensure the remaining guavas develop fully and maintain the health of the tree.\n\n",
    "19. Harvest guavas when they are fully ripe. Ripe guavas have a yellowish-green skin (for most varieties) and a sweet fragrance.\n\n",
    "20. Carefully cut the guavas from the tree using sharp scissors or pruners, leaving a small stem attached to the fruit.\n\n",
    "21. After harvesting, allow the guavas to ripen further at room temperature if necessary.\n\n",
    "22. For long-term storage, refrigerate guavas to extend their shelf life, but note that guavas are best consumed fresh.\n\n",
    "23. Watering should be reduced towards the end of the growing season to allow the plant to prepare for dormancy during the colder months.\n\n",
    "24. In areas with harsh winters, guava trees can be covered with a protective cloth or placed in greenhouses to prevent frost damage.\n\n",
    "25. Practice crop rotation in the area around guava trees to avoid soil depletion and reduce the buildup of pests and diseases.\n\n",
    "26. Guava trees are hardy and can tolerate some drought, but consistent watering during the growing season will lead to better yields and fruit quality.\n\n",
    "27. If you have multiple guava trees, space them at least 4-5 meters (13-16 feet) apart to allow proper air circulation and light exposure.\n\n",
    "28. Check for root rot by inspecting the roots of the tree periodically. If the roots are blackened or mushy, consider improving soil drainage.\n\n",
    "29. Prune the guava tree regularly to remove any damaged or overcrowded branches and maintain a manageable shape.\n\n",
    "30. Guavas generally take 3-4 years to start bearing fruit after planting, but regular care and maintenance will ensure healthy growth and higher yields.\n\n"
  ]
,
  "Papaya": [
    "1. Select a well-drained, sandy loam soil with a pH of 6.0 to 6.5 for planting papaya.\n\n",
    "2. Prepare the site by clearing weeds and debris, and till the soil to a depth of 30-40 cm (12-16 inches).\n\n",
    "3. Choose a sunny location with at least 8 hours of sunlight daily, as papaya trees thrive in full sunlight.\n\n",
    "4. If planting multiple trees, space them 2-3 meters (6-10 feet) apart to allow proper air circulation.\n\n",
    "5. Dig planting holes that are 2-3 times the size of the root ball of the sapling, ensuring proper root growth.\n\n",
    "6. Mix organic compost or well-rotted manure with the soil to improve fertility and drainage.\n\n",
    "7. Gently place the papaya sapling in the hole and fill it with soil, making sure the root crown is level with the surrounding soil.\n\n",
    "8. Water the newly planted sapling thoroughly to settle the soil around the roots and eliminate air pockets.\n\n",
    "9. Apply a thick layer of mulch around the base of the tree to retain moisture, suppress weeds, and maintain soil temperature.\n\n",
    "10. Water papaya plants regularly, ensuring the soil stays moist but not waterlogged. Avoid over-watering.\n\n",
    "11. Fertilize papaya trees with a balanced fertilizer, rich in nitrogen, phosphorus, and potassium, every 2-3 months.\n\n",
    "12. Apply the fertilizer in small amounts around the base of the plant and water it in well to help with nutrient absorption.\n\n",
    "13. Prune dead or damaged leaves and branches regularly to encourage healthy growth and prevent diseases.\n\n",
    "14. As papaya trees grow, remove any lower leaves that touch the ground to reduce the risk of soil-borne diseases.\n\n",
    "15. Mulch the soil to keep the base of the tree dry and prevent fungal infections that can affect papaya trees.\n\n",
    "16. Watch for pests like aphids, mealybugs, and fruit flies. Use natural pesticides like neem oil to control infestations.\n\n",
    "17. Keep the area around the papaya tree free of weeds to reduce competition for water and nutrients.\n\n",
    "18. As the tree matures, ensure it receives adequate sunlight and airflow to prevent fungal diseases like powdery mildew.\n\n",
    "19. Papaya trees typically start producing fruit within 6-12 months after planting, depending on the variety and growing conditions.\n\n",
    "20. When the fruits begin to ripen, the skin will turn from green to yellow-orange. Harvest the papayas once they show these color changes.\n\n",
    "21. Cut the papayas from the tree carefully, leaving a small portion of the stem attached to prevent damage.\n\n",
    "22. After harvesting, allow the fruits to ripen further at room temperature before consuming.\n\n",
    "23. If the tree shows signs of root rot or poor growth, check the drainage and consider replanting in a different spot with better soil conditions.\n\n",
    "24. Water the papaya trees deeply during dry spells, but reduce watering during the rainy season to avoid waterlogging.\n\n",
    "25. Papaya trees are sensitive to frost, so if you live in a cooler region, plant them in a greenhouse or cover them with frost cloth during cold weather.\n\n",
    "26. Prune the tree regularly to maintain its shape and remove unwanted branches that may hinder airflow or sunlight penetration.\n\n",
    "27. In areas with strong winds, support the papaya tree with stakes to prevent damage to the trunk and branches.\n\n",
    "28. Crop rotation is beneficial to avoid soil depletion and reduce the chances of pests and diseases affecting your papaya crop.\n\n",
    "29. Continue to monitor for pests, diseases, and environmental stressors throughout the growing season for healthy papaya trees.\n\n",
    "30. Once the tree is fully established, it may produce fruit for several years, with optimal yields occurring during the warmer months.\n\n"
  ]
,
  "Carrot": [
    "1. Choose a well-drained, sandy loam soil with a pH of 6.0 to 6.8 for carrot cultivation.\n\n",
    "2. Prepare the soil by loosening it to a depth of 25-30 cm (10-12 inches), as carrots need deep soil to grow straight roots.\n\n",
    "3. Clear the planting area of weeds, stones, and other debris that may hinder root growth.\n\n",
    "4. Incorporate organic matter such as compost into the soil to improve its structure, fertility, and drainage.\n\n",
    "5. Create furrows or rows in the soil, spacing them 20-30 cm (8-12 inches) apart to allow room for the carrots to grow.\n\n",
    "6. Sow carrot seeds directly into the soil, about 0.5-1 cm (0.2-0.4 inches) deep, and thin them to about 2-4 cm (1-2 inches) apart once seedlings emerge.\n\n",
    "7. Keep the soil consistently moist during the germination period, which usually takes 10-20 days, depending on the temperature.\n\n",
    "8. Carrots require full sunlight for optimal growth, so ensure they are planted in a sunny location.\n\n",
    "9. Water the carrots regularly, ensuring the soil remains moist but not soggy, as carrots are sensitive to water stress.\n\n",
    "10. Apply a balanced fertilizer once the seedlings have established, typically 2-3 weeks after sowing.\n\n",
    "11. Avoid excessive nitrogen fertilization, as it can cause the plants to grow lush foliage at the expense of root development.\n\n",
    "12. Mulch around the carrots to retain soil moisture, control weeds, and keep the soil temperature stable.\n\n",
    "13. Thin the carrot seedlings if necessary to ensure they have enough space for proper root development.\n\n",
    "14. Water carrots deeply, especially during dry periods, to encourage deep root growth.\n\n",
    "15. Control weeds carefully, as they can compete with carrots for nutrients and space.\n\n",
    "16. Check for pests such as carrot flies and aphids. Use organic pest control methods like neem oil or insecticidal soap if needed.\n\n",
    "17. Keep the carrot bed free of excess organic matter, as rotting material can attract pests and diseases.\n\n",
    "18. Carrots can be harvested once they reach a desirable size, typically 2-4 months after planting, depending on the variety.\n\n",
    "19. To check if carrots are ready for harvest, gently loosen the soil around the base of a few carrots and inspect their size and color.\n\n",
    "20. Pull the carrots out of the soil carefully to avoid breaking them. Use a garden fork to help loosen the soil if necessary.\n\n",
    "21. After harvesting, remove the tops of the carrots, leaving a small amount of stem attached to prevent damage during storage.\n\n",
    "22. Store harvested carrots in a cool, dark place with high humidity to prolong their shelf life.\n\n",
    "23. Rotate the carrot crops every season to reduce the risk of soil-borne diseases and pests.\n\n",
    "24. Carrots can be grown in succession plantings to ensure a continuous harvest throughout the growing season.\n\n",
    "25. Maintain the area around the carrots free of excessive waterlogging and ensure good drainage to prevent rot.\n\n",
    "26. Ensure that the growing area is not overcrowded, as too many plants can stunt the growth of individual carrots.\n\n",
    "27. Consider using row covers or netting to protect the young plants from insect pests, especially carrot flies.\n\n",
    "28. If carrot tops start to turn yellow, it may be a sign of nutrient deficiency or insufficient water. Adjust care accordingly.\n\n",
    "29. Harvest early carrots when they are small and tender for a sweet flavor, or wait until they are fully matured for larger, storage-ready roots.\n\n",
    "30. After harvesting, wash carrots thoroughly, but handle them gently to avoid damage.\n\n"
  ]
,
  "Cucumber": [
    "1. Choose a well-drained, fertile soil with a pH level between 6.0 and 7.0 for cucumber cultivation.\n\n",
    "2. Prepare the soil by tilling it to a depth of about 15-20 cm (6-8 inches) and incorporate organic matter, such as compost or well-rotted manure.\n\n",
    "3. Select a sunny location, as cucumbers require full sunlight for at least 6-8 hours a day for optimal growth.\n\n",
    "4. Create rows or hills in the soil, spacing them about 1 meter (3 feet) apart for proper air circulation and growth.\n\n",
    "5. Sow cucumber seeds directly into the soil after the danger of frost has passed, typically when the soil temperature reaches 18°C (65°F).\n\n",
    "6. Plant cucumber seeds 2-3 cm (1 inch) deep in the soil, with a spacing of about 30-40 cm (12-16 inches) between seeds.\n\n",
    "7. Keep the soil consistently moist but not waterlogged during the germination period, which usually takes 7-10 days.\n\n",
    "8. Thin the seedlings to about 30 cm (12 inches) apart once they have two or more true leaves to allow space for healthy growth.\n\n",
    "9. Mulch around the base of the plants to help retain soil moisture, suppress weeds, and regulate soil temperature.\n\n",
    "10. Water cucumbers regularly, providing about 2.5 cm (1 inch) of water per week. Water deeply at the base of the plants to encourage deep root growth.\n\n",
    "11. Apply a balanced fertilizer 3-4 weeks after planting, using a fertilizer with a higher ratio of phosphorus and potassium for fruit development.\n\n",
    "12. Consider using a trellis or vertical growing system to support the cucumber vines and improve air circulation, reducing the risk of disease.\n\n",
    "13. Train the cucumber vines to grow up the trellis or support by gently tying them with soft twine or garden clips.\n\n",
    "14. Control weeds around the cucumber plants to prevent competition for nutrients and water.\n\n",
    "15. Monitor for common pests such as aphids, cucumber beetles, and squash bugs. Use organic pest control methods like neem oil if necessary.\n\n",
    "16. Check for diseases like powdery mildew, downy mildew, or anthracnose. Use appropriate fungicides or remove infected leaves to control spread.\n\n",
    "17. Pinch off the tips of the vines when they reach the desired length to encourage lateral growth and more fruit production.\n\n",
    "18. Harvest cucumbers when they are fully grown but still firm and before they turn yellow. They typically take 50-70 days from planting.\n\n",
    "19. To test if cucumbers are ready for harvest, gently squeeze the fruit; if it feels firm and full, it is likely ripe.\n\n",
    "20. Harvest cucumbers by cutting them from the vine with a sharp knife or pruners, leaving a short piece of the stem attached to prevent damage.\n\n",
    "21. If cucumbers are left on the vine too long, they may become bitter and overripe, so it’s important to pick them regularly.\n\n",
    "22. After harvesting, wash cucumbers gently with cool water and store them in the refrigerator to extend shelf life.\n\n",
    "23. Rotate cucumber crops each season to reduce the risk of soil-borne diseases and pests.\n\n",
    "24. After the harvest, remove and dispose of any plant debris to prevent future pest problems.\n\n",
    "25. Keep the growing area clean and free of debris that may harbor insects or diseases.\n\n",
    "26. If cucumbers are grown in containers, ensure that they are watered regularly and have good drainage to prevent root rot.\n\n",
    "27. If using mulch, ensure it is not too thick, as this may encourage pests like slugs.\n\n",
    "28. Consider planting companion plants like marigolds or basil to repel cucumber pests naturally.\n\n",
    "29. For a continuous harvest, stagger the planting dates or choose early and late-maturing cucumber varieties.\n\n",
    "30. Be mindful of overwatering, as cucumber plants are prone to root rot and other water-related diseases if the soil remains too wet.\n\n"
  ]
,
  "Pumpkin": [
    "1. Choose a well-drained, fertile soil with a slightly acidic to neutral pH (6.0-7.5) for growing pumpkins.\n\n",
    "2. Prepare the soil by tilling it to a depth of about 20-25 cm (8-10 inches), adding organic compost to improve soil structure and fertility.\n\n",
    "3. Select a sunny location, as pumpkins need full sunlight for at least 6-8 hours a day to grow well.\n\n",
    "4. Create mounds or hills in the soil, spaced 1.5-2 meters (5-6 feet) apart, to allow proper air circulation and space for vine growth.\n\n",
    "5. Plant pumpkin seeds directly into the soil after the last frost date and when the soil temperature reaches at least 21°C (70°F).\n\n",
    "6. Plant the seeds about 2.5-5 cm (1-2 inches) deep, and space the seeds about 90 cm (3 feet) apart within the mounds.\n\n",
    "7. Water the soil thoroughly after planting, ensuring the soil remains moist but not waterlogged during the germination process, which takes about 7-10 days.\n\n",
    "8. Once the seeds germinate and the seedlings have 2-3 leaves, thin them to allow for proper spacing, leaving the healthiest plant per mound.\n\n",
    "9. Keep the soil consistently moist, but avoid overwatering as pumpkins are susceptible to root rot in soggy conditions.\n\n",
    "10. Apply mulch around the base of the plants to retain moisture, suppress weeds, and regulate soil temperature.\n\n",
    "11. Fertilize the pumpkin plants with a balanced fertilizer, preferably one higher in phosphorus and potassium to encourage strong root and fruit development.\n\n",
    "12. As the vines grow, ensure that they have ample space to spread out, as pumpkin vines can cover a large area.\n\n",
    "13. If the vines start to grow too large, you can prune them back slightly to control their spread and focus the plant's energy on fruit production.\n\n",
    "14. During the growing season, regularly check for pests like squash bugs, aphids, and cucumber beetles. Use organic pest control methods like neem oil if necessary.\n\n",
    "15. Monitor the pumpkin plants for diseases like powdery mildew or downy mildew. If found, remove infected leaves and use appropriate fungicides.\n\n",
    "16. Once the pumpkin vines begin to flower, hand-pollinate the flowers if needed by transferring pollen from male flowers to female flowers with a small brush or cotton swab.\n\n",
    "17. Allow the pumpkins to grow on the vines, and ensure that they are supported if they are growing on the ground. You can place them on straw or cardboard to keep them off the soil.\n\n",
    "18. Water the plants deeply, ensuring the roots get plenty of moisture, but avoid getting water on the leaves to reduce the risk of fungal infections.\n\n",
    "19. Continue to monitor for weeds around the pumpkin plants, as they can compete for water and nutrients.\n\n",
    "20. As pumpkins approach maturity, reduce watering to avoid overly moist conditions that can cause rotting.\n\n",
    "21. Harvest pumpkins when they are fully ripe, which is indicated by a deep, rich color, a firm skin, and a dull appearance.\n\n",
    "22. Check the pumpkin’s stem; it should be dry and hardened when the pumpkin is fully ripe.\n\n",
    "23. Use a sharp knife or pruners to cut the pumpkin from the vine, leaving a few inches of stem attached to prevent damage.\n\n",
    "24. Handle pumpkins gently during harvest to avoid bruising or cutting the skin, as this can reduce their shelf life.\n\n",
    "25. Cure the pumpkins by leaving them in a warm, dry area for 10-14 days to harden the skin and improve storage quality.\n\n",
    "26. After curing, store pumpkins in a cool, dry place, ideally between 10-15°C (50-59°F), where they can last for several months.\n\n",
    "27. Rotate the pumpkins regularly to ensure even ripening and to prevent rot.\n\n",
    "28. If growing pumpkins in containers, ensure that the container is large enough (at least 100 liters) and has proper drainage to prevent root rot.\n\n",
    "29. In container gardening, use a nutrient-rich potting mix and provide additional watering and fertilization, as the soil in containers can dry out faster.\n\n",
    "30. Consider using companion planting techniques, such as planting pumpkins with corn or beans, to enhance growth and deter pests naturally.\n\n"
  ]
,
  "Cabbage": [
    "1. Choose a well-drained, fertile soil with a slightly acidic pH of 6.0-6.8 for cabbage growth.\n\n",
    "2. Prepare the soil by tilling it to a depth of 15-20 cm (6-8 inches) and adding organic matter such as compost to improve soil structure.\n\n",
    "3. Select a location that receives full sunlight for at least 6-8 hours per day.\n\n",
    "4. Before planting, ensure that the soil temperature is between 7°C (45°F) and 18°C (65°F), as cabbage prefers cool weather.\n\n",
    "5. You can start cabbage from seeds indoors or sow them directly outdoors. If starting indoors, sow seeds 6-8 weeks before the last expected frost date.\n\n",
    "6. If starting seeds indoors, transplant the seedlings outdoors when they are 4-6 weeks old and have at least 2-3 true leaves.\n\n",
    "7. Space the cabbage plants about 30-45 cm (12-18 inches) apart, with rows spaced 45-60 cm (18-24 inches) apart, to allow enough room for growth.\n\n",
    "8. Water the soil thoroughly after planting and ensure that it remains moist throughout the growing period.\n\n",
    "9. Mulch around the base of the plants to help retain moisture, suppress weeds, and keep the soil temperature stable.\n\n",
    "10. Apply a balanced fertilizer to the soil before planting and side-dress the plants with nitrogen-rich fertilizer as they grow.\n\n",
    "11. Ensure the plants receive consistent moisture throughout the growing season, especially during dry spells, to promote healthy growth.\n\n",
    "12. Keep an eye on cabbage pests such as aphids, cabbage worms, and cabbage loopers. Use organic insecticides or remove pests by hand if necessary.\n\n",
    "13. If cabbage leaves become damaged by pests or diseases, remove the affected leaves promptly to prevent further spread.\n\n",
    "14. As the cabbage plants grow, thin them if necessary to allow for proper air circulation, which can help reduce the risk of disease.\n\n",
    "15. Cabbage can be sensitive to extreme temperatures, so ensure that the plants are protected during periods of extreme heat or frost.\n\n",
    "16. Cabbage plants need adequate space for their heads to form. Ensure that there is enough space for each plant to develop its full head size.\n\n",
    "17. During the growing season, check the cabbage heads regularly. They should be firm and tight when ready for harvest.\n\n",
    "18. Harvest cabbage heads when they are fully formed, dense, and firm to the touch. Cut the heads off at the base with a sharp knife.\n\n",
    "19. If growing multiple cabbage varieties, stagger planting times to ensure a continuous harvest throughout the growing season.\n\n",
    "20. After harvesting, remove any remaining plant debris from the garden to reduce the risk of diseases in the next planting season.\n\n",
    "21. Cabbage can be stored for several weeks in a cool, dry place or in a refrigerator. Keep the heads intact for longer shelf life.\n\n",
    "22. If growing cabbage in containers, choose a large container with good drainage, and ensure the soil is rich in nutrients.\n\n",
    "23. Cabbage can also be grown as a companion plant with crops like carrots, onions, and dill, which can help improve growth and deter pests.\n\n",
    "24. Rotate cabbage with other crops like legumes to avoid soil depletion and reduce pest build-up from year to year.\n\n",
    "25. Consider using row covers or netting to protect cabbage from pests like cabbage moths and birds.\n\n"
  ]
,
  "Cauliflower": [
    "1. Choose well-drained, fertile soil with a pH level between 6.0 and 7.0 for optimal growth.\n\n",
    "2. Prepare the soil by tilling it to a depth of 20-25 cm (8-10 inches) and adding organic matter such as compost to improve soil fertility.\n\n",
    "3. Select a site that receives full sunlight for at least 6 hours a day. Cauliflower prefers cool weather, so choose a location with a moderate climate.\n\n",
    "4. Before planting, check the soil temperature. Cauliflower grows best when the soil temperature is between 15°C (60°F) and 21°C (70°F).\n\n",
    "5. Start cauliflower indoors 6-8 weeks before the last expected frost date, or sow the seeds directly outdoors if the weather is suitable.\n\n",
    "6. Transplant seedlings outdoors when they are 4-6 weeks old and have at least 2-3 true leaves. Ensure that the danger of frost has passed.\n\n",
    "7. Space cauliflower plants 45-60 cm (18-24 inches) apart to give them ample room to develop large heads.\n\n",
    "8. Space rows 60-75 cm (24-30 inches) apart to allow enough airflow and reduce the risk of fungal diseases.\n\n",
    "9. Water the plants thoroughly after transplanting, ensuring that the soil is consistently moist throughout the growing season.\n\n",
    "10. Mulch around the base of the plants to retain moisture, suppress weeds, and keep the soil temperature stable.\n\n",
    "11. Apply a balanced fertilizer before planting and use a nitrogen-rich fertilizer during the growing season to promote strong leaf development.\n\n",
    "12. Maintain consistent moisture levels, especially during dry spells, to prevent stress and promote healthy head formation.\n\n",
    "13. Cauliflower is sensitive to heat, so keep the plants cool and shaded if the weather is hot. Use row covers if necessary to protect them from extreme temperatures.\n\n",
    "14. Regularly check the plants for pests, such as aphids, cabbage worms, and cauliflower maggots. Use organic pesticides or remove pests by hand if needed.\n\n",
    "15. To prevent damage from pests, inspect the undersides of leaves and remove any visible insects.\n\n",
    "16. Keep the plants well-weeded and avoid disturbing the roots while hoeing or weeding.\n\n",
    "17. For optimal head development, ensure that the cauliflower plants receive 1-1.5 inches (2.5-3.8 cm) of water per week.\n\n",
    "18. Protect developing cauliflower heads from the sun by tying the outer leaves over the head when it begins to form, a process called 'blanching.'\n\n",
    "19. Check the cauliflower heads regularly. They should be firm and compact with a creamy white color when ready to harvest.\n\n",
    "20. Harvest the cauliflower when the heads are 15-20 cm (6-8 inches) in diameter, and the curds (the white part) are tight and smooth.\n\n",
    "21. Cut the head off with a sharp knife, leaving the leaves attached to the stem. Harvesting early in the morning can help preserve the freshness.\n\n",
    "22. If you are growing multiple cauliflower varieties, stagger planting to ensure a continuous harvest throughout the growing season.\n\n",
    "23. After harvesting, remove any leftover plant debris from the garden to reduce the risk of pests and diseases for future crops.\n\n",
    "24. Store harvested cauliflower in a cool, dry place, ideally in the refrigerator where it can stay fresh for up to two weeks.\n\n",
    "25. Rotate cauliflower with other crops like legumes to prevent soil depletion and reduce the buildup of pests and diseases.\n\n",
    "26. Avoid planting cauliflower in the same soil for consecutive years to reduce the risk of soil-borne diseases and pest infestations.\n\n",
    "27. Use row covers or netting to protect the cauliflower from insects and birds during the growing season.\n\n"
  ]
,
  "Potato": [
    "1. Choose a sunny location with well-drained, loose soil for growing potatoes. A soil pH of 5.8-6.5 is ideal for potato growth.\n\n",
    "2. Prepare the soil by tilling it to a depth of 20-30 cm (8-12 inches). Add organic compost to improve soil fertility and texture.\n\n",
    "3. Select disease-free seed potatoes from a reputable supplier. Choose certified seed potatoes that are free of any signs of rot or disease.\n\n",
    "4. Cut larger seed potatoes into smaller pieces, each with at least one 'eye' (a sprout). Let the pieces sit in a cool, dry place for 1-2 days to allow them to heal and reduce the risk of rot.\n\n",
    "5. Plant potatoes after the last frost date when the soil has warmed to around 7°C (45°F). Potatoes grow best in cool, moderate temperatures.\n\n",
    "6. Space seed potato pieces about 30 cm (12 inches) apart in rows. Leave 60 cm (24 inches) between rows to provide enough space for tuber development.\n\n",
    "7. Plant each piece about 10-15 cm (4-6 inches) deep with the eye facing up. Cover the seed potatoes with soil after planting.\n\n",
    "8. Water the potatoes thoroughly after planting to ensure the soil is evenly moist. Maintain consistent moisture throughout the growing season.\n\n",
    "9. Apply a layer of mulch, such as straw or grass clippings, to help retain moisture, prevent weeds, and regulate soil temperature.\n\n",
    "10. Fertilize the potatoes with a balanced fertilizer at planting time, and then apply additional fertilizer when the plants are about 15 cm (6 inches) tall.\n\n",
    "11. As the potato plants grow, mound the soil around the base of the plants (a process known as 'hilling') to protect the developing tubers from sunlight and prevent greening.\n\n",
    "12. Continue hilling the soil every 2-3 weeks until the plants are about 30 cm (12 inches) tall.\n\n",
    "13. Keep the potato plants well-watered, but avoid overwatering, which can lead to root rot. Ensure the soil is well-drained to prevent waterlogging.\n\n",
    "14. Monitor the plants regularly for pests, such as aphids, potato beetles, and aphids. Remove pests by hand or use organic insecticides when necessary.\n\n",
    "15. Control weeds regularly to prevent competition for nutrients and water. Use mulch to reduce weed growth.\n\n",
    "16. During the growing season, potatoes need about 1-1.5 inches (2.5-3.8 cm) of water per week, depending on rainfall.\n\n",
    "17. Potatoes typically flower 6-8 weeks after planting. However, flowers are not an indicator of tuber maturity.\n\n",
    "18. Check the potatoes for readiness by gently digging around the base of the plant. Harvest new potatoes 8-10 weeks after planting, while tubers are still small and tender.\n\n",
    "19. For mature potatoes, wait until the foliage turns yellow and begins to die back, usually 10-12 weeks after planting.\n\n",
    "20. Harvest potatoes on a dry day, after the soil has dried slightly, to reduce the risk of damage. Gently dig around the plants with a fork or shovel.\n\n",
    "21. Handle the harvested potatoes carefully to avoid bruising or cutting them. Store the potatoes in a cool, dark, and well-ventilated place.\n\n",
    "22. After harvesting, cure the potatoes for 1-2 weeks in a cool, dark place to allow the skins to thicken and reduce the risk of sprouting.\n\n",
    "23. Store potatoes at temperatures between 4-10°C (40-50°F) in a dark, well-ventilated area to prevent sprouting and spoilage.\n\n",
    "24. Rotate crops and avoid planting potatoes in the same location for consecutive years to prevent soil-borne diseases.\n\n",
    "25. Avoid planting potatoes in soil with a history of potato blight, as this disease can severely damage crops.\n\n",
    "26. Use certified seed potatoes from trusted sources to reduce the risk of introducing diseases to your crop.\n\n",
    "27. Be vigilant for signs of blight and other diseases, such as yellowing leaves, brown spots, or mold. Treat infected plants with fungicides if necessary.\n\n",
    "28. Practice crop rotation to reduce pest and disease buildup in the soil, and always remove any plant debris after harvest.\n\n"
  ]
,
  "Green beans": [
    "1. Choose a sunny location with well-drained soil for growing green beans. Beans require at least 6-8 hours of sunlight daily.\n\n",
    "2. Prepare the soil by tilling it to a depth of 15-20 cm (6-8 inches). Beans prefer slightly acidic to neutral soil with a pH of 6.0-7.0.\n\n",
    "3. Add organic matter or compost to enrich the soil and improve its fertility and structure.\n\n",
    "4. Choose disease-free, high-quality bean seeds. There are two types of green beans: bush beans and pole beans. Select according to available space.\n\n",
    "5. Plant beans after the danger of frost has passed and when the soil temperature reaches 18°C (65°F) or higher.\n\n",
    "6. For bush beans, plant the seeds 2.5 cm (1 inch) deep and 5 cm (2 inches) apart in rows spaced 30 cm (12 inches) apart.\n\n",
    "7. For pole beans, plant seeds 2.5 cm (1 inch) deep and 5 cm (2 inches) apart, but provide trellises or stakes for the vines to climb.\n\n",
    "8. Water the seeds thoroughly after planting, keeping the soil consistently moist but not waterlogged.\n\n",
    "9. Keep the soil evenly moist, as beans require consistent moisture to grow well. Avoid overhead watering to reduce the risk of fungal diseases.\n\n",
    "10. Beans grow best in soil that is not overly rich in nitrogen, as too much nitrogen can encourage lush foliage growth rather than healthy bean production.\n\n",
    "11. Apply a balanced fertilizer at planting time or as a side dressing once the plants are a few inches tall if soil fertility is low.\n\n",
    "12. Mulch around the base of the plants to retain moisture, suppress weeds, and maintain an even soil temperature.\n\n",
    "13. Thin the plants to ensure proper air circulation and reduce competition for nutrients. Leave about 15 cm (6 inches) between bush bean plants.\n\n",
    "14. For pole beans, provide support such as a trellis or string system, and ensure they have enough vertical space to grow.\n\n",
    "15. Water deeply during dry spells to encourage healthy growth, ensuring the soil remains moist but not soggy.\n\n",
    "16. Monitor the plants for pests such as aphids, slugs, and bean beetles. Use organic pesticides or remove pests by hand if necessary.\n\n",
    "17. Green beans are susceptible to fungal diseases like powdery mildew. To reduce the risk, avoid overhead watering and maintain good air circulation around the plants.\n\n",
    "18. Harvest bush beans when they are young, tender, and have filled out but are still green. For pole beans, harvest as they mature on the vines.\n\n",
    "19. Beans are ready for harvest when the pods are firm and snap easily. If left too long, the pods will become tough and stringy.\n\n",
    "20. Pick beans regularly to encourage continuous production, as plants will stop producing once the beans begin to mature.\n\n",
    "21. After harvesting, remove any remaining plant debris and rotate crops to prevent soil-borne diseases.\n\n",
    "22. Store harvested beans in a cool, dry place or refrigerate fresh beans for short-term use.\n\n",
    "23. For dried beans, leave the pods to fully mature on the plant. Once dry, harvest and remove beans from the pods.\n\n",
    "24. Green beans can be blanched and frozen for longer storage, preserving their flavor and nutrients.\n\n",
    "25. Practice crop rotation to reduce the risk of pests and diseases that affect beans, such as root rot or rust.\n\n",
    "26. Avoid planting beans in the same location year after year to prevent the buildup of disease in the soil.\n\n",
    "27. Green beans grow quickly, so keep an eye on the plants for early signs of disease or pest issues.\n\n",
    "28. Avoid excessive watering close to harvest to prevent waterlogging and preserve the quality of the beans.\n\n"
  ]
,
  "Peas": [
    "1. Choose a location that receives full sunlight for at least 6-8 hours a day. Peas grow best in cool weather, ideally between 13-18°C (55-65°F).\n\n",
    "2. Prepare the soil by loosening it to a depth of 15-20 cm (6-8 inches). Peas prefer well-drained, slightly alkaline soil with a pH of 6.0-7.5.\n\n",
    "3. Add organic matter or compost to the soil to improve its structure and fertility.\n\n",
    "4. Choose high-quality, disease-free pea seeds. There are two main types: garden peas and snap peas. Select according to your preference.\n\n",
    "5. Plant peas early in the spring, as soon as the soil is workable and the risk of frost has passed. Peas are frost-hardy and can tolerate light frosts.\n\n",
    "6. Sow pea seeds 2.5 cm (1 inch) deep and space them about 5 cm (2 inches) apart in rows 30-45 cm (12-18 inches) apart.\n\n",
    "7. For tall pea varieties, install a trellis or support system before planting the seeds. Peas need something to climb on.\n\n",
    "8. Water the soil thoroughly after planting. Keep the soil evenly moist throughout the growing season.\n\n",
    "9. Peas do not tolerate hot temperatures, so ensure they grow in cooler conditions to avoid stress.\n\n",
    "10. Mulch around the base of the plants to retain moisture, keep the soil cool, and suppress weeds.\n\n",
    "11. As the peas grow, ensure they have enough space for air circulation to prevent fungal diseases.\n\n",
    "12. Regularly water the plants, especially during dry spells, but avoid waterlogging. Peas prefer slightly moist soil, not too wet.\n\n",
    "13. Fertilize peas sparingly, as they fix their own nitrogen. Over-fertilizing can lead to excessive leafy growth and fewer peas.\n\n",
    "14. Apply a light application of compost or a balanced fertilizer if the soil lacks nutrients, especially during the flowering stage.\n\n",
    "15. Monitor the plants for pests such as aphids, pea weevils, or powdery mildew. Use organic methods like neem oil or insecticidal soap if needed.\n\n",
    "16. Peas are sensitive to frost, so it is essential to plant early enough to ensure they mature before the temperatures rise too high.\n\n",
    "17. Peas usually take 60-70 days to mature, depending on the variety. Harvest when the pods are plump and bright green, but before they become overripe.\n\n",
    "18. Pick the peas when they are young and tender for the best taste and texture.\n\n",
    "19. For continuous harvest, pick peas regularly to encourage the plants to produce more pods.\n\n",
    "20. Once harvested, peas can be eaten fresh, frozen, or dried for long-term storage.\n\n",
    "21. After harvesting, remove any remaining plant debris and rotate your crops to reduce the risk of soil-borne diseases.\n\n",
    "22. If planting multiple rows of peas, ensure the rows are spaced widely enough to allow for good air circulation.\n\n",
    "23. Do not allow the plants to get too dry, as this can stress the plants and reduce yields.\n\n",
    "24. For drying peas, leave the pods on the plant until they are fully mature. Once dry, harvest the peas and store them in airtight containers.\n\n",
    "25. Practice crop rotation to prevent the buildup of diseases that can affect peas, such as root rot or wilt.\n\n",
    "26. Peas are great companion plants for many other crops, such as carrots, turnips, and lettuce.\n\n",
    "27. Avoid over-watering during harvest time to ensure the peas retain their flavor and texture.\n\n"
  ]
,
  "Garlic": [
    "1. Choose a well-drained location that receives full sunlight for at least 6-8 hours a day. Garlic grows best in cool climates with temperatures between 10-20°C (50-68°F).\n\n",
    "2. Prepare the soil by loosening it to a depth of 15-20 cm (6-8 inches). Garlic prefers slightly acidic to neutral soil with a pH of 6.0-7.0.\n\n",
    "3. Incorporate organic matter or well-rotted compost into the soil to improve its fertility and drainage.\n\n",
    "4. Select high-quality, disease-free garlic bulbs from a reliable source. Choose varieties suitable for your climate (hardneck or softneck).\n\n",
    "5. Separate the garlic bulb into individual cloves, keeping the papery skin intact. Do not use cloves from store-bought garlic, as they may not be suited for planting.\n\n",
    "6. Plant garlic cloves in the fall, about 4-6 weeks before the first expected frost. This allows the cloves to establish roots before winter.\n\n",
    "7. Space the garlic cloves 10-15 cm (4-6 inches) apart, with the pointed end facing up. Plant them about 5 cm (2 inches) deep.\n\n",
    "8. Space the rows 30-45 cm (12-18 inches) apart to provide ample room for the plants to grow and allow air circulation.\n\n",
    "9. Water the soil thoroughly after planting to help settle the cloves in place. Keep the soil consistently moist throughout the growing season.\n\n",
    "10. Mulch the garlic bed with straw or leaves to protect the cloves over winter and help retain soil moisture.\n\n",
    "11. In the spring, once the weather warms up, remove any mulch and keep the soil moist but not soggy.\n\n",
    "12. Garlic requires plenty of water, but it does not tolerate waterlogged soil. Ensure proper drainage.\n\n",
    "13. Apply a light application of nitrogen-rich fertilizer in early spring to encourage healthy foliage growth.\n\n",
    "14. As garlic grows, avoid disturbing the plants' roots. Weed the area regularly to reduce competition for nutrients.\n\n",
    "15. Keep an eye out for pests like aphids, root maggots, and garlic bloat nematodes. Use organic pest control methods as necessary.\n\n",
    "16. Ensure the garlic receives enough sunlight to produce strong foliage and bulbs.\n\n",
    "17. In late spring or early summer, you may notice flower scapes (the flower stalks). These can be removed to encourage better bulb growth.\n\n",
    "18. Allow the garlic plants to mature during the summer. The leaves will start turning yellow and dying back when the bulbs are ready to harvest.\n\n",
    "19. Garlic is usually ready to harvest when the lower leaves turn yellow and dry, but the upper leaves are still green.\n\n",
    "20. Carefully dig up the bulbs using a fork or spade. Be gentle to avoid damaging the bulbs.\n\n",
    "21. Once harvested, brush off any soil and lay the garlic out to cure in a cool, dry place with good air circulation.\n\n",
    "22. Allow garlic to cure for about 2-3 weeks until the bulbs are fully dry and the skins are papery.\n\n",
    "23. After curing, trim the roots and stalks to about 1 inch (2.5 cm) from the bulb.\n\n",
    "24. Store cured garlic in a cool, dry, and well-ventilated area. Properly cured garlic can last for several months.\n\n",
    "25. To prevent disease, rotate garlic with other crops each year, and avoid planting garlic in the same soil for consecutive seasons.\n\n",
    "26. Garlic can also be planted in containers if space is limited, but ensure proper drainage and adequate sunlight.\n\n",
    "27. Garlic is a great companion plant for crops like tomatoes, peppers, and carrots, as it helps repel pests.\n\n"
  ]
,
  "Broccoli": [
    "1. Choose a sunny location with well-drained, fertile soil that has a pH of 6.0-7.0.\n\n",
    "2. Prepare the soil by incorporating compost or well-rotted manure to improve soil fertility and structure.\n\n",
    "3. Start seeds indoors 6-8 weeks before the last expected frost date in your area.\n\n",
    "4. Plant the seeds about 1/2 inch deep in seed trays or pots.\n\n",
    "5. Keep the seeds in a warm area (65-75°F or 18-24°C) until they germinate, usually within 7-10 days.\n\n",
    "6. Once the seedlings have developed 2-3 sets of true leaves, they can be transplanted into the garden.\n\n",
    "7. Transplant seedlings outdoors when the soil temperature reaches about 60-70°F (15-21°C) and the seedlings are about 4-6 inches tall.\n\n",
    "8. Space the seedlings 18-24 inches apart in rows, allowing at least 24 inches between rows.\n\n",
    "9. Water the seedlings thoroughly after transplanting to help them settle into their new environment.\n\n",
    "10. Keep the soil consistently moist but not soggy. Water regularly, especially during dry spells.\n\n",
    "11. Broccoli benefits from a light application of nitrogen-rich fertilizer once the plants are well established.\n\n",
    "12. Mulch around the plants to retain moisture, suppress weeds, and regulate soil temperature.\n\n",
    "13. Monitor for pests such as aphids, cabbage worms, and flea beetles. Use organic pest control methods like neem oil or insecticidal soap if necessary.\n\n",
    "14. Thin out any crowded plants to improve air circulation, which helps prevent disease.\n\n",
    "15. As the plants grow, keep them well-watered but avoid overhead watering to prevent fungal diseases.\n\n",
    "16. Broccoli has a relatively short growing period and will typically be ready for harvest in 70-100 days from transplanting.\n\n",
    "17. Harvest the main head when it is compact, firm, and dark green. It should be about 4-8 inches in diameter.\n\n",
    "18. Use a sharp knife to cut the head off the plant, leaving about 4-6 inches of stem.\n\n",
    "19. After harvesting the main head, side shoots will continue to develop and can be harvested as well.\n\n",
    "20. Harvest side shoots when they are fully developed and the buds are tight, just before they start to flower.\n\n",
    "21. If broccoli is left too long without harvesting, the flowers will bloom and become bitter.\n\n",
    "22. Broccoli is a cool-season crop and is best grown in the spring or fall when temperatures range between 60-70°F (15-21°C).\n\n",
    "23. If growing during hot weather, provide shade to prevent bolting (premature flowering).\n\n",
    "24. Rotate broccoli with other crops to prevent soil-borne diseases and nutrient depletion.\n\n",
    "25. After harvesting, remove the plant debris to reduce the risk of disease in the soil.\n\n",
    "26. Broccoli can be stored in the refrigerator for up to a week or can be frozen for long-term storage.\n\n",
    "27. To freeze, blanch the broccoli by boiling for 3 minutes, then cool it in ice water before freezing.\n\n"
  ]
,
  "Strawberry": [
    "1. Choose a well-drained site with full sunlight (6-8 hours of direct sunlight per day).\n\n",
    "2. Select the appropriate strawberry variety for your climate (June-bearing, everbearing, or day-neutral).\n\n",
    "3. Prepare the soil by adding compost or organic matter to improve soil fertility and structure.\n\n",
    "4. Ensure the soil has a slightly acidic pH of 5.5-6.5 for optimal growth.\n\n",
    "5. Plant strawberries in raised beds or rows to improve drainage and reduce the risk of disease.\n\n",
    "6. Space strawberry plants 12-18 inches apart in rows, leaving 3-4 feet between rows for easy access.\n\n",
    "7. Dig holes large enough to accommodate the root ball, ensuring the crown (where the roots meet the stem) is level with the soil surface.\n\n",
    "8. Gently spread the roots out in the hole and cover them with soil, making sure not to bury the crown.\n\n",
    "9. Water the newly planted strawberries thoroughly to settle the soil around the roots.\n\n",
    "10. Mulch around the plants with straw or pine needles to retain moisture, control weeds, and protect the fruit from soil contact.\n\n",
    "11. Water the plants regularly, aiming for deep watering to encourage strong root growth.\n\n",
    "12. Fertilize strawberries in the spring with a balanced fertilizer or one with slightly more phosphorus to promote flowering.\n\n",
    "13. Avoid excessive nitrogen, as it can lead to excessive leaf growth at the expense of fruit production.\n\n",
    "14. Prune any runners (stolons) that appear during the growing season to direct energy into fruit production.\n\n",
    "15. Remove any flowers or fruit during the first year of planting to allow the plant to establish strong roots and vegetative growth.\n\n",
    "16. In the second year, allow the plants to produce flowers and fruit, and pinch off excess flowers if necessary to encourage larger fruit.\n\n",
    "17. Monitor for pests such as aphids, slugs, and spider mites, and use organic pest control methods like neem oil or insecticidal soap.\n\n",
    "18. Watch for signs of diseases like powdery mildew or verticillium wilt, and treat them with appropriate fungicides or disease-resistant varieties.\n\n",
    "19. Harvest strawberries when they are fully ripe and deep red. Pick the fruit gently to avoid bruising.\n\n",
    "20. Strawberries typically bear fruit from late spring to early summer, but everbearing varieties may produce fruit multiple times a year.\n\n",
    "21. After harvesting, remove any dead or diseased leaves to keep the plant healthy.\n\n",
    "22. In the fall, trim the plants back and add mulch to protect them from frost.\n\n",
    "23. Strawberries are a perennial crop, so they will continue producing fruit for several years with proper care and maintenance.\n\n",
    "24. Rotate strawberry plants every 3-4 years to prevent soil-borne diseases and ensure continued good production.\n\n",
    "25. To increase yields, propagate strawberries by rooting healthy runners or by dividing established plants.\n\n",
    "26. Keep the strawberry bed weed-free to prevent competition for nutrients and water.\n\n",
    "27. Provide extra water during hot, dry periods to keep the plants hydrated and reduce stress.\n\n",
    "28. For winter, cover the plants with a layer of mulch, like straw, to protect the crowns from frost.\n\n",
    "29. Strawberries can be grown in containers, hanging baskets, or vertical planters if space is limited.\n\n",
    "30. Harvest and store strawberries in a cool, dry place, or freeze them by washing, cutting, and freezing on a tray before transferring them to storage bags.\n\n"
  ]
,
  "Tea": [
    "1. Choose a location with a mild climate and high rainfall, ideally between 1000-2000 meters above sea level.\n\n",
    "2. Select well-drained, fertile, and slightly acidic soil with a pH of 5.5-6.5.\n\n",
    "3. Prepare the soil by adding organic matter like compost or well-rotted manure to improve soil fertility and texture.\n\n",
    "4. Choose tea varieties suited to your local climate and soil conditions (e.g., Camellia sinensis for traditional tea).\n\n",
    "5. Ensure the plantation area has good sunlight, as tea plants require 4-5 hours of direct sunlight per day.\n\n",
    "6. Space the tea plants about 1 meter apart to allow adequate airflow and growth space.\n\n",
    "7. Plant tea seedlings or cuttings during the rainy season or early spring to ensure optimal growth.\n\n",
    "8. Dig holes large enough to accommodate the roots of the tea plant and ensure the plant is level with the soil surface.\n\n",
    "9. Water the plants immediately after planting to settle the soil around the roots.\n\n",
    "10. Mulch around the tea plants to retain moisture, control weeds, and protect the roots from extreme temperatures.\n\n",
    "11. Tea plants require regular watering, particularly during dry spells, but avoid waterlogging.\n\n",
    "12. Fertilize the plants with a balanced fertilizer, incorporating nitrogen, phosphorus, and potassium, to encourage healthy growth.\n\n",
    "13. Prune the plants regularly to remove dead or damaged leaves and maintain a manageable height for easier harvesting.\n\n",
    "14. Control weeds around the tea plants to reduce competition for nutrients and water.\n\n",
    "15. Tea plants thrive in humid conditions, so ensure adequate moisture levels through irrigation if rainfall is insufficient.\n\n",
    "16. Tea plants require regular plucking of new leaves, ideally the tender top shoots, to encourage further growth and maintain yield.\n\n",
    "17. For the best flavor, pluck leaves during the early morning hours when the moisture content is low.\n\n",
    "18. Harvest tea leaves frequently, usually every 2-3 weeks, to maintain the productivity of the plant.\n\n",
    "19. Tea plants generally begin to produce pluckable leaves after 3-4 years of planting.\n\n",
    "20. In addition to regular harvesting, periodically thin out the tea bushes to prevent overcrowding and improve air circulation.\n\n",
    "21. Tea can be grown both in the field or in containers (for smaller scale cultivation), provided they have enough space.\n\n",
    "22. During the harvesting process, avoid plucking leaves from stressed plants as it can affect the quality of the tea.\n\n",
    "23. Monitor the plants for pests such as aphids, mealybugs, and mites, and use organic insecticides if necessary.\n\n",
    "24. Disease management is crucial, with regular checks for fungal infections like powdery mildew and leaf spot diseases.\n\n",
    "25. After the tea leaves are harvested, they can be processed through methods like drying, oxidation, and rolling to produce different types of tea.\n\n",
    "26. For best results, rotate tea plants every 5-6 years to avoid soil depletion and ensure continued health of the crop.\n\n",
    "27. Ensure proper drainage in the soil to prevent root rot and waterlogging.\n\n",
    "28. Mulch with organic matter such as grass clippings or leaves to conserve soil moisture and regulate temperature.\n\n",
    "29. Protect young plants from extreme weather conditions, such as frost or heavy winds, by covering them with shade cloth or windbreaks.\n\n",
    "30. Tea plants are long-living, with a lifespan of 50-100 years if well-maintained, and can continue producing leaves for decades.\n\n"
  ]
,
  "Coconut": [
    "1. Choose a location with a warm tropical climate, as coconuts require temperatures between 27-30°C for optimal growth.\n\n",
    "2. Select a well-drained, sandy-loamy soil with a slightly acidic to neutral pH level (5.0-7.5).\n\n",
    "3. Choose a coconut variety suited to your region, such as tall or dwarf varieties, depending on space and climatic conditions.\n\n",
    "4. Prepare the soil by digging large planting holes (1 meter wide and 1 meter deep) to allow for root growth.\n\n",
    "5. Plant the coconut seedlings or germinated nuts with the pointed end facing down into the soil.\n\n",
    "6. Space the coconut trees about 8-10 meters apart to provide ample space for their large canopy and root systems.\n\n",
    "7. Water the newly planted coconut trees immediately after planting to settle the soil around the roots.\n\n",
    "8. Water regularly, particularly during dry spells, but ensure the soil does not become waterlogged, as coconuts do not tolerate standing water.\n\n",
    "9. Mulch around the base of the coconut tree to retain moisture, regulate soil temperature, and suppress weeds.\n\n",
    "10. Fertilize the coconut trees every 6-8 months using a balanced fertilizer that includes nitrogen, phosphorus, and potassium.\n\n",
    "11. Apply organic matter like compost or farmyard manure around the tree base to improve soil fertility and structure.\n\n",
    "12. Prune dead or damaged fronds to maintain the health and appearance of the tree, and to reduce pest problems.\n\n",
    "13. Control weeds around the coconut tree to prevent competition for nutrients, but avoid damaging the roots when weeding.\n\n",
    "14. Regularly inspect the coconut tree for pests, such as red palm weevils, and treat the tree with organic pesticides if necessary.\n\n",
    "15. Keep the tree’s crown clear of debris to improve airflow and prevent fungal growth.\n\n",
    "16. Water the coconut tree deeply to encourage deep rooting and strong growth, but reduce watering during the monsoon season.\n\n",
    "17. Coconuts generally begin to bear fruit in 6-10 years for dwarf varieties and 7-12 years for tall varieties.\n\n",
    "18. Harvest coconuts when they are fully mature, typically after 12-14 months from flowering.\n\n",
    "19. During harvest, use a long pole or a coconut harvesting tool to carefully remove the mature coconuts.\n\n",
    "20. Avoid using excessive force while harvesting coconuts to prevent damage to the tree or the fruits.\n\n",
    "21. After harvesting, store the coconuts in a cool, dry place to prevent spoilage, especially the tender coconuts.\n\n",
    "22. Irrigate the tree during dry periods, but reduce irrigation during wet conditions to prevent root rot.\n\n",
    "23. Protect young coconut trees from strong winds and extreme weather conditions by creating temporary shelters.\n\n",
    "24. Provide adequate shade to newly planted coconut trees to protect them from direct sunlight until they are well-established.\n\n",
    "25. Coconut palms are very sensitive to salinity, so avoid planting them in areas with high salt content in the soil or water.\n\n",
    "26. Regularly monitor the tree for signs of nutrient deficiency, such as yellowing leaves, and address the issue with targeted fertilizers.\n\n",
    "27. Harvest coconuts at the right maturity stage depending on the intended use (tender coconuts for water or mature coconuts for copra).\n\n",
    "28. Coconut trees require periodic renewal of the leaves as older fronds die, so ensure that the tree has enough nutrients to produce fresh fronds.\n\n",
    "29. Maintain a healthy distance between coconut palms and other trees or structures to prevent overcrowding and allow proper airflow.\n\n",
    "30. Ensure that coconut palms are protected from severe storms by tying down fronds if necessary and regularly inspecting tree health.\n\n"
  ]
,
  "Tamarind": [
    "1. Choose a location with a warm climate, as tamarind trees thrive in tropical and subtropical climates.\n\n",
    "2. Select a well-drained, sandy-loamy soil with a pH range of 6-7.5.\n\n",
    "3. Tamarind trees prefer full sunlight, so choose a planting spot that receives at least 6-8 hours of direct sunlight every day.\n\n",
    "4. Prepare the soil by digging a hole large enough to accommodate the root system, typically 2-3 feet wide and deep.\n\n",
    "5. Choose a healthy tamarind seedling or grafted plant for planting.\n\n",
    "6. Space the tamarind trees about 15-20 feet apart to allow ample space for their canopy to spread.\n\n",
    "7. Plant the tamarind tree at the same depth as it was in the nursery pot, ensuring that the root collar is level with the soil surface.\n\n",
    "8. Water the newly planted tamarind tree thoroughly to settle the soil and promote root establishment.\n\n",
    "9. Water the tree regularly during dry periods, but avoid overwatering as tamarind trees are drought-tolerant once established.\n\n",
    "10. Apply a thick layer of mulch around the base of the tree to conserve moisture and keep the soil cool.\n\n",
    "11. Fertilize the tamarind tree annually with a balanced fertilizer that includes nitrogen, phosphorus, and potassium.\n\n",
    "12. Avoid excessive use of nitrogen-based fertilizers, as they can promote excessive leaf growth at the expense of fruit production.\n\n",
    "13. Prune the tamarind tree to remove dead, damaged, or crossing branches, and to maintain an open canopy for better air circulation.\n\n",
    "14. Ensure the tree has enough room to spread its branches by regularly pruning side shoots and competing branches.\n\n",
    "15. During the first few years of growth, provide support to the young tree to prevent wind damage.\n\n",
    "16. Tamarind trees require little to no watering once they are established, but periodic watering during prolonged dry periods may be necessary.\n\n",
    "17. Monitor for pests such as mealybugs and aphids, and treat with organic insecticides if necessary.\n\n",
    "18. Watch out for diseases such as root rot and wilt, and provide good drainage and healthy soil to prevent such issues.\n\n",
    "19. Tamarind trees usually start flowering in 6-8 years, but may take up to 10-15 years to produce fruit.\n\n",
    "20. The tree produces small, yellow flowers that are clustered in bunches, attracting pollinators such as bees.\n\n",
    "21. Tamarind fruits ripen over a period of several months, typically during the dry season.\n\n",
    "22. The fruits are long, pod-like, with a hard outer shell and a sticky, sweet-sour pulp inside.\n\n",
    "23. Harvest tamarind fruits when they are fully ripe, as the pulp inside will be sweet and tangy.\n\n",
    "24. To harvest, gently twist or pull the tamarind pods from the tree to avoid damaging the branches.\n\n",
    "25. After harvesting, store the tamarind pods in a cool, dry place to preserve their shelf life.\n\n",
    "26. If the tree is producing excess fruits, consider thinning them to encourage better fruit quality and tree health.\n\n",
    "27. Regularly inspect the tree for any signs of nutrient deficiency, such as yellowing leaves or stunted growth.\n\n",
    "28. Tamarind trees need a warm environment and do not tolerate frost, so avoid planting in areas prone to cold temperatures.\n\n",
    "29. The tree benefits from periodic applications of compost or organic manure to improve soil fertility.\n\n",
    "30. Protect the tree from strong winds during the early years of growth, as the branches may break under heavy gusts.\n\n"
  ]
,
  "Cashew": [
    "1. Choose a sunny location with well-drained soil for planting cashew trees. They thrive in tropical and subtropical climates.\n\n",
    "2. Select a planting site with a minimum of 6-8 hours of direct sunlight per day.\n\n",
    "3. Cashew trees prefer sandy, loamy soils with a pH range of 5.5-7.0.\n\n",
    "4. Prepare the soil by clearing the area of weeds and debris and tilling it to a depth of 1-2 feet.\n\n",
    "5. Space cashew trees at least 25-30 feet apart to allow ample room for growth.\n\n",
    "6. Choose healthy cashew seedlings or grafted plants for planting.\n\n",
    "7. Plant the cashew tree at the same depth as it was in the nursery pot. The root collar should be level with the ground surface.\n\n",
    "8. Water the newly planted cashew tree thoroughly to settle the soil and establish the roots.\n\n",
    "9. Apply a layer of mulch around the base of the tree to conserve moisture and prevent weed growth.\n\n",
    "10. Water the tree regularly during the first few years of growth, especially during dry periods, but avoid waterlogging.\n\n",
    "11. Fertilize the tree with balanced fertilizers that contain nitrogen, phosphorus, and potassium. Apply in the early stages of growth.\n\n",
    "12. Apply compost or organic manure to the soil annually to improve soil fertility and structure.\n\n",
    "13. Prune the tree to remove any dead or diseased branches and to maintain a healthy, open canopy.\n\n",
    "14. Cashew trees can be sensitive to pests such as aphids, scale insects, and root-knot nematodes. Monitor regularly and treat with organic pesticides if necessary.\n\n",
    "15. Keep an eye on the tree for signs of diseases such as leaf spot, powdery mildew, or anthracnose. Treat them with fungicides if needed.\n\n",
    "16. Cashew trees generally start flowering in 3-5 years, and fruiting begins in 4-6 years under optimal conditions.\n\n",
    "17. The tree produces small, yellow or white flowers in clusters. They attract pollinators like bees and butterflies.\n\n",
    "18. After flowering, cashew fruits, or cashew apples, start developing. The nut grows within the cashew apple.\n\n",
    "19. Allow the cashew fruits to ripen fully on the tree before harvesting. The apples will turn yellow or red when ripe.\n\n",
    "20. Cashew nuts can be harvested by gently pulling the fruit off the tree. The cashew nut is inside a shell attached to the cashew apple.\n\n",
    "21. Once harvested, the cashew nuts must be removed from their shells. This can be done by roasting or cracking the shells carefully.\n\n",
    "22. The cashew apples can also be harvested and consumed directly or used for making juice, jams, or other products.\n\n",
    "23. Cashew nuts can be dried in the sun or using mechanical dryers before storing them.\n\n",
    "24. Ensure the tree has proper wind protection during its early years to prevent damage to the tender branches.\n\n",
    "25. After the cashew tree reaches maturity, it requires little water, but periodic irrigation may be necessary during extremely dry conditions.\n\n",
    "26. The tree can produce for up to 30 years, though yields typically peak around 10-20 years of age.\n\n",
    "27. Harvest cashew nuts during the dry season when they are fully mature for the best quality and flavor.\n\n",
    "28. Protect the tree from frost or cold weather, as cashew trees are highly sensitive to low temperatures.\n\n",
    "29. Regularly inspect the tree for nutrient deficiencies such as yellowing leaves, and provide necessary supplements, including micronutrients like zinc and magnesium.\n\n",
    "30. Consider thinning out excess fruits to encourage larger and higher-quality cashew nuts on the remaining branches.\n\n"
  ]
,
  "Tobacco": [
    "1. Choose a well-drained soil with a pH level between 5.5 and 6.5 for planting tobacco.\n\n",
    "2. Select a sunny location that receives at least 6-8 hours of direct sunlight per day.\n\n",
    "3. Prepare the soil by tilling it to a depth of 8-10 inches, and remove any weeds or debris.\n\n",
    "4. Tobacco grows best in fertile, well-drained loamy soil. If needed, enrich the soil with organic matter like compost.\n\n",
    "5. Space the tobacco plants 18-24 inches apart in rows that are 36-48 inches apart to allow for adequate air circulation.\n\n",
    "6. Start seeds indoors 6-8 weeks before the last frost date, or purchase healthy seedlings from a reputable nursery.\n\n",
    "7. Transplant seedlings outdoors once the risk of frost has passed and the soil has warmed to at least 60°F (15°C).\n\n",
    "8. Water the tobacco plants regularly to keep the soil consistently moist, but avoid waterlogging.\n\n",
    "9. Fertilize tobacco plants with a balanced fertilizer rich in nitrogen, phosphorus, and potassium. Apply a few weeks after transplanting.\n\n",
    "10. Side-dress the plants with nitrogen fertilizer during the growing season, especially when they start to flower.\n\n",
    "11. Monitor the plants for signs of nutrient deficiencies. Yellowing leaves may indicate a lack of nitrogen, while purple leaves can be a sign of phosphorus deficiency.\n\n",
    "12. Tobacco requires a consistent moisture supply, particularly during dry spells. However, overwatering can lead to root rot, so ensure proper drainage.\n\n",
    "13. Keep the area around the plants free from weeds by using mulch or manually removing weeds as they appear.\n\n",
    "14. Tobacco plants are sensitive to pests, including aphids, tobacco hornworms, and flea beetles. Use organic pesticides or insecticidal soap to control infestations.\n\n",
    "15. Regularly inspect the plants for signs of disease such as mosaic virus or leaf spot and treat them with appropriate fungicides if necessary.\n\n",
    "16. As tobacco plants grow, regularly remove the lower leaves to promote better airflow and prevent disease.\n\n",
    "17. When the plants reach about 3-4 feet in height, top the plants (remove the flower heads) to encourage leaf growth.\n\n",
    "18. Harvesting tobacco occurs when the leaves have matured and changed color, typically in the late summer or early fall.\n\n",
    "19. Harvest leaves individually by hand, starting with the lower leaves and working upwards. Ensure that the leaves are dry to the touch.\n\n",
    "20. After harvesting, the tobacco leaves need to be cured. This can be done through air curing, flue curing, or sun curing, depending on the variety.\n\n",
    "21. After curing, tobacco leaves must be sorted and graded based on size, color, and texture.\n\n",
    "22. Tobacco should be stored in a cool, dry place to prevent mold and spoilage during the curing and storage process.\n\n",
    "23. During storage, monitor the tobacco regularly for any signs of mold or mildew and remove any affected leaves promptly.\n\n",
    "24. Once properly cured, the tobacco leaves can be processed further for use in smoking products, cigars, or cigarettes.\n\n",
    "25. Tobacco plants should be rotated annually to prevent soil depletion and reduce the buildup of soil-borne diseases.\n\n",
    "26. Make sure to wear gloves and protective clothing when handling tobacco plants, as the leaves contain nicotine, which can be harmful to skin and cause irritation.\n\n",
    "27. Tobacco plants may take 90-120 days to reach maturity from transplanting to harvest, depending on the variety and growing conditions.\n\n",
    "28. During harvesting, avoid overripe leaves, as they may have lower quality and yield.\n\n",
    "29. After harvesting, tobacco leaves can be processed by drying, fermenting, and aging before they are ready for consumption.\n\n",
    "30. Regularly monitor weather conditions and protect the plants from extreme weather such as heavy rain, storms, or drought.\n\n"
  ]
,

 "Cotton": [
    "1. Select well-drained, fertile soil with a pH between 6.0 and 7.5 for planting cotton. Choose land with good water retention and drainage.",
    "2. Prepare the soil by plowing and harrowing to create a fine seedbed. Incorporate organic matter such as compost or manure to improve soil fertility and structure.",
    "3. Choose high-quality, disease-resistant cotton seeds suitable for your region with a good germination rate.",
    "4. Cotton requires warm temperatures with an average range between 21°C to 30°C (70°F to 86°F). Plant in spring or early summer when the soil temperature is above 18°C (64°F).",
    "5. Plant cotton seeds 2-3 cm deep, maintaining a spacing of 20-30 cm between seeds in a row and 75-100 cm between rows. The seed rate is around 10-12 kg per hectare.",
    "6. Ensure adequate moisture during the growing season, especially during germination, flowering, and boll formation stages. Avoid waterlogging and ensure proper drainage.",
    "7. Apply a balanced fertilizer containing nitrogen, phosphorus, and potassium before planting. Side-dress with additional nitrogen during the vegetative growth phase.",
    "8. Use a combination of mechanical, cultural, and chemical methods to control weeds. Herbicides can be applied, but ensure they are cotton-safe.",
    "9. Monitor regularly for pests such as bollworm, aphids, and whiteflies. Apply insecticides judiciously following integrated pest management (IPM) practices.",
    "10. Cotton is susceptible to diseases like Alternaria leaf spot, cotton wilt, and bacterial blight. Use fungicides if necessary and practice crop rotation to manage disease pressure.",
    "11. Prune cotton plants to improve air circulation, remove dead or diseased leaves, and encourage healthy growth.",
    "12. Cotton is primarily self-pollinating, but bees may assist with pollination. Ensure plants are not stressed to improve pollination success.",
    "13. Monitor bolls as they develop after flowering. Cotton bolls are ready for harvesting when they split open, exposing fluffy white cotton fibers.",
    "14. Harvest cotton when the bolls are fully open, but avoid waiting too long as overripe cotton may lead to fiber damage. You can harvest manually or using a mechanical cotton harvester.",
    "15. After harvesting, process cotton through a cotton gin to separate the fibers from the seeds.",
    "16. Store harvested cotton in a cool, dry place to prevent mold growth and contamination. Ensure cotton seeds are stored for the next planting season or processed into cottonseed oil.",
    "17. Practice crop rotation with legumes such as groundnuts or soybeans to improve soil health and reduce pest pressure.",
    "18. To maintain cotton quality, store and transport the cotton fibers carefully. High-quality cotton fetches better market prices."
  ],

  "Cotton": [
    "1. Select well-drained, fertile soil with a pH between 6.0 and 7.5 for planting cotton. Choose land with good water retention and drainage.\n\n",
    "2. Prepare the soil by plowing and harrowing to create a fine seedbed. Incorporate organic matter such as compost or manure to improve soil fertility and structure.\n\n",
    "3. Choose high-quality, disease-resistant cotton seeds suitable for your region with a good germination rate.\n\n",
    "4. Cotton requires warm temperatures with an average range between 21°C to 30°C (70°F to 86°F). Plant in spring or early summer when the soil temperature is above 18°C (64°F).\n\n",
    "5. Plant cotton seeds 2-3 cm deep, maintaining a spacing of 20-30 cm between seeds in a row and 75-100 cm between rows. The seed rate is around 10-12 kg per hectare.\n\n",
    "6. Ensure adequate moisture during the growing season, especially during germination, flowering, and boll formation stages. Avoid waterlogging and ensure proper drainage.\n\n",
    "7. Apply a balanced fertilizer containing nitrogen, phosphorus, and potassium before planting. Side-dress with additional nitrogen during the vegetative growth phase.\n\n",
    "8. Use a combination of mechanical, cultural, and chemical methods to control weeds. Herbicides can be applied, but ensure they are cotton-safe.\n\n",
    "9. Monitor regularly for pests such as bollworm, aphids, and whiteflies. Apply insecticides judiciously following integrated pest management (IPM) practices.\n\n",
    "10. Cotton is susceptible to diseases like Alternaria leaf spot, cotton wilt, and bacterial blight. Use fungicides if necessary and practice crop rotation to manage disease pressure.\n\n",
    "11. Prune cotton plants to improve air circulation, remove dead or diseased leaves, and encourage healthy growth.\n\n",
    "12. Cotton is primarily self-pollinating, but bees may assist with pollination. Ensure plants are not stressed to improve pollination success.\n\n",
    "13. Monitor bolls as they develop after flowering. Cotton bolls are ready for harvesting when they split open, exposing fluffy white cotton fibers.\n\n",
    "14. Harvest cotton when the bolls are fully open, but avoid waiting too long as overripe cotton may lead to fiber damage. You can harvest manually or using a mechanical cotton harvester.\n\n",
    "15. After harvesting, process cotton through a cotton gin to separate the fibers from the seeds.\n\n",
    "16. Store harvested cotton in a cool, dry place to prevent mold growth and contamination. Ensure cotton seeds are stored for the next planting season or processed into cottonseed oil.\n\n",
    "17. Practice crop rotation with legumes such as groundnuts or soybeans to improve soil health and reduce pest pressure.\n\n",
    "18. To maintain cotton quality, store and transport the cotton fibers carefully. High-quality cotton fetches better market prices.\n\n"
  ]
,
  "Watermelon": [
    "1. Choose a sunny location with well-drained soil for planting watermelons.\n\n",
    "2. Prepare the soil by tilling it to a depth of 8-10 inches, and remove any weeds or debris.\n\n",
    "3. Watermelons grow best in sandy loam or loamy soil with a pH level of 6.0-6.8.\n\n",
    "4. Add organic matter such as compost to the soil to improve fertility and drainage.\n\n",
    "5. Space watermelon plants 36-42 inches apart in rows that are 6-8 feet apart to allow the vines to spread.\n\n",
    "6. Start seeds indoors 3-4 weeks before the last frost date or directly sow seeds outdoors after the risk of frost has passed.\n\n",
    "7. When planting seeds outdoors, ensure the soil temperature is at least 70°F (21°C) for optimal germination.\n\n",
    "8. If starting seeds indoors, transplant seedlings outdoors once they have 2-3 sets of true leaves and the soil is warm.\n\n",
    "9. Watermelon plants need consistent watering, especially during the growing season. Water deeply at the base of the plants to avoid wetting the leaves.\n\n",
    "10. Watermelon plants are sensitive to overwatering, so ensure the soil drains well to avoid waterlogging and root rot.\n\n",
    "11. Fertilize the plants with a balanced fertilizer (10-10-10) every 2-3 weeks after they have been transplanted.\n\n",
    "12. Once the vines start to spread, side-dress with additional nitrogen fertilizer to promote leafy growth.\n\n",
    "13. As the plants begin to flower, reduce nitrogen and switch to a fertilizer high in phosphorus and potassium to promote fruiting.\n\n",
    "14. Mulch around the base of the plants with straw or plastic mulch to conserve moisture, suppress weeds, and keep the fruit clean.\n\n",
    "15. Monitor the plants for pests like aphids, cucumber beetles, and spider mites. Use organic insecticides or neem oil to control infestations.\n\n",
    "16. Watermelon vines are susceptible to fungal diseases like powdery mildew and downy mildew. Use fungicides as needed to prevent and control these diseases.\n\n",
    "17. Prune the vines to improve airflow and prevent overcrowding. Cut back any excessive growth that does not produce fruit.\n\n",
    "18. Watermelon fruit needs proper support to grow. Lift the fruit off the ground by placing it on a bed of straw or using plant supports.\n\n",
    "19. Keep the watermelon plants well-watered, but avoid overwatering, as this can cause the fruit to crack or become less sweet.\n\n",
    "20. Watermelon plants usually begin to produce fruit within 70-90 days of planting, depending on the variety.\n\n",
    "21. Harvest watermelons when they produce a dull skin and produce a hollow sound when tapped. The tendril closest to the fruit should be dry.\n\n",
    "22. Use a sharp knife or pruning shears to cut the watermelon from the vine, leaving a small stem attached to the fruit.\n\n",
    "23. Store harvested watermelons in a cool, dry place, but avoid refrigeration as it can affect the taste and texture of the fruit.\n\n",
    "24. Keep the watermelon plants well spaced to prevent disease and ensure good airflow around the vines.\n\n",
    "25. Rotate watermelon crops annually to avoid soil-borne diseases and pests.\n\n",
    "26. Monitor the weather and protect the plants from extreme conditions such as heavy rains, strong winds, or extreme heat.\n\n",
    "27. Watermelons are sensitive to frost, so harvest before the first frost if growing in cooler regions.\n\n",
    "28. Regularly check the fruits for any signs of pests or diseases during the growing season.\n\n",
    "29. Be cautious of fruit overgrowth; leaving too many fruits on the vine may lead to smaller watermelons with less flavor.\n\n",
    "30. Enjoy fresh, sweet watermelon when fully ripe, and be sure to consume or store it immediately after harvest to preserve its freshness.\n\n"
  ]
,
  "Maize": [
    "1. Select a sunny location with well-drained soil for planting maize.\n\n",
    "2. Maize grows best in loose, fertile, and well-drained soil with a pH of 5.8-7.0.\n\n",
    "3. Prepare the soil by plowing deeply and breaking up any clods to ensure proper root penetration.\n\n",
    "4. Add organic matter like compost or manure to improve soil fertility and structure.\n\n",
    "5. Maize requires a warm soil temperature for germination, ideally between 60-95°F (15-35°C).\n\n",
    "6. Plant maize seeds directly into the soil after the danger of frost has passed.\n\n",
    "7. Space maize seeds 8-12 inches apart in rows, with 30-36 inches between rows, to allow for proper growth and airflow.\n\n",
    "8. Plant the seeds 1-2 inches deep, ensuring the soil is moist but not waterlogged.\n\n",
    "9. If planting multiple rows, stagger the rows to ensure proper pollination, as maize is wind-pollinated.\n\n",
    "10. Water the seeds regularly to maintain consistent moisture, but avoid waterlogging the soil.\n\n",
    "11. After germination, water maize deeply 1-1.5 inches per week, especially during dry spells.\n\n",
    "12. Apply a balanced fertilizer (e.g., 10-10-10) after the plants have emerged, and again during mid-season when plants are growing rapidly.\n\n",
    "13. Side-dress with nitrogen fertilizer when the plants are about 8-10 inches tall to encourage strong vegetative growth.\n\n",
    "14. Mulch around the base of the plants to conserve moisture, suppress weeds, and prevent soil erosion.\n\n",
    "15. Keep the soil moist, but avoid excessive watering to prevent root rot and fungal diseases.\n\n",
    "16. Control weeds early by using mulch or shallow cultivation, as maize plants do not tolerate weed competition well.\n\n",
    "17. Monitor the plants for pests like aphids, corn borers, and armyworms, and apply insecticides if necessary.\n\n",
    "18. Check for diseases like corn smut and rust, and treat with appropriate fungicides to prevent spreading.\n\n",
    "19. Ensure good air circulation around the maize plants to reduce the risk of fungal infections.\n\n",
    "20. Maize plants may require staking if the plants are growing too tall and are susceptible to wind damage.\n\n",
    "21. As the maize ears begin to form, reduce nitrogen fertilizer and focus on potassium to promote strong ear development.\n\n",
    "22. Pollination typically occurs 10-14 days after the silk emerges. Ensure that the plants are spaced adequately to promote good pollination.\n\n",
    "23. Water the plants deeply once a week, especially during pollination and ear formation, to ensure high-quality kernels.\n\n",
    "24. Harvest maize when the husks are dry, the kernels are firm, and the cobs make a snapping sound when bent.\n\n",
    "25. For sweet corn varieties, harvest when the kernels are tender and filled with milk (not too dry).\n\n",
    "26. Use a sharp knife or pruning shears to cut the ears from the stalks, leaving a small portion of the husk attached.\n\n",
    "27. If you plan to store maize, ensure the kernels are fully mature and dry before storing.\n\n",
    "28. Store harvested maize in a cool, dry place to prevent mold growth.\n\n",
    "29. After harvesting, plow the field and remove any remaining stalks to reduce the chance of pest infestation next season.\n\n",
    "30. Rotate maize with other crops like legumes to maintain soil fertility and reduce pest build-up.\n\n"
  ]
,
  "Pulses": [
    "1. Select a well-drained, fertile soil with a pH level between 6.0 and 7.5 for planting pulses.\n\n",
    "2. Pulses prefer warm temperatures, and the ideal planting temperature is between 70°F to 85°F (21°C to 29°C).\n\n",
    "3. Prepare the soil by plowing and harrowing to create a fine seedbed.\n\n",
    "4. Incorporate organic matter like compost or well-rotted manure into the soil before planting to improve soil fertility.\n\n",
    "5. Choose high-quality seeds that are disease-free and adapted to local conditions.\n\n",
    "6. Plant pulses in rows, with a spacing of 15-30 cm between plants and 45-75 cm between rows, depending on the variety.\n\n",
    "7. Plant the seeds 2-3 cm deep, ensuring that they are covered adequately with soil.\n\n",
    "8. If planting large areas, consider using a seed drill or a mechanical planter to ensure even seed distribution.\n\n",
    "9. Water the seeds immediately after planting, and then irrigate as needed during the growing season.\n\n",
    "10. Pulses are drought-tolerant but require sufficient moisture during flowering and pod formation.\n\n",
    "11. Apply a balanced fertilizer, preferably with phosphorus and potassium, at planting to promote early growth.\n\n",
    "12. Avoid excessive nitrogen fertilization, as pulses can fix their nitrogen through symbiotic bacteria in their roots.\n\n",
    "13. Control weeds by mulching around the base of the plants or by using shallow cultivation between rows.\n\n",
    "14. Monitor for pests such as aphids, whiteflies, and pod borers, and apply suitable insecticides or biological control if necessary.\n\n",
    "15. Pulses are susceptible to fungal diseases like rust, powdery mildew, and blight. Use fungicides as required and practice crop rotation.\n\n",
    "16. Prune any dead or infected plant parts to help prevent disease spread.\n\n",
    "17. Provide support for taller varieties by using stakes or trellises to prevent wind damage.\n\n",
    "18. Pulses should be harvested when the pods turn yellow and the seeds inside rattle when shaken.\n\n",
    "19. For some varieties, harvest when 70-80% of the pods have ripened.\n\n",
    "20. Use a sharp knife or sickle to cut the plants close to the base.\n\n",
    "21. After harvesting, allow the plants to dry in the field for a few days to reduce moisture content.\n\n",
    "22. If needed, thresh the seeds from the pods manually or using a mechanical thresher.\n\n",
    "23. Dry the harvested seeds thoroughly to prevent mold growth during storage. Ensure the seeds have a moisture content of 8-10%.\n\n",
    "24. Store the pulses in a cool, dry, and well-ventilated location, preferably in airtight containers to prevent pest infestation.\n\n",
    "25. Rotate pulses with other crops such as cereals or oilseeds to maintain soil health and reduce pest problems.\n\n",
    "26. Pulses can also be intercropped with other crops like maize, millet, or groundnuts for better yields and reduced risk of pests.\n\n",
    "27. If using pulses for seed production, select healthy, high-yielding plants for seed harvesting.\n\n",
    "28. Regularly inspect stored pulses for pests like weevils and take necessary actions, such as using organic pest control methods or heat treatments.\n\n",
    "29. Incorporate the leftover plant residues into the soil as green manure to improve soil fertility.\n\n",
    "30. Avoid planting pulses in fields where legume diseases or pests have been a problem in previous years.\n\n"
  ],

  "Mango": [
    "1. Select a suitable location with a warm tropical or subtropical climate. Mango trees thrive in temperatures between 25°C to 30°C (77°F to 86°F).\n\n",
    "2. Choose well-drained, fertile soil with a pH between 5.5 to 7.5 for optimal growth. Mangoes can tolerate a range of soil types but prefer deep, sandy loam soil.\n\n",
    "3. Prepare the soil by clearing the area of weeds, rocks, and debris. Add organic matter like compost or well-rotted manure to improve soil fertility.\n\n",
    "4. Select a healthy, disease-free seedling or grafted plant. Grafted plants produce fruit faster and are more reliable in terms of quality and yield.\n\n",
    "5. Plant the mango tree during the onset of the monsoon season, when rainfall is regular, to avoid water stress during establishment. Ensure the planting hole is about 3 times the size of the root ball.\n\n",
    "6. Spacing: For full-grown trees, plant mango trees at a distance of at least 10 to 12 meters apart to allow for proper canopy spread.\n\n",
    "7. Watering: Water the young tree regularly after planting, but avoid waterlogging. Mango trees are drought-tolerant but require consistent watering during the flowering and fruiting stages.\n\n",
    "8. Fertilize the tree with a balanced fertilizer containing nitrogen, phosphorus, and potassium, but avoid excessive nitrogen, as it may lead to excessive vegetative growth at the expense of fruiting.\n\n",
    "9. Mulching: Apply a 3-4 inch layer of mulch around the base of the tree to retain soil moisture, regulate temperature, and suppress weeds.\n\n",
    "10. Pruning: Prune the tree regularly to maintain a healthy shape, remove dead or diseased wood, and encourage strong growth. Prune branches that are too crowded to improve air circulation.\n\n",
    "11. Pest and Disease Management: Mango trees can be susceptible to pests like aphids, fruit flies, scale insects, and mealybugs. Use organic or chemical insecticides, as necessary. Fungal diseases like powdery mildew can be managed with fungicides.\n\n",
    "12. Flowering: Mango trees typically flower from January to April, depending on the region. The flowers are small and fragrant. Ensure the tree gets enough sunlight during this period to facilitate flowering.\n\n",
    "13. Fruit Set: Once the flowers bloom, mango trees require pollination. Mangoes are typically cross-pollinated by insects like bees. If natural pollinators are insufficient, hand-pollination can be done.\n\n",
    "14. Fruit Thinning: Once the mango fruits start developing, thin them out to ensure that the remaining fruits have enough space to grow and ripen properly. This improves fruit size and quality.\n\n",
    "15. Watering During Fruit Development: Ensure consistent watering during fruit development. However, reduce watering as the fruits start maturing to avoid cracking.\n\n",
    "16. Harvesting: Mangoes are usually harvested when they are fully mature but still green. The fruit should be harvested before they ripen on the tree to prevent damage. Mangoes will ripen off the tree.\n\n",
    "17. Post-Harvest Handling: After harvesting, mangoes can be ripened in controlled conditions. Store them at room temperature for ripening or in a cool storage room for extended shelf life.\n\n",
    "18. Storage: Store ripe mangoes in a cool, dry, and well-ventilated area. If storing for a longer period, mangoes can be refrigerated, but it may affect the taste and texture.\n\n",
    "19. Fertilizer Application: Mango trees benefit from a regular application of balanced fertilizers, especially in the growing season. Apply a slow-release fertilizer that gradually feeds the tree.\n\n",
    "20. Irrigation during Dry Spells: While mangoes are drought-tolerant, they require consistent irrigation during dry spells, especially during flowering and fruit formation.\n\n",
    "21. Weeding: Regularly remove weeds around the base of the tree to reduce competition for water and nutrients.\n\n",
    "22. Crop Rotation: If mangoes are grown in orchards, practice crop rotation to maintain soil health and reduce pest pressure.\n\n",
    "23. Intercropping: In the early years, consider intercropping with crops like groundnut, chili, or vegetables. However, as the mango tree matures, it will need more space.\n\n",
    "24. Post-Harvest Disease Control: To prevent post-harvest diseases such as anthracnose, ensure that the mangoes are handled carefully during harvesting and packaging. Avoid bruising the fruit.\n\n",
    "25. Pollination Management: In regions with fewer pollinators, mango growers may introduce honeybees or other pollinating insects to improve fruit set.\n\n",
    "26. Mango Tree Care: Regularly inspect mango trees for any signs of disease or pest infestations, and take appropriate action promptly.\n\n",
    "27. Young Tree Care: For young mango trees, protect them from strong winds or damage by using tree guards or staking if necessary.\n\n",
    "28. Mango Orchard Maintenance: In mature mango orchards, ensure that irrigation systems are efficient and there is adequate spacing between trees for proper air circulation.\n\n",
    "29. Storage of Mango Seeds: After harvesting the fruit, mango seeds can be collected for planting next season. Ensure the seeds are properly cleaned and dried before storing.\n\n",
    "30. Post-Harvest Quality: Properly handling the mangoes from harvesting to market ensures better fruit quality. Clean the mangoes before packing and transport them carefully to prevent bruising.\n\n"
  ],

  "Wheat": [
    "1. Select a well-drained, fertile soil with a pH level between 6.0 and 7.5 for planting wheat.\n\n",
    "2. Wheat grows best in cool climates, with an ideal temperature range of 10°C to 15°C (50°F to 59°F). Plant wheat in early winter or early spring, depending on the local climate.\n\n",
    "3. Prepare the soil by plowing and harrowing to create a fine seedbed. Ensure good soil aeration for proper root development.\n\n",
    "4. Wheat requires soil with adequate organic matter to support good root growth. Incorporate well-rotted manure or compost into the soil before sowing.\n\n",
    "5. Choose high-quality, certified seeds of wheat varieties adapted to local conditions and resistant to diseases and pests.\n\n",
    "6. Sow wheat seeds in rows, typically 2.5 to 3 cm deep. Space the seeds 15-20 cm apart within rows, with a row spacing of 25-30 cm.\n\n",
    "7. The seed rate typically ranges from 100-120 kg per hectare, depending on the variety and soil fertility.\n\n",
    "8. Wheat requires moderate moisture, but too much water can cause root rot. Irrigate the field if necessary, especially during dry periods, but ensure proper drainage.\n\n",
    "9. Apply balanced fertilizers, especially phosphorus and nitrogen, at sowing. Use a nitrogen-rich fertilizer during the vegetative growth phase.\n\n",
    "10. Wheat plants are sensitive to drought during flowering and grain filling stages. Ensure adequate irrigation during these stages for optimum yield.\n\n",
    "11. Weed control is critical for wheat crops, as weeds compete with wheat for nutrients, water, and light. Use herbicides or manually remove weeds early in the growth phase.\n\n",
    "12. Wheat plants are prone to several diseases, including rust, powdery mildew, and blight. Apply fungicides as required and rotate crops to manage disease pressure.\n\n",
    "13. Monitor for pests such as aphids, armyworms, and wheat weevils. Use appropriate insecticides if pest levels are high.\n\n",
    "14. Wheat is generally ready for harvest when the grains are hard, and the plant's leaves turn yellow. The heads should be fully matured, and the kernels should be firm.\n\n",
    "15. Harvest the wheat by cutting the plants with a sickle, combine harvester, or by hand if the area is small. Ensure the wheat is properly dried after harvest to prevent mold growth.\n\n",
    "16. After harvesting, thresh the wheat to separate the grains from the straw. This can be done manually or using a mechanical thresher.\n\n",
    "17. Wheat should be dried to a moisture content of 12-14% to avoid spoilage during storage.\n\n",
    "18. Store wheat grains in a cool, dry, and well-ventilated area to prevent mold and pest infestation. Use airtight containers if necessary.\n\n",
    "19. Regularly inspect stored wheat for pests such as weevils and grain moths, and take necessary action if infestations occur.\n\n",
    "20. Wheat can be stored for long periods if kept in good conditions, but it should be used within a year for best quality.\n\n",
    "21. After harvest, incorporate the wheat straw into the soil as green manure to improve soil fertility and organic matter content.\n\n",
    "22. In areas with low soil fertility, consider applying organic fertilizers or manure to maintain soil health.\n\n",
    "23. Follow crop rotation practices with legumes or other crops to prevent soil nutrient depletion and reduce pest pressures.\n\n",
    "24. Wheat can be intercropped with pulses, legumes, or oilseeds, especially in regions with sufficient rainfall, for higher yields per hectare.\n\n",
    "25. Ensure proper post-harvest handling by sorting out any damaged or poor-quality grains from the harvested wheat.\n\n",
    "26. If wheat is grown for seed production, select healthy plants for seed harvesting to ensure good seed quality for the next planting season.\n\n",
    "27. Avoid growing wheat in fields with high salinity or excessive waterlogging, as this can stunt growth and reduce yield.\n\n",
    "28. Regularly inspect wheat fields for signs of disease, nutrient deficiencies, or stress, and take corrective measures as needed.\n\n",
    "29. Wheat fields should be prepared for the next crop season by ensuring that the soil is healthy, properly fertilized, and free from excessive weeds or pests.\n\n",
    "30. Use the harvested wheat for food, fodder, or sale, depending on your needs. Ensure that grains are clean, free from contaminants, and properly stored for consumption or market sale.\n\n"
  ],

  "Corn": [
    "1. Select a well-drained, fertile soil with a pH level between 5.8 and 7.0 for planting corn.\n\n",
    "2. Corn grows best in warm temperatures, with an ideal planting temperature of 60°F to 95°F (15°C to 35°C). Plant corn when the soil temperature reaches at least 50°F (10°C).\n\n",
    "3. Prepare the soil by plowing and harrowing to create a fine, level seedbed. Ensure that the soil is free of large clumps and rocks.\n\n",
    "4. Incorporate organic matter like compost or well-rotted manure into the soil before planting to improve soil fertility and moisture retention.\n\n",
    "5. Choose high-quality, disease-free corn seeds. Select a variety that is suited to the local climate and growing conditions.\n\n",
    "6. Plant corn seeds 1-2 inches (2.5-5 cm) deep. Space the seeds 6-12 inches (15-30 cm) apart in rows that are 30-36 inches (75-90 cm) apart.\n\n",
    "7. The seed rate typically ranges from 25-30 kg per hectare for corn, depending on the planting density and variety.\n\n",
    "8. Corn requires plenty of moisture during its growing season. Ensure the soil is consistently moist, especially during the flowering and grain filling stages.\n\n",
    "9. Apply a balanced fertilizer at planting, with adequate levels of nitrogen, phosphorus, and potassium. A nitrogen-rich fertilizer should be applied during the vegetative growth phase.\n\n",
    "10. Irrigate corn as necessary, especially during dry periods, but avoid over-watering as it can lead to waterlogging. Drip irrigation or sprinklers can be used effectively.\n\n",
    "11. Control weeds early in the growing season to prevent competition for water and nutrients. Use herbicides or manual weeding if necessary.\n\n",
    "12. Corn is sensitive to pests such as corn borer, corn earworm, aphids, and rootworm. Monitor fields regularly and apply insecticides or biological controls when needed.\n\n",
    "13. Corn is susceptible to several diseases like rust, blight, and mildew. Use fungicides as necessary and practice crop rotation to reduce disease pressure.\n\n",
    "14. Corn plants generally mature in 3-4 months, depending on the variety. Monitor for signs of maturity, such as when the kernels are firm, the husks dry, and the silk turns brown.\n\n",
    "15. Harvest corn when the kernels are fully mature, firm, and the husks are dry. Harvesting too early may result in low-quality corn.\n\n",
    "16. Use a combine harvester to cut the corn stalks and remove the ears. Alternatively, if done manually, cut the plants close to the base and strip the ears.\n\n",
    "17. After harvesting, dry the corn ears in a well-ventilated area until the moisture content reaches 13-15%. This helps prevent mold growth and ensures proper storage.\n\n",
    "18. Store harvested corn in a cool, dry, and well-ventilated location to prevent mold and pest infestation. Use airtight containers or sealed bins if necessary.\n\n",
    "19. Regularly inspect stored corn for pests such as weevils or rodents, and take necessary action if infestations occur.\n\n",
    "20. Corn can be stored for long periods if kept in good conditions, but it should be used within a year for best quality.\n\n",
    "21. After harvest, incorporate the leftover corn stalks and leaves into the soil as green manure to improve soil organic matter and fertility.\n\n",
    "22. Corn requires a lot of nitrogen, so it is important to maintain healthy soil levels through fertilization. Supplement with organic fertilizers if necessary.\n\n",
    "23. Crop rotation with legumes such as soybeans or peas can help replenish nitrogen levels in the soil for the next growing season.\n\n",
    "24. Corn can be intercropped with other crops like beans or squash for better resource use and pest management. This practice is common in mixed cropping systems.\n\n",
    "25. When growing corn for seed production, ensure that the seeds are harvested from the healthiest plants with good genetic characteristics.\n\n",
    "26. Avoid planting corn in fields that have a history of rootworm or other pests, as this can significantly reduce yield.\n\n",
    "27. Regularly inspect the corn fields for nutrient deficiencies, such as nitrogen or potassium deficiencies, and apply the required fertilizers accordingly.\n\n",
    "28. Ensure that the corn plants are well-supported to prevent damage from wind and storms, especially during the flowering and grain filling stages.\n\n",
    "29. After harvesting, clean and sort the corn kernels to remove damaged or discolored grains before storage.\n\n",
    "30. For larger-scale operations, consider drying and processing the corn into different products like cornmeal, popcorn, or animal feed.\n\n"
  ],

  "Tomato": [
    "1. Select a well-drained, fertile soil with a pH level between 6.0 and 6.8 for planting tomatoes.\n\n",
    "2. Tomatoes grow best in warm weather, with an ideal temperature range of 70°F to 85°F (21°C to 29°C). Avoid temperatures below 50°F (10°C) during the growing season.\n\n",
    "3. Prepare the soil by loosening it to a depth of 8-12 inches (20-30 cm) and removing any weeds or debris.\n\n",
    "4. Incorporate organic matter, such as compost or well-rotted manure, to improve soil fertility and drainage.\n\n",
    "5. Choose disease-resistant tomato varieties suited to your region, and opt for high-quality, certified seeds or seedlings.\n\n",
    "6. Start seeds indoors 6-8 weeks before the last frost date, or plant tomato seedlings outdoors once the soil temperature reaches 60°F (15°C).\n\n",
    "7. Space tomato plants 18-24 inches (45-60 cm) apart in rows that are 3 feet (90 cm) apart to allow for adequate air circulation.\n\n",
    "8. Tomatoes require regular watering, especially during dry periods. Keep the soil evenly moist but not waterlogged.\n\n",
    "9. Mulch around the base of tomato plants to conserve moisture, suppress weeds, and maintain consistent soil temperature.\n\n",
    "10. Apply a balanced fertilizer before planting and use a tomato-specific fertilizer during the growing season to promote healthy fruit development.\n\n",
    "11. Prune the plants by removing side shoots (suckers) that grow between the main stem and branches to improve airflow and encourage strong fruit production.\n\n",
    "12. Control weeds early in the growing season using shallow cultivation or mulch around the plants.\n\n",
    "13. Watch for pests such as aphids, whiteflies, and tomato hornworms. Use appropriate pest control measures, such as insecticidal soap or natural predators.\n\n",
    "14. Tomatoes are prone to diseases like blight, mildew, and fusarium wilt. Use fungicides when needed, and practice crop rotation to prevent soil-borne diseases.\n\n",
    "15. Tomatoes generally mature in 55-85 days, depending on the variety. Monitor the plants for color change and firmness when the tomatoes are ready for harvesting.\n\n",
    "16. Harvest tomatoes when they reach full color and are firm to the touch. For some varieties, you can allow them to ripen fully on the vine, while others may be picked when still slightly green and ripened off the vine.\n\n",
    "17. Use a sharp knife or scissors to cut the tomatoes from the plant, leaving a small portion of the stem attached to the fruit.\n\n",
    "18. If you're growing tomatoes for seed saving, allow a few fruits to fully ripen and mature on the plant before harvesting.\n\n",
    "19. After harvesting, store tomatoes at room temperature to allow them to ripen further, but avoid refrigerating them as it may reduce their flavor.\n\n",
    "20. For long-term storage, tomatoes can be canned, dried, or frozen for later use.\n\n",
    "21. Consider intercropping tomatoes with companion plants such as basil, marigold, or onions to help deter pests and enhance growth.\n\n",
    "22. Tomato plants can be grown in containers or raised beds, especially in areas with limited space or poor soil.\n\n",
    "23. Avoid planting tomatoes in fields with poor drainage or excessive waterlogging, as this may lead to root rot and other diseases.\n\n",
    "24. If using tomatoes for culinary purposes, ensure they are harvested at the peak of ripeness to retain the most flavor and nutrients.\n\n",
    "25. Tomatoes can be grown multiple times a year in regions with a favorable climate. Regularly rotating crops and providing adequate nutrition will help maintain healthy plants and high yields.\n\n"
]
,

  "Coriander": [
    "1. Select a well-drained, fertile soil with a pH level between 6.0 and 7.0 for planting coriander.\n\n",
    "2. Coriander grows best in cool weather, and the ideal temperature range for growth is 55°F to 75°F (13°C to 24°C). Avoid high temperatures during the flowering stage, as it may cause bolting.\n\n",
    "3. Prepare the soil by loosening it to a depth of 10-12 inches (25-30 cm) and removing any weeds or debris.\n\n",
    "4. Incorporate organic matter like compost into the soil before planting to improve soil fertility and texture.\n\n",
    "5. Choose high-quality, disease-free coriander seeds. For faster germination, soak the seeds in water for a few hours before planting.\n\n",
    "6. Plant coriander seeds 1/4 to 1/2 inch (0.5-1.25 cm) deep, and space the seeds 6-12 inches (15-30 cm) apart in rows.\n\n",
    "7. Coriander requires moderate moisture levels throughout the growing season. Keep the soil evenly moist but not waterlogged.\n\n",
    "8. Apply a balanced fertilizer before planting, and use a nitrogen-rich fertilizer during the early growth stage to promote leafy growth.\n\n",
    "9. Water regularly, especially during dry periods, but avoid over-watering as this can cause root rot.\n\n",
    "10. Control weeds early in the growing season using shallow cultivation or mulch around the plants.\n\n",
    "11. Coriander is prone to pests such as aphids, caterpillars, and leaf miners. Monitor plants regularly and apply appropriate pest control measures if necessary.\n\n",
    "12. Coriander may also be susceptible to diseases like powdery mildew and blight. Use fungicides if required and practice crop rotation.\n\n",
    "13. Coriander plants usually mature in 2-3 months, depending on the growing conditions. Monitor plants for signs of maturity, such as when the leaves turn yellow and dry.\n\n",
    "14. Harvest coriander leaves when they are young and tender for the best flavor. Use scissors or pruning shears to cut the leaves from the base of the plant.\n\n",
    "15. If growing coriander for seed production, allow the plants to flower and produce seeds. The seeds are ready to harvest when they turn brown and dry on the plant.\n\n",
    "16. For seed harvesting, cut the entire plant when the seeds have ripened, and allow them to dry in a well-ventilated area.\n\n",
    "17. After harvesting, dry the coriander seeds thoroughly before storing them to prevent mold growth.\n\n",
    "18. Store dried coriander seeds in airtight containers in a cool, dry place to preserve their flavor and aroma.\n\n",
    "19. For long-term storage, you can grind the coriander seeds into powder, but it is recommended to grind them just before use for the best flavor.\n\n",
    "20. Coriander can be intercropped with other crops like tomatoes, onions, or chili peppers to make the best use of space and improve pest management.\n\n",
    "21. If using coriander for medicinal or culinary purposes, ensure that you follow the recommended harvesting and drying guidelines to retain the most flavor and essential oils.\n\n",
    "22. Avoid planting coriander in fields with poor drainage or excessive waterlogging, as this may lead to root rot and disease.\n\n",
    "23. Coriander plants can be grown in containers or raised beds, especially in areas with limited space or poor soil.\n\n",
    "24. After harvesting the leaves, ensure that you continue to monitor the plants for any signs of disease or pests that may affect the remaining crops.\n\n",
    "25. Coriander can be grown multiple times a year, especially in regions with favorable climate conditions. Regularly rotating the crops helps in maintaining soil health and reduces pest pressure.\n\n"
  ]

};




// Sample crop revenue per acre
const cropRevenue = {
  "Rice": 332000,        // 4000 USD * 83 INR
  "Banana": 415000,      // 5000 USD * 83 INR
  "Groundnut": 290500,   // 3500 USD * 83 INR
  "Sugarcane": 498000,   // 6000 USD * 83 INR
  "Cotton": 373500,      // 4500 USD * 83 INR
  "Mango": 581000,       // 7000 USD * 83 INR
  "Tomato": 249000,      // 3000 USD * 83 INR
  "Brinjal": 207500,     // 2500 USD * 83 INR
  "Chili": 232400,       // 2800 USD * 83 INR
  "Onion": 265600,       // 3200 USD * 83 INR
  "Guava": 290500,       // 3500 USD * 83 INR
  "Papaya": 332000,      // 4000 USD * 83 INR
  "Carrot": 207500,      // 2500 USD * 83 INR
  "Cucumber": 182600,    // 2200 USD * 83 INR
  "Pumpkin": 166600,     // 2000 USD * 83 INR
  "Cabbage": 149400,     // 1800 USD * 83 INR
  "Cauliflower": 149400, // 1800 USD * 83 INR
  "Potato": 232400,      // 2800 USD * 83 INR
  "Green beans": 199200, // 2400 USD * 83 INR
  "Peas": 182600,        // 2200 USD * 83 INR
  "Garlic": 290500,      // 3500 USD * 83 INR
  "Broccoli": 332000,    // 4000 USD * 83 INR
  "Strawberry": 373500,  // 4500 USD * 83 INR
  "Tea": 664000,         // 8000 USD * 83 INR
  "Coconut": 290500,     // 3500 USD * 83 INR
  "Tamarind": 498000,    // 6000 USD * 83 INR
  "Cashew": 705500,      // 8500 USD * 83 INR
  "Tobacco": 332000,     // 4000 USD * 83 INR
  "Watermelon": 249000,  // 3000 USD * 83 INR
  "Maize": 249000,       // 3000 USD * 83 INR
  "Pulses": 290500,      // 3500 USD * 83 INR
  "Pomegranate": 249000, // 3000 USD * 83 INR
  "Turmeric": 1990000,   // 30000 USD * 83 INR (Updated from $30,000 to INR)
  "Cardamom": 24500000 , // 600000 USD * 83 INR
  "Millets" : 37762,
  "Wheat" : 100000
};

const getRandomItems = (arr, count) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Modal = ({ isOpen, onClose, crop, procedure, error, children }) => {
  if (!isOpen) return null;

  return (
    <div>
      <div style={{ padding: '20px', border: '1px solid #ccc', background: 'white' }}>
        <h1>{crop}</h1>
        <br></br>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <pre>{procedure}</pre>
        {children}
        <button onClick={onClose} className='close'>Close</button>
      </div>
    </div>
  );
};

const Farm = () => {
  const [district, setDistrict] = useState('');
  const [taluka, setTaluka] = useState('');
  const [pincode, setPincode] = useState('');
  const [budget, setBudget] = useState();
  const [area, setArea] = useState();
  const [recommendedCrops, setRecommendedCrops] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState('');
  const [selectedCropProcedure, setSelectedCropProcedure] = useState('');
  const [errorProcedure, setErrorProcedure] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showProfitDetails, setShowProfitDetails] = useState(false);
  const [profitDetails, setProfitDetails] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all fields are filled out
    if (!district || !taluka || !pincode) return;

    const districtData = cropsData[district];
    let cropRecommendations = [];

    if (districtData) {
      const talukaData = districtData[taluka];
      if (talukaData) {
        const cropsForPincode = talukaData[pincode];
        if (cropsForPincode) {
          cropRecommendations = cropsForPincode;
        } else {
          setErrorMessage('No crops found for this pincode.');
          setRecommendedCrops([]);
          return;
        }
      } else {
        setErrorMessage('Taluka not found in this district.');
        setRecommendedCrops([]);
        return;
      }
    } else {
      setErrorMessage('District not found in the dataset. Please try a different district.');
      setRecommendedCrops([]);
      return;
    }

    setRecommendedCrops(cropRecommendations);
    setErrorMessage('');
  };

  const fetchCropProcedure = (crop) => {
    const procedure = cropProcedures[crop]; // Assuming cropProcedures is defined elsewhere
    const revenuePerAcre = cropRevenue[crop] || 0;
    const cropArea = area;

    if (procedure) {
      setSelectedCropProcedure(procedure);
    } else {
      setErrorProcedure('Procedure not available for this crop');
    }

    if (revenuePerAcre && cropArea && budget) {
      const totalRevenue = revenuePerAcre * cropArea;
      const profit = totalRevenue - budget;
      setProfitDetails({
        revenuePerAcre,
        totalRevenue,
        profit,
        crop,
        area,
        budget
      });
    } else {
      setProfitDetails(null); // Reset if no revenue data available
    }
  };

  const handleCropClick = (crop) => {
    setSelectedCrop(crop);
    fetchCropProcedure(crop);
    setIsModalOpen(true);
    setShowProfitDetails(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCrop('');
    setSelectedCropProcedure('');
    setErrorProcedure('');
    setProfitDetails(null);
  };

  const handleShowProfitClick = () => {
    setShowProfitDetails(true);
  };

  return (
    <div className='continer'>
      <h1>Crop Prediction</h1>

      <form onSubmit={handleSubmit} className='form'>
        <label>
          District:
          <input name='district'
          className='input'
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            required
          />
        </label>
        <br /><br />

        <label>
          Taluka:
          <input
          name='taluka'
           className='input'
            type="text"
            value={taluka}
            onChange={(e) => setTaluka(e.target.value)}
            required
          />
        </label>
        <br /><br />

        <label>
          Pincode:
          <input
          name="pincode"
            type="text"
             className='input'
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            required
          />
        </label>
        <br /><br />

        <label>
          Budget:
          <br></br>
          <input
            type="number"
             className='input'
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
          />
        </label>
        <br /><br />

        <label>
          Area (acres):<br></br>
          <input
            type="number"
             className='input'
            value={area}
            step="0.1"
            onChange={(e) => setArea(e.target.value)}
            required
          />
        </label>
        <br /><br />

        <button  className="button" type="submit">Predict Suitable Crops</button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      
      <div className='rec'>
        {recommendedCrops.length > 0 ? (
          <ul className='cropbg'>
            {recommendedCrops.map((crop, index) => (
              <li key={index}>
                
              <br></br>
                {crop.crop}{' '}
                <button className='buttonb' onClick={() => handleCropClick(crop.crop)}>View Procedure</button>
              </li>
              
            ))}
          </ul>
        ) : (
          !errorMessage && <p></p>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        crop={selectedCrop}
        procedure={selectedCropProcedure}
        error={errorProcedure}
      >
        <div>
          <button className='buttonb' onClick={handleShowProfitClick}>Show Profit</button>

          {showProfitDetails && profitDetails && (
            <div>
              <h3>Profit Details for {profitDetails.crop}:</h3>
              <p>Revenue per Acre: ₹{profitDetails.revenuePerAcre}</p>
              <p>Area: {profitDetails.area} acres</p>
              <p>Budget: ₹{profitDetails.budget}</p>
              <p>Total Revenue: ₹{profitDetails.totalRevenue}</p>
              <p>Profit: ₹{profitDetails.profit}</p>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Farm;
