// use inquirer npm package
const inquirer = require('inquirer');
// use node.js file structure module
const fs = require('fs');
const Manager = require('./lib/Manager.js')
const generatePage = require('./src/page-template.js');
const profileData = [];
const profileData2 = [];
const profileData3 = [];
const profileData4 = [];
var i = 1;
var flag;
const { writeFile} = require('./generate-site.js');


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

  promptChoice();


}  
)

}



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
}

})
}



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
  promptChoice();
})

}



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
    promptChoice();
  })
  
  }
  



// promptManager(profileData)
// .then(profileData => {
//   var managerData = new Manager();
//   managerData = profileData;
  
// })
  

var buildAfterManager = function () {

  i=i+1;
promptChoice(profileData2)
.then(profileData2 => {
 
  var choice = profileData2.build;
  console.log("choice is : " + choice);
  // if (choice === 'Add an engineer') {
  //   promptEngineer(profileData3 => {

  //   }
  //     )
  // }
})


// buildAfterManager();
}


promptManager();

// var code = function () {

//   prompt(flag);
// }


// if (i===1) {
// flag = manager;
// } else {
// flag = choice;
// }

// }


// code();


//   promptManager(profileData)}
//   .then(profileData => {
//     var managerData = new Manager();
//     managerData = profileData;
// } else {
//    buildAfterManager}



//   promptChoice(portfolioData2)
// console.log("build is : " + build);






// promptManager(portfolioData)
// .then(portfolioData => {
//   var managerData  = new Manager();
//   managerData = portfolioData;
//   console.log("id of manager is :" + managerData.managerId)
//   console.log("portfolio data is :");
//   console.log(portfolioData);
//   return generatePage(managerData);

// }).then (promptEngineer)
// .then(portfolioData2 => {
// var engineerData = new engineerData();
// engineerData = portfolioData2;
// })
// .then(pageHTML => {
//   return writeFile(pageHTML);
// })

// .catch(err => {
//   console.log(err);
// });