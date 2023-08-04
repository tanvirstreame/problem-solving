const company = {
  name: "Amazon",
  started: 1995,
  headOfficeAddress: "America",
  networth: 190000000,
  branches: [
    {
      id: 1,
      address: "Bangladesh",
      employees: [
        {
          id: 1,
          name: "Bill",
          age: 20,
          role: "Manager"
        },
        {
          id: 2,
          name: "Mark",
          age: 21,
          role: "Developer"
        }
      ]
    },
    {
      id: 1,
      address: "Sweden",
      employees: [
        {
          id: 3,
          name: "Neymar",
          age: 20,
          role: "Manager"
        },
        {
          id: 4,
          name: "Messi",
          age: 21,
          role: "Developer"
        }
      ]
    }
  ]
}

// Find list of all employee

const getEmployeeList = () => {
  let employees = [];
  company.branches.forEach(each => {
    employees.push(...each.employees);
  })

  return employees;
}

console.log(getEmployeeList())
//Output: 
// [
//   { id: 1, name: 'Bill', age: 20, role: 'Manager' },
//   { id: 2, name: 'Mark', age: 21, role: 'Developer' },
//   { id: 3, name: 'Neymar', age: 20, role: 'Manager' },
//   { id: 4, name: 'Messi', age: 21, role: 'Developer' }
// ]

const increaseCompanyNetworth = (amount) => {
  company.networth += amount;
  return company; 
}

console.log(increaseCompanyNetworth(10000))

// Output:
// {"name":"Amazon","started":1995,"headOfficeAddress":"America","networth":190010000,"branches":[{"id":1,"address":"Bangladesh","employees":[{"id":1,"name":"Bill","age":20,"role":"Manager"},{"id":2,"name":"Mark","age":21,"role":"Developer"}]},{"id":1,"address":"Sweden","employees":[{"id":3,"name":"Neymar","age":20,"role":"Manager"},{"id":4,"name":"Messi","age":21,"role":"Developer"}]}]}
