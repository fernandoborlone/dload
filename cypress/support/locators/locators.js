const locators = {
    PAGE_REGISTER: {
      ALERT: '.alert-link',
      ALERT_ERROR: '.alert',
      BTN_SUBMIT: 'button[data-testid="cadastrar"]',
      CHK_ADM_ACCOUNT: 'input[data-testid="checkbox"]',
      INPUT_EMAIL: 'input[data-testid="email"]',
      INPUT_NAME: 'input[data-testid="nome"]',
      INPUT_PASSWORD: 'input[data-testid="password"]',
    },
    PAGE_LOGIN: {
      BTN_SUBMIT: 'button[data-testid="entrar"]',
      INPUT_EMAIL: 'input[data-testid="email"]',
      INPUT_PASSWORD: 'input[data-testid="senha"]',
      LINK_REGISTER: 'a[data-testid="cadastrar"]'
    },
    PAGE_HOME: {
      BTN_LOGOUT: 'button[data-testid="logout"]',
      BTN_PRODUCTS_LIST: 'a[data-testid="listarProdutos"]',
      BTN_CREATE_USERS: 'a[data-testid="cadastrarUsuarios"]'
    },
    PAGE_PRODUCTS_LIST: {
      TBL_LIST: 'tbody tr'
    },
    PAGE_CREATE_USER:{
      BTN_CREATE_USER: 'button[data-testid="cadastrarUsuario"]'
    }
  }
  export default locators