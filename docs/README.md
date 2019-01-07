<h3> jt-plugin是什么？ </h3>

* 她是一个小程序二次封装的框架。
* 她主要做了一件事：数据双向绑定。
* 其次她还做了侦听器，计算属性，混入等。(后面还有新的特性)
* 她与原生小程序的写法并无冲突。

>如果你觉得她对你的开发有所帮助，请继续往下看吧

<h3> 实现原理 </h3>

如果你有读过Vue的源码，或者有了解过Vue的响应原理，那么你一定知道Object.defineProperty(),那么你也应该知道，Vue 2.x里，是通过 递归 + 遍历 data对象来实现对数据的监控的，你可能还会知道，我们使用的时候，直接通过数组的下标给数组设置值，不能实时响应，是因为Object.defineProperty()无法监控到数组下标的变化，而我们平常所用的数组方法 push, pop, shift, unshift, splice, sort, reverse,其实不是真正的数组方法，而是被修改过的,这些都是因为 Object.defineProperty() 提供的能力有限，无法做到完美。

据说Vue的3.x版本会改用Proxy，所以，jt-plugin用Proxy实现一个简单版的Vue