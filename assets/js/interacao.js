// fazer dropdaw de consultar ingresso
const btn_dropdaw = document.querySelector('.btn_consultar_ingreso');
const form_consult = document.querySelector('.dropdaw_ingresso');

btn_dropdaw.onclick = () => {
    form_consult.classList.toggle('ativo');
}