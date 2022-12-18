const Manager = require("../lib/manager");

test("Test Manager's officeNumber", () => {
    const officeNumber = 9053245755;
    const eOfficeNumber = new Manager("Vimukthi", 1, "Vimo@gmail.com", officeNumber);
    expect(eOfficeNumber.officeNumber).toBe(officeNumber);
});

test("Test getOfficeNumber method in Manager", () => {
    const officeNumber = 9053245755;
    const eOfficeNumber = new Manager("Vimukthi", 1, "Vimo@gmail.com", officeNumber);
    expect(eOfficeNumber.getOfficeNumber()).toBe(officeNumber);
});

test("Test getRole method in Manager", () => {
    const role = "Manager";
    const eRole = new Manager("Vimukthi", 1, "Vimo@gmail.com", role);
    expect(eRole.getRole()).toBe(role);
});