'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter((a) => {
    if (exist(a, collectionB[0])) return a;
  })
}

var exist = (a, collection) => {
  if (collection.indexOf(a) !== -1) return true;
  return false
};