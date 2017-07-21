'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA.filter((a) => {
    if (exist(a, objectB.value)) return a;
  })
}

var exist = (a, collection) => {
  if (collection.indexOf(a) !== -1) return true;
  return false
};