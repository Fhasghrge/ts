## day01: 
- `tsc --init`用于配置tsc文件
- `tsc -w`监听源文件的改变

## day02
- typescript即使编译的时候错了，仍然会生成编译结果
- 枚举类型没有赋值时候，默认值是其下标
- 可选参数必须放在参数最后
- class里面的修饰符
  - public
    - 在类，子类，类外面都可以访问
  - protected
    - 在类和子类里面可以访问
  - private
    - 只能在类内部访问
- 实例方法和静态方法
  - 实例方法需要创建实例才能使用，实例属性同
  - 静态方法直接引用就可以

  ## day03
  - 多态：父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现
  - 抽象方法和抽象类
    - 抽象方法只能被用在抽象类中
    - 抽象类只是用来提供标准的，无法用来创建抽象类的实例
    - 抽象类的子类必须实现抽象类的方法
  - 接口
    - 属性接口
    - 函数类型接口
    - 可索引接口
    - 类 类型接口
    - 接口扩展
      - 接口可以扩展接口
  - 泛型
    - 不仅能访问当前数据类型，还能访问未来的数据类型
    - 相比较于any类型效率较高ts
  - 泛型接口
  - 把类作为参数类型的泛型类
## day04
- 命名空间
  ``` javascript
  namespace A { // 私有化内部空间
  }
  ```
  - 需要通过`export`暴露使用
- 装饰器
  - 类装饰器： 不改变类的前提下改变类的属性和方法
    - 装饰器工厂
  - 属性装饰器
  - 方法装饰器
  - 方法参数装饰器