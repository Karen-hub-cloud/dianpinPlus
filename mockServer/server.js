const Koa = require('koa');
const app = new Koa()
var router = require('koa-router')();

//首页广告
var homeAdData = require('./home/ad.js');
router.get('/api/homead',function(ctx,next){
	ctx.body = homeAdData;
})

//列表
var homeListData = require('./home/list.js');
router.get('/api/homelist/:city/:page',function(ctx,next){
	const paramsCity = ctx.params.city;
	const paramsPage = ctx.params.page;

	console.log("current city："+paramsCity);
	console.log("current page："+paramsPage);

	ctx.body = homeListData;
});

// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./search/list.js')
router.get('/api/search/:page/:city/:category/:keyword', function (ctx,next) {
    // 参数
    const paramsPage = ctx.params.page
    const paramsCity = ctx.params.city
    const paramsCategory = ctx.params.category
    const paramsKeyword = ctx.params.keyword

    console.log('current page：' + paramsPage)
    console.log('current city：' + paramsCity)
    console.log('current category：' + paramsCategory)
    console.log('keyword：' + paramsKeyword)

    ctx.body = searchListData
})
// 搜索结果页 - 搜索结果 - 两个参数
router.get('/api/search/:page/:city/:category', function (ctx,next) {
    // 参数
    const paramsPage = ctx.params.page
    const paramsCity = ctx.params.city
    const paramsCategory = ctx.params.category

    console.log('current page：' + paramsPage)
    console.log('urrent city：' + paramsCity)
    console.log('current category：' + paramsCategory)

    ctx.body = searchListData
})

// 详情页 - 商户信息
const detailInfo8 = require('./detail/info8.js')
const detailInfo9 = require('./detail/info9.js')
const detailInfo10 = require('./detail/info10.js')
const detailInfo11 = require('./detail/info11.js')
router.get('/api/detail/info/:id', function (ctx,next) {
    console.log('Detail - Location')

    const id = ctx.params.id

    if(id == 8){
        ctx.body = detailInfo8
    }
    if(id == 9){
        ctx.body = detailInfo9
    }
    if(id == 10){
        ctx.body = detailInfo10
    }
    if(id == 11){
        ctx.body = detailInfo11
    }

})

// 详情页 - 用户评论
const detailComment = require('./detail/comment.js')
router.get('/api/detail/comment/:page/:id', function (ctx,next) {
    console.log('Detail - comment')
    const page = ctx.params.page
    const id = ctx.params.id

    console.log('商户id: ' + id)
    console.log('当前页数: ' + page)

    ctx.body = detailComment
})
//开启服务
const serve = require('koa-static');
app.use(serve(__dirname + '/images'));
app.use(router.routes())
   .use(router.allowedMethods());
var config=require("./config/config")
app.listen(config.port);
