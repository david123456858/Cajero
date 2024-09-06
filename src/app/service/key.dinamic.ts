export let currentKey: any = null;  // Variable exportable para almacenar los datos del usuario

export function setKey(user: any) {
  currentKey = user;
}

export function getKey() {
  return currentKey;
}