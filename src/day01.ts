let a:number = 23
a = 33
console.log(a)

//定义数组
let arr:number[] = [1,2,3,4,5]
console.log(arr)

let arr2:Array<number> = [2,4,5,6,7,4]
console.log(arr2)

//tuple元组类型
let arr3:[number, string] = [123, 'zhangshuang']
console.log(arr3)

//枚举类型

enum Flag {
  success = 1,
  error = 0
}
let flag1:Flag = Flag.success
console.log(flag1)