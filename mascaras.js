
       function mascaraTelefone(input) {
            let valor = input.value.replace(/\D/g, ""); // Remove tudo que não é número
            valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2"); // Coloca parênteses nos dois primeiros dígitos
            valor = valor.replace(/(\d{5})(\d)/, "$1-$2"); // Coloca o hífen entre o quinto e o sexto dígito
            input.value = valor;
        }
        function mascaraCPF(input) {
            let valor = input.value.replace(/\D/g, ""); // Remove tudo que não é número
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2"); // Coloca o primeiro ponto
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2"); // Coloca o segundo ponto
            valor = valor.replace(/(\d{3})(\d{2})$/, "$1-$2"); // Coloca o hífen antes dos dois últimos dígitos
            input.value = valor;
 
        }
       
        function mascaraConta(input) {
            let valor = input.value.replace(/\D/g, ""); // Remove tudo que não é número
            valor = valor.replace(/(\d{6})(\d)/, "$1-$2"); // Coloca o hífen após o sexto dígito
            input.value = valor;
        }