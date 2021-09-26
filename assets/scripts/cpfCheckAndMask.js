//Validação do campo do CPF, máscara  e verificação de validade;
function cpfBlank() {
    // senão tiver nada escrito, oculta tudo e exibe mensagem.
    if (document.getElementById('cpf').value == "") {
        document.getElementById('cpfBlankAlertError').style.display = 'block';
        document.getElementById('validCPF').style.display = 'none';
        document.getElementById('cpfInvalid').style.display = 'none';
        document.getElementById('verifyResult').style.display = 'none';
    } else {
        // exibe o botão para o usuário checar o resultado.
        document.getElementById('cpfBlankAlertError').style.display = 'none';
        document.getElementById('validCPF').style.display = 'none';
        document.getElementById('cpfInvalid').style.display = 'none';
        document.getElementById('verifyResult').style.display = 'block';

        //caso haja algo escrito, valida cpf
        let cpf = (document.getElementById('cpf').value);
        // Validar se é String
        if (typeof cpf !== 'string') return false

        // Tirar formatação
        cpf = cpf.replace(/[^\d]+/g, '')

        // Validar se tem tamanho 11 ou se é uma sequência de digitos repetidos
        if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false

        // String para Array
        cpf = cpf.split('')

        const validator = cpf
            // Pegar os últimos 2 digitos de validação
            .filter((digit, index, array) => index >= array.length - 2 && digit)
            // Transformar digitos em números
            .map(el => +el)

        const toValidate = pop => cpf
            // Pegar Array de items para validar
            .filter((digit, index, array) => index < array.length - pop && digit)
            // Transformar digitos em números
            .map(el => +el)

        const rest = (count, pop) => (toValidate(pop)
                // Calcular Soma dos digitos e multiplicar por 10
                .reduce((soma, el, i) => soma + el * (count - i), 0) * 10)
            // Pegar o resto por 11
            %
            11
            // transformar de 10 para 0
            %
            10

        return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1])
    }
}

function validate() {
    if (cpfBlank(document.getElementById('cpf').value)) {
        //Limpa alertas de erro, confirma a validade e exibe próximos passos
        document.getElementById('cpfBlankAlertError').style.display = 'none';
        document.getElementById('verifyResult').style.display = 'none';
        document.getElementById('validCPF').style.display = 'block';
        document.getElementById('cpfInvalid').style.display = none;
    } else {
        //Limpa alguns alertas de erros, confirma a invalidade e exibe mantém oculto os próximos passos
        document.getElementById('cpfBlankAlertError').style.display = 'none';
        document.getElementById('verifyResult').style.display = 'none';
        document.getElementById('validCPF').style.display = 'none';
        document.getElementById('cpfInvalid').style.display = 'block';
    }
}

//mascara cpf
function fMasc(object, mask) {
    obj = object
    masc = mask
    setTimeout("fMascEx()", 1)
}

function fMascEx() {
    obj.value = masc(obj.value)
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}