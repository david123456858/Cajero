export let currentMonto: any = null;  // Variable exportable para almacenar los datos del usuario

export function setCurrentMonto(monto: any) {
  currentMonto = monto;
}

export function getCurrentMonto() {
  return currentMonto;
}