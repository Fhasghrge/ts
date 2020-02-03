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