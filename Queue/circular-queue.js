/**
 * Created by appian on 2017/2/22.
 */

class CircularQueue {
	constructor(maxsize) {
		this.data = [];
		this.head = 0; //队头的索引
		this.tail = 0; //队尾索引的下一个索引
		this.maxsize = maxsize? parseInt(maxsize) + 1: 11;//队列尾部需要留出一个空位
	}
	
	enQueue(element) {
		if (this.isFull()) {
			alert('The Queue is already full');
			return false;
		}
		console.log(element);
		this.data[this.tail++] = element;
		return this;
	}
	
	deQueue() {
		if (this.isEmpty()) {
			// 你可以在这里做一些报错处理
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
	
	isFull() {
		// 判断循环队满的方式有两个,
		// 一种是专门使用一个变量作为统计变量,记录当前队列的个数
		// 第二种是在队列尾部留出一个空位,当tail+1指向队头的时候,表示队列已满
		return this.head === (this.tail + 1) % this.maxsize;
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