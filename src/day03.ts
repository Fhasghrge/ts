class Student {
  public name: string = "shuang"
  static age: number = 22 // 静态属性
  constructor(name: string) {
    this.name = name
  }
  run() {
    console.log(` my name is ${this.name} `)
  }
  static work() { // 静态方法没法直接调用属性，但是可以访问静态属性
    console.log(`my age is ${this.age} `)
  }
}
Student.work()

// 抽象类和抽象方法 
abstract class Animal {
  public name: string
  constructor(name: string) {
    this.name = name
  }
  abstract eat (): any;
}

class Cat extends Animal {
  constructor(name :string){
    super(name)
  }
  eat () { // 抽象类的子类必须实现抽象类的方法
    console.log(`${this.name} am eating`)
  }
}
let cc = new Cat('shuang')
cc.eat()

interface person {
  firstName: string;
  lastName: string
}

function Teacher(man: person) {
  console.log(man.firstName + '-----' + man.lastName)
}

// Teacher({ // 对象中只能有接口中要求的数据
//   firstName:'zhang',
//   lastName : 'shuang'
// })

let obj = { // 对象中必须要有接口中要求的数据
  firstName: 'zhang',
  lastName: 'shuang',
  age: 122
}
Teacher(obj)


// 函数类型接口
interface jiami {
  (key: string, value: string) : string
}
let md: jiami = function(key: string, value: string): string {
  return key + ' jiami ' + value
}
console.log(md('zhang', 'shuang'))

// 数组的约束
interface arr {
  [index :number] :string
}
let arrdemo :arr = ["a", 'b']
console.log(arrdemo[0])

// 对象的越是
interface obb {
  [index :string] :string
}
let obbdemo :obb = {
  name: 'zhang',
  age: '33'
}
console.log(obbdemo.name)

// 类类型接口
interface AnimalClass {
  name :string
  eat (str :string) :void
}
class Dog implements AnimalClass {
  name :string
  constructor (name :string) {
    this.name = name;
  }
  eat() { // 可以不传入参数
    console.log('dog eat')
  }
}
let aaaa = new Dog('shshsshs')
aaaa.eat()

// 接口的继承
interface BinDu {
  eat() :void
}
interface xiJun extends BinDu {
  work() :void
}

class xinXin implements xiJun {
  public name :string
  constructor(name :string) {
    this.name = name
  }
  eat() {
    console.log(`${this.name} is eating`)
  }
  work() {
    console.log(`${this.name} is working`)
  }
}
let ri = new xinXin("exing")
ri.eat()
ri.work()
class sars extends xinXin implements xiJun {
  constructor (name :string) {
    super(name)
  }
  eat() {
    console.log('extends implements class')
  }
  work() {
    console.log('extends implements class')
  }
}

// 类的泛型
class fanxin<T> {
  public list :T[] = []
  add(value :T) :void {
    this.list.push(value)
  }
  min() :T {
    return this.list[0]
  }
}
let fanx = new fanxin<number>() // 实例化类并且传入类型
fanx.add(2)
fanx.add(3)
console.log(fanx.min())

// 泛型接口
//1
interface Config {
  <T>(value :T) :T
}
let getconfig :Config = function<T>(value :T) {
  return value
}
console.log(getconfig<string>('shuang 泛型接口'))

// 2
interface Config2<T> {
  (value :T) :T
}
function getconfig2<T> (value :T) :T {
  return value
}
let myGetData:Config2<string> = getconfig2
console.log( myGetData('shung') )

class mysqlDb<T> {
  add(info :T) :boolean {
    console.log(info)
    return true
  }
}

class user {
  firstName: string | undefined;
  lastName: string | undefined;
}
let u = new user()
u.firstName = 'zhang'
u.lastName = 'shuang'
let db = new mysqlDb<user>()
db.add(u)