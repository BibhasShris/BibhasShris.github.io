//Problem 1
let employee=[
    {firstName:"Sam", department:"Tech", designation:"Manager", salary: 40000, raiseEligible: true},
    {firstName:"Mary", department:"Finance", designation:"Trainee", salary: 18500, raiseEligible: true},
    {firstName:"Bill", department:"HR", designation:"Executive", salary: 21200, raiseEligible: false}
];
console.log(`Problem 1: `, employee);



//Problem 2
let employee2=[
    {firstName:"Sam", department:"Tech", designation:"Manager", salary: 40000, raiseEligible: true},
    {firstName:"Mary", department:"Finance", designation:"Trainee", salary: 18500, raiseEligible: true},
    {firstName:"Bill", department:"HR", designation:"Executive", salary: 21200, raiseEligible: false}
];
//--------------------------------------------
let Company={
    companyName:"Tech Stars", 
    website:"www.techstars.site", 
    employees:employee2
};
console.log(`Problem 2: `, Company); 



//Problem 3
let employee3=[
    {firstName:"Sam", department:"Tech", designation:"Manager", salary: 40000, raiseEligible: true},
    {firstName:"Mary", department:"Finance", designation:"Trainee", salary: 18500, raiseEligible: true},
    {firstName:"Bill", department:"HR", designation:"Executive", salary: 21200, raiseEligible: false}
];

let Company3={
    companyName:"Tech Stars", 
    website:"www.techstars.site", 
    employees:employee3
};

//-----------------------------------------------------------------------------------------------------------------------
let newEmployee = {firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false};
Company3.employees.push(newEmployee);
console.log(`Problem 3: `, Company3);

//Problem 4
let TotalSalary = 0;
for(let i = 0; i<Company3.employees.length; i++)
{
    TotalSalary += Company3.employees[i].salary;
}
console.log(`Problem 4: `, TotalSalary);

//Problem 5
let employee5=[
    {firstName:"Sam", department:"Tech", designation:"Manager", salary: 40000, raiseEligible: true},
    {firstName:"Mary", department:"Finance", designation:"Trainee", salary: 18500, raiseEligible: true},
    {firstName:"Bill", department:"HR", designation:"Executive", salary: 21200, raiseEligible: false}
];

let Company5={
    companyName:"Tech Stars", 
    website:"www.techstars.site", 
    employees:employee5
};
let newEmployee5 = {firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false};
Company5.employees.push(newEmployee5);

//---------------------------------------------------------------------------------------------------------------------------
let newSalary;
function Raise(employee5) {
    if (employee5.raiseEligible === true) 
    {
        newSalary = employee5.salary + (employee5.salary * 0.1);
        employee5.salary = newSalary;
    }
}
for (let i = 0; i < Company5.employees.length; i++) 
{
    Raise(Company5.employees[i]);
}
console.log('Problem 5:', Company5);


// Problem 6
let employee6=[
    {firstName:"Sam", department:"Tech", designation:"Manager", salary: 40000, raiseEligible: true},
    {firstName:"Mary", department:"Finance", designation:"Trainee", salary: 18500, raiseEligible: true},
    {firstName:"Bill", department:"HR", designation:"Executive", salary: 21200, raiseEligible: false}
];

let Company6={
    companyName:"Tech Stars", 
    website:"www.techstars.site", 
    employees:employee6
};
let newEmployee6 = {firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false};
Company6.employees.push(newEmployee6);

function Raise(employee6) {
    if (employee6.raiseEligible === true) 
    {
        let newSalary6 = employee6.salary + (employee6.salary * 0.1);
        employee6.salary = newSalary6;
    }
}
for (let i = 0; i < Company6.employees.length; i++) 
{
    Raise(Company6.employees[i]);
} 

//--------------------------------------------------------------------------
let wfhEmployees = ['Anna', 'Sam'];
for (let i = 0; i < Company6.employees.length; i++) 
{
  Company6.employees[i]['wfh'] = false; 
  for (let j = 0; j < wfhEmployees.length; j++) 
  {
    if (Company6.employees[i]['firstName'] === wfhEmployees[j]) 
    {
      Company6.employees[i]['wfh'] = true;
      break; 
    }
  }
}
console.log("Problem 6: ", Company6);