// use inquirer npm package
const inquirer = require('inquirer');
// use node.js file structure module
const fs = require('fs');
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const generatePage = require('./src/page-template.js');
var teamArray = [];


// prompts for manager info
const promptManager = profileData => {

	return inquirer.prompt([
{
  type: 'input',
  name: 'manager',
	message: "What is the team manager's name (Required)",
	validate: nameInput => {
		if (nameInput) {
			return true;
		} else {
			console.log('Please enter name!');
			return false;
		}
		}	
},
{
  type: 'input',
  name: 'managerId',
	message: "What is the team manager's id? (Required)",
	validate: nameInput => {
		if (nameInput % 1 === 0 && nameInput > 0) {
			return true;
		} else {
			console.log('Please enter integer greater than 0!');
			return false;
		}
	}
},
{
  type: 'input',
  name: 'managerEmail',
	message: "What is the manager's email?",
},
{
  type: 'input',
  name: 'managerNumber',
	message: "What is the manager's office number?",
},
]).then(answers => {

  var managerInfo = new Manager;
  managerInfo = answers;
  teamArray.push(managerInfo);

  promptChoice();


}  
)

}


// prompts to add intern, add engineer or finish
const promptChoice = profileData2 => {

	return inquirer.prompt([
{
  type: 'list',
  name: 'build',
  message: "Which would you like to do: (Choose one)",
  choices: ['Add an engineer', 'Add an intern','Finish building my team']
},
]).then(answers =>{
  console.log("answers is : " + answers.build);
if(answers.build ==='Add an engineer') {
  console.log("answers is : " + answers);
  promptEngineer()
} else if (answers.build === 'Add an intern') {
  promptIntern()
} else {
  return generatePage(teamArray);
}

})
}


// prompts for engineer info
const promptEngineer = profileData3 => {

	return inquirer.prompt([
{
  type: 'input',
  name: 'engineer',
	message: "What is the engineer's name (Required)",
	validate: nameInput => {
		if (nameInput) {
			return true;
		} else {
			console.log('Please enter name!');
			return false;
		}
		}	
},
{
  type: 'input',
  name: 'engineerId',
	message: "What is the engineer's id? (Required)",
	validate: nameInput => {
		if (nameInput % 1 === 0 && nameInput > 0) {
			return true;
		} else {
			console.log('Please enter integer greater than 0!');
			return false;
		}
	}
},
{
  type: 'input',
  name: 'engineerEmail',
	message: "What is the engineer's email?",
},
{
  type: 'input',
  name: 'engineerGithub',
	message: "What is the engineer's github account?",
},
]).then(answers => {
  var engineerInfo = new Engineer;
  engineerInfo = answers;
  teamArray.push(engineerInfo);
  promptChoice();
})

}


// prompts for intern info
  const promptIntern = profileData4 => {
  
    return inquirer.prompt([
  {
    type: 'input',
    name: 'intern',
    message: "What is the intern's name (Required)",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter name!');
        return false;
      }
      }	
  },
  {
    type: 'input',
    name: 'internId',
    message: "What is the intern's id? (Required)",
    validate: nameInput => {
      if (nameInput % 1 === 0 && nameInput > 0) {
        return true;
      } else {
        console.log('Please enter integer greater than 0!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'internEmail',
    message: "What is the intern's email?",
  },
  {
    type: 'input',
    name: 'internSchool',
    message: "What is the intern's school?",
  },
  ]).then(answers => {
    var internInfo = new Intern;
    internInfo = answers;
    teamArray.push(internInfo);
    console.log(Object.keys(teamArray[1]));
    if(Object.keys(teamArray[1]).includes("engineer") ){
      console.log("Success!");
    }
    var numKeys = Object.keys(teamArray).length;
    console.log("num keys is : " + numKeys);

    promptChoice();
    
  })
  
  }
  




// call function for prompts for manager
promptManager();




