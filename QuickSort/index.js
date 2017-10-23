/**
 * Created by appian on 2017/10/23.
 */
//快速排序

function quickSort( arr ){
  if ( arr.length == 0) {
    return [];
  }
  var left = [];
  var right = [];
  var pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push( arr[i] );
    } else {
      right.push( arr[i] );
    }
  }
  return quickSort( left ).concat( pivot, quickSort( right ));
}

console.log( '原始数据:' + dataStore );
console.log( '快速排序:' + quickSort( dataStore) );

// 原始数据:72,1,68,95,75,54,58,10,35,6,28,45,69,13,88,99,24,28,30,31,78,2,77,82,72
// 快速排序:1,2,6,10,13,24,28,28,30,31,35,45,54,58,68,69,72,72,75,77,78,82,88,95,99