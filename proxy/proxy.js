export default function proxy() {
    let pending = false
    let setData = (target, key, value) => {
        pending = true
        if(key in target){
            setTimeout(() => {
                this.setData(this.data, () => pending = false)
            })
        }else{
            console.warn("prop禁止修改")
        }
    }

    let handler = {
        get(target, key, receiver) {
            try {
                if (typeof target[key] === 'function') return Reflect.get(target, key, receiver)
                return new Proxy(target[key], handler)
            } catch (err) {
                return Reflect.get(target, key, receiver)
            }
        },
        set(target, key, value, receiver) {
            if (!(Array.isArray(target) && key !== 'length'))/** !pending && */ setData(target, key, value)
            return Reflect.set(target, key, value, receiver)
        },
        deleteProperty(target, key) {
            !pending && setData(target, key)
            return Reflect.deleteProperty(target, key)
        }
    }
    return new Proxy(this.$data, handler)
}