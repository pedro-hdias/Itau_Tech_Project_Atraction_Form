//Validação dos campos obrigatórios. Este script verifica se não há nada em branco.
//Campo "Primeiro nome" em branco;
function firstNameBlank(firstName) {
    if (document.getElementById('firstName').value == "") {
        document.getElementById('firstNameErrorAlert').style.display = 'block';
    } else {
        document.getElementById('firstNameErrorAlert').style.display = 'none';
    }
}

//Campo "Sobrenome" em bramco;
function lastNameBlank() {
    if (document.getElementById('lastName').value == "") {
        document.getElementById("lastNameAlertError").style.display = 'block';
    } else {
        document.getElementById('lastNameAlertError').style.display = 'none'
    }
}

//Campo "data de nascimento" em branco;
function birtDateBlank() {
    if (document.getElementById('birtDate').value == "") {
        document.getElementById('birtDateBlankAlertError').style.display = 'block';
    } else {
        document.getElementById('birtDateBlankAlertError').style.display = 'none';
    }
}

//Campo "RG" em branco;
function rgBlankAlert() {
    if (document.getElementById('rg').value == "") {
        document.getElementById('rgBlankAlertError').style.display = 'block';
    } else {
        document.getElementById('rgBlankAlertError').style.display = 'none';
    }
}

//Campo "e-mail" em branco;
function emailBlankAlert() {
    if (document.getElementById('email').value == "") {
        document.getElementById('emailBlankAlertError').style.display = 'block'
    } else {
        document.getElementById('emailBlankAlertError').style.display = 'none'
    }
}

//campo "Telefone" em branco.
function phoneBlankAlert() {
    if (document.getElementById('phone').value == "") {
        document.getElementById('phoneBlankAlertError').style.display = 'block'
    } else {
        document.getElementById('phoneBlankAlertError').style.display = 'none';
    }
}

//campo "Rua" em branco.
function streetBlankAlert() {
    if (document.getElementById('street').value == "") {
        document.getElementById('streetBlankAlertError').style.display = 'block'
    } else {
        document.getElementById('streetBlankAlertError').style.display = 'none';
    }
}

//campo "Número Apartamento" em branco.
function houseNumberBlankAlert() {
    if (document.getElementById('houseNumber').value == "") {
        document.getElementById('houseNumberBlankAlertError').style.display = 'block'
    } else {
        document.getElementById('houseNumberBlankAlertError').style.display = 'none';
    }
}

//campo "Bairro" em branco.
function neighBorHoodBlankAlert() {
    if (document.getElementById('neighBorHood').value == "") {
        document.getElementById('neighBorHoodBlankAlertError').style.display = 'block'
    } else {
        document.getElementById('neighBorHoodBlankAlertError').style.display = 'none';
    }
}

//campo "Cidade" em branco.
function cityBlankAlert() {
    if (document.getElementById('city').value == "") {
        document.getElementById('cityBlankAlertError').style.display = 'block'
    } else {
        document.getElementById('cityBlankAlertError').style.display = 'none';
    }
}

//campo "Estado" em branco.
function stateBlankAlert() {
    if (document.getElementById('estate').value == "") {
        document.getElementById('stateBlankAlertError').style.display = 'block';
    } else {
        document.getElementById('stateBlankAlertError').style.display = 'none';
    }
}

//campo "País" em branco.
function countryBlankAlert() {
    if (document.getElementById('country').value == "") {
        document.getElementById('countryBlankAlertError').style.display = 'block'
    } else {
        document.getElementById('countryBlankAlertError').style.display = 'none';
    }
}