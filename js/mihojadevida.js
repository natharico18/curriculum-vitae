
function validar(){
    var nombre, email, comentario;
// validaciones campo requerido
    nombre      = document.getElementById("nombre").value;
    email       = document.getElementById("email").value;
    comentario  = document.getElementById("comentario").value;
    comentario  = comentario.trim();
// validacion nombre
    var errores = false
    if (nombre == '' || nombre.length == 0) {
      alert('Ingrese un nombre');
    }else{
      if( !(/^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/.test(nombre))) {
        alert('El nombre es incorrecto')
        errores = true;
      }
    }
// validacion email
    if( !(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email))) {
      alert('El correo electronico es incorrecto');
      errores = true;
    }
// validacion comentario
    if (comentario.length == 0 ) {
      alert("Ingrese el mensaje");
      errores = true;
    }
    if (!errores) {
      document.getElementById('openModal').style.display = 'block';
    }
  }
// modal
function CloseModal() {
  document.getElementById('openModal').style.display = 'none';
}
// menu hamburguesa
function myFunction() {
  var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
  }
}



