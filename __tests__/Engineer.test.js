const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testingGithub = "codelearning2021";
    const employeeInstance = new Engineer("Nate", 2, "nathan.evan.johnson@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing: getGithub will return github.", () => {
    const testGithub = "";
    const employeeInstance = new Engineer("Nate", 2, "nathan.evan.johnson@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing: role", () => {
    const roleTitle = "Engineer";
    const employeeInstance = new Engineer("Nate", 2, "nathan.evan.johnson@gmail.com", testGithub);
    expect(employeeInstance.getRole()).toBe(roleTitle);
});



