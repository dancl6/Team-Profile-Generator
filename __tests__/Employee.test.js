const Employee = require('../lib/Employee.js')

test("gets employee's info properties", () => {
  const employee = new Employee('Dan Lyons', 'abc','dan@yahoo.com');
  // const engineer = new Engineer('dan@yahoo.com');
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
});

test("get employee's info methods", () => {
  const employee = new Employee('Dan Lyons', 'abc','dan@yahoo.com');
  expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));   
  expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
  expect(employee.getRole()).toEqual("Employee");
})