// var express = require('express');
// var categoryrouter = express.Router();

// categoryrouter.get('/api/category', function(req, res, next) {
//   res.send('瀑布流');
// });

// module.exports = categoryrouter;
const PexelsController = require('../../controller/aplumweb/PexelsController');
const express = require('express');
const categoryrouter = express.Router();

categoryrouter.get('/api/category', function (req, res, next) {
  res.send({
    success: true,
    code: 200,
    data: {
      categorys: [
        { id: 'macaron', name: '马卡龙', urlname: 'macaron' },
        { id: 'cupcake', name: '杯子蛋糕', urlname: 'cupcake' },
        { id: 'tiramisu', name: '提拉米苏', urlname: 'tiramisu' },
        { id: 'brownie', name: '布朗尼', urlname: 'brownie' },
        { id: 'doughnut', name: '甜甜圈', urlname: 'doughnut' },
        { id: 'pie', name: '派', urlname: 'pie' },
        { id: 'ice cream', name: '冰淇淋', urlname: 'ice cream' },
        { id: 'cookies', name: '饼干', urlname: 'cookies' },
        { id: 'milkshake', name: '奶昔', urlname: 'milkshake' }
      ]
      // categorys: [
      //   { id: 'web_app_icon', name: 'UI/UX', col: 1, urlname: 'web_app_icon' },
      //   { id: 'design', name: '平面', col: 1, urlname: 'design' },
      //   { id: 'illustration', name: '插画/漫画', col: 1, urlname: 'illustration' },
      //   { id: 'photography', name: '摄影', col: 2, urlname: 'photography' },
      //   { id: 'games', name: '游戏', urlname: 'games' },
      //   { id: 'anime', name: '动漫', urlname: 'anime' },
      //   { id: 'industrial_design', name: '工业设计', col: 2, urlname: 'industrial_design' },
      //   { id: 'architecture', name: '建筑设计', urlname: 'architecture' },
      //   { id: 'art', name: '人文艺术', urlname: 'art' },
      //   { id: 'home', name: '家居/家装', col: 1, urlname: 'home' },
      //   { id: 'apparel', name: '女装/搭配', col: 1, urlname: 'apparel' },
      //   { id: 'men', name: '男士/风尚', col: 2, urlname: 'men' },
      //   { id: 'modeling_hair', name: '造型/美妆', urlname: 'modeling_hair' },
      //   { id: 'diy_crafts', name: '手工/布艺', urlname: 'diy_crafts' },
      //   { id: 'food_drink', name: '美食', urlname: 'food_drink' },
      //   { id: 'travel_places', name: '旅行', urlname: 'travel_places' },
      //   { id: 'wedding_events', name: '婚礼', col: 2, urlname: 'wedding_events' },
      //   { id: 'kids', name: '儿童', urlname: 'kids' },
      //   { id: 'pets', name: '宠物', urlname: 'pets' },
      //   { id: 'quotes', name: '美图', urlname: 'quotes' },
      //   { id: 'people', name: '明星', urlname: 'people' },
      //   { id: 'beauty', name: '美女', urlname: 'beauty' },
      //   { id: 'desire', name: '礼物', urlname: 'desire' },
      //   { id: 'geek', name: '极客', urlname: 'geek' },
      //   { id: 'data_presentation', name: '数据图', urlname: 'data_presentation' },
      //   { id: 'cars_motorcycles', name: '汽车/摩托', urlname: 'cars_motorcycles' },
      //   { id: 'film_music_books', name: '电影/图书', urlname: 'film_music_books' },
      //   { id: 'tips', name: '生活百科', urlname: 'tips' },
      //   { id: 'education', name: '教育', urlname: 'education' },
      //   { id: 'sports', name: '运动', urlname: 'sports' },
      //   { id: 'funny', name: '搞笑', urlname: 'funny' }
      // ]
    },
    message: 'success'
  });
});
categoryrouter.get('/api/pexels/list', PexelsController.getList);
// 拉取 Pexels 图数据
categoryrouter.get('/api/pexels/fetch', PexelsController.fetchFromPexels);
// 某一张图的具体信息
categoryrouter.get('/api/pexels/:id', PexelsController.getDetail);

module.exports = categoryrouter;
