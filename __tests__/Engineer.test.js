const Engineer = require('../lib/Engineer.js')

test("gets engineer's info", () => {
  const engineer = new Engineer('Dan Lyons', 'abc','dan@yahoo.com', 123456789);
  // const engineer = new Engineer('dan@yahoo.com');
  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(String));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.number).toEqual(expect.any(Number));


});