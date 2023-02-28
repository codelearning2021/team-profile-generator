const Intern = require("../lib/Intern");

test("Can add a new school.", () => {
    const schoolName = "CSUEB";
    const Intern = new Intern("Nate", 16, "nathan.evan.johnson@gmail.com", schoolName);
    expect(employeeInstance.school)).toEqual(expect.any(String));
});

test("Testing: role", () => {
    const roleTitle = "Intern";
    const employeeInstance = new Intern("Nate", 2, "nathan.evan.johnson@gmail.com", schoolName);
    expect(employeeInstance.getRole()).toBe(roleTitle);
});



