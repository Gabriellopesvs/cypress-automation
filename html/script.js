document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastroForm');
    const cadastrarButton = document.getElementById('cadastrarButton');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nomeCompleto = document.getElementById('nomeCompleto').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const dataNascimento = document.getElementById('dataNascimento').value;
        const genero = document.querySelector('input[name="genero"]:checked').value;
        const linguagem = document.getElementById('linguagem').value;
        const senha = document.getElementById('senha').value;

        const mensagemHtml = `
            Nome Completo: ${nomeCompleto}<br>
            Email: ${email}<br>
            Número de Telefone: ${telefone}<br>
            Data de Nascimento: ${dataNascimento}<br>
            Gênero: ${genero}<br>
            Linguagem que Sabe: ${linguagem}<br>
            Senha: ${senha}<br>
            Cadastro realizado com sucesso!
        `;

        cadastrarButton.innerHTML = 'Cadastro finalizado!';

        form.reset();
    });
});
