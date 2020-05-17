const fs = require('fs');
const Manager = require('../lib/Manager.js')
const Engineer = require('../lib/Engineer.js')
const Intern = require('../lib/Intern.js')
var htmlString = "";
var numKeys
const { writeFile} = require('../generate-site.js');
// create the team
// const generateTeam = team => {


  // create the manager html
  const generateManager = teamArray => {
    console.log("team array is :");
    console.log(teamArray)

   
    numKeys = Object.keys(teamArray).length;
 
    console.log("manager name is : "+ teamArray[0].manager);
    for (var i = 0 ; i<numKeys; i++){
    if(Object.keys(teamArray[i]).includes("manager") ){

    // return `
    var string = `
    <div class="shadow col-md-6 card" style="width: 18rem;">
    <div class="card-body p-3 mb-2 bg-primary text-white">
      <h5 class="card-title ">${teamArray[i].manager}</h5>
      <h5 class="card-text">☕Manager</h5>
    </div>
    <ul class="list-group  p-3  bg-light text-dark">
      <li class="list-group-item">ID: ${teamArray[i].managerId}</li>
      <a class="list-group-item" href = "mailto: ${teamArray[i].managerEmail}">Email: ${teamArray[i].managerEmail}</a>
      <li class="list-group-item">Office number: ${teamArray[i].managerNumber}</li>
    </ul>
  </div>

`
htmlString = htmlString.concat(string);
console.log("html string is : " + htmlString);
  }

  
    if(Object.keys(teamArray[i]).includes("engineer") ){

    // return `
    var string = `
    <div class="shadow col-md-6 card" style="width: 18rem;">
    <div class="card-body p-3 mb-2 bg-primary text-white">
      <h5 class="card-title ">${teamArray[i].engineer}</h5>
      <h5 class="card-text">📚Engineer</h5>
    </div>
    <ul class="list-group  p-3  bg-light text-dark">
      <li class="list-group-item">ID: ${teamArray[i].engineerId}</li>
      <a class="list-group-item" href = "mailto: ${teamArray[i].engineerEmail}">Email: ${teamArray[i].engineerEmail}</a>
      <a class="list-group-item" href = "https://www.github.com/${teamArray[i].engineerGithub}" >GitHub: ${teamArray[i].engineerGithub}</a>
    </ul>
  </div>

`
htmlString = htmlString.concat(string);
console.log("html string is : " + htmlString);
  }
  
    if(Object.keys(teamArray[i]).includes("intern") ){

    // return `
    var string = `
    <div class="shadow col-md-6 card" style="width: 18rem;">
    <div class="card-body p-3 mb-2 bg-primary text-white">
      <h5 class="card-title ">${teamArray[i].intern}</h5>
      <h5 class="card-text">👨‍🎓Intern</h5>
    </div>
    <ul class="list-group  p-3  bg-light text-dark">
      <li class="list-group-item">ID: ${teamArray[i].internId}</li>
      <a class="list-group-item" href = "mailto: ${teamArray[i].internEmail}">Email: ${teamArray[i].internEmail}</a>
      <li class="list-group-item">School: ${teamArray[i].internSchool}</li>
    </ul>
  </div>

`
htmlString = htmlString.concat(string);
console.log("html string is : " + htmlString);
  }



}
}


module.exports = templateData => {
  // var managerData  = new Manager();
  teamArray = templateData;
  generateManager(teamArray);
  var string2 =  `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="./style.css" />
  <title>Team Portfolio</title>
</head>

<body >
  <header >
    <h3 class="mx-auto p-3 mb-2 bg-danger text-white center-header"  >
      My Team
    </h3>
  </header>

  <div class="container" >
  <div class="row justify-content-around row2" >
${htmlString}


  </div>
  </div>

  </body>
  </html>
  `;
  writeFile(string2);
  // module.exports = generatePage;
};

// pageHTML => {

// }