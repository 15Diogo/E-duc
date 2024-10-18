
    async function carregarEstados() {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
            const estados = await response.json();
            const estadoSelect = document.getElementById('estado');

            estados.forEach(estado => {
                const option = document.createElement('option');
                option.value = estado.id;
                option.textContent = estado.nome;
                estadoSelect.appendChild(option);
            });
        }

        async function atualizarCidades() {
            const estadoSelect = document.getElementById('estado');
            const cidadeSelect = document.getElementById('cidade');
            const estadoId = estadoSelect.value;

            cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>';

            if (estadoId) {
                const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`);
                const cidades = await response.json();

                cidades.forEach(cidade => {
                    const option = document.createElement('option');
                    option.value = cidade.id;
                    option.textContent = cidade.nome;
                    cidadeSelect.appendChild(option);
                });
                // Carregar estados ao carregar a página
        window.onload = carregarEstados;
            }
        }

        function gerarPDF() {
            // Carregar o PDF do papel timbrado
            const url = 'url_do_seu_papel_timbrado.pdf'; // Coloque o caminho correto aqui
            const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

            // Carregar o documento PDF existente
            const pdfDoc = await PDFDocument.load(existingPdfBytes);

            // Pegar a primeira página do PDF timbrado
            const page = pdfDoc.getPage(0);

            // Capturar os valores do formulário
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

            // Definir o estilo e adicionar o texto sobre o PDF
            const fontSize = 10;

            page.drawText(`NOME COMPLETO: ${nome}`, { x: 50, y: 700, size: fontSize });
            page.drawText(`CPF: ${cpf}`, { x: 300, y: 700, size: fontSize });
            page.drawText(`CARGO/FUNÇÃO: ${cargo}`, { x: 50, y: 680, size: fontSize });
            page.drawText(`MATRÍCULA: ${matricula}`, { x: 300, y: 680, size: fontSize });
            page.drawText(`TELEFONE: ${telefone}`, { x: 50, y: 660, size: fontSize });
            page.drawText(`LOTAÇÃO: ${lotacao}`, { x: 300, y: 660, size: fontSize });
            page.drawText(`AGÊNCIA: ${agencia}`, { x: 50, y: 640, size: fontSize });
            page.drawText(`CONTA: ${conta}`, { x: 300, y: 640, size: fontSize });
            page.drawText(`MOTIVOS DA VIAGEM: ${motivos}`, { x: 50, y: 620, size: fontSize, maxWidth: 500 });
            page.drawText(`CIDADE: ${cidade}`, { x: 50, y: 600, size: fontSize });
            page.drawText(`DATA DE SAÍDA: ${data_saida}`, { x: 300, y: 600, size: fontSize });
            page.drawText(`DATA DE RETORNO: ${data_retorno}`, { x: 50, y: 580, size: fontSize });
            page.drawText(`HORA DE SAÍDA: ${hora_saida}`, { x: 300, y: 580, size: fontSize });
            page.drawText(`HORA DE RETORNO: ${hora_retorno}`, { x: 50, y: 560, size: fontSize });
            page.drawText(`DESCRIÇÃO: ${descricao}`, { x: 50, y: 540, size: fontSize, maxWidth: 500 });

            // Texto da data final alinhado à direita
            const pageWidth = page.getWidth();
            page.drawText(dataTexto, { x: pageWidth - 100, y: 100, size: fontSize });

            // Assinaturas
            page.drawText("ASSINATURA DO SERVIDOR(A):", { x: pageWidth / 2 - 100, y: 80, size: fontSize });
            page.drawText("___________________________________", { x: pageWidth / 2 - 100, y: 60, size: fontSize });

            page.drawText("ASSINATURA DO RESPONSÁVEL PELO DEPARTAMENTO:", { x: pageWidth / 2 - 100, y: 40, size: fontSize });
            page.drawText("___________________________________", { x: pageWidth / 2 - 100, y: 20, size: fontSize });

            // Finalizar o documento PDF
            const pdfBytes = await pdfDoc.save();

            // Download do PDF com o papel timbrado e texto sobreposto
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'relatorio_viagem_com_timbre.pdf';
            link.click();
        }

        
