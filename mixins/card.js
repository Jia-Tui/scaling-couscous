export default {
    data(){
        return {
            length:0
        }
    },
    methods:{
        addOne(){
            this.data.length = this.data.length+1
        }
    }
}