function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let masc = document.getElementById('masc')
        let fem = document.getElementById('fem')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (masc.checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 13) {
                // Criança
                img.setAttribute('src', 'fotobebem.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'fotojovemm.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'fotohomem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'fotoidosom.jpg')
            }
            
        } else if (fem.checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'fotobebef.jpg')
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 50) {
                // Adulto
            } else {
                // Idoso
            }
        }
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}