import cardMixins from '../../mixins/card'
Page({
  /**
   * 页面的初始数据
   */
  data(){
    return {
      test:3241234,
      user:{id:"", name:"yonking"},
      list:[
        {id:1, name:"列夫"},
        {id:2, name:"奥尔加"},
        {id:3, name:"格雷格"},
        {id:4, name:"比利"},
        {id:5, name:"沃尔特"},
      ],
      book:{auto:"肯福莱特", money:50,name:"世纪三部曲-世界的凛冬"},
    }
  },
  mixins:[cardMixins],
  /**
   * 管擦者
   */
  watch:{
    test(newVal){
      this
    }
  },
  /**
   * 计算属性
   */
  computed: {
    computedName(){
      return this.data.book.money + "===="
    }
  },
  //这个相当于小程序onLoad生命钩子，当然，如果你习惯小程序的写法还是可以用onLoad
  mounted() {
    //以后参数你可以像vue一样，在路由里面获取了
    let { id }= this.$route.query
    //是不是这样的赋值很爽，是的，你再也不需要this.setData，这么麻烦的取值赋值了。
    //重新赋值你只需要用“=”就可以了，框架已经帮你做了后面的事，让开发人员只专心写业务代码
    //目前已测：js基本变量类型，Array，Object类型
    this.data.user.id = id
    this.data.list[0].name = "瓦诺伽"
  },
  //页面的事件都放这里
  methods:{
    onShow() {
      this.data.list[1].name = "思诺"
    },
    remove(e){
      let {index} = e.target.dataset
      this.data.list.splice(index, 1)
    }
  }
})