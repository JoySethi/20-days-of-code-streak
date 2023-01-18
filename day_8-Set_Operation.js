//Set union operation
// perform union operation
// contain elements of both sets
function union(a, b) {
  let unionSet = new Set(a);
  for (let i of b) {
      unionSet.add(i);
  }
  return unionSet
}

// two sets of fruits
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);

const result = union(setA, setB);

console.log(result);

//Set intersection operation
// perform intersection operation
// elements of set a that are also in set b
function intersection(setA, setB) {
  let intersectionSet = new Set();

  for (let i of setB) {
      if (setA.has(i)) {
          intersectionSet.add(i);
      }
  }
  return intersectionSet;
}

// two sets of fruits
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);

const result = intersection(setA, setB);

console.log(result);

//Set difference operation 
// perform difference operation
// elements of set a that are not in set b
function difference(setA, setB) {
  let differenceSet = new Set(setA)
  for (let i of setB) {
      differenceSet.delete(i)
  }
  return differenceSet
}

// two sets of fruits
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);

const result = difference(setA, setB);

console.log(result);