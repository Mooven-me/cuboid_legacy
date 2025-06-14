// priority: 0

ServerEvents.recipes(e => {

// For Thaliono. Replacement recipe for ink sacs. Replaced uncompressed_coal with coal as excompressium does not exist for this version of MC. see inksac.old

    const spawn_egg = (result, fluid, input1, input2, input3, input4) => {
    e.custom({
    "type": "lychee:item_inside",
    "item_in": [
        {
            "item": input1
        },
        {
            "item": input2
        },
        {
            "item": input3
        },
        {
            "item": input4
        }
    ],
    "block_in": {
        "blocks": [fluid]
    },
    "post": [
        {
            "type": "drop_item",
            "item": result,
            "count": 1
        },
        {
            "type": "place",
            "block": "*",
            "contextual": {
                "type": "chance",
                "chance": 1.0
            }
        }
    ]
})
}

const spawn_egg_1_alt = (result1, result2, fluid, input1, input2, input3, input4) => {
    e.custom({
    "type": "lychee:item_inside",
    "item_in": [
        {
            "item": input1
        },
        {
            "item": input2
        },
        {
            "item": input3
        },
        {
            "item": input4
        }
    ],
    "block_in": {
        "blocks": [fluid]
    },
    "post": [
        {
            "type": "random",
            "entries": [
                {
                    "type": "drop_item",
                    "item": result1,
                    "weight": 95                    
                },
                {
                    "type": "drop_item",
                    "item": result2,
                    "weight": 5
                }
            ]
        },
        {
            "type": "place",
            "block": "*",
            "contextual": {
                "type": "chance",
                "chance": 1.0
            }
        }
    ],    
  })
}

const spawn_egg_2_alts = (result1, result2, result3, fluid, input1, input2, input3, input4) => {
    e.custom({
    "type": "lychee:item_inside",
    "item_in": [
        {
            "item": input1
        },
        {
            "item": input2
        },
        {
            "item": input3
        },
        {
            "item": input4
        }
    ],
    "block_in": {
        "blocks": [fluid]
    },
    "post": [
        {
            "type": "random",
            "entries": [
                {
                    "type": "drop_item",
                    "item": result1,
                    "weight": 95                    
                },
                {
                    "type": "drop_item",
                    "item": result2,
                    "weight": 3
                },
                {
                    "type": "drop_item",
                    "item": result3,
                    "weight": 2
                }
            ]
        },
        {
            "type": "place",
            "block": "*",
            "contextual": {
                "type": "chance",
                "chance": 1.0
            }
        }
    ],    
  })
}

    // witch_water
    spawn_egg("minecraft:chicken_spawn_egg", "exnihilosequentia:witch_water", "minecraft:egg", "kubejs:primordial_gloop", "minecraft:wheat_seeds", "kubejs:rna")
    spawn_egg("minecraft:sheep_spawn_egg", "exnihilosequentia:witch_water", "minecraft:egg", "kubejs:primordial_gloop", "minecraft:white_wool", "ae2:sky_stone_block")
    spawn_egg("minecraft:pig_spawn_egg", "exnihilosequentia:witch_water", "minecraft:egg", "kubejs:primordial_gloop", "minecraft:mutton", "minecraft:dirt")
    spawn_egg_2_alts("minecraft:horse_spawn_egg", "minecraft:donkey_spawn_egg", "minecraft:mule_spawn_egg", "exnihilosequentia:witch_water", "minecraft:egg", "kubejs:primordial_gloop", "minecraft:mutton", "minecraft:porkchop")
    spawn_egg("minecraft:cow_spawn_egg", "exnihilosequentia:witch_water", "minecraft:egg", "kubejs:primordial_gloop", "minecraft:leather", "minecraft:bucket")
    spawn_egg("minecraft:parrot_spawn_egg", "exnihilosequentia:witch_water", "minecraft:egg", "kubejs:primordial_gloop", "minecraft:feather", "minecraft:blue_dye")

    // lactic acid
    spawn_egg_1_alt("minecraft:cat_spawn_egg", "minecraft:ocelot_spawn_egg", "kubejs:lactic_acid", "minecraft:egg", "kubejs:primordial_gloop", "minecraft:string", "minecraft:cod")
    spawn_egg("minecraft:wolf_spawn_egg", "kubejs:lactic_acid", "minecraft:egg", "kubejs:primordial_gloop", "minecraft:cooked_beef", "minecraft:bone")
    spawn_egg("minecraft:fox_spawn_egg", "kubejs:lactic_acid", "minecraft:egg", "kubejs:primordial_gloop", "minecraft:sweet_berries", "minecraft:chicken")
    spawn_egg("minecraft:llama_spawn_egg", "kubejs:lactic_acid", "minecraft:egg", "kubejs:primordial_gloop", "minecraft:lead", "kubejs:albumen")
    spawn_egg("minecraft:mooshroom_spawn_egg", "kubejs:lactic_acid", "minecraft:egg", "kubejs:primordial_gloop", "minecraft:brown_mushroom", "minecraft:red_mushroom")
    spawn_egg("minecraft:polar_bear_spawn_egg", "kubejs:lactic_acid", "minecraft:egg", "kubejs:primordial_gloop", "minecraft:snow_block", "minecraft:glowstone_dust")
    spawn_egg("minecraft:rabbit_spawn_egg", "kubejs:lactic_acid", "minecraft:egg", "kubejs:primordial_gloop", "minecraft:carrot", "minecraft:golden_carrot")
    spawn_egg("minecraft:panda_spawn_egg", "kubejs:lactic_acid", "minecraft:egg", "kubejs:primordial_gloop", "minecraft:snow_block", "minecraft:coal_block")

    // sea water
    spawn_egg("minecraft:turtle_spawn_egg", "exnihilosequentia:sea_water", "minecraft:egg", "kubejs:primordial_gloop", "minecraft:kelp", "minecraft:seagrass")

    // see https://minecraft.fandom.com/wiki/Rabbit#Breeding for breeding notes

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
    e.shapeless('minecraft:red_mushroom', [
      '#forge:mushrooms',
      '#forge:dyes/red'
    ])

    e.shapeless('minecraft:brown_mushroom', [
      '#forge:mushrooms',
      '#forge:dyes/brown'
    ])

  })