'use strict';

function collectSameElements(collectionA, collectionB) {
  /*filter()数组的迭代方法　返回该函数会返回true的项组成的数组*/
  return collectionA.filter((a) => {
    if (exist(a, collectionB)) return a;
  })
}

/*
* 查找某元素是否在目标数组中.在返回true,否则返回false
* @param a 要查找的元素
* @param collection 目标数组
* */
var exist = (a, collection) => {
  if (collection.indexOf(a) !== -1) return true;
  return false
};
