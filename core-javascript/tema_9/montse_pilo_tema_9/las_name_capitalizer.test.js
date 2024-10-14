const capitalize_last_name = require("./last_name_capitalizer");

test("capitalize_last_name", () => {
  expect(capitalize_last_name("pol", "aguilera")).toBe("Pol AGUILERA");
  expect(capitalize_last_name("rigoberta", "bandini")).toBe("Rigoberta BANDINI");
})