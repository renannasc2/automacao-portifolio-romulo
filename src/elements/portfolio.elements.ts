type MenuLink = 'about' | 'projects' | 'contact';

export const PortfolioElements = {
  // Links do Menu
  menu: {
    about: 'header a[href="/about"]',
    projects: 'header a[href="/projects"]',
    contact: 'header a[href="/contact"]'
  } as Record<MenuLink, string>,

  // Links do Rodapé
  footer: {
    about: 'footer a[href="/about"]',
    projects: 'footer a[href="/projects"]',
    contact: 'footer a[href="/contact"]'
  } as Record<MenuLink, string>,

  // Títulos das Páginas
  titles: {
    about: 'h2:has-text("Sobre Mim")',
    projects: 'h2:has-text("Meus Projetos")',
    contact: 'h2:has-text("Contate-me")'
  },

  // Formulário de Contato
  contactForm: {
    name: '#name',
    email: '#email',
    subject: '#subject',
    message: '#message',
    submitButton: 'button[type="submit"]',
    successMessage: 'div:has-text("Sua mensagem foi enviada com sucesso!")',
    downloadCV: 'a:has-text("Baixar CV")'
  }
}; 