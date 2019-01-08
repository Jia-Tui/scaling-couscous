Page({
  data(){
    return {
      name:"鲁迅",
      firstName:"",
      lastName:"",
    }
  },
  watch:{
    name(newVal){
      this.data.firstName = newVal.substr(0,1)
      this.data.lastName = newVal.substr(1)
    }
  },
})