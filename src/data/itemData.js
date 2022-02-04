//Total items needs to be a multiple of 4

const kvikklunsj = require('../images/kvikklunsj.jpeg')
const hotdog = require('../images/hotdog.png')
const bitcoin = require('../images/bitcoin.jpeg')
const helicopter = require('../images/helicopter.jpeg')
const wagyu = require('../images/wagyu-steak.jpeg')
const horse = require('../images/horse.jpg')


const itemData = [
    {
        name: "Kvikklunsj",
        price: 7,
        imgSrc: kvikklunsj,
        key: 0
    },
    {
        name: "Pølse",
        price: 25,
        imgSrc: hotdog,
        key: 1
    },
    {
        name: "Helikopter",
        price: 1005000,
        imgSrc: helicopter,
        key: 2
    },
    {
        name: "Bitcoin",
        price: 323150.31,
        imgSrc: bitcoin,
        key: 3
    },
    {
        name: "Wagyu Steak",
        price: 3000,
        imgSrc: wagyu,
        key: 4
    },
    {
        name: "Hest",
        price: 80010,
        imgSrc: horse,
        key: 5
    }
]

exports.itemData = itemData;