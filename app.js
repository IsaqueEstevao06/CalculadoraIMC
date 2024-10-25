const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    // Obtem a altura e substitui vírgula por ponto
    const alturaInput = document.getElementById('altura').value.replace(',', '.');
    const pesoInput = document.getElementById('peso').value.replace(',', '.');

    // Verifica se a altura é inserida em centímetros e converte para metros, se necessário
    let altura;
    if (alturaInput.includes('.')) {
        altura = parseFloat(alturaInput); // já em metros
    } else {
        altura = parseFloat(alturaInput) / 100; // convertendo cm para metros
    }
    
    const peso = parseFloat(pesoInput);
    const resultado = document.getElementById('resultado');

    // Verifica se todos os campos estão preenchidos e se altura e peso são números válidos
    if (nome !== '' && !isNaN(altura) && altura > 0 && !isNaN(peso) && peso > 0) {
        // Calcula o IMC
        const imcValue = peso / (altura * altura);

        // Formata o resultado para uma casa decimal
        let classificacao = '';

        if (imcValue < 18.5) {
            classificacao = 'você está abaixo do peso';
        } else if (imcValue < 24.9) {
            classificacao = 'você está com o peso ideal. Parabéns!';
        } else if (imcValue < 29.9) {
            classificacao = 'você está em sobrepeso.';
        } else if (imcValue < 34.9) {
            classificacao = 'você está com obesidade grau I';
        } else if (imcValue < 39.9) {
            classificacao = 'você está com obesidade grau II';
        } else {
            classificacao = 'você está com obesidade grau III. Procure a ajuda de um profissional!';
        }

        // Exibe o resultado formatado
        resultado.textContent = `${nome}, o seu IMC é: ${imcValue.toFixed(1)} ${classificacao}`;
    } else {
        resultado.textContent = 'Todos os campos devem ser preenchidos!';
    }
}

calcular.addEventListener('click', imc);
