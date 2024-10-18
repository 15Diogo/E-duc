async function gerarPDF() {

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Captura os dados do formulário
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const cargo = document.getElementById('cargo').value;
    const motivo = document.getElementById('motivo').options[document.getElementById('motivo').selectedIndex].text;
    const estado = document.getElementById('estado').options[document.getElementById('estado').selectedIndex].text;
    const cidade = document.getElementById('cidade').options[document.getElementById('cidade').selectedIndex].text;
    const hora_saida = document.getElementById('hora_saida').value;
    const hora_retorno = document.getElementById('hora_retorno').value;
    const observacoes = document.getElementById('observacoes').value;
    // Cria o PDF
    

    // Adiciona conteúdo ao PDF
    doc.setFontSize(16);
    doc.text('Relatório de Viagem', 20, 20);

    doc.setFontSize(12);
    doc.text(`Nome Completo: ${nome}`, 20, 40);
    doc.text(`CPF: ${cpf}`, 20, 50);
    doc.text(`Telefone: ${telefone}`, 20, 60);
    doc.text(`Email: ${email}`, 20, 70);
    doc.text(`Cargo/Função: ${cargo}`, 20, 80);
    doc.text(`Motivo da Viagem: ${motivo}`, 20, 90);
    doc.text(`Estado: ${estado}`, 20, 100);
    doc.text(`Cidade: ${cidade}`, 20, 110);
    doc.text(`Hora de Saída: ${hora_saida}`, 20, 120);
    doc.text(`Hora de Retorno: ${hora_retorno}`, 20, 130);
    doc.text(`Observações: ${observacoes}`, 20, 140);

    // Salva o PDF
    doc.save('relatorio_viagem.pdf');

    // Criar um novo documento PDF
    //const { PDFDocument, rgb } = PDFLib;
  //  const doc = await PDFDocument.create();

    // Adicionar uma página ao documento
    //const page = doc.addPage([595, 842]); // A4 size in points

    //const nome = document.getElementById('nome').value.toUpperCase();
    //const cpf = document.getElementById('cpf').value.toUpperCase();
    
    //const email = document.getElementById('email').value.toUpperCase();
    //const matricula = document.getElementById('matricula').value.toUpperCase();
    //const telefone = document.getElementById('telefone').value.toUpperCase();
    //const lotacao = document.getElementById('lotacao').value.toUpperCase();
    //const agencia = document.getElementById('agencia').value.toUpperCase();
    //const conta = document.getElementById('conta').value.toUpperCase();
   // const estadoElement = document.getElementById('estado');
    //const cidadeElement = document.getElementById('cidade');
    //const estado = estadoElement.options[estadoElement.selectedIndex].text.toUpperCase();
    //const cidade = cidadeElement.options[cidadeElement.selectedIndex].text.toUpperCase();
    //const data_saida = document.getElementById('data_saida').value.toUpperCase();
    //const data_retorno = document.getElementById('data_retorno').value.toUpperCase();
    //const hora_saida = document.getElementById('hora_saida').value.toUpperCase();
    //const hora_retorno = document.getElementById('hora_retorno').value.toUpperCase();
    //const descricao = document.getElementById('descricao').value.toUpperCase();

    // Obter a data atual para a criação do documento
    const hoje = new Date();
    const dia = hoje.getDate();
    const mes = hoje.toLocaleString('pt-BR', { month: 'long' }).toUpperCase();
    const ano = hoje.getFullYear();
    const dataTexto = `NOVA ROMA, ${dia} DE ${mes} DE ${ano}`;

}
