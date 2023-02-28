// using Employee constructor 
const Employee = require('../lib/Employee');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee('Nate, 55, nathan.evan.johnson@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// getting id from getId() 
test('gets employee name', () => {
    const employee = new Employee('Nate, 55, nathan.evan.johnson@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// getting id from getId() 
test('gets employee ID', () => {
    const employee = new Employee('Nate, 55, nathan.evan.johnson@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// getting emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Nate, 55, nathan.evan.johnson@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// getting role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Nate, 55, nathan.evan.johnson@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 