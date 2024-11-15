document.addEventListener('DOMContentLoaded', () => {
    const btnLeerMas = document.getElementById('btn-leer-mas');
    const cvCompleto = document.getElementById('cv-completo');

    btnLeerMas.addEventListener('click', () => {
        if (cvCompleto.style.display === 'none') {
            cvCompleto.style.display = 'block';
            btnLeerMas.textContent = 'Leer menos';
        } else {
            cvCompleto.style.display = 'none';
            btnLeerMas.textContent = 'Leer más';
        }
    });
});