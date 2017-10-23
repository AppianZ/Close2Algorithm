/**
 * Created by appian on 2017/10/23.
 */
//插入排序

function insertionSort( data ) {
  var len = data.length;
  for (var i = 1; i < len; i++) {
    var key = data[i];
    var j = i - 1;
    while ( j >= 0 && data[j] > key) {
      data[j + 1] = data[j];
      j--;
    }
    data[j + 1] = key;
  }
  return data;
}

console.log( '原始数据:' + dataStore );
console.log( '插入排序:' + insertionSort( dataStore) );

// 原始数据:72,1,68,95,75,54,58,10,35,6,28,45,69,13,88,99,24,28,30,31,78,2,77,82,72
// 插入排序:1,2,6,10,13,24,28,28,30,31,35,45,54,58,68,69,72,72,75,77,78,82,88,95,99
