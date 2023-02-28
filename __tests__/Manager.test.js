
const Manager = require('../lib/Manager');


test("Testing: officeNumber will return officeNumber.", () => {
    const officeNumber = "";
    const employeeInstance = new Manager,("Nate", 2, "nathan.evan.johnson@gmail.com", 9994448888);
    expect(employeeInstance.officeNumber()).toBe(officeNumber);
});

test("Testing: role", () => {
    const roleTitle = "Manager";
    const employeeInstance = new Manager("Nate", 2, "nathan.evan.johnson@gmail.com", 9994448888);
    expect(employeeInstance.getRole()).toBe(roleTitle);
});
