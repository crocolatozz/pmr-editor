async function loadParameter(operatorKey) {
  const statusInfo = document.getElementById('statusInfo');
  const badge = document.getElementById('totalCellBadge');

  if (!operatorKey) {
    if (statusInfo) statusInfo.textContent = 'Belum ada operator dipilih';
    if (badge) badge.textContent = '0 Cell';
    return;
  }

  currentOperatorKey = operatorKey;
  if (statusInfo) statusInfo.textContent = `Memuat data (${operatorKey})...`;

  try {
    const response = await fetch(`./data/${operatorKey}.json`);
    if (response.ok) {
      currentParameters = await response.json();
    } else {
      throw new Error("Gagal HTTP Fetch, gunakan embedded data");
    }
  } catch (error) {
    console.warn("Menggunakan Embedded Data Fallback:", error.message);
    currentParameters = EMBEDDED_DATA[operatorKey] || [];
  }

  const labelOp = operatorKey === 'operator1' ? 'Operator 1 (167 Tag)' : (operatorKey === 'operator2' ? 'Operator 2 (51 Tag)' : 'Operator 3 (45 Tag)');
  if (statusInfo) statusInfo.textContent = `Aktif: ${labelOp}`;
  if (badge) badge.textContent = `${currentParameters.length} Cell Fix`;

  renderHorizontalExcel(currentParameters);
}
