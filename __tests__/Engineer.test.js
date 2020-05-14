const Engineer = require('../lib/Engineer.js')

test("gets engineer's email", () => {
  const engineer = new Engineer('dan@yahoo.com');
  expect(engineer.email).toEqual(expect.any(String));
});