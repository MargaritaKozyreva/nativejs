import './module.js'
import './scss/style.scss'

console.log('Work!')

const testFn = async () => {
    const res = await (console.log('Hi'))
    return res
}

testFn()