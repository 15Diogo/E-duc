
        async function gerarPDF() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            // Captura a imagem do cabeçalho
            const img = await html2canvas(document.querySelector('#formulario'));
            const imgData = img.toDataURL('image/png');

            // Adiciona a imagem ao PDF
            doc.addImage(imgData, 'PNG', 10, 10, 190, 0); // Ajuste as coordenadas e tamanho conforme necessário

            // Adiciona o título do relatório
            doc.setFontSize(16);
            doc.text("Relatório de Viagem", 105, 30, { align: 'center' });

            // Captura os dados do formulário
            var nome = document.getElementById('nome').value;
            var cpf = document.getElementById('cpf').value;
            var telefone = document.getElementById('telefone').value;
            var email = document.getElementById('email').value;
            var cargo = document.getElementById('cargo').value;
            var motivo = document.getElementById('motivo').options[document.getElementById('motivo').selectedIndex].text;
            var hora_saida = document.getElementById('hora_saida').value;
            var hora_retorno = document.getElementById('hora_retorno').value;
            var observacoes = document.getElementById('observacoes').value;

            // Adiciona a tabela com os dados
            doc.autoTable({
                startY: 50,
                head: [['Campo', 'Informação']],
                body: [
                    ['Nome Completo', nome],
                    ['CPF', cpf],
                    ['Telefone', telefone],
                    ['Email', email],
                    ['Cargo/Função', cargo],
                    ['Motivo da Viagem', motivo],
                    ['Hora de Saída', hora_saida],
                    ['Hora de Retorno', hora_retorno],
                    ['Observações', observacoes]
                ],
                theme: 'grid',
                headStyles: { fillColor: [100, 149, 237] },
                margin: { top: 20 }
            });

            // Assinaturas no final do documento
            const finalY = doc.lastAutoTable.finalY || 100; 
            doc.text('ASSINATURA DO SERVIDOR(A):', 20, finalY + 40);
            doc.text('___________________________________', 20, finalY + 60);
            doc.text('ASSINATURA DO RESPONSÁVEL PELO DEPARTAMENTO:', 20, finalY + 70);
            doc.text('___________________________________', 20, finalY + 90);

            // Salva o documento PDF
            doc.save('relatorio_viagem.pdf');
        }
   
