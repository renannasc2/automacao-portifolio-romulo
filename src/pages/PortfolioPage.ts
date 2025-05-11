import { Page, expect } from '@playwright/test';
import { PortfolioElements } from '../elements/portfolio.elements';

type MenuLink = 'about' | 'projects' | 'contact';

export class PortfolioPage {
  constructor(private page: Page) {}

  // Navegação
  async navigateToHome() {
    await this.page.goto('https://portifolio.romulo-mastelari.com.br');
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToProjects() {
    await this.page.click(PortfolioElements.menu.projects);
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToContact() {
    await this.page.click(PortfolioElements.menu.contact);
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToAbout() {
    await this.page.click(PortfolioElements.menu.about);
    await this.page.waitForLoadState('networkidle');
  }

  // Verificações
  async verifyProjectsPage() {
    await this.page.waitForSelector(PortfolioElements.titles.projects, { state: 'visible' });
  }

  async verifyContactPage() {
    await this.page.waitForSelector(PortfolioElements.titles.contact, { state: 'visible' });
  }

  async verifyAboutPage() {
    await this.page.waitForSelector(PortfolioElements.titles.about, { state: 'visible' });
  }

  // Verificação de links
  async verifyMenuLink(linkText: string, expectedHref: string) {
    const linkMap: Record<string, MenuLink> = {
      'Sobre': 'about',
      'Projetos': 'projects',
      'Contato': 'contact'
    };
    
    const linkKey = linkMap[linkText];
    if (!linkKey) {
      throw new Error(`Link text "${linkText}" não encontrado no menu`);
    }

    const link = this.page.locator(PortfolioElements.menu[linkKey]).first();
    await expect(link).toHaveAttribute('href', expectedHref);
  }

  async verifyFooterLink(linkText: string, expectedHref: string) {
    const linkMap: Record<string, MenuLink> = {
      'Sobre': 'about',
      'Projetos': 'projects',
      'Contato': 'contact'
    };
    
    const linkKey = linkMap[linkText];
    if (!linkKey) {
      throw new Error(`Link text "${linkText}" não encontrado no rodapé`);
    }

    const link = this.page.locator(PortfolioElements.footer[linkKey]).first();
    await expect(link).toHaveAttribute('href', expectedHref);
  }
} 