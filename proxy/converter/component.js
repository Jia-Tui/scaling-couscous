
import proxy from '../proxy.js'
export default (option) => {
    let methods = {
        ...option.methods,
        bindKeyInput(e){
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
    }
    let data
    if(typeof option.data === "function"){
        data = option.data()
    }else{
        data = option.data
    }
    let page = {
        ...option,
        properties:option.properties||option.props,
        data:data,
        methods:methods,
        created(){
            this.$data = data
            this.data = proxy.call(this)
            if(typeof option.created === "function"){
                this.$created = option.created
                this.$created()
            }
        }
    }
    return page
}