
// navegar al formulario (del home al form)
function mostrarFormulario() {
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
const asientos = document.querySelectorAll(".seat");  // seleccionamos todos los asientos
const aceptar = document.querySelector(".confirm-button");  // boton para aceptar la reservacion del asiento
const cancelar = document.querySelector(".cancel-button");  // boton para cancelar la reservacion del asiento
aceptar.disabled = true;

let asiento_seleccionado = null;
let nro_asiento = document.querySelector(".numero-asiento");

// hacemos un ciclo para recorrer cada uno de los asientos y manejar los eventos
asientos.forEach(asiento => {
    asiento.addEventListener("click", () => {
        
        if (asiento_seleccionado === asiento) {

            // Si el asiento clicado ya está seleccionado, desmarcarlo
            asiento.classList.remove("selected");
            asiento.style.backgroundColor = "#ddd"; // Cambiar a color original
            nro_asiento.innerText = ""  // vaciamos el campo de texto
            asiento_seleccionado = null;
            aceptar.disabled = true;  // desabilitamos el boton

        } else if ((asiento_seleccionado === null) && !(asiento.classList.contains("selected"))) {
            
            // Si no hay asiento seleccionado, marcar el asiento clicado
            asiento.classList.add("selected");
            asiento.style.backgroundColor = "red"; // Cambiar a rojo
            nro_asiento.innerText = asiento.id  // colocamos en el campo de texto el asiento
            asiento_seleccionado = asiento;
            aceptar.disabled = false;  // habilitamos el boton
        }

    });
});

aceptar.addEventListener('click', () => {

    //alert("Reserva de asiento realizada");

    document.querySelector('#reserva').classList.remove('visible');
    document.querySelector('#Pago').classList.add('visible');
})


cancelar.addEventListener("click", () => {
    asiento_seleccionado.classList.remove("selected");  // eliminamos la seleccion del asiento
    asiento_seleccionado.style.backgroundColor = "#cacaca"; // Cambiar a color original
    nro_asiento.innerText="";  // vaciamos el campo de texto
    asiento_seleccionado = null;  // quitamos el asiento reservado
    aceptar.disabled = true;  // desabilitamos el boton

});



// FORMULARIO VALIDACIONES


// botones del formulario
const enter_form = document.querySelector(".form-continuar");

// la validacion se va accionar cuando se oprima el boton
enter_form.addEventListener("click", () => {
    alert("Hola")
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

        // pasamos a la vista de reservar el asiento del vuelo
        document.querySelector('#formulario').classList.remove('visible');
        document.querySelector('#reserva').classList.add('visible');
        
    }
    
}); 




// Pago del vuelo

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

        agregar_registro()
        asiento_seleccionado = null;
        nro_asiento.innerText="";  // vaciamos el campo de texto

        vaciar_formulario_main()

        document.querySelector('#Pago').classList.remove('visible');
        document.querySelector('#landing-content').classList.add('visible');
    }
})

cancelar_pago.addEventListener("click", () => {
    document.querySelector('#Pago').classList.remove('visible');
    document.querySelector('#reserva').classList.add('visible');
})




/*
// Pasajeros que reservaron vuelos
function mostrarDatosEnTabla() {


    const nombre = document.querySelector('#nombres').value;
    const apellido = document.querySelector('#apellidos').value;
    const edad = document.querySelector('#boleto').value
    const origen_vuelo = document.querySelector('#origen').value;
    const destino_vuelo = document.querySelector('#destino').value;
    const tipo_viaje = document.querySelector('#viaje').value; 
    const asiento_reservado = asiento_seleccionado.id

    const tabla = document.getElementById('miTabla');
    const nuevaFila = document.createElement('tr');

    const celdaNombre = document.createElement('td');
    celdaNombre.textContent = nombre;
    nuevaFila.appendChild(celdaNombre);

    const celdaApellido = document.createElement('td');
    celdaApellido.textContent = apellido;
    nuevaFila.appendChild(celdaApellido);

    if (edad === 'Adulto (desde 13 años)'){
        const celdaEdad = document.createElement('td');
        celdaEdad.textContent = "13+=";
        nuevaFila.appendChild(celdaEdad);
    } else if (edad === 'Niños (3-12 años)'){
        const celdaEdad = document.createElement('td');
        celdaEdad.textContent = "(3-12 years)";
        nuevaFila.appendChild(celdaEdad);
    } else {
        const celdaEdad = document.createElement('td');
        celdaEdad.textContent = "0-2 years";
        nuevaFila.appendChild(celdaEdad);
    }
    
    const celdaOrigen = document.createElement('td');
    celdaOrigen.textContent = origen_vuelo;
    nuevaFila.appendChild(celdaOrigen);

    const celdaDestino = document.createElement('td');
    celdaDestino.textContent = destino_vuelo;
    nuevaFila.appendChild(celdaDestino);

    const celdaViaje = document.createElement('td');
    celdaViaje.textContent = tipo_viaje;
    nuevaFila.appendChild(celdaViaje);

    const celdaAsiento = document.createElement('td');
    celdaAsiento.textContent = asiento_reservado;
    nuevaFila.appendChild(celdaAsiento);


    tabla.appendChild(nuevaFila);
}


function vaciar_formulario_main() {

    const forms = document.querySelectorAll(".formulario")

    // Vaciar el formulario
    forms.forEach(formulario => {
        formulario.reset();
      });
}


const selectorPais = document.getElementById('telefonito');
  selectorPais.addEventListener('change', mostrarCodigoNumerico);

  function mostrarCodigoNumerico() {
    const opcionSeleccionada = selectorPais.options[selectorPais.selectedIndex];
    const codigoNumerico = opcionSeleccionada.value;
    selectorPais.value = codigoNumerico;
  }


*/


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
    const asiento = document.getElementById('asiento_reservado').textContent;
    if (nombre && asiento) {
        let tabla = document.getElementById('miTabla').insertRow();
        let col1 = tabla.insertCell(0);
        let col2 = tabla.insertCell(1);
        col1.innerHTML = nombre;
        col2.innerHTML = asiento;
        alert('Registro agregado');
    } else {
        alert('Por favor, complete todos los campos.');
    }
    
}




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