const Manager = require('../lib/Manager.js')

test("gets manager's info", () => {
  const manager = new Manager('Dan Lyons', 'abc','dan@yahoo.com', 123456789);
 
  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("get manager's info methods", () => {
  const manager = new Manager('Dan Lyons', 'abc','dan@yahoo.com',  123456789);
  expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));   
  expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
  expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
  expect(manager.getRole()).toEqual("Manager");
})