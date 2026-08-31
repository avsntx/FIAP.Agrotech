    function mostrarPagina(event, id, linkClicado) {
      event.preventDefault();

      var paginas = document.querySelectorAll('.pagina');
      paginas.forEach(function(pagina) {
        pagina.classList.remove('ativa');
      });

      document.getElementById(id).classList.add('ativa');

      var links = document.querySelectorAll('.navbar .nav-link');
      links.forEach(function(link) {
        link.classList.remove('active');
      });

      linkClicado.classList.add('active');
    }

    function validarNomeCompleto(valor) {
      if (valor.trim() === '') return 'O nome não pode ficar em branco.';
      var partes = valor.trim().split(/\s+/);
      if (partes.length < 2) return 'Informe o nome e o sobrenome.';
      if (partes[0].length < 2) return 'O nome deve ter ao menos 2 letras.';
      if (partes[1].length < 2) return 'O sobrenome deve ter ao menos 2 letras.';
      return null;
    }

    function validarEmailFormato(valor) {
      if (valor.trim() === '') return 'O e-mail não pode ficar em branco.';
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(valor)) return 'Informe um e-mail válido.';
      return null;
    }

    function mostrarErro(campoId, erroId, mensagem) {
      document.getElementById(campoId).classList.add('campo-invalido');
      var span = document.getElementById(erroId);
      span.textContent = mensagem;
      span.classList.add('visivel');
    }

    function limparErro(campoId, erroId) {
      document.getElementById(campoId).classList.remove('campo-invalido');
      document.getElementById(erroId).classList.remove('visivel');
    }

    document.getElementById('mensagem').addEventListener('input', function () {
      document.getElementById('contadorMensagem').textContent = this.value.length;
    });

    document.getElementById('formContato').addEventListener('submit', function (event) {
      event.preventDefault();
      var valido = true;

      var erroNome = validarNomeCompleto(document.getElementById('nome').value);
      if (erroNome) { mostrarErro('nome', 'erroNome', erroNome); valido = false; }
      else { limparErro('nome', 'erroNome'); }

      var erroEmail = validarEmailFormato(document.getElementById('email').value);
      if (erroEmail) { mostrarErro('email', 'erroEmail', erroEmail); valido = false; }
      else { limparErro('email', 'erroEmail'); }

      var assunto = document.getElementById('assunto').value;
      if (assunto === '') { mostrarErro('assunto', 'erroAssunto', 'Selecione um assunto.'); valido = false; }
      else { limparErro('assunto', 'erroAssunto'); }

      var mensagem = document.getElementById('mensagem').value;
      if (mensagem.trim() === '') { mostrarErro('mensagem', 'erroMensagem', 'A mensagem não pode ficar em branco.'); valido = false; }
      else { limparErro('mensagem', 'erroMensagem'); }

      if (valido) {
        this.reset();
        document.getElementById('contadorMensagem').textContent = '0';
        bootstrap.Modal.getInstance(document.getElementById('contatoModal')).hide();
      }
    });

    document.getElementById('formCriarConta').addEventListener('submit', function (event) {
      event.preventDefault();
      var valido = true;

      var erroNome = validarNomeCompleto(document.getElementById('nomeConta').value);
      if (erroNome) { mostrarErro('nomeConta', 'erroNomeConta', erroNome); valido = false; }
      else { limparErro('nomeConta', 'erroNomeConta'); }

      var erroEmail = validarEmailFormato(document.getElementById('emailConta').value);
      if (erroEmail) { mostrarErro('emailConta', 'erroEmailConta', erroEmail); valido = false; }
      else { limparErro('emailConta', 'erroEmailConta'); }

      var senha = document.getElementById('senhaConta').value;
      if (senha.trim() === '') { mostrarErro('senhaConta', 'erroSenhaConta', 'A senha não pode ficar em branco.'); valido = false; }
      else if (senha.length < 6) { mostrarErro('senhaConta', 'erroSenhaConta', 'A senha deve ter ao menos 6 caracteres.'); valido = false; }
      else { limparErro('senhaConta', 'erroSenhaConta'); }

      var tipo = document.getElementById('tipoConta').value;
      if (tipo === '') { mostrarErro('tipoConta', 'erroTipoConta', 'Selecione o tipo de perfil.'); valido = false; }
      else { limparErro('tipoConta', 'erroTipoConta'); }

      if (valido) {
        this.reset();
        bootstrap.Modal.getInstance(document.getElementById('criarContaModal')).hide();
      }
    });