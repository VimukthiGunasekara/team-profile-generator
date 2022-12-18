const Engineer = require('../lib/engineer');

test("Test Engineer's github", () => {
    const github = "VimukthiGunasekara";
    const eGitHub = new Engineer("Vimukthi", 1, "Vimo@gmail.com", github);
    expect(eGitHub.github).toBe(github);
});

test("Test getGithub methode in Engineer", () => {
    const github = "VimukthiGunasekara";
    const eGitHub = new Engineer("Vimukthi", 1, "Vimo@gmail.com", github);
    expect(eGitHub.getGithub()).toBe(github);
});

test("Test getRole method in Engineer", () => {
    const role = "Engineer";
    const eRole = new Engineer("Vimukthi", 1, "Vimo@gmail.com", role);
    expect(eRole.getRole()).toBe(role);
});