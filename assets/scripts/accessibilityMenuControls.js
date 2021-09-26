// Exibir o menu de acessibilidade mediante o clique no botão.
function showAccessibility(navAccess) {
    document.getElementById(navAccess).style.display = 'block';
}

//Oculta o menu de acessibilidade mediante o clique num botão.
function hideAccessibility(navAccess, showAccessibility) {
    document.getElementById(navAccess).style.display = 'none';
    document.getElementById('showAccessibilityButtonSwitch').style.display = 'block';
}