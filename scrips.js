function runSimulation() {
    const efficiency = Math.floor(Math.random() * 30) + 10; // Random value between 10-30
    const result = document.getElementById("simulation-result");
    result.textContent = Simulasi: Inovasi berhasil meningkatkan efisiensi produksi sebesar ${efficiency}%!;
    result.style.padding = "1em";
    result.style.marginTop = "1em";
    result.style.backgroundColor = "#e0ffee";
    result.style.borderRadius = "5px";
}