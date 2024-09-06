export let currentBilletes: any = null;  // Variable exportable para almacenar los datos del usuario

export function setBilletes(vector : any) {
  currentBilletes = vector;
}

export function getBilletes() {
  return currentBilletes;
}