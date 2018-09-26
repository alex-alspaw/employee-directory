employeeListHTML = '';


$('#view').on('click', function (e) {

    for (let i = 0; i < employeeList.length; i++) {

        const employee = employeeList[i];
        employeeListHTML += `<p>${employee.name}</p>`;
        employeeListHTML += `<p>${employee.officeNum}</p>`;
        employeeListHTML += `<p>${employee.phoneNum}</p>`;


    }

    $('#first-number').append(employeeListHTML);
    console.log(employeeListHTML);

    return employeeListHTML;

});

$('#add').on('click', function (e) {


    document.createElement("label");
    document.createElement("label");

    $('#first-number').html('<input>Name</input><input>Office Number</input><input>Home Number</input>');

    function submit_by_id() {

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;

        if ($(val)) // Calling validation function
        {

            document.getElementById("first-number").submit(); //form submission
            alert(" Name : " + name + " n Email : " + email + " n Form Id : " + document.getElementById("first-number").getAttribute("id") + "nn Form Submitted Successfully......");

        }
    }
});

$('#display-area').addClass('myForm');


$('#verify').on('click', function (e) {


    document.getElementById("myForm").submit($('#display-area').html('<input>Check name</input>'));

    //var myProp = 'prop';
    //if(myObj.hasOwnProperty(myProp)){
    //    alert("yes, i have that property");
    //}
});

$('#update').on('click', function (e) {

    let infoUpdate = $('#first-number').html('<input>Name</input>');
    
    nameField = document.querySelector('input');
    console.log(infoUpdate);
    return nameField;

    // attempting to grab a name and bring up their info to update
    
});





$('#delete').on('click', function (e) {

    for (let i = 0; i < employeeList.length; i++) {

        const employee = employeeList[i];
        employeeListHTML += `<p names>${employee.name}</p>`;
        employeeListHTML += `<p>${employee.officeNum}</p>`;
        employeeListHTML += `<p>${employee.phoneNum}</p>`

    }

    $('#first-number').append(employeeListHTML);

    console.log(employeeListHTML);

    //var x = document.createElement("INPUT");
    //x.setAttribute("type", "radio");
    for (i = 0; i < employeeListHTML; i++) {
        employeeListHTML.setAttribute("id", "names");
    }

    //employee.name.setAttribute("id", "names");

    //let x = document.getElementById('names');
    //x.setAttribute("type", "radio");



})













/*
const menuUL = ['view', 'add', 'verify', 'update', 'delete'];

let menuSpan = document.querySelector('#menu');

let menuHTML = '';

for (let i = 0; i <menuUL.length; i++) {

    const menu = menuUL[i];
    menuHTML += `<li>${menu}</li>`;
}

menuUL.innerHTML = menuHTML;*/