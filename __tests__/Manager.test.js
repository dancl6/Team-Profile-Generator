const Manager = require('../lib/Manager.js')

test("gets manager's info", () => {
  const manager = new Manager('Dan Lyons', 'abc','dan@yahoo.com', 123456789);
  // const engineer = new Engineer('dan@yahoo.com');
  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.number).toEqual(expect.any(Number));


});