var Common = [
    {
        "color" : "Wild",
        "rarity" : "Common",
        "price" : 55.00,
        "image" : "images/Wild.jpg",
        "want" : 0
    },
    {
        "color" : "Leucistic",
        "rarity" : "Common",
        "price" : 65.00,
        "image" : "images/Leucistic.jpg", 
        "want" : 0
    },
    {
        "color" : "White Albino",
        "rarity" : "Common",
        "price" : 65.00,
        "image" : "images/WA.jpg", 
        "want" : 0 
    },
    {
        "color" : "Golden",
        "rarity" : "Common",
        "price" : 70.00,
        "image" : "images/Golden.jpg",
        "want" : 0 
    },
    {
        "color" : "Melanoid",
        "rarity" : "Common",
        "price" : 70.00,
        "image" : "images/Melanoid.jpg",
        "want" : 0 
    }
]
var Special = [
    {
        "color" : "Green Fluorescent Protein",
        "rarity" : "Special",
        "price" : 115.00,
        "image" : "images/GFP.jpg",
        "want" : 0
    },
    {
        "color" : "Copper",
        "rarity" : "Special",
        "price" : 115.00,
        "image" : "images/Copper.jpg",
        "want" : 0 
    }
]
var Rare = [
    {
        "color" : "Chimera",
        "rarity" : "Rare",
        "price" : 135.00,
        "image" : "images/Chimera.jpg",
        "want" : 0 
    },
    {
        "color" : "Mosaic",
        "rarity" : "Rare",
        "price" : 135.00,
        "image" : "images/Mosaic.jpg",
        "want" : 0 
    },
    {
        "color" : "Piebald",
        "rarity" : "Rare",
        "price" : 135.00,
        "image" : "images/Piebald.jpg",
        "want" : 0 
    }
]

var products = {
    "COMMON": Common,
    "SPECIAL": Special,
    "RARE" : Rare
}

if (typeof module != 'undefined') {
    module.exports.products = products;
    };