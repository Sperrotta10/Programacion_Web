
// navegar al formulario (del home al form)

function mostrarFormulario() {

    // Obtener todos los campos del formulario
    const boleto = document.getElementById('boleto').value;
    const viaje = document.getElementById('viaje').value;
    const fechaSalida = document.getElementById('fecha_salida').value;
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const fechaLlegada = document.getElementById('fecha_llegada').value;

    // verificar si el vuelo es de ida o es de vuelta
    if(viaje !== "" && viaje === "solo Ida"){

        // Verificar que todos los campos están rellenados
        if (boleto === "" || fechaSalida === "" || origen === "" || destino === "") {
            alert('Por favor, rellene los campos necesarios.');
            return;
        }
    
        // Verificar que el origen es diferente del destino
        if (origen === destino) {
            alert('El origen debe ser diferente al destino y viceversa.');
            return;
        }

    } else {

        // Verificar que todos los campos están rellenados
        if (boleto === "" || fechaSalida === "" || fechaLlegada === "" || origen === "" || destino === "") {
            alert('Por favor, rellene todos los campos.');
            return;
        }
        
        // Verificar que el origen es diferente del destino
        if (origen === destino) {
            alert('El origen debe ser diferente al destino y viceversa.');
            return;
        }
        
        // Verificar que la fecha de salida es menor a la fecha de llegada
        if (fechaSalida >= fechaLlegada) {
            alert('La fecha de salida debe ser anterior a la fecha de llegada.');
            return;
        }
    }

    
    // Todos los campos están llenos, puedes ejecutar la función
    document.getElementById('landing-content').classList.remove('visible');
    document.getElementById('formulario').classList.add('visible');
        
}

// navegar al home (del formulario al home)
function mostrarPrincipal() {
    document.getElementById('formulario').classList.remove('visible');
    document.getElementById('landing-content').classList.add('visible');
}

function mostrarFormulario2() {
    document.querySelector("#reserva").classList.remove('visible');
    document.querySelector('#formulario').classList.add('visible');
}




// RESERVA DE ASIENTOS


// Recorrido de los asientos del vuelo (Vaje de ida y vuelta)
const aceptar = document.querySelector(".confirm-button");  // boton para aceptar la reservacion del asiento
const cancelar = document.querySelector(".cancel-button");  // boton para cancelar la reservacion del asiento
aceptar.disabled = true;

// Viajes de Ida

const asientos_ida = document.querySelectorAll(".seat-ida .seat");  // seleccionamos todos los asientos del vuelo de ida
let asiento_seleccionado = null;

// Viaje de vuelta

const asientos_vuelta = document.querySelectorAll(".seat-vuelta .seat");  // seleccionamos todos los asientos del vuelo de ida
let asiento_seleccionado_vuelta = null;

// seleccion de asiento de ida y vuelta
let nro_asiento = document.querySelector(".numero-asiento");



// hacemos un ciclo para recorrer cada uno de los asientos y manejar los eventos
asientos_ida.forEach(asiento => {

    asiento.addEventListener("click", () => {
        
        if (asiento_seleccionado === asiento) {

            // Si el asiento clicado ya está seleccionado, desmarcarlo
            asiento.classList.remove("selected");
            asiento.style.backgroundColor = "#ddd"; // Cambiar a color original
            nro_asiento.innerText = ""  // vaciamos el campo de texto
            asiento_seleccionado = null;

            // verificamos si el viaje es ida y vuelta para hacer ciertas validaciones dependiendo de la situacion del vuelo
            if(document.getElementById('viaje').value === "Ida y Vuelta"){

                if(asiento_seleccionado === null || asiento_seleccionado_vuelta === null) {
                    aceptar.disabled = true;  // desabilitamos el boton
                }

            } else {
                aceptar.disabled = true;  // desabilitamos el boton
            }

            

        } else if ((asiento_seleccionado === null) && !(asiento.classList.contains("selected"))) {
            
            // Si no hay asiento seleccionado, marcar el asiento clicado
            asiento.classList.add("selected");
            asiento.style.backgroundColor = "red"; // Cambiar a rojo
            nro_asiento.innerText = asiento.id  // colocamos en el campo de texto el asiento
            asiento_seleccionado = asiento;

            // verificamos si el viaje es ida y vuelta para hacer ciertas validaciones dependiendo de la situacion del vuelo
            if(document.getElementById('viaje').value === "Ida y Vuelta"){

                if(asiento_seleccionado && asiento_seleccionado_vuelta) {
                    aceptar.disabled = false;  // habilitamos el boton
                }

            } else {
                aceptar.disabled = false;  // habilitamos el boton
            }

            
        }

    });

});

// hacemos un ciclo para recorrer cada uno de los asientos y manejar los eventos
asientos_vuelta.forEach(asiento => {

    asiento.addEventListener("click", () => {
        
        if (asiento_seleccionado_vuelta === asiento) {

            // Si el asiento clicado ya está seleccionado, desmarcarlo
            asiento.classList.remove("selected");
            asiento.style.backgroundColor = "#ddd"; // Cambiar a color original
            nro_asiento.innerText = ""  // vaciamos el campo de texto
            asiento_seleccionado_vuelta = null;

            if(asiento_seleccionado === null || asiento_seleccionado_vuelta === null) {
                aceptar.disabled = true;  // desabilitamos el boton
            }

        } else if ((asiento_seleccionado_vuelta === null) && !(asiento.classList.contains("selected"))) {
            
            // Si no hay asiento seleccionado, marcar el asiento clicado
            asiento.classList.add("selected");
            asiento.style.backgroundColor = "red"; // Cambiar a rojo
            nro_asiento.innerText = asiento.id  // colocamos en el campo de texto el asiento
            asiento_seleccionado_vuelta = asiento;

            if(asiento_seleccionado && asiento_seleccionado_vuelta) {
                aceptar.disabled = false;  // habilitamos el boton
            }
            
        }

    });

});


// declaramos los botones y secciones
const idaTab = document.getElementById('tab1');
const vueltaTab = document.getElementById('tab2');
const idaSection = document.querySelector('.seat-ida');
const vueltaSection = document.querySelector('.seat-vuelta');

// nav-bar para establcer los puestos del viaje de Ida y Vuelta si los son
document.addEventListener('DOMContentLoaded', function() {


    // evento para el boton de ida
    idaTab.addEventListener('click', function() {

        idaTab.classList.add('nav-tab-active');
        idaTab.classList.remove('nav-tab-inactive');

        vueltaTab.classList.add('nav-tab-inactive');
        vueltaTab.classList.remove('nav-tab-active');

        idaSection.style.display = 'block';
        vueltaSection.style.display = 'none';

        // agregando contenido a la informacion del vuelo
        nro_asiento.innerText = ""

        // Verificar si asiento_seleccionado no es null o undefined antes de acceder a su propiedad id
        if (asiento_seleccionado && asiento_seleccionado.id !== null) {
            nro_asiento.innerText = asiento_seleccionado.id || '';
        } else {
            nro_asiento.innerText = "";
        }
        

        document.querySelector(".codigo_vuelo") = "AA 450"
        document.querySelector(".label_vuelo").innerHTML = "Ida:"
        document.querySelector(".viaje").innerHTML = document.getElementById('fecha_salida').value || ''
        document.querySelector(".origen_vuelo").innerHTML = document.getElementById('origen').value || ''
        document.querySelector(".destino_vuelo").innerHTML = document.getElementById('destino').value || ''
    });

    // evento para el boton de vuelta
    vueltaTab.addEventListener('click', function() {

        vueltaTab.classList.add('nav-tab-active');
        vueltaTab.classList.remove('nav-tab-inactive');

        idaTab.classList.add('nav-tab-inactive');
        idaTab.classList.remove('nav-tab-active');
        
        idaSection.style.display = 'none';
        vueltaSection.style.display = 'block';

        // agregando contenido a la informacion del vuelo
        nro_asiento.innerText = ""

        // Verificar si asiento_seleccionado_vuelta no es null o undefined antes de acceder a su propiedad id
        if (asiento_seleccionado_vuelta && asiento_seleccionado_vuelta.id !== null) {
            nro_asiento.innerText = asiento_seleccionado_vuelta.id || '';
        } else {
            nro_asiento.innerText = "";
        }
        
        document.querySelector(".codigo_vuelo") = "AA 650"
        document.querySelector(".label_vuelo").innerHTML = "Vuelta:"
        document.querySelector(".viaje").innerHTML = document.getElementById('fecha_llegada').value || ''
        document.querySelector(".origen_vuelo").innerHTML = document.getElementById('destino').value || ''
        document.querySelector(".destino_vuelo").innerHTML = document.getElementById('origen').value || ''
    });
});


// boton para viajar a pagina de pago
aceptar.addEventListener('click', () => {

    //alert("Reserva de asiento realizada");

    document.querySelector('#reserva').classList.remove('visible');
    document.querySelector('#Pago').classList.add('visible');
})


// boton para cancelar la reserva del asiento
cancelar.addEventListener("click", () => {

    asiento_seleccionado.classList.remove("selected");  // eliminamos la seleccion del asiento (ida)
    asiento_seleccionado.style.backgroundColor = "#ddd"; // Cambiar a color original (ida)

    asiento_seleccionado_vuelta.classList.remove("selected");  // eliminamos la seleccion del asiento (vuelta)
    asiento_seleccionado_vuelta.style.backgroundColor = "#ddd"; // Cambiar a color original (vuelta)

    nro_asiento.innerText="";  // vaciamos el campo de texto
    asiento_seleccionado = null;  // quitamos el asiento reservado (ida)
    asiento_seleccionado_vuelta = null // quitamos el asiento reservado (vuelta)
    aceptar.disabled = true;  // desabilitamos el boton

});




// FORMULARIO VALIDACIONES


// botones del formulario
const enter_form = document.querySelector(".form-continuar");

// la validacion se va accionar cuando se oprima el boton
enter_form.addEventListener("click", () => {

    // Obtener los elementos de entrada

    // Informacion del Pasajero
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    const genero = document.getElementById('genero').value;
    const nacionalidad = document.getElementById('nacionalidad').value;

    // Documentacion del viaje
    const tipoDocumento = document.getElementById('tipo_documento').value;
    const numeroDocumento = document.getElementById('numero_documento').value.trim();
    const fechaVencimiento = document.getElementById('fecha_vencimiento').value;
    const paisEmision = document.getElementById('pais_emision').value;

    // Servicios de Vuelo
    const asistencia = document.getElementById('asistencia').value;
    const comida = document.getElementById('preferencias').value;
    const mano = document.getElementById('mano').value.trim();
    const bodega = document.getElementById('bodega').value.trim();

    // Datos de Contacto
    const paisResidencia = document.getElementById('pais_residencia').value;
    const numeroTelefono = document.getElementById('numero_telefono').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const direccion = document.getElementById('direccion').value.trim();


    // Inicializar validez
    let isValid = true;

    // Limpiar mensajes de error
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    // Validaciones
    if (!nombre) {
        document.getElementById('error-nombre').textContent = 'Por favor, ingrese su nombre.';
        isValid = false;
    }

    if (!apellido) {
        document.getElementById('error-apellido').textContent = 'Por favor, ingrese su apellido.';
        isValid = false;
    }

    if (!fechaNacimiento) {
        document.getElementById('error-fecha-nacimiento').textContent = 'Por favor, seleccione su fecha de nacimiento.';
        isValid = false;
    }

    if (!genero) {
        document.getElementById('error-genero').textContent = 'Por favor, seleccione su género.';
        isValid = false;
    }

    if (!nacionalidad) {
        document.getElementById('error-nacionalidad').textContent = 'Por favor, seleccione su nacionalidad.';
        isValid = false;
    }

    if (!tipoDocumento) {
        document.getElementById('error-tipo-documento').textContent = 'Por favor, seleccione el tipo de documento.';
        isValid = false;
    }

    if (!numeroDocumento) {
        document.getElementById('error-numero-documento').textContent = 'Por favor, ingrese el número de documento.';
        isValid = false;
    }

    if (!fechaVencimiento) {
        document.getElementById('error-fecha-vencimiento').textContent = 'Por favor, seleccione la fecha de vencimiento.';
        isValid = false;
    }

    if (!paisEmision) {
        document.getElementById('error-pais-emision').textContent = 'Por favor, seleccione el país de emisión.';
        isValid = false;
    }

    if (!mano) {
        document.getElementById('error-mano').textContent = 'Por favor, ingrese el peso de la maleta de mano.';
        isValid = false;
    }

    if (!paisResidencia) {
        document.getElementById('error-pais-residencia').textContent = 'Por favor, seleccione el país de residencia.';
        isValid = false;
    }

    if (!numeroTelefono) {
        document.getElementById('error-numero-telefono').textContent = 'Por favor, ingrese el número de teléfono.';
        isValid = false;
    }

    if (!correo) {
        document.getElementById('error-correo').textContent = 'Por favor, ingrese su correo electrónico.';
        isValid = false;
    }

    if (!direccion) {
        document.getElementById('error-direccion').textContent = 'Por favor, ingrese su dirección.';
        isValid = false;
    }

    if (isValid) {
        alert('Formulario enviado correctamente.');

        // agregando contenido a la informacion del vuelo de ida
        document.querySelector(".codigo_vuelo") = "AA 450"
        document.querySelector(".label_vuelo").innerHTML = "Ida:"
        document.querySelector(".viaje").innerHTML = document.getElementById('fecha_salida').value || ''
        document.querySelector(".origen_vuelo").innerHTML = document.getElementById('origen').value || ''
        document.querySelector(".destino_vuelo").innerHTML = document.getElementById('destino').value || ''


        if(document.getElementById('viaje').value === "solo Ida") {
            alert("Ida")
            vueltaTab.disabled = true
        } else {
            alert("vuelta")
            vueltaTab.disabled = false
        }

        // pasamos a la vista de reservar el asiento del vuelo
        document.querySelector('#formulario').classList.remove('visible');
        document.querySelector('#reserva').classList.add('visible');
        
    }
    
}); 





// PAGO DEL VUELO

const enviar_pago = document.querySelector(".confirm-pago");
const cancelar_pago = document.querySelector(".cancel-pago");
const form_validacion = document.querySelector(".validaciones_pago");


enviar_pago.addEventListener("click", () => {
    // chequeamos la validacion de los campos de los formularios de forma individual
    if (!form_validacion.checkValidity()) {
        alert('Por favor, completa todos los campos correctamente.');
        preventDefault(); // no valido
    } else {

        alert("Reserva del vuelo exitosa!!");

        if(agregar_registro()){

            // creacion de los bording pass del pasajero
            if(document.getElementById('viaje').value === "solo Ida") {

                // Informacion de viaje
                document.querySelector(".numero_vuelo_ida").innerHTML = "<strong>Vuelo:</strong>" + " " + "AA 450";
                document.querySelector(".fecha_vuelo_ida").innerHTML = "<strong>Fecha:</strong>" + " " + document.getElementById('fecha_salida').value;;
                document.querySelector(".fecha_hora_ida").innerHTML = "<strong>Hora:</strong>" + " " + "10:30am";

                // Informacion del vuelo y pasajero

                document.querySelector(".name_pasajero_ida").innerHTML = "<strong>Nombre:</strong>" + " " + document.getElementById('nombre').value;
                document.querySelector(".asiento_pasajero_ida").innerHTML = "<strong>Asiento:</strong>" + " " + asiento_seleccionado.id;
                document.querySelector(".puerta_pasajero_ida").innerHTML = "<strong>Puerta</strong>" + " " + 4;
                document.querySelector(".destino_pasajero_ida").innerHTML = "<strong>Destino</strong>" + " " + document.getElementById('destino').value;
            } else {

                // Bording Pass de ida

                // Informacion de viaje
                document.querySelector(".numero_vuelo_ida").innerHTML = "<strong>Vuelo:</strong>" + " " + "AA 450";
                document.querySelector(".fecha_vuelo_ida").innerHTML = "<strong>Fecha:</strong>" + " " + document.getElementById('fecha_salida').value;
                document.querySelector(".fecha_hora_ida").innerHTML = "<strong>Hora:</strong>" + " " + "10:30am";

                // Informacion del vuelo y pasajero

                document.querySelector(".name_pasajero_ida").innerHTML = "<strong>Nombre:</strong>" + " " + document.getElementById('nombre').value;
                document.querySelector(".asiento_pasajero_ida").innerHTML = "<strong>Asiento:</strong>" + " " + asiento_seleccionado.id;
                document.querySelector(".puerta_pasajero_ida").innerHTML = "<strong>Puerta</strong>" + " " + 4;
                document.querySelector(".destino_pasajero_ida").innerHTML = "<strong>Destino</strong>" + " " + document.getElementById('destino').value;


                // Bording Pass vuelta

                // Informacion de viaje
                document.querySelector(".numero_vuelo_vuelta").innerHTML = "<strong>Vuelo:</strong>" + " " + "AA 650";
                document.querySelector(".fecha_vuelo_vuelta").innerHTML = "<strong>Fecha:</strong>" + " " + document.getElementById('fecha_llegada').value;
                document.querySelector(".fecha_hora_vuelta").innerHTML = "<strong>Hora:</strong>" + " " + "8:00pm";

                // Informacion del vuelo y pasajero

                document.querySelector(".name_pasajero_vuelta").innerHTML = "<strong>Nombre:</strong>" + " " + document.getElementById('nombre').value;
                document.querySelector(".asiento_pasajero_vuelta").innerHTML = "<strong>Asiento:</strong>" + " " + asiento_seleccionado_vuelta.id;
                document.querySelector(".puerta_pasajero_vuelta").innerHTML = "<strong>Puerta</strong>" + " " + 10;
                document.querySelector(".destino_pasajero_vuelta").innerHTML = "<strong>Destino</strong>" + " " + document.getElementById('origen').value;
            }


            asiento_seleccionado = null;
            asiento_seleccionado_vuelta = null;
            nro_asiento.innerText="";  // vaciamos el campo de texto

            // Vaciar todos los campos del formulario
            document.getElementById('nombre').value = "";
            document.getElementById('apellido').value = "";
            document.getElementById('fecha_nacimiento').value = "";
            document.getElementById('genero').value = "";
            document.getElementById('nacionalidad').value = "";

            // Documentación del viaje
            document.getElementById('numero_documento').value = "";
            document.getElementById('fecha_vencimiento').value = "";
            document.getElementById('pais_emision').value = "";

            // Servicios de Vuelo
            document.getElementById('asistencia').value = "";
            document.getElementById('preferencias').value = "";
            document.getElementById('mano').value = "";
            document.getElementById('bodega').value = "";

            // Datos de Contacto
            document.getElementById('pais_residencia').value = "";
            document.getElementById('numero_telefono').value = "";
            document.getElementById('correo').value = "";
            document.getElementById('direccion').value = "";


            if(document.getElementById('viaje').value === "solo Ida") {

                document.querySelector('#Pago').classList.remove('visible');

                document.querySelector('#Bordings').classList.add('visible');
                document.querySelector('#pass_ida').classList.add('visible');

            } else {

                document.querySelector('#Pago').classList.remove('visible');

                document.querySelector('#Bordings').classList.add('visible');
                document.querySelector('#pass_ida').classList.add('visible');
                document.querySelector('#pass_vuelta').classList.add('visible');

            }

            // vaciamos los campos de formulario de la vista de pagos
            form_validacion.reset();
        } else {
            return
        }
        
    }
})

cancelar_pago.addEventListener("click", () => {
    document.querySelector('#Pago').classList.remove('visible');
    document.querySelector('#reserva').classList.add('visible');
})


// Mostrar tablas de los registros de los pasajeros

const open = document.getElementById('mostrar_tabla')
const modal_container = document.getElementById('modal-container')
const close = document.getElementById('cerrar_tabla')

open.addEventListener('click',()=>{
    modal_container.classList.add('show')

})
close.addEventListener('click',()=>{
    modal_container.classList.remove('show')

})


// agregar registro de pasajeros

function agregar_registro(){

    const nombre = document.getElementById('nombre').value.trim();
    const asiento_ida = asiento_seleccionado.id;
    let asiento_vuelta;

    if (asiento_seleccionado_vuelta && asiento_seleccionado_vuelta.id !== null) {
        asiento_vuelta = asiento_seleccionado_vuelta.id || '';
    }

    if (nombre && asiento_ida) {
        let tabla = document.getElementById('miTabla').getElementsByTagName('tbody')[0].insertRow();
        let col1 = tabla.insertCell(0);
        let col2 = tabla.insertCell(1);
        let col3 = tabla.insertCell(2);
        col1.innerHTML = nombre;
        col2.innerHTML = asiento_ida;
        col3.innerHTML = asiento_vuelta;
        alert('Registro agregado');
        return true;
    } else {
        alert('Error al crear el registro del pasajero');
        return false;
    }
    
}


// Modal para la factura del vuelo
document.getElementById('openModal').addEventListener('click', function() {
    
    let precioVuelo; // Precio base del vuelo

    if(document.getElementById('viaje').value === "solo Ida") {
        precioVuelo = 150;
    } else {
        precioVuelo = 300;
    }

    const impuestos = precioVuelo * 0.16; // 16% de impuestos
    const pesoEquipaje_mano = parseFloat(document.getElementById('mano').value); // Peso del equipaje de mano en kg
    const pesoEquipaje_bodega = parseFloat(document.getElementById('bodega').value) || 0; // Peso del equipaje de bodega en kg
    const limitePeso_mano = 10; // Límite de peso permitido en kg
    const limitePeso_bodega = 23; // Límite de peso permitido en kg
    const multaPorExceso = 50; // Multa por cada kg de exceso

    let multa_mano = 0;
    let multa_bodega = 0;

    // Condiciones para ver si se excedió el peso del equipaje de mano
    if (pesoEquipaje_mano > limitePeso_mano) {
        multa_mano = (pesoEquipaje_mano - limitePeso_mano) * multaPorExceso;
    }

    // Condiciones para ver si se excedió el peso del equipaje de bodega
    if (pesoEquipaje_bodega > 0) {
        if (pesoEquipaje_bodega > limitePeso_bodega) {
            multa_bodega = (pesoEquipaje_bodega - limitePeso_bodega) * multaPorExceso;
        }
    }

    // Calcular el total dependiendo si hay maleta de bodega o no
    const total = precioVuelo + impuestos + multa_mano + multa_bodega;

    // Actualizar el contenido del modal con la factura
    document.getElementById('factura').innerHTML = `
        <p>Precio del vuelo: $${precioVuelo.toFixed(2)}</p>
        <p>Impuestos (16%): $${impuestos.toFixed(2)}</p>
        ${multa_mano > 0 ? `<p>Multa por exceso de equipaje de mano: $${multa_mano.toFixed(2)}</p>` : ''}
        ${multa_bodega > 0 ? `<p>Multa por exceso de equipaje de bodega: $${multa_bodega.toFixed(2)}</p>` : ''}
        <hr>
        <p><strong>Total: $${total.toFixed(2)}</strong></p>
    `;

    // Mostrar el modal
    document.getElementById('myModal').style.display = "block";
});



document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('myModal').style.display = "none";
});

document.getElementById('cerrarModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = "none";
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
    }
});



// BORDING PASS DEL VUELO

document.querySelector(".btn_continuar").addEventListener("click", () => {

    document.querySelector('#Bordings').classList.remove('visible');
    document.querySelector('#pass_ida').classList.remove('visible');
    document.querySelector('#pass_vuelta').classList.remove('visible');

    document.getElementById('landing-content').classList.add('visible');

})


/*
<option value="AF">Afghanistan</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BA">Bosnia and Herzegowina</option>
                  <option value="BW">Botswana</option>
                  <option value="BV">Bouvet Island</option>
                  <option value="BR">Brazil</option>
                  <option value="IO">British Indian Ocean Territory</option>
                  <option value="BN">Brunei Darussalam</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="CV">Cape Verde</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos (Keeling) Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CG">Congo</option>
                  <option value="CD">Congo, the Democratic Republic of the</option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CI">Cote d'Ivoire</option>
                  <option value="HR">Croatia (Hrvatska)</option>
                  <option value="CU">Cuba</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="TP">East Timor</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FK">Falkland Islands (Malvinas)</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="FX">France, Metropolitan</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="TF">French Southern Territories</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HM">Heard and Mc Donald Islands</option>
                  <option value="VA">Holy See (Vatican City State)</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran (Islamic Republic of)</option>
                  <option value="IQ">Iraq</option>
                  <option value="IE">Ireland</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="KP">Korea, Democratic People's Republic of</option>
                  <option value="KR">Korea, Republic of</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Lao People's Democratic Republic</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libyan Arab Jamahiriya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macau</option>
                  <option value="MK">Macedonia, The Former Yugoslav Republic of</option>
                  <option value="MG">Madagascar</option>
                  <option value="MW">Malawi</option>
                  <option value="MY">Malaysia</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="YT">Mayotte</option>
                  <option value="MX">Mexico</option>
                  <option value="FM">Micronesia, Federated States of</option>
                  <option value="MD">Moldova, Republic of</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="NL">Netherlands</option>
                  <option value="AN">Netherlands Antilles</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NU">Niue</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="MP">Northern Mariana Islands</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PW">Palau</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PN">Pitcairn</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="QA">Qatar</option>
                  <option value="RE">Reunion</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russian Federation</option>
                  <option value="RW">Rwanda</option>
                  <option value="KN">Saint Kitts and Nevis</option> 
                  <option value="LC">Saint LUCIA</option>
                  <option value="VC">Saint Vincent and the Grenadines</option>
                  <option value="WS">Samoa</option>
                  <option value="SM">San Marino</option>
                  <option value="ST">Sao Tome and Principe</option> 
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SK">Slovakia (Slovak Republic)</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SO">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="GS">South Georgia and the South Sandwich Islands</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SH">St. Helena</option>
                  <option value="PM">St. Pierre and Miquelon</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SJ">Svalbard and Jan Mayen Islands</option>
                  <option value="SZ">Swaziland</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syrian Arab Republic</option>
                  <option value="TW">Taiwan, Province of China</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania, United Republic of</option>
                  <option value="TH">Thailand</option>
                  <option value="TG">Togo</option>
                  <option value="TK">Tokelau</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad and Tobago</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TC">Turks and Caicos Islands</option>
                  <option value="TV">Tuvalu</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States</option>
                  <option value="UM">United States Minor Outlying Islands</option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Viet Nam</option>
                  <option value="VG">Virgin Islands (British)</option>
                  <option value="VI">Virgin Islands (U.S.)</option>
                  <option value="WF">Wallis and Futuna Islands</option>
                  <option value="EH">Western Sahara</option>
                  <option value="YE">Yemen</option>
                  <option value="YU">Yugoslavia</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
*/