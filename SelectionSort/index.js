/**
 * Created by appian on 2017/10/23.
 */
//选择排序
function selectionSort( data ) {
  for( var i = 0; i< data.length ; i++){
    var min = data[i];
    var temp;
    var index = i;
    for( var j = i + 1; j< data.length; j++){
      if( data[j] < min ){
        min = data[j];
        index = j;
      }
    }

    temp = data[i];
    data[i] = min;
    data[index]= temp;
  }
  return data;
}

console.log( '原始数据:' + dataStore );
console.log( '选择排序:' + selectionSort( dataStore) );

// 原始数据:72,1,68,95,75,54,58,10,35,6,28,45,69,13,88,99,24,28,30,31,78,2,77,82,72
// 选择排序:1,2,6,10,13,24,28,28,30,31,35,45,54,58,68,69,72,72,75,77,78,82,88,95,99
