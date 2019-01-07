import converterPage from './converter/page'
import converterComponent from './converter/component'
const nativePage = Page
const nativeComponent = Component
Page = (option, key='page') => {
    if(key=='page'){
        nativePage(converterPage(option))
    }else{
        nativeComponent(converterComponent(option))
    }
}
Component = options => Page(options, 'component') 