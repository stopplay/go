export default {
  login: {
    email: 'Email',
    password: 'Senha',
    loginBtn: 'entrar',
    registerText: 'Não possui conta?',
    registerButton: 'Cadastre-se aqui.',
    errors: {
      emptyFields: 'Por favor digite seu email/senha',
    },
  },
  register: {
    text:
      'Cadastre-se no Restaurant App e tenha paes fresquinhos sempre que desejar.',
    name: 'Nome',
    surname: 'Sobrenome',
    cpf: 'CPF',
    phone: 'Telefone',
    email: 'Email',
    password: 'Senha',
    confirmPassword: 'Confirme sua Senha',
    button: 'cadastrar',
    nextButton: 'próximo',
    errors: {
      emptyFields: 'Por favor insira todos os dados',
      matchPasswords: 'As senhas devem ser iguais.',
    },
  },
  order: {
    title: 'pedido',
    button: 'pagar',
    customButton: 'adicionar',
    sections: {
      food: 'comida',
      drinks: 'bebidas',
    },
  },
  delivery: {
    titles: {
      delivery: 'entrega',
      payment: 'pagamento',
    },
    address: 'Selecione o endereço de entrega',
    payment: 'Selecione o método de pagamento',
    buttons: {
      confirm: 'confirmar',
      address: 'adicionar endereço de entrega',
      payment: 'adicionar método de pagamento',
    },
  },
  addAddress: {
    title: 'adicionar endereço',
    button: 'adicionar',
    checkBox: 'tornar esse endereço ativo',
    placeholders: {
      name: 'Nome',
      street: 'Rua',
      cep: 'CEP',
      number: 'Número',
      district: 'Bairro',
      complement: 'Complemento / Apartamento',
    },
    searchCep: 'Buscar',
    errors: {
      emptyFields: 'Por favor preenchar todos os campos obrigatórios',
      emptyCep: 'Por favor digite o CEP',
      cepValidation: {
        formatError: 'Por favor digite todos os 8 números do CEP.',
        invalid: 'Por favor digite um CEP válido',
      },
    },
  },
  addPayment: {
    title: 'adicionar cartão',
    button: 'adicionar',
    checkBox: 'tornar esse cartão ativo',
    placeholders: {
      cardNumber: 'Número do Cartão',
      cvv: 'CVV',
      expirationDate: 'Data de Validade',
      cardholder: 'Nome do Proprietário',
      cpf: 'CPF',
    },
    errors: {
      emptyFields: 'Por favor preencha todos os campos',
      cardFlag: 'Por favor selecione a bandeira do seu cartão',
    },
  },
  collectOrder: {
    titles: {
      collect: 'retirar na loja',
      table: 'pedido sendo processado',
      delivery: 'seu pedido irá até você',
    },
    button: 'confirmar',
    infos: {
      table: {
        textOne: 'Seu pedido será preparado',
        textTwo: 'após sua confirmação.',
      },
      collect: {
        textOne: 'Seu pedido estará pronto em aproximadamente',
        textTwo: 'após sua confirmação',
      },
    },
  },
  customProduct: {
    title: 'Adicionar Ingredientes',
    button: 'Adicionar Produto',
  },
  history: {
    title: 'histórico de pedidos',
    details: 'Detalhes',
    status: 'Status',
  },
  checkout: {
    title: 'confirmar pedido',
    total: 'total',
    tableCode: 'mesa',
    selectText: 'Escolha como você deseja receber seu pedido',
    buttons: {
      delivery: 'Entrega',
      collection: 'Retirar na Loja',
      confirm: 'confirmar',
    },
    item: {
      quantity: 'Quantidade',
      total: 'Total',
      extras: 'Extras',
    },
    errors: {
      selectType: 'Por favor selecione como deseja receber seu produto',
    },
  },
  details: {
    title: 'detalhes do pedido',
    total: 'Total',
    tableCode: 'Código da Mesa',
    type: 'Tipo',
    status: 'Status',
    date: 'Data',
    cancel: 'Cancelar Pedido',
    typeOfOrder: {
      collection: 'Retirar em Loja',
      delivery: 'Entrega',
      table: 'Mesa',
      club: {
        delivery: 'Clube Entrega',
        collection: 'Clube Retirar em Loja',
      },
    },
    error: {
      cancel: 'Falha ao cancelar pedido',
    },
    orderStatus: {
      toDo: 'A fazer',
      doing: 'Fazendo',
      done: 'Feito',
      depot: 'Depósito',
      completed: 'Finalizado',
      canceled: 'Cancelado',
      canceledAndRefunded: 'Cancelado e Reembolsado',
    },
    canceled: 'cancelado',
  },
  sideMenu: {
    home: 'principal',
    userDetails: 'detalhes do usuário',
    address: 'endereços',
    paymentMethods: 'métodos de pagamento',
    orderHistory: 'histórico de pedidos',
    logout: 'sair',
  },
  tableCode: {
    button: 'enviar',
    placeholder: 'Digite o código',
    description: 'Selecione a mesa',
    error: {
      emptyField: 'Por favor digite o código da mesa',
    },
  },
  club: {
    title: 'go! clube',
    button: 'confirmar',
    description: 'Bem-vindo ao go! Clube, por favor escolha seu plano:',
    packageDescription: {
      partOne: 'Você tem',
      partTwo: 'produtos para escolher todo mês',
    },
    sub: {
      title: 'assinatura go! clube',
      total: 'total',
      package: 'plano',
      button: 'assinar',
      placeholders: {
        cardNumber: 'Número do Cartão',
        cvv: 'CVV',
        expDate: 'Data de Validade',
        cardholder: 'Nome do Dono',
        cpf: 'CPF',
      },
      errors: {
        emptyFields: 'Por favor preencha todos os campos',
      },
      success: 'Parabéns! Você se tornou um membro do Go! Club',
      agreement:
        'Seu cartão será cobrado mensalmente, clique aqui para aceitar os termos e condições.',
    },
  },
  userDetails: {
    title: 'Detalhes do Usuário',
    button: 'Confirmar',
    placeholders: {
      name: 'Nome',
      surname: 'Sobrenome',
      cpf: 'CPF',
      phone: 'Telefone',
      email: 'Email',
    },
    errors: {
      emptyFields: 'Por favor preencha todos os campos',
    },
    message: 'Usuário atualizado.',
  },
  addressScreen: {
    title: 'Endereços',
    button: 'Adicionar',
    message: 'Pressione o botão abaixo para adicionar um endereço.',
    deleteMessage: 'Tem certeza que deseja remover esse endereço?',
    deleteButtons: {
      cancel: 'Cancelar',
      confirm: 'Confirmar',
    },
  },
  paymentScreen: {
    title: 'Métodos de Pagamento',
    button: 'Adicionar',
    deleteMessage: 'Tem certeza que deseja remover esse cartão de crédito?',
    deleteButtons: {
      cancel: 'Cancelar',
      confirm: 'Confirmar',
    },
    emptyList: 'Pressione o botão abaixo para adicionar um cartão de crédito.',
  },
  selectLogin: {
    text: 'Login via',
    button: {
      sms: 'sms',
      email: 'e-mail',
    },
  },
  selectMenu: {
    button: {
      deliveryCollection: 'entrega/retirar na loja',
      table: 'mesa',
      club: 'go! club',
    },
    menuMessage: 'Não há menu cadastrado para esse tipo de pedido',
    loadingMessage: 'Carregando cardápios',
  },
};
