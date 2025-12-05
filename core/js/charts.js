// core/js/charts.js

window.EMSCharts = {
  renderGenderSplit(containerId, genderSplit) {
    const el = document.getElementById(containerId);
    if (!el || !genderSplit) return;

    const total = (genderSplit.male || 0) + (genderSplit.female || 0);
    const malePct = total ? Math.round((genderSplit.male / total) * 100) : 0;
    const femalePct = total ? Math.round((genderSplit.female / total) * 100) : 0;

    el.innerHTML = `
      <strong>Geschlechterverteilung</strong><br>
      ${malePct}% männlich (${genderSplit.male})<br>
      ${femalePct}% weiblich (${genderSplit.female})
    `;
  },

  renderCountryList(containerId, countries) {
    const el = document.getElementById(containerId);
    if (!el || !countries) return;

    const list = document.createElement("ul");
    list.style.listStyle = "none";
    list.style.paddingLeft = "0";
    countries.forEach(c => {
      const li = document.createElement("li");
      li.textContent = `${c.name} (${c.code}): ${c.count}`;
      list.appendChild(li);
    });

    el.innerHTML = "<strong>Herkunft (Top Länder)</strong>";
    el.appendChild(list);
  }
};
