const inputs = {
    nombre: document.getElementById("nombre"),
    apellido: document.getElementById("apellido"),
    email: document.getElementById("email"),
    numero: document.getElementById("numero"),
    edad: document.getElementById("edad"),
    direccion: document.getElementById("direccion"),
    provincia: document.getElementById("provincia"),
    codigoPostal: document.getElementById("codigo_postal"),
    contacto: document.querySelectorAll("input[name='contacto']"),
    suscripcion: document.querySelectorAll("input[name='suscripcion']")
};

for (let key in inputs) {
    if (inputs[key] instanceof NodeList) {
        inputs[key].forEach(el => el.addEventListener("change", updateTable));
    } else {
        inputs[key].addEventListener("input", updateTable);
    }
}

function updateTable() {
    document.getElementById("nombre-val").innerText = inputs.nombre.value;
    document.getElementById("apellido-val").innerText = inputs.apellido.value;
    document.getElementById("email-val").innerText = inputs.email.value;
    document.getElementById("numero-val").innerText = inputs.numero.value;
    document.getElementById("edad-val").innerText = inputs.edad.value;
    document.getElementById("direccion-val").innerText = inputs.direccion.value;
    document.getElementById("provincia-val").innerText = inputs.provincia.value;
    document.getElementById("codigo-postal-val").innerText = inputs.codigoPostal.value;

    const selectedContact = [...inputs.contacto].find(el => el.checked);
    document.getElementById("contacto-val").innerText = selectedContact ? selectedContact.value : "";

    const selectedSubs = [...inputs.suscripcion].filter(el => el.checked).map(el => el.value).join(", ");
    document.getElementById("suscripcion-val").innerText = selectedSubs;
}
