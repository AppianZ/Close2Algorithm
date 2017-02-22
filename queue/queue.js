/**
 * Created by appian on 2017/2/21.
 */

class Queue {
	constructor() {
		this.data = [];
		this.head = 0; //队头的索引
		this.tail = 0; //队尾索引的下一个索引
	}
	
	enQueue(element) {
		this.data[this.tail++] = element;
		return this;
	}
	
	deQueue() {
		if (this.isEmpty()) {
			console.log('The Queue is already empty');
			return;
		}
		return this.data[this.head++];
	}
	
	getHeadElement() {
		return this.data[this.head];
	}
	
	isEmpty() {
		// 如果head和tail指向同一个元素, 则说明队列为空
		return this.head === this.tail;
	}
	
	length() {
		return this.tail - this.head;
	}
	
	clearQueue() {
		
		this.head = this.tail = 0;
		return this;
	}
	
	showQueue() {
		console.log(this.data);
		console.log(`head指针: ${this.head}`);
		console.log(`tail指针: ${this.tail}`);
	}
	
}