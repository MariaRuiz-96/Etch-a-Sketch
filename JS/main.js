document.addEventListener("DOMContentLoaded", function(){
    

    function numCuadritos (){
        let pregunta

        do{
            pregunta = prompt("¿Cuántos cuadritos deseas en la línea? Max:100", 0);
            pregunta= parseInt(pregunta)
            if(isNaN(pregunta) || pregunta > 100){
                alert("Por favor, ingresa un número entero válido y que sea menor o igual a 100.")
            }
        } while (isNaN(pregunta) || pregunta > 100)

        return pregunta
    }

    function tamanoLado (cuadritos){
        let ladoContenedor = 700

        if(cuadritos <= 100){
            let ladoCuadrito = ladoContenedor/cuadritos
            return ladoCuadrito
        }

    }

    function totalCuadritos(cuadritos){
        let total= cuadritos * cuadritos
        return total
    }
    

    function generarColorAleatorio() {
        const letras = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letras[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    //*Generarcuadritos

    function generarCuadricula(){
        let cuadritos = numCuadritos();
        let tamCuadrito = tamanoLado(cuadritos);
        let totalCua = totalCuadritos(cuadritos);
        const contenedor = document.querySelector("#content");

        contenedor.innerHTML = ''
        
        for(let i = 0; i < totalCua ; i++){
            
            const cuadrito = document.createElement("div");
            cuadrito.style.width = tamCuadrito.toString()+"px";
            cuadrito.style.height = tamCuadrito.toString()+"px";
            cuadrito.classList.add("cuadrito");

            cuadrito.addEventListener('mouseover', function() {
                cuadrito.style.backgroundColor = generarColorAleatorio();
            });

            contenedor.appendChild(cuadrito);
        }

    }

    //*Limpiar cuadritos

    function limpiarCuadritos() {
        const contenedor = document.querySelector("#content");
        const cuadritos = document.querySelectorAll(".cuadrito");
        cuadritos.forEach(cuadrito => {
            cuadrito.style.backgroundColor = 'white';
        }
    )}

    //* Funcionalidad de los botones

    const inicio = document.querySelector("#iniciar")
    inicio.addEventListener("click", ()=> {
        generarCuadricula()
    })
    
    const limpiar = document.querySelector("#limpiar")
    limpiar.addEventListener("click", ()=> {
        return limpiarCuadritos()
    })
})




/*     const contenedor = document.querySelector("#content")
    const cuadrito = document.createElement("div")

    contenedor.appendChild(cuadrito)
    cuadrito.textContent= "hola"
    cuadrito.classList.add("cuadrito") */
