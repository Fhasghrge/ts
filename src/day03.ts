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