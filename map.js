const map = new Map();
// Other languages use hashmaps.
// This is to keep a unique key with any kind of value. You can use object {} for similar cases.

map.set('a', 1);
map.set('b', 2);

console.log(map.get('a'));
// Output: 1

map.set('a', 97);

console.log(map.get('a'));
// Output: 97

console.log(map.size);
// Output: 2

map.delete('b');

console.log(map.size);
// Output: 1