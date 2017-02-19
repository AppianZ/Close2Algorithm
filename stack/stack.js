/**
 * Created by appian on 2017/2/19.
 */

class Stack {
	constructor() {
		this.data = [];
		this.top  = this.data.length - 1; //栈顶元素所在下标
	}
	
	pushStack(element) {
		this.data.push(element);
		this.top++;
		return this;
	}
	
	popStack() {
		if (this.isEmpty()) {
			console.log('The Stack is already empty');
			return;
		}
		return this.data[this.top--];
	}
	
	getTopElement() {
		return this.data[this.top];
	}
	
	isEmpty() {
		// 如果栈顶元素的下标为 -1, 则说明栈为空
		return this.top === -1;
	}
	
	length() {
		return this.data.length;
	}
	
	clearStack() {
		this.data.length = 0;
		this.top         = -1;
		return this;
	}
	
	showStack() {
		console.log(this.data);
		console.log(`栈顶top: ${this.top}`);
	}
	
}