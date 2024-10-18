function calcularFuerza() {
    const masa = parseFloat(document.getElementById('masa').value); // Leer la masa en gramos
    const aceleracion = parseFloat(document.getElementById('aceleracion').value);
    const fuerza = (masa / 1000) * aceleracion; // Convertir gramos a kilogramos y calcular fuerza
    document.getElementById('resultado').innerText = `Fuerza: ${fuerza.toFixed(2)} N`;
}
