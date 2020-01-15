const greet = require("../index");

test("is greeting with user", () => {
    const response = greet("Rishab");
    expect(response).toBe("Greetings Rishab, have a nice day! :)");
});

test("is greeting without user", () => {
    const response = greet();
    expect(response).toBe("Greetings User, have a nice day! :)");
});
