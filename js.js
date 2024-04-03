let doc = document

let header = doc.querySelector('header')
let text = doc.querySelector('.modalka')
let modalka = doc.querySelector('.modal')
let kartinka = doc.querySelector('.kartinka')
let zayavka = doc.querySelector('.zayavka')
let stranniy = doc.querySelector('.stranniy')
let horosho = doc.querySelector('.horosho')

text.addEventListener('click', () => {
    modalka.classList.toggle('modalka_active')
    kartinka.classList.toggle('kartinka_active')
    zayavka.classList.toggle('zayavka_active')
    stranniy.classList.toggle('stranniy_active')
    horosho.classList.toggle('horosho_active')
    header.classList.toggle('header_a')
})

horosho.addEventListener('click', () => {
    modalka.classList.toggle('modalki_netu')
    kartinka.classList.toggle('kartinki_netu')
    zayavka.classList.toggle('zayavki_netu')
    stranniy.classList.toggle('strannogo_netu')
    horosho.classList.toggle('horosho_netu')
    header.classList.toggle('headera_netu')
})
