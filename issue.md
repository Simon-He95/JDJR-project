## 常见问题汇总

**1. CSS Module 和 Vue <style> 的 scoped 属性有啥异同？**

这是个相当好的问题，看的仔细的同学发现项目中都使用的是 CSS Module，没有提 scoped 属性。在这里给大家做下总结：

- 相同点

  两者都是为了解决 CSS 类名相互干扰的问题，也就是大家常说的“作用域”问题。使用两种方案都可以达到类似效果，但是两者的区别也很明显。

- 不同点

  1. CSS Module 是所有组件化框架都支持的技术方案，他不属于某个框架的私有属性。而 scoped 是 Vue 框架的私有属性。
  2. CSS Module 的工作原理直白的讲就是把一个类名做 md5 ，然后在引用的时候直接使用 md5 字符串，进而保证相同的类名根据不同的路径和组件名称得到不同的 md5 值，保证了最终的类名隔离。而 scoped 的做法是做命名空间限制，也就是说每个组件就是一个命名空间，每个命名空间拥有不同的类名（md5）,然后每个下面的类名都会挂在这个命名空间下进而达到隔离。
  3. 对于父组件声明的类名，在子组件内，CSS Module 是不处理的，想用必须显示调用类名($style.类名)，而使用了 scoped 的因为是命名空间的方式，所以子组件依然有效。

大家如有疑问欢迎补充。

**2. 为啥我们的项目中没有用到 render 函数？**

虽然 Vue 在高版本中借鉴了 React 的写法支持了 render 函数，但是大多数项目不需要这样做。关于 render 函数请先看官方的解释 [render函数](https://cn.vuejs.org/v2/guide/render-function.html)。

在此也给大家做下较容易理解的解释：

- Vue 可以使用 template 或者 render 函数管理 HTML 内容，而 template 是常规的做法，因为 render 对开发者的要求比较高，需要对 Vue 的 API 非常了解，不然弄巧成拙。
- 使用 template 所见即所得，再结合预编译工具更容易开发和调试、用最简单的方式完成任务不是很好吗？也更适合团队的需要。

**3. Atom 常用插件**

1. Emmet，用来快速生成HTML片段，比如输入ul>li*3可以快速生成

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

[详细地址](https://atom.io/packages/emmet)，[Emmet教程](https://docs.emmet.io/cheat-sheet/)

2. Snippets， 用来处理代码片段的模板输出，[详细地址](https://atom.io/packages/snippets)
3. Tree View，文件浏览器，[详细地址](https://atom.io/packages/tree-view)
4. file icons，文件识别图标，使用这个插件会让你的编辑器显示对应的图标，[详细地址](https://atom.io/packages/file-icons)
5. language-javascript-jsx，jsx语法高亮 ，[详细地址](https://atom.io/packages/language-javascript-jsx)
6. language-vue，vue语法高亮，[详细地址](https://atom.io/packages/language-vue)
7. linter-eslint，eslint插件，[详细地址](https://atom.io/packages/linter-eslint)
8. vue-snippets，vue代码片段，[详细地址](https://atom.io/packages/vue-snippets)
9. pigments，颜色显示器，[详细地址](https://atom.io/packages/pigments)
