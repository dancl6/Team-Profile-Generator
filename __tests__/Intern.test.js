const Intern = require('../lib/Intern.js')

test("gets intern's info", () => {
  const intern = new Intern('Dan Lyons', 'abc','dan@yahoo.com', 'Rutgers');
  // const engineer = new Engineer('dan@yahoo.com');
  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(String));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

test("get employee's info methods", () => {
  const intern = new Intern('Dan Lyons', 'abc','dan@yahoo.com', 'Rutgers');
  expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));   
  expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
  expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));  
  expect(intern.getRole()).toEqual("Intern");
})