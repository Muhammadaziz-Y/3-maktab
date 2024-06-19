const form = document.querySelector('form');
const inputs = document.querySelectorAll('input')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = inputs[0].value
    const text = inputs[1].value
    const phone = inputs[2].value

    const token = '6387933950:AAE7RvSw-qnuvHy-lMbOS4w5qbvDeEh2rJc'
    const chat_id = '6620142322 ' 
    
    const message = `Isimi:   ${name}    Kurs nomi: ${text}    Telefon raqami: ${phone}`

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`

    fetch(url)

}) 