import proxy from '../proxy.js'
const { watch, computed } = require('../vuefy.js')
export default (option) => {
    let mounted = option.mounted
    let data
    if(typeof option.data === "function"){
        data = option.data()
    }else{
        return option
    }
    let methods = option.methods
    if(option.mixins){
        option.mixins.forEach(item => {
            data = {...data, ...item.data()}
            methods = {...methods, ...item.methods}
        })
    }
    let page = {
        ...option,
        /**
         * 事件绑定
         */
        ...methods,
        /**
         * input改变事件
         */
        bindKeyInput(e) {
            let name = e.currentTarget.dataset.key;
            let nameMap = {}
            if (name.indexOf('.')>0) {
                let nameList = name.split('.')
                if (this.data[nameList[0]]) {
                    nameMap[nameList[0]] = this.data[nameList[0]]
                } else {
                    nameMap[nameList[0]] = {}
                }
                nameMap[nameList[0]][nameList[1]] = e.detail.value
            } else {
                this.data[name] = e.detail.value
            }
        },
        /**
         * 页面的初始数据
         */
        data: {},
        $data: data,
        /**
         * 生命周期函数--监听页面加载
         */
        $onLoad: option.onLoad,
        mounted,
        onLoad(options) {
            //设置路由信息 $route
            this.$route = { query: options }
            //设置watch
            watch(this, {
                ...option.watch
            })
            //设置computed
            // computed(this, {
            //     ...option.computed
            // })
            //设置data代理 
            this.data = proxy.call(this)
            this.setData(this.data)
            //设置...
            if (typeof this.mounted === "function") {
                this.mounted()
            } else if (typeof this.$onLoad === "function") {
                this.$onLoad(options)
            }
        }
    }
    return page
}