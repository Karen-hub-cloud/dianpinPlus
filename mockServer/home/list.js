var config=require("../config/config")
module.exports = {
    hasMore: true,
    data: [
        {
            img: config.imgUrl+'/8.png',
            title: 'Psychology and Life Course',
            subTitle: 'Start time: 2022.3.20 ~ 2022.6.31',
            price: '28',
            distance: '120m',
            number: '389',
            id: 8
        },
        {
            img: config.imgUrl+'/9.png',
            title: 'Printing Course',
            subTitle: 'Start time: 2022.3.20 ~ 2022.6.31',
            price: '98',
            distance: '140m',
            number: '689',
            id: 9
        },
        {
            img: config.imgUrl+'/10.png',
            title: 'Apple Pencil',
            subTitle: 'The original price is $150, the current price is $100',
            price: '100',
            distance: '160',
            number: '106',
            id: 10
        },
        {
            img: config.imgUrl+'/11.png',
            title: 'Apple Watch',
            subTitle: 'Apple Watch',
            price: '250',
            distance: '160',
            number: '58',
            id: 11
        }
    ]
}
