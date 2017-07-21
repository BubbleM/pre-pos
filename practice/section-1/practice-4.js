'use strict';

function collectSameElements(collectionA, objectB) {
  var result = [];
  collectionA.filter((a) => {
    if (exist(a.key, objectB.value)) result.push(a.key);
  })
  return result;
}

var exist = (a, collection) => {
  if (collection.indexOf(a) !== -1) return true;
  return false
};