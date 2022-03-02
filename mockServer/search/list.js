var config=require("../config/config")
module.exports = {
    hasMore: true,
    data: [
        {
            img: config.imgUrl+'/13.jpg',
            title: 'dinner',
            subTitle: 'restaurant',
            price: '150',
            distance: '120m',
            number: '389',
            id: Math.random().toString().slice(2)
        },
        {
            img: config.imgUrl+'/14.jpg',
            title: 'dinner',
            subTitle: 'restaurant',
            price: '113',
            distance: '140m',
            number: '689',
            id: Math.random().toString().slice(2)
        },
        {
            img: config.imgUrl+'/15.jpg',
            title: 'dinner',
            subTitle: 'restaurant',
            price: '92',
            distance: '160',
            number: '106',
            id: Math.random().toString().slice(2)
        },
        {
            img: config.imgUrl+'/16.jpg',
            title: 'dinner',
            subTitle: 'restaurant',
            price: '90',
            distance: '160',
            number: '58',
            id: Math.random().toString().slice(2)
        },
        {
            img: config.imgUrl+'/17.jpg',
            title: 'dinner',
            subTitle: 'restaurant',
            price: '85',
            distance: '160',
            number: '1426',
            id: Math.random().toString().slice(2)
        },
        {
            img: config.imgUrl+'/18.jpg',
            title: 'dinner',
            subTitle: 'restaurant',
            price: '113',
            distance: '140m',
            number: '689',
            id: Math.random().toString().slice(2)
        },
        {
            img: config.imgUrl+'/19.jpg',
            title: 'dinner',
            subTitle: 'restaurant',
            price: '90',
            distance: '160',
            number: '58',
            id: Math.random().toString().slice(2)
        }
    ]
}