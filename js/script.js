const t_field_email=document.querySelector("#email");
const t_field_senha=document.querySelector("#senha");
const form_login=document.querySelector("#form_login")


const validEmail = 'usuario@example.com';
const validPassword = '123456';
 
// 1) função 1
function entrarSistema(e){
    // e.preventDefault();
 
    if (t_field_email.value === validEmail && t_field_senha.value === validPassword) {
        // Login bem-sucedido, armazena no localStorage
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'perfil.html';
    } else {
        // Exibe a mensagem de erro
        document.getElementById('error-message').textContent = 'Email ou senha incorretos';
    }
   
};
 
form_login.addEventListener("submit",entrarSistema);
 
if (localStorage.getItem('isLoggedIn')) {
    window.location.href = 'perfil.html';
}
 