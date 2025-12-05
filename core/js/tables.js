// core/js/tables.js

window.EMSTables = {
  renderResultsTable(containerId, results) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    thead.innerHTML = `
      <tr>
        <th>Platz</th>
        <th>Startnr.</th>
        <th>Name</th>
        <th>Land</th>
        <th>Geschlecht</th>
        <th>AK</th>
        <th>Zeit</th>
      </tr>`;
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    results.forEach(r => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${r.rank}</td>
        <td>${r.bib}</td>
        <td>${r.name}</td>
        <td>${r.country}</td>
        <td>${r.gender}</td>
        <td>${r.ageGroup}</td>
        <td>${r.time}</td>
      `;
      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    container.appendChild(table);
  }
};
