const Intern = require('../lib/intern');

test("Test Intern's School", () => {
    const school = "University of Toronto";
    const intern = new Intern("Vimukthi", 1, "Vimo@gmail.com", school);
    expect(intern.school).toBe(school);
});

test("Test getSchool methode in Intern", () => {
    const school = "University of Toronto";
    const intern = new Intern("Vimukthi", 1, "Vimo@gmail.com", school);
    expect(intern.getSchool()).toBe(school);
});

test("Test getRole method in Intern", () => {
    const role = "Intern";
    const eRole = new Intern("Vimukthi", 1, "Vimo@gmail.com", role);
    expect(eRole.getRole()).toBe(role);
});