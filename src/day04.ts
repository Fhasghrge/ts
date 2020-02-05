// 命名空间
namespace A{
  let a = 'zhang'
  export function aaa() {
    console.log('i am namespace demo')
  }
}
A.aaa()

// 类装饰器
function logClass(param: any) { // param 就是当前类
  console.log(param)

  param.prototype.name = 'fffff' // 扩展类
}

// 普通装饰器， 无法传参
@logClass
class httpClient {
  constructor () {

  }
  getData () {

  }
}

let httpdemo: any = new httpClient()
console.log(httpdemo.name)

// 装饰器工厂
function loginClass(param :string) {
  return function (target: any) {
    console.log(target)
    console.log(param)
    target.run = function () {
      console.log('i am loginClass')
    }
  }
}
@loginClass('装饰器')
class login {
  constructor () {

  }
  getData() {

  }
}
let logindemo: any= new login()
logindemo.run()

// 类装饰器重载
function login2 (param: any) {
  return class extends login {
    //在这里重载类
  }
}
function logProperty (param: any) {
  return function (target: any, attr: any) {
    console.log(target)
    console.log(attr)
    target.attr = param
  }
}

