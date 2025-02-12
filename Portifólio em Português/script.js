const mensagem = "Olá! Fiquei interessado em seus serviços!";
const mensagemCodificada = encodeURIComponent(mensagem);
const link = `https://www.instagram.com/direct/?text=${mensagemCodificada}`;

console.log(link);
// Saída: https://www.instagram.com/direct/?text=Ol%C3%A1%2C%20como%20posso%20ajudar%3F