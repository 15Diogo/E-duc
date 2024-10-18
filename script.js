         
     

function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Captura os valores dos campos e converte para maiúsculas
    const nome = document.getElementById('nome').value.toUpperCase();
    const cpf = document.getElementById('cpf').value.toUpperCase();
    const cargo = document.getElementById('cargo').value.toUpperCase();
    const matricula = document.getElementById('matricula').value.toUpperCase();
    const telefone = document.getElementById('telefone').value.toUpperCase();
    const lotacao = document.getElementById('lotacao').value.toUpperCase();
    const agencia = document.getElementById('agencia').value.toUpperCase();
    const conta = document.getElementById('conta').value.toUpperCase();
    const motivos = document.getElementById('motivos').value.toUpperCase();
    const estadoElement = document.getElementById('estado');
    const cidadeElement = document.getElementById('cidade');
    const estado = estadoElement.options[estadoElement.selectedIndex].text.toUpperCase();
    const cidade = cidadeElement.options[cidadeElement.selectedIndex].text.toUpperCase();
    const data_saida = document.getElementById('data_saida').value.toUpperCase();
    const data_retorno = document.getElementById('data_retorno').value.toUpperCase();
    const hora_saida = document.getElementById('hora_saida').value.toUpperCase();
    const hora_retorno = document.getElementById('hora_retorno').value.toUpperCase();
    const descricao = document.getElementById('descricao').value.toUpperCase();

    // Obter a data atual para a criação do documento
    const hoje = new Date();
    const dia = hoje.getDate();
    const mes = hoje.toLocaleString('pt-BR', { month: 'long' }).toUpperCase();
    const ano = hoje.getFullYear();
    const dataTexto = `NOVA ROMA, ${dia} DE ${mes} DE ${ano}`;

    // Estilo do texto e caixinhas
    doc.setFontSize(8); // Fonte menor para caber mais informações
    const marginLeft = 10;
    const marginTop = 10;
    const boxWidth = 80; // Largura das caixas ajustada
    const boxHeight = 8; // Altura das caixas
    const lineSpacing = 12; // Espaçamento entre linhas
    let y = marginTop;

    // Função para desenhar caixinhas
    function drawBox(x, y, width, height, text) {
        doc.rect(x, y, width, height); // Desenha a caixa
        doc.text(text, x + 2, y + 6); // Adiciona o texto dentro da caixa
    }

    // Adicionar o conteúdo ao PDF
    // Linha 1
    drawBox(marginLeft, y, boxWidth, boxHeight, `NOME COMPLETO: ${nome}`);
    drawBox(marginLeft + boxWidth + 10, y, boxWidth, boxHeight, `CPF: ${cpf}`);
    y += boxHeight + lineSpacing; // Espaço entre linhas

    // Linha 2
    drawBox(marginLeft, y, boxWidth, boxHeight, `CARGO/FUNÇÃO: ${cargo}`);
    drawBox(marginLeft + boxWidth + 10, y, boxWidth, boxHeight, `MATRÍCULA: ${matricula}`);
    y += boxHeight + lineSpacing; // Espaço entre linhas

    // Linha 3
    drawBox(marginLeft, y, boxWidth, boxHeight, `TELEFONE: ${telefone}`);
    drawBox(marginLeft + boxWidth + 10, y, boxWidth, boxHeight, `LOTAÇÃO: ${lotacao}`);
    y += boxHeight + lineSpacing; // Espaço entre linhas

    // Linha 4
    drawBox(marginLeft, y, boxWidth, boxHeight, `AGÊNCIA: ${agencia}`);
    drawBox(marginLeft + boxWidth + 10, y, boxWidth, boxHeight, `CONTA: ${conta}`);
    y += boxHeight + lineSpacing; // Espaço para o título "DADOS DA VIAGEM"

    // Título e Motivos da Viagem
    doc.setFontSize(12);
    doc.text('DADOS DA VIAGEM', marginLeft, y);
    y += lineSpacing;
    doc.setFontSize(10);
    doc.text(`MOTIVOS DA VIAGEM:`, marginLeft, y);
    y += lineSpacing;
    // Adiciona caixa para motivos da viagem
    doc.rect(marginLeft, y, 180, 20); // Caixa maior para texto
    doc.text(motivos, marginLeft + 2, y + 10, { maxWidth: 176 }); // Adiciona texto dentro da caixa
    y += 30; // Espaço para os próximos campos

    // Linha 5
    drawBox(marginLeft, y, boxWidth, boxHeight, `CIDADE: ${cidade}`);
    drawBox(marginLeft + boxWidth + 10, y, boxWidth, boxHeight, `DATA DE SAÍDA: ${data_saida}`);
    drawBox(marginLeft + 2 * (boxWidth + 10), y, boxWidth, boxHeight, `DATA DE RETORNO: ${data_retorno}`);
    y += boxHeight + lineSpacing; // Espaço para a próxima linha

    // Linha 6
    drawBox(marginLeft, y, boxWidth, boxHeight, `HORA DE SAÍDA: ${hora_saida}`);
    drawBox(marginLeft + boxWidth + 10, y, boxWidth, boxHeight, `HORA DE RETORNO: ${hora_retorno}`);
    y += 30; // Espaço para a descrição

    // Descrição
    doc.text(`DESCRIÇÃO:`, marginLeft, y);
    y += lineSpacing;
    // Adiciona caixa para descrição
    doc.rect(marginLeft, y, 180, 30); // Caixa maior para texto
    doc.text(descricao, marginLeft + 2, y + 10, { maxWidth: 176 });

    // Texto da data final alinhado à direita
    const pageWidth = doc.internal.pageSize.getWidth();
    const textWidth = doc.getTextWidth(dataTexto);
    doc.text(dataTexto, pageWidth - textWidth - 10, y + 50);

    // Assinaturas
    const assinaturaX = pageWidth / 2;
    doc.text("ASSINATURA DO SERVIDOR(A):", assinaturaX, y + 70, { align: 'center' });
    doc.line(assinaturaX - 40, y + 85, assinaturaX + 40, y + 85); // Linha para assinatura

    doc.text("ASSINATURA DO RESPONSÁVEL PELO DEPARTAMENTO:", assinaturaX, y + 100, { align: 'center' });
    doc.line(assinaturaX - 40, y + 115, assinaturaX + 40, y + 115); // Linha para assinatura

    // Deferimento/Indeferimento
    doc.text("DEFERIDO ( ) INDEFERIDO( )", 105, y + 130, { align: 'right' });

    // Salvar o PDF
    doc.save('relatorio_viagem.pdf');
}
