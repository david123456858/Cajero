export let currentMonto: any = 0;  // Variable exportable para almacenar los datos del usuario
export let currentSelect: any = 0

export function setCurrentMonto(monto: any) {
  if( monto ===null){
    console.log('COMPAE MAL AHÍ')
  }
  currentMonto = monto;
}

export function getCurrentMonto() {
  return currentMonto;
}

export function setCurrentMontoSelect(monto: any) {
  if( monto ===null){
    console.log('COMPAE MAL AHÍ')
  }
  currentMonto = monto;
}

export function getCurrentMontoSelect() {
  return currentMonto;
}