function calcular() {
    var n1 = document.getElementById("n1").value
    var n2 = document.getElementById("n2").value
    var n3 = document.getElementById("n3").value

    var media = (Number(n1) + Number(n2) + Number(n3)) / 3

    alert(`A média dos valores é:  ${media.toFixed(2)}`)

    console.log(`A média dos valores é: ${media}`)
}

