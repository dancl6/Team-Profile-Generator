const Engineer = require('../lib/Engineer.js')

test("gets engineer's info", () => {
  const engineer = new Engineer('Dan Lyons', 'abc','dan@yahoo.com', 'dancl6');
  // const engineer = new Engineer('dan@yahoo.com');
  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(String));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

test("get engineer's info methods", () => {
  const engineer = new Engineer('Dan Lyons', 'abc','dan@yahoo.com', 'dancl6');
  expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));   
  expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
  expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
  expect(engineer.getRole()).toEqual("Engineer");
})