let inputs = JSON.parse(localStorage.getItem('registro')) || [];
 crearFila();

function crear(event) {
    event.preventDefault();
   let input1 = document.getElementById('Usuario').value.trim();
     let input2 = document.getElementById('Correo').value.trim();
   
     let datos = {
        input1 : input1,
        input2 : input2,
     }
      if (!input1 || !input2 ) {
    alert('Completa todos los campos.');
    return;
  }

  inputs.push(datos);
  localStorage.setItem('registro', JSON.stringify(inputs));
  crearFila();
}


function change() {
   const header = document.getElementById('header');
    header.textContent ='exam';
}
function resetear() {
document.getElementById('FORM').reset();
}
function crearFila(){
    const UL = document.getElementById('UL');
    UL.innerHTML ='';
   inputs.forEach((a, b) => {
        const li = document.createElement('li');
        li.textContent = 'usuario:' + ' ' + a.input1 + ' ' + '|' + 'correo:' + a.input2;
       
        UL.appendChild(li);
   

})};