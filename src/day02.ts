enum Color {
  red,
  blue,
  green
}
let colo:Color = Color.red

console.log(colo)

let num: number | undefined
num = 23
console.log(num)

function run() :string {
  return 'zhangshuang'
}

console.log(run())

let run2 = function(): number {
  return 22
}
console.log(run2())


//可选参数
let run3 = function(name :string, age? :number) :string {
  if (age) {
    return name + age
  } else {
    return name
  }
}
console.log(run3("shuang", 32))

//设置默认参数
let run4 = function(name :string, age :number = 20) :string {
  if (age) {
    return name + age
  } else {
    return name
  }
}
console.log(run4('zhang'))

//剩余参数
let run5 = function(...rest :number[]) :number {
  let sum = 0
  for(let i = 0; i < rest.length; i++) {
    sum += rest[i]
  }
  return sum
}

console.log(run5(1,2,3,4,5,6))

// ts函数的重载
// 可以对参数进行类型校验
function getInfo(name :string) : string;
function getInfo(name :string, age :number) :string;
function getInfo(name :string, age? :number) :string {
  if (age) {
    return  `my name is ${name}, my age is ${age}`
  } else {
    return `my name is ${name}`
  }
}

console.log(getInfo('shuang', 26))


// es5中的类
// function Person() {
//   this.name = 'shuang'
//   this.age = 32
//   this.run = function() {
//   console.log('zhang shuang')
//   }
// }
//创建实例
// let person = new Person()
// 原型链扩展
// Person.prototype.sex = 'man'


//原型链+对象冒充的组合继承模式
// function web() {
//   Person.call(this); // 对象冒充实现继承

// }
// web.prototype = new Person() // 原型链实现继承

// function Web(name, age) {
//   Person.call(this, name, age) // 对象冒充继承 实例化子类可以给父类传参
// }

// 1、定义类
  // class Person {
  //   name :string = "shuang" // 默认属性

  //   constructor (name: string) { // 构造函数 实例化的时候触发
  //     this.name = name
  //   }
  //   run(): void {
  //     console.log(this.name, 'typescript')
  //   }
  // }

  // let s = new Person('shuang')
  // s.run()


// 2、类的继承 extends \ spuer
class Person {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  run() :string {
    return `${this.name} is running`
  }
}

class student extends Person {
  constructor(name: string) {
    // 初始化父类的构造函数
    super(name) // 表示调用父类的构造函数
  }
  // 当父类和子类有同样的方法时，优先在子类上面找
  work() {
    return `${this.name} is working`
  }
}
let s = new student('shuang')
console.log(s.run())
console.log(s.work())