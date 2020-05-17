const fs = require('fs');
const Manager = require('../lib/Manager.js')
const Engineer = require('../lib/Engineer.js')
// create the team
// const generateTeam = team => {


  // create the manager html
  const generateManager = Manager => {
    return `
    <div class="shadow col-md-6 card" style="width: 18rem;">
    <div class="card-body p-3 mb-2 bg-primary text-white">
      <h5 class="card-title ">${Manager.manager}</h5>
      <h5 class="card-text">Manager</h5>
    </div>
    <ul class="list-group  p-3  bg-light text-dark">
      <li class="list-group-item">ID: ${Manager.managerId}</li>
      <li class="list-group-item">Email: ${Manager.managerEmail}</li>
      <li class="list-group-item">Office number: ${Manager.managerNumber}</li>
    </ul>
  </div>
`
  }

  // create the html for engineers
  const generatEngineer = Engineer => {
    return `
    <div class="shadow col-md-6 card" style="width: 18rem;">
    <div class="card-body p-3 mb-2 bg-primary text-white">
      <h5 class="card-title "></h5>
      <h5 class="card-text">Engineer</h5>
    </div>
    <ul class="list-group  p-3  bg-light text-dark">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
  </div>

  `
  };


// }


module.exports = templateData => {
  // var managerData  = new Manager();
  managerData = templateData;
  
  return `
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
  <div class="row justify-content-around row2" ></div>
  ${generateManager(managerData)}


  </div>
  </div>

  </body>
  </html>
  `;
  module.exports = generatePage;
};