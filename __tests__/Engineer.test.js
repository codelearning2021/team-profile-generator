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






// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Nicole', 90, 'nicole.elisaw@gmail', 'nicolewallace09');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Nicole', 90, 'nicole.elisaw@gmail', 'nicolewallace09');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Nicole', 90, 'nicole.elisaw@gmail', 'nicolewallace09');

    expect(engineer.getRole()).toEqual("Engineer");
});