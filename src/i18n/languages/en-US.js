export default {
  login: {
    email: 'Email',
    password: 'Password',
    loginBtn: 'login',
    registerText: "Doesn't have an account?",
    registerButton: 'Register here.',
    errors: {
      emptyFields: 'Please enter your email/password',
    },
  },
  register: {
    text: 'Signup to Restaurant App and get fresh breads whenever you want it',
    name: 'First Name',
    surname: 'Last Name',
    cpf: 'CPF',
    phone: 'Phone Number',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    button: 'register',
    nextButton: 'next',
    errors: {
      emptyFields: 'Please enter all fields',
      matchPasswords: "Passwords doesn't match",
    },
  },
  order: {
    title: 'order',
    button: 'checkout',
    customButton: 'add',
    sections: {
      food: 'food',
      drinks: 'drinks',
    },
  },
  delivery: {
    titles: {
      delivery: 'delivery',
      payment: 'payment',
    },
    address: 'Selecte your address',
    payment: 'Payment Method',
    buttons: {
      confirm: 'confirm',
      address: 'add address',
      payment: 'add payment method',
    },
  },
  addAddress: {
    title: 'add address',
    button: 'add',
    checkBox: 'make this address active',
    placeholders: {
      name: 'Name',
      street: 'Street',
      cep: 'CEP',
      number: 'Number',
      district: 'District',
      complement: 'Complement / Apartment',
    },
    searchCep: 'Search',
    errors: {
      emptyFields: 'Please enter all required fields',
      emptyCep: 'Please Enter the zip code',
      cepValidation: {
        formatError: 'Please enter all the 8 numbers of the zip code.',
        invalid: 'Please enter a valid zip code',
      },
    },
  },
  addPayment: {
    title: 'add payment method',
    button: 'add',
    checkBox: 'make this card active',
    placeholders: {
      cardNumber: 'Card Number',
      cvv: 'CVV',
      expirationDate: 'Expiration Date',
      cardholder: 'Cardholder Name',
      cpf: 'CPF',
    },
    errors: {
      emptyFields: 'Please enter all fields',
      cardFlag: 'Please select a cardflag',
    },
  },
  collectOrder: {
    titles: {
      collect: 'collect your order',
      table: 'order in progress',
      delivery: 'your order will be delivered',
    },
    button: 'confirm',
    infos: {
      table: {
        textOne: 'Your order will be prepared',
        textTwo: 'after your confirmation.',
      },
      collect: {
        textOne: 'Your order will be ready in approximately',
        textTwo: 'after your confirmation',
      },
    },
  },
  customProduct: {
    title: 'Extra Igredients',
    button: 'Add Product',
  },
  history: {
    title: 'order history',
    details: 'Details',
    status: 'Status',
  },
  checkout: {
    title: 'checkout',
    total: 'total',
    tableCode: 'table',
    selectText: 'Please select how you wish to receive your order',
    buttons: {
      delivery: 'Delivery',
      collection: 'Collection',
      confirm: 'confirm',
    },
    item: {
      quantity: 'Quantity',
      total: 'Total',
      extras: 'Extras',
    },
    errors: {
      selectType: 'Please select how do you want to receive your order',
    },
  },
  details: {
    title: 'order details',
    total: 'Total',
    tableCode: 'Table Code',
    type: 'Type',
    status: 'Status',
    date: 'Date',
    cancel: 'Cancel Order',
    typeOfOrder: {
      collection: 'Collection',
      delivery: 'Delivery',
      table: 'Table',
      club: {
        delivery: 'Club Delivery',
        collection: 'Club Collection',
      },
    },
    error: {
      cancel: 'Failed to cancel order.',
    },
  },
  sideMenu: {
    home: 'home',
    userDetails: 'user details',
    address: 'address',
    paymentMethods: 'payment methods',
    orderHistory: 'order History',
    logout: 'logout',
  },
  tableCode: {
    button: 'submit',
    placeholder: 'Enter code',
    description: 'Select Table',
    error: {
      emptyField: "Please enter the table's code",
    },
  },
  club: {
    title: 'go! club',
    button: 'confirm',
    description: 'Welcome to Go! Club, please chose your package:',
    packageDescription: {
      partOne: 'You have',
      partTwo: 'products to chose from each month',
    },
    sub: {
      title: 'go! club subscription',
      total: 'total',
      package: 'package',
      button: 'subscribe',
      placeholders: {
        cardNumber: 'Card Number',
        cvv: 'CVV',
        expDate: 'Expiration Date',
        cardholder: 'Cardholder Name',
        cpf: 'CPF',
      },
      errors: {
        emptyFields: 'Please enter all fields',
      },
      success: "Congratulations! You're now a Go! Club Member",
      agreement:
        'Your card will be charge monthly, click here to accept the terms and conditions',
    },
  },
  userDetails: {
    title: 'User Details',
    button: 'Confirm',
    placeholders: {
      name: 'Name',
      surname: 'Surname',
      cpf: 'CPF',
      phone: 'Phone',
      email: 'Email',
    },
    errors: {
      emptyFields: 'Please enter all fields',
    },
    message: 'User Updated',
  },
  addressScreen: {
    title: 'Address',
    button: 'add',
    message: 'No address registered yet',
  },
  paymentScreen: {
    title: 'Payment Methods',
    button: 'add',
  },
  selectLogin: {
    text: 'Login with',
    button: {
      sms: 'sms',
      email: 'e-mail',
    },
  },
  selectMenu: {
    button: {
      deliveryCollection: 'delivery/collection',
      table: 'table',
      club: 'go! club',
    },
    menuMessage: 'No menus for this type of order',
    loadingMessage: 'Loading menus',
  },
};
