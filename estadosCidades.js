// Função para carregar os estados do IBGE
function carregarEstados() {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(response => response.json())
        .then(estados => {
            const selectEstado = document.getElementById('estado');
            estados.sort((a, b) => a.nome.localeCompare(b.nome)); // Ordenar por nome

            estados.forEach(estado => {
                const option = document.createElement('option');
                option.value = estado.id;
                option.textContent = estado.nome;
                selectEstado.appendChild(option);
            });
        })
        .catch(error => console.error('Erro ao carregar estados:', error));
}

// Função para carregar as cidades com base no estado selecionado
function carregarCidades(estadoId) {
    const selectCidade = document.getElementById('cidade');
    selectCidade.innerHTML = '<option value="">Selecione uma cidade</option>'; // Limpar cidades anteriores

    if (estadoId) {
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`)
            .then(response => response.json())
            .then(cidades => {
                cidades.sort((a, b) => a.nome.localeCompare(b.nome)); // Ordenar por nome

                cidades.forEach(cidade => {
                    const option = document.createElement('option');
                    option.value = cidade.id;
                    option.textContent = cidade.nome;
                    selectCidade.appendChild(option);
                });
            })
            .catch(error => console.error('Erro ao carregar cidades:', error));
    }
}

// Carregar os estados ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    carregarEstados();

    // Adicionar evento de mudança para carregar cidades quando um estado for selecionado
    document.getElementById('estado').addEventListener('change', (event) => {
        carregarCidades(event.target.value);
    });
});
