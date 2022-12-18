const Employee = require("../lib/employee");

test("Test Employee Name", () => {
    const name = "Vimukthi";
    const eName = new Employee(name);
    expect(eName.name).toBe(name);
});

test("Test Employee ID", () => {
    const id = 1;
    const eId = new Employee("Vimukthi", id);
    expect(eId.id).toBe(id);
});

test("Test Employee Email", () => {
    const email = "Vimo@gmail.com";
    const eEmail = new Employee("Vimukthi", 2, email);
    expect(eEmail.email).toBe(email);
});

test("Test getName method in Employee", () => {
    const name = "Vimukthi";
    const eName = new Employee(name);
    expect(eName.getName()).toBe(name);
});

test("Test getID method in Employee", () => {
    const id = 1;
    const eId = new Employee("Vimukthi", id);
    expect(eId.getId()).toBe(id);
});

test("Test getEmail method in Employee", () => {
    const email = "Vimo@gmail.com";
    const eEmail = new Employee("Vimukthi", 1, email);
    expect(eEmail.getEmail()).toBe(email);
});

test("Test getRole method in Employee", () => {
    const role = "Employee";
    const eRole = new Employee("Vimukthi", 1, "Vimo@gmail.com", role);
    expect(eRole.getRole()).toBe(role);
});
