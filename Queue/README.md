# Queue

## 简介
栈是一种常用的数据结构,它有两个重要的参数。
> 栈的内容 `data`
> 
> 栈顶的索引(就像C中指针) `top`,当`top === -1`表示栈为空

```
// 向栈内压入 A B C D 四个字符
top   data
     |   | 
 3 → | D | 
 2 → | C |
 1 → | B |
 0 → | A |
-1 →  ───
```

## 栈主要有几个重要操作
1. `pushStack(element)`: 向栈内压入元素element
2. `popStack()`: 弹出栈顶,并返回栈顶
3. `getTopElement()`: 获取栈顶元素的值
4. `isEmpty()`: 判断栈是否为空
5. `length()`: 判断栈内共有多少元素
6. `clearStack()`: 清空栈
7. `showStack()`: 打印栈的两个重要属性的值
8. 如果有其他需要,也可以增加操作

## 用栈解决回文算法
[demo](plalindrome.html)

先将获取到的字符对半切
```js
let ipt    = $('#ipt').val();
let middle = ipt.length / 2;
let pre    = ipt.substring(0, middle);
let pro    = ipt.substring(Math.round(middle), ipt.length);
decode(pre, pro);
```
然后在使用stack类,将前半段`pre`入栈,再逐个出栈,和后半段`pro`进行比较。
```js
let target = new Stack();

function decode(pre, pro) {
	// 每次进行回文decode都要先clear
	target.clearStack();
	for ( let v in pre ) target.pushStack(pre[v]);
	for ( let p in pro ) {
		// 在这里直接比较popStack之后的结果,
		// 也可以获取栈顶getTopElement,比较后再popStack
		let popValue = target.popStack();
		if (popValue !== pro[p]) {
			// todo 回文匹配失败
			break;
		} else {
			// todo 回文匹配成功
		}
	}
}
```
