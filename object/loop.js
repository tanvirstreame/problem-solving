const person = {
  name: "Bill",
  age: 20,
  nationality: "American",
  height: 5.10,
  favouriteColor: "Blue",
}

// Show only keys
Object.keys(person).forEach(eachPerson => {
  console.log(eachPerson);
})
// Output: 
// name
// age
// nationality
// height
// favouriteColor

// Show only values
Object.values(person).forEach(eachPerson => {
  console.log(eachPerson);
})
// Output: 
// Bill
// 20
// American
// 5.1
// Blue
