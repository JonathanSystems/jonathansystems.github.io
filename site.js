const energy = document.querySelector('#energy');
const efficiency = document.querySelector('#efficiency');
const energyValue = document.querySelector('#energy-value');
const efficiencyValue = document.querySelector('#efficiency-value');
const mass = document.querySelector('#mass');
const specific = document.querySelector('#specific');
const specificMj = document.querySelector('#specific-mj');
const hydrogenLhv = 33.33;

function setReadout(output, value, unit) {
  const unitLabel = document.createElement('small');
  unitLabel.textContent = unit;
  output.replaceChildren(value + ' ', unitLabel);
}

function updateModel() {
  const inputKwh = energy.valueAsNumber;
  const efficiencyRatio = efficiency.valueAsNumber / 100;
  const kwhPerKg = hydrogenLhv / efficiencyRatio;

  energyValue.textContent = inputKwh + ' kWh';
  efficiencyValue.textContent = efficiency.value + '%';
  energy.setAttribute('aria-valuetext', inputKwh + ' kilowatt-hours');
  efficiency.setAttribute('aria-valuetext', efficiency.value + ' percent');
  setReadout(mass, (inputKwh / kwhPerKg).toFixed(2), 'kg');
  setReadout(specific, kwhPerKg.toFixed(1), 'kWh/kg');
  specificMj.textContent = (kwhPerKg * 3.6).toFixed(1) + ' MJ/kg';
}

energy.addEventListener('input', updateModel);
efficiency.addEventListener('input', updateModel);
updateModel();
