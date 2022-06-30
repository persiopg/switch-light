 const btnSwitch = document.querySelector('.btn-switch');
 const mode = document.querySelector('.mode');

btnSwitch.addEventListener('click', () => {
    btnSwitch.classList.toggle('btn-switch-on');
    mode.classList.toggle('dark-mode');
});