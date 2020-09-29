# Recuperacao de senha

**RF** <!-- Requisitos Funcionais -->

- o usuario deve poder recuperar sua senha informando o seu e-mail;
- o usuario deve receber um e-mail com instruçoes de recuperacao de senha;
- o usuario deve poder resetar sua senha;

**RNF** <!-- Requisitos Não Funcionais -->

- utilizar mailtrap para testar envios em ambiente de dev;
- utilizar amazon ses para envios em producao;
- o envio de e-mails deve acontecer em segundo plano (background job);

**RN** <!-- Regras de Negócio -->

- o link enviado por e-mail para resetar senha deve expirar em 2h;
- o usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualizacao do perfil

**RF**

- o usuario deve poder atualizar seu nome, e-mail e senha;

**RN**

- o usuario nao pode alterar seu e-mail para um e-mail já utilizado;
- para atualizar sua senha, o usuario deve informar a senha antiga;
- para atualizar sua senha, o usuario precisa confirmar a nova senha;

# Painel do prestador

**RF**

- o usuario deve poder listar listar os seus agendamentos de um dia especifico;
- o prestador deve receber uma notificacao sempre que houver um novo agendamento;
- o prestador deve poder visualizar as notificacoes nao lidas;

**RNF**

- os agendamentos do prestador no dia devem ser armazenados em cache;
- as notificacoes do prestador devem ser armazenadas no MongoDB;
- as notificacoes do prestador devem ser enviados em tempo real utlizando Socket.io;

**RN**

- a notificacao deve ter um status de lida ou nao-lida para que o prestador possa controlar;

# Agendamento de servicos

**RF**

- o usuario deve poder listar todos os prestadores de serviço cadastrados;
- o usuario deve poder listar os dias de um mes com pelo menos um horario disponivel de um prestador;
- o usuario deve poder listar horarios disponiveis em um dia especifico de um prestador;
- o usuario deve poder realizar um novo agendamento com um prestador;

**RNF**

- a listagem de prestadores deve ser amazenada em cache;

**RN**

- cada agendamento deve durar 1h exatamente;
- os agendamentos devem estar disponiveis entre 08h as 18h (primeiro horario as 08h, ultimo as 17h)
- o usuario nao pode agendar em um horario ja ocupado;
- o usuario nao pode agendar em um horario que ja passou;
- o usuario nao pode agendar servicos consigo mesmo;
