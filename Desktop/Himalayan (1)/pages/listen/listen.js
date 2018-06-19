
const app = getApp();

Page({
  data:{
    left:45,
    current: 0,
    clickIndex: -1,
    subscription: 10,
    arrSubscription:[]
  },
  onLoad: function(){
    var arr = [],
        length = this.data.subscription;
    for(var i = 0;i<length;i++) {
      arr[i] = -1;
    }
    this.setData({
      arrSubscription: arr
    })
  },
  swiperChange: function(e) {
    var leftArr = [45,220];
    this.setData({
      left:leftArr[e.detail.current]
    })
  },
  handleChange: function(e) {
    var leftArr = [45,220];
    this.setData({
      left:leftArr[e.currentTarget.dataset.index-1],
      current: e.currentTarget.dataset.index-1
    })
  },
  toggleSub: function(e) {
    let index = e.currentTarget.dataset.index,
        length = this.data.subscription,
        arrSubscription = this.data.arrSubscription,
        arr = arrSubscription;
    if(arrSubscription[index] == -1) {
     arr[index] =index;
      this.setData({
        arrSubscription:arr
      })
    } else {
      arr[index] = -1;
      this.setData({
        arrSubscription:arr
      })
    }
  }
})
