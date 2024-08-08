!function () {                     //立即执行函数---隔离作用域
    var person = {                 //person 是局部变量 
        name: 'xue',
        age: 18
    }
    window.xueGrowUp = function () { //通过闭包，window.xueGrowUp 可以操作 person
        person.age += 1              // window.xueGrowUp 是全局变量
        return person.age
    }          
}.call()