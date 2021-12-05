// ==== CUADRADO ==== //
    //Asignando valor de los lados del cuadrado
    //Calculando Perímetro del Cuadrado
    function perimetroCuadrado(ladoCuadrado){
        return ladoCuadrado * 4
    };

    //Calculando área del Cuadrado
    function areaCuadrado(ladoCuadrado){
        return ladoCuadrado ** 2; //usamos metodo Exponencial de ECMAScript6
    }

    function obtenerPerimetroCuadrado(){
        const inputLadoCuadrado = document.getElementById('inputLadoCuadrado');
        const valorLado = inputLadoCuadrado.value;
        alert (perimetroCuadrado(valorLado));
    }

    function obtenerAreaCuadrado(){
        const inputLadoCuadrado = document.getElementById('inputLadoCuadrado');
        const valorLado = inputLadoCuadrado.value;
        alert(areaCuadrado(valorLado));
    }


// ==== TRIANGULO ==== //
    //Calculando Perímetro del Triángulo
    function perimetroTriangulo(lado1,lado2,base){
        return Number(lado1) + Number(lado2) + Number(base);
    };

    //Calculando área del Triángulo
    function areaTriangulo(base,altura){
        return (base * altura) / 2;
    };

    //Calculando altura del Triángulo
    function alturaTriangulo(lado1,base){
        const altura = Math.sqrt((lado1 ** 2) - ((base/2) ** 2));
        return altura;
    };

    function obtenerPerimetroTriangulo(){
        const lado1 = document.getElementById('inputLado1').value;
        const lado2 = document.getElementById('inputLado2').value;
        const base = document.getElementById('inputBase').value;

        alert(perimetroTriangulo(lado1,lado2,base));
    }
   
    function obtenerAreaTriangulo(){
        const lado1 = document.getElementById('inputLado1').value;
        const base = document.getElementById('inputBase').value;
        const altura = alturaTriangulo(lado1,base);

        alert(areaTriangulo(base,altura));
    }

    function obtenerAlturaTriangulo(){
        const lado1 = document.getElementById('inputLado1').value;
        const base = document.getElementById('inputBase').value;
        const altura = alturaTriangulo(lado1,base);

        alert(altura);
    }

// ==== CIRCULO ==== //
    //Calculando diámetro
    function diametroCirculo(radioCirculo){
        return radioCirculo * 2;
    };

    //Calculando perímetro
    function perimetroCirculo(radioCirculo){
        const diametro = diametroCirculo(radioCirculo);
        return diametro * Math.PI;
    };

    //Calculando área
    function areaCirculo(radioCirculo){
        return (radioCirculo ** 2) * Math.PI;
    };

    function obtenerAreaCirculo(){
        const radio = document.getElementById('inputRadioCirculo').value;
        
        alert(areaCirculo(radio));
    }

    function obtenerPerimetroCirculo(){
        const radio = document.getElementById('inputRadioCirculo').value;
        
        alert(perimetroCirculo(radio));
    }