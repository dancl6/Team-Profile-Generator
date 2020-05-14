const Intern = require('../lib/Intern.js')

test("gets intern's info", () => {
  const intern = new Intern('Dan Lyons', 'abc','dan@yahoo.com', 'Rutgers');
  // const engineer = new Engineer('dan@yahoo.com');
  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(String));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));


});