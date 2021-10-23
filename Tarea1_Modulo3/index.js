let dolar_col = 3783.10
let dolar_mex = 20.25
let dolar_euro = 0.86
let dolar_libra = 0.72
let mex_dolar = 0.049
let mex_col = 186.81
let mex_euro = 0.042
let mex_libra = 0.036
let col_dolar = 0.00027
let col_mex = 0.0054
let col_euro = 0.00023
let col_libra = 0.00019
let euro_dolar = 1.16
let euro_mex = 23.57
let euro_col = 4400.60
let euro_libra = 0.84
let libra_dolar = 1.38
let libra_mex = 27.94
let libra_col = 5219.40
let libra_euro = 1.19
let resultado = 0
let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    calcular();
})
function calcular() {
    let cantidad = Number(document.getElementById("cantidad").value);
    let de = Number(document.getElementById("de").value)
    let a = Number(document.getElementById("a").value)
    let suma = de + a
    console.log("de" + de + "a" + a)
    switch (de) {
        case 1:
            if (de == 1 && a == 2) {
                resultado = cantidad * dolar_mex;
            }
            else if (de == 1 && a == 3) {
                resultado = cantidad * dolar_col;
            }
            else if (de == 1 && a == 4) {
                resultado = cantidad * dolar_euro;
            }
            else if (de == 1 && a == 5) {
                resultado = cantidad * dolar_libra;
            }
            else{
                resultado = cantidad;
            }

            break;
            
        case 2:
            if (de == 2 && a == 1) {
                resultado = cantidad * mex_dolar;
            }
            else if (de == 2 && a == 3) {
                resultado = cantidad * mex_col;
            }
            else if (de == 2 && a == 4) {
                resultado = cantidad * mex_euro;
            }
            else if (de == 2 && a == 5) {
                resultado = cantidad * mex_libra;
            }
            else{
                resultado = cantidad;
            }

            break;
            
        case 3:
            if (de == 3 && a == 1) {
                resultado = cantidad * col_dolar;
            }
            else if (de == 3 && a == 2) {
                resultado = cantidad * col_mex;
            }
            else if (de == 3 && a == 4) {
                resultado = cantidad * col_euro;
            }
            else if (de == 3 && a == 5) {
                resultado = cantidad * col_libra;
            }
            else{
                resultado = cantidad;
            }

            break;
        case 4:
            if (de == 4 && a == 1) {
                resultado = cantidad * euro_dolar;
            }
            else if (de == 4 && a == 2) {
                resultado = cantidad * euro_mex;
            }
            else if (de == 4 && a == 3) {
                resultado = cantidad * euro_col;
            }
            else if (de == 4 && a == 5) {
                resultado = cantidad * euro_libra;
            }
            else{
                resultado = cantidad;
            }

            break;
        case 5:
            if (de == 5 && a == 1) {
                resultado = cantidad * libra_dolar;
            }
            else if (de == 5 && a == 2) {
                resultado = cantidad * libra_mex;
            }
            else if (de == 5 && a == 3) {
                resultado = cantidad * libra_col;
            }
            else if (de == 5 && a == 4) {
                resultado = cantidad * libra_euro;
            }

            else{
                resultado = cantidad;
            }
            break;
            
        default:
            console.log("aldfhlasdfhds", resultado)

            break;
    }
    console.log("", resultado)
    document.getElementById("Resultado").innerHTML = "" + resultado;
}