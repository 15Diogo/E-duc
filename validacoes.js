function gerarPDF() {
        //NÃO ESQUECER DE COLOCAR A 
    
        const logo = "data:image/png;base64,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"; // Altere para o caminho da sua imagem// Captura os dados do formulário


    const nome = capitalizarPrimeiraLetra(document.getElementById('nome').value);
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const cargo = capitalizarPrimeiraLetra(document.getElementById('cargo').value);
    const motivo = capitalizarPrimeiraLetra(document.getElementById('motivo').options[document.getElementById('motivo').selectedIndex].text);
    const estado = capitalizarPrimeiraLetra(document.getElementById('estado').options[document.getElementById('estado').selectedIndex].text);
    const cidade = capitalizarPrimeiraLetra(document.getElementById('cidade').options[document.getElementById('cidade').selectedIndex].text);
    const dataSaida = document.getElementById('dataSaida').value;
    const dataRetorno = document.getElementById('dataSetorno').value;
    const horaSaida = document.getElementById('horaSaida').value;
    const horaRetorno = document.getElementById('horaRetorno').value;
    const observacoes = document.getElementById('observacoes').value;

    // Obter a data atual para a criação do documento
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = hoje.toLocaleString('pt-BR', { month: 'long' }).toLowerCase();
    const ano = hoje.getFullYear();
    const dataTexto = `Nova Roma, ${dia} de ${mes} de ${ano}`;

    
   // Estrutura do documento
   const docDefinition = {
    content: [
        // Adiciona o logotipo ao PDF
        {
            image: logo,
            width: 200, // Altere o tamanho conforme necessário
            alignment: 'center',
            margin: [0, 0, 0, 10] // Margens em cima e embaixo
        },
        // Adiciona um retângulo de fundo para o cabeçalho
            {
                text: 'Relatório de Viagem',
                style: 'header',
                fillColor: '#f0f0f0', // Cor de fundo
                margin: [0, 10, 0, 10]
            },

            {
                text: 'Rodapé',
                style: 'footer',
                fillColor:'#00000',
                margin:[0,10,0,10]
            },
            // Sombras para cada campo
            {
                 text: `Nome Completo: ${nome}`,
                  style: 'subheader', 
                  fillColor: '#f9f9f9', 
                  margin: [0, 5, 0, 5] },
            { 
                text: `CPF: ${cpf}`,
                style: 'subheader',
                fillColor: '#f9f9f9', 
                margin: [0, 5, 0, 5] },
            { 
                text: `Telefone: ${telefone}`,
                style: 'subheader', 
                fillColor: '#f9f9f9', 
                margin: [0, 5, 0, 5] },
            { 
                text: `Email: ${email}`,
                 style: 'subheader', 
                 fillColor: '#f9f9f9', 
                 margin: [0, 5, 0, 5] },
            { 
                text: `Cargo/Função: ${cargo}`,
                style: 'subheader', fillColor: '#f9f9f9',
                margin: [0, 5, 0, 5] },
            { 
                text: `Motivo da Viagem: ${motivo}`,
                style: 'subheader',
                fillColor: '#f9f9f9',
                margin: [0, 5, 0, 5] },

            {
                text: `Estado: ${estado}`, 
                style: 'subheader', 
                fillColor: '#f9f9f9', 
                margin: [0, 5, 0, 5]
            },
            {
                text: `Cidade: ${cidade}`, 
                style: 'subheader', 
                fillColor: '#f9f9f9', 
                margin: [0, 5, 0, 5]
            },
            {
                text: `Data Saída: ${dataSaida}`, 
                style: 'subheader', 
                fillColor: '#f9f9f9', 
                margin: [0, 5, 0, 5]
            },
            {
                text: `Data Retorno: ${dataRetorno}`, 
                style: 'subheader', 
                fillColor: '#f9f9f9', 
                margin: [0, 5, 0, 5]
            },
            {
                text: `Hora de Saída: ${horaSaida}`, 
                style: 'subheader', 
                fillColor: '#f9f9f9', 
                margin: [0, 5, 0, 5]
            },
            {
                text: `Hora de Retorno: ${horaRetorno}`, 
                style: 'subheader', 
                fillColor: '#f9f9f9', 
                margin: [0, 5, 0, 5]
            },
            {
                text: `Observações: ${observacoes}`, 
                style: 'subheader', 
                fillColor: '#f9f9f9', 
                margin: [0, 5, 0, 5]
            },
            {
                text: dataTexto, 
                alignment: 'right', 
                margin: [0, 20, 0, 0]
            },
            
            { 
                text: dataTexto,
                alignment: 'right',
                margin: [0, 20, 0, 0] },

            //Assinaturas
            { 
                text: 'Assinatura: ______________________',
                 margin: [0, 40, 0, 0] },
            { 
                text: 'ASSINATURA DO SERVIDOR(A):',
                margin: [0, 10, 0, 0] },
            { text: '___________________________________',
                margin: [0, 5, 0, 10] },
            { text: 'ASSINATURA DO RESPONSÁVEL PELO DEPARTAMENTO:',
                margin: [0, 10, 0, 0] },
            { text: '___________________________________',
                margin: [0, 5, 0, 10] }
        ],


        styles: {
            header: {
                fontSize: 20,
                bold: true,
                alignment: 'center',
                margin: [0, 20, 0, 20]
            },
            subheader: { bold:true,
                fontSize: 12,
                margin: [0, 5, 0, 5]
            }

        },
        pageSize: 'A4',
        pageOrientation: 'portrait'
    };

    // Gera o PDF
    pdfMake.createPdf(docDefinition).download('relatorio_viagem.pdf');
}

// Função para capitalizar a primeira letra
function capitalizarPrimeiraLetra(str) {
    if (!str) return str; // Retorna a string original se estiver vazia
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}