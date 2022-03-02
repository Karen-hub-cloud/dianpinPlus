var config=require("../config/config")
module.exports = {
    hasMore: true,
    data: [
        {
            img: config.imgUrl+'/8.png',
            title: 'BURFER KING',
            subTitle: 'Spicy Pork Knuckle Burger',
            price: '28',
            distance: '120m',
            number: '389',
            id: Math.random().toString().slice(2)
        },
        {
            img: config.imgUrl+'/9.png',
            title: 'restaurant',
            subTitle: 'restaurant',
            price: '98',
            distance: '140m',
            number: '689',
            id: Math.random().toString().slice(2)
        },
        {
            img: config.imgUrl+'/10.png',
            title: 'custom clothing service',
            subTitle: 'The original price is $5, the current price is $4',
            price: '1980',
            distance: '160',
            number: '106',
            id: Math.random().toString().slice(2)
        },
        {
            img: config.imgUrl+'/11.png',
            title: 'photography service',
            subTitle: 'take a photo',
            price: '2899',
            distance: '160',
            number: '58',
            id: Math.random().toString().slice(2)
        },
        {
            img: config.imgUrl+'/12.png',
            title: 'chef Course',
            subTitle: 'price reduction for a limited time',
            price: '0',
            distance: '160',
            number: '1426',
            id: Math.random().toString().slice(2)
        }
    ]
}