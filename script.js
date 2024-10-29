// script.js

function calcularTabela() {
    const metaMensal = parseFloat(document.getElementById("meta-mensal").value);
    const tabelaResultados = document.getElementById("tabela-resultados");

    if (isNaN(metaMensal) || metaMensal <= 0) {
        tabelaResultados.querySelector("tbody").innerHTML = "<tr><td colspan='2' style='text-align: center;'>Por favor, insira uma meta válida.</td></tr>";
        return;
    }

    const produtos = {
        "1,5L": 2.631578947,
        "Água 12": 1.789473684,
        "Bombona": 1.461988304,
        "Caixa 24": 2.000000000,
        "Caixa 36": 3.000000000,
        "Concentrado": 3.508771930,
        "Energetico 2L": 3.508771930,
        "Energetico Lata": 0.471929825,
        "Ginseng": 1.754385965,
        "Pet 250": 0.877192982
    };

    const tbody = tabelaResultados.querySelector("tbody");
    tbody.innerHTML = "";

    
    for (const produto in produtos) {
        const caixaUnit = produtos[produto];
        const caixaFisica = Math.round(metaMensal / caixaUnit);

        const row = document.createElement("tr");
        row.innerHTML = `
            <td style="text-align: center;">${produto}</td>
            <td style="text-align: center;">${caixaFisica}</td>
        `;
        tbody.appendChild(row);
    }
}
