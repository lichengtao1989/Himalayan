//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperCl: ['../images/recommend/ad1.jpg','../images/recommend/ad6.jpg','../images/recommend/ad1.jpg','../images/recommend/ad6.jpg','../images/recommend/ad1.jpg','../images/recommend/ad6.jpg','../images/recommend/ad1.jpg'],
    swiperRe: ['../images/recommend/ad1.jpg','../images/recommend/ad6.jpg','../images/recommend/ad1.jpg','../images/recommend/ad6.jpg','../images/recommend/ad1.jpg','../images/recommend/ad6.jpg','../images/recommend/ad1.jpg'],
    choiceIcon1: [
      {
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '经典必听',
      navUrl: '',
      backgroundColor:'#f09eae'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '每日必听',
      navUrl: '',
      backgroundColor:'#ff9494'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '听头条',
      navUrl: '',
      backgroundColor:'#85aff0'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '听南昌',
      navUrl: '',
      backgroundColor:'#bed497'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: 'VIP会员',
      navUrl: '',
      backgroundColor:'#e9d585'
    }],
    choiceIcon2: [
      {
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '直播微课',
      navUrl: '',
      backgroundColor:'#aeee52'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '边听边看',
      navUrl: '',
      backgroundColor:'#85aff0'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '一键听',
      navUrl: '',
      backgroundColor:'#bfa0ee'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '马东职场课',
      navUrl: '',
      backgroundColor:'#e5c144'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '大师课',
      navUrl: '',
      backgroundColor:'#f0a887'
    }],
    choiceIcon3: [
      {
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '直播微课',
      navUrl: '',
      backgroundColor:'#aeee52'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '边听边看',
      navUrl: '',
      backgroundColor:'#85aff0'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '一键听',
      navUrl: '',
      backgroundColor:'#bfa0ee'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '马东职场课',
      navUrl: '',
      backgroundColor:'#e5c144'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '大师课',
      navUrl: '',
      backgroundColor:'#f0a887'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '经典必听',
      navUrl: '',
      backgroundColor:'#f09eae'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '每日必听',
      navUrl: '',
      backgroundColor:'#ff9494'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '听头条',
      navUrl: '',
      backgroundColor:'#85aff0'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: '听南昌',
      navUrl: '',
      backgroundColor:'#bed497'
    },{
      imageUrl: '../images/recommend/recommend-trophy.png',
      title: 'VIP会员',
      navUrl: '',
      backgroundColor:'#e9d585'
    }],
    guessImg: [{
      navUrl: '',
      title: '盗墓笔记 周建龙精简高音质版',
      url: ' '
    },{
      navUrl: '',
      title: '阴阳师',
      url: ' '
    },{
      navUrl: '',
      title: '阴阳鬼术-韩若波讲师',
      url: ' '
    },{
      navUrl: '',
      title: '罪恶调查师',
      url: ' '
    },{
      navUrl: '',
      title: '归去来(电视剧同名小说)',
      url: ' '
    },{
      navUrl: '',
      title: '撒海',
      url: ' '
    }],
    navLeft: 15,
    current: 0,
    navArr: [15,180,345,510,675]
  },

  onLoad: function () {
    
  },
  handletouchtart: function(e) {
    console.log('点击'+e.touches[0].pageX);
  },
  handletouchmove: function(e) {

  },
  handleChange:function (e) {
    var index = e.currentTarget.dataset.index;
      // console.log(index);
      this.setData({
        navLeft: this.data.navArr[index-1],
        current: index-1
      })
  },
  pageChange: function(e) {
    // console.log("滑动"+e.detail.current);
    this.setData({
      navLeft:this.data.navArr[e.detail.current]
    })
  }

})