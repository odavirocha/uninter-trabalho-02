let nameInput = document.querySelector(".contato-name-input")
let emailInput = document.querySelector(".contato-email-input")
let messageInput = document.querySelector(".contato-message-input")

// limpa as validações
nameInput.addEventListener("input", () => nameInput.setCustomValidity(""))
emailInput.addEventListener("input", () => emailInput.setCustomValidity(""))
messageInput.addEventListener("input", () => messageInput.setCustomValidity(""))

function validateName() {
    let name = nameInput.value.trim().split(/\s+/)

    // verifica se não ta vazio
    if (nameInput.value.length == 0) {
        nameInput.setCustomValidity("Preencha seu nome e sobrenome!")
        nameInput.reportValidity()
        return false
    }

    // verifica se o array tem 2 valores, sendo nome e sobrenome
    if ((name.length < 2)) {
        nameInput.setCustomValidity("Digite seu nome e sobrenome!")
        nameInput.reportValidity()
        return false
    }

    return true
}

function validateEmail() {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // regex que valida emails
    
    // verifica se não ta vazio
    if (emailInput.value.length == 0) {
        emailInput.setCustomValidity("Preencha seu e-mail!")
        emailInput.reportValidity()
        return false
    }

    // valida se o input passa na regex
    if (!regex.test(emailInput.value)) {
        emailInput.setCustomValidity("E-mail inválido!")
        emailInput.reportValidity()
        return false
    }

    return true
}

function validateMessage() {

    // verifica se não ta vazio
    if (messageInput.value.length == 0) {
        messageInput.setCustomValidity("Escreva uma mensagem!")
        messageInput.reportValidity()
        return false
    }

    // verfica se a mensagem não é muito grande
    if (messageInput.value.length > 300) {
        messageInput.setCustomValidity("A mensagem deve ter no máximo 300 caracteres")
        messageInput.reportValidity()
        return false
    }

    return true
}

document.querySelector(".contato-form").addEventListener("submit", function(event) {
    event.preventDefault()

    // chama os validadores
    if (!validateName()) return
    if (!validateEmail()) return
    if (!validateMessage()) return

    alert("Mensagem enviada com sucesso!")
    nameInput.value = ""
    emailInput.value = ""
    messageInput.value = ""
})
