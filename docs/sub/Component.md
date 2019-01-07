# Component

原生小程序中，组件的事件都放在methods里，通过properties将外部属性的值传入到组件中来，重构后的变化不大，只是把properties改成props

# props

规定props里面的属性不允许在组件内部修改，不能定义与data名字相同的属性名，其他特性与原生小程序保持一样。

