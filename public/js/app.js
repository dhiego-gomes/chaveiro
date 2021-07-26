const contactForm = document.querySelector('#form')
let username = document.querySelector('#name')
let phone = document.querySelector('#phone')
let email = document.querySelector('#email')
let message = document.querySelector('#message')
let spinner = document.querySelector('.spinner')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let formData = {
        name: username.value,
        phone: phone.value,
        email: email.value,
        message: message.value
    }

    spinner.style.display = 'inline-block'

    let xhr = new XMLHttpRequest()
    xhr.open('POST', '/')
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = function() {
        console.log(xhr.responseText)
        if (xhr.responseText == 'success') {
            alert('E-mail enviado!')
            spinner.style.display = 'none'
            username.value = ''
            phone.value = ''
            email.value = ''
            message.value = ''
        } else {
            alert('Ocorreu um erro.')
        }
    }

    xhr.send(JSON.stringify(formData))

})