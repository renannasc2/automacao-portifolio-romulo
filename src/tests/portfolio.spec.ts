import { test } from '@playwright/test';
import { PortfolioPage } from '../pages/PortfolioPage';
import { ContactPage } from '../pages/ContactPage';
import { PortfolioElements } from '../elements/portfolio.elements';

test.describe('Testes do Site de Portfólio', () => {
  test.describe('Navegação', () => {
    test('Verificar navegação para Projetos', async ({ page }) => {
      const portfolioPage = new PortfolioPage(page);
      await portfolioPage.navigateToHome();
      await portfolioPage.navigateToProjects();
      await portfolioPage.verifyProjectsPage();
    });

    test('Verificar navegação para Contato', async ({ page }) => {
      const portfolioPage = new PortfolioPage(page);
      await portfolioPage.navigateToHome();
      await portfolioPage.navigateToContact();
      await portfolioPage.verifyContactPage();
    });

    test('Verificar navegação para Sobre', async ({ page }) => {
      const portfolioPage = new PortfolioPage(page);
      await portfolioPage.navigateToHome();
      await portfolioPage.navigateToAbout();
      await portfolioPage.verifyAboutPage();
    });
  });

  test.describe('Links', () => {
    test('Verificar links do menu', async ({ page }) => {
      const portfolioPage = new PortfolioPage(page);
      await portfolioPage.navigateToHome();
      
      const menuLinks = {
        'Sobre': '/about',
        'Projetos': '/projects',
        'Contato': '/contact'
      };

      for (const [text, href] of Object.entries(menuLinks)) {
        await portfolioPage.verifyMenuLink(text, href);
      }
    });

    test('Verificar links do rodapé', async ({ page }) => {
      const portfolioPage = new PortfolioPage(page);
      await portfolioPage.navigateToHome();
      
      const footerLinks = {
        'Sobre': '/about',
        'Projetos': '/projects',
        'Contato': '/contact'
      };

      for (const [text, href] of Object.entries(footerLinks)) {
        await portfolioPage.verifyFooterLink(text, href);
      }
    });
  });

  test.describe('Funcionalidades', () => {
    test('Testar download do CV', async ({ page }) => {
      const contactPage = new ContactPage(page);
      await contactPage.navigateToContact();
      await contactPage.downloadCV();
    });

    test('Testar envio de formulário de contato', async ({ page }) => {
      const contactPage = new ContactPage(page);
      await contactPage.navigateToContact();
      await contactPage.fillContactForm(
        'João Silva',
        'joao.silva@example.com',
        'Realizando um teste em seu site',
        'Gostei do portfólio!'
      );
      await contactPage.submitForm();
      await contactPage.verifySuccessMessage();
    });
  });
}); 