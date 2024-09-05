// app-state.ts
export let currentUser: any = null;  // Variable exportable para almacenar los datos del usuario

export function setCurrentUser(user: any) {
  currentUser = user;
}

export function getCurrentUser() {
  return currentUser;
}
