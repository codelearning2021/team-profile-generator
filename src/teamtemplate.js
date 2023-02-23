// create the whole team
const createTeam = team => {

    // manager html card
    const createManager = manager => {
        return `
<div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${manager.postName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.postRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
        `;
    };

    // engineers card html
    const createEngineer = engineer => {
        return `
<div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${engineer.postName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.postRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.postId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.postEmail()}">${engineer.postEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.postGithub()}" target="_blank" rel="noopener noreferrer">${engineer.postGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // html card for interns
    const createIntern = intern => {
        return `
<div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${intern.postName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.postRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.postId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.postEmail()}">${intern.postEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.postRole() === "Manager")
        .map(manager = createManager(manager))
    );
    html.push(team
        .filter(employee => employee.postRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.postRole() === "Intern")
        .map(intern => createIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to create entire page
module.exports = team => {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                <h1 class="text-center text-white">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
                ${createTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};