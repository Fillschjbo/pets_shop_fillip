export function logoutFunction(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    document.location.reload();
}