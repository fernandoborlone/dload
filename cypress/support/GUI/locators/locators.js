const locators = {
  PAGE_CREATE_USER: {
    BTN_CREATE_USER: 'button[data-testid="cadastrarUsuario"]'
  },
  PAGE_HOME: {
    BTN_CREATE_USERS: 'a[data-testid="cadastrarUsuarios"]',
    BTN_LOGOUT: 'button[data-testid="logout"]',
    BTN_PRODUCTS_LIST: 'a[data-testid="listarProdutos"]',
  },
  PAGE_LOGIN: {
    BTN_SUBMIT: 'button[data-testid="entrar"]',
    INPUT_EMAIL: 'input[data-testid="email"]',
    INPUT_PASSWORD: 'input[data-testid="senha"]',
    LINK_REGISTER: 'a[data-testid="cadastrar"]'
  },
  PAGE_PRODUCTS_LIST: {
    TBL_LIST: 'tbody tr'
  },
  PAGE_REGISTER: {
    ALERT: '.alert-link',
    ALERT_ERROR: '.alert',
    BTN_SUBMIT: 'button[data-testid="cadastrar"]',
    CHK_ADM_ACCOUNT: 'input[data-testid="checkbox"]',
    INPUT_EMAIL: 'input[data-testid="email"]',
    INPUT_NAME: 'input[data-testid="nome"]',
    INPUT_PASSWORD: 'input[data-testid="password"]',
  }
}
export default locators