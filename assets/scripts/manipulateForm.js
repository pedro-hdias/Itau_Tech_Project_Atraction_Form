// Verifica se o checkbox está marcado e habilita o botão de envio do formulário
const checkbox = document.querySelector("#privacy");
const submitBtn = document.querySelector("#submitBtn");
checkbox.addEventListener("change", (e) => submitBtn.disabled = !e.target.checked);

// Função desabilita o botão cadastrar ao clicar em limpar campos
function resetSubmit() {
    document.getElementById("submitBtn").disabled = true;
    alert("Todos os campos foram limpos.")
}


// Função para limpar o formulário no refresh
function resetForm() {
    document.getElementById("form").reset();
}