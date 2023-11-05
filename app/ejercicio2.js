const sumar = ()=>{
    let numero1 = parseInt(document.getElementById('numero1').value) 
    let numero2 = parseInt(document.getElementById('numero2').value)
    let suma = numero1 + numero2
    document.getElementById('resultado').value = suma
}

const restar = ()=>{
    let numero1 = parseInt(document.getElementById('numero1').value) 
    let numero2 = parseInt(document.getElementById('numero2').value)
    let resta = numero1 - numero2
    document.getElementById('resultado').value = resta
}

const multiplicar = ()=>{
    let numero1 = parseInt(document.getElementById('numero1').value) 
    let numero2 = parseInt(document.getElementById('numero2').value)
    let producto = numero1 * numero2
    document.getElementById('resultado').value = producto
}

const dividir = ()=>{
    let numero1 = parseInt(document.getElementById('numero1').value) 
    let numero2 = parseInt(document.getElementById('numero2').value)
    let division = numero1 / numero2
    if (numero2 == 0) {
        document.getElementById('resultado').value = 0
    }else{
        document.getElementById('resultado').value = division
    }
}


