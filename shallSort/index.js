/**
 * Created by appian on 2017/10/23.
 */
//希尔排序

function shallSort(array) {
  var increment = array.length;
  var i
  var temp; //暂存
  do {
    //设置增量
    increment = Math.floor(increment / 3) + 1;
    for (i = increment ; i < array.length; i++) {
      if ( array[i] < array[i - increment]) {
        temp = array[i];
        for (var j = i - increment; j >= 0 && temp < array[j]; j -= increment) {
          array[j + increment] = array[j];
        }
        array[j + increment] = temp;
      }
    }
  }
  while (increment > 1)

  return array;
}

console.log( '原始数据:' + dataStore );
console.log( '希尔排序:' + shallSort( dataStore) );

// 原始数据:72,1,68,95,75,54,58,10,35,6,28,45,69,13,88,99,24,28,30,31,78,2,77,82,72
// 希尔排序:1,2,6,10,13,24,28,28,30,31,35,45,54,58,68,69,72,72,75,77,78,82,88,95,99
