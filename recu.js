let coefA = document.querySelector("#coefA");
let coefB = document.querySelector("#coefB");
let coefC = document.querySelector("#coefC");
let evaluateButton = document.querySelector(".btn-primary");
let resultDiv = document.querySelector("#result");

let datos = [];

let tabla = (datos) => {
    let msg = `<table class='table table-bordered table-info'>`;
    msg += `<thead><tr><th>No</th>`;
    msg += `<th>a</th>`;
    msg += `<th>b</th>`;
    msg += `<th>c</th>`;
    msg += `<th>x1</th>`;
    msg += `<th>x2</th>`;
    msg += "</tr></thead>";
    msg += "<tbody>";
    let indice = 0;
    while (indice < datos.length) {
        msg += "<tr>";
        msg += `<td>${indice + 1}</td>`;
        msg += `<td>${datos[indice].a}</td>`;
        msg += `<td>${datos[indice].b}</td>`;
        msg += `<td>${datos[indice].c}</td>`;
        msg += `<td>${datos[indice].x1}</td>`;
        msg += `<td>${datos[indice].x2}</td>`;
        msg += "</tr>";
        indice++;
    }
    msg += "</tbody>";
    msg += "</table>";

    // Botón de Regresar
    msg += `<button class='btn btn-primary mt-3' onclick='limpiarFormulario()'>Regresar</button>`;

    return msg;
}

let evaluateEquation = () => {
    let a = parseFloat(coefA.value);
    let b = parseFloat(coefB.value);
    let c = parseFloat(coefC.value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultDiv.innerHTML = "<p class='text-danger'>Rellene todos los campos solicitados</p>";
        return;
    }

    let discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant < 0) {
        // Mostrar alerta y no generar tabla
        alert("La ecuación cuenta con raiz negativa");
        return;
    }

    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    datos.push({ a: a, b: b, c: c, x1: x1, x2: x2 });

    resultDiv.innerHTML = tabla(datos);
}

// Función para limpiar el formulario
let limpiarFormulario = () => {
    coefA.value = "";
    coefB.value = "";
    coefC.value = "";
    resultDiv.innerHTML = "";
}

// Add event listener to the button
evaluateButton.addEventListener("click", evaluateEquation);
