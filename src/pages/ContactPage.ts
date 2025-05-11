import { Page, expect } from '@playwright/test';
import { PortfolioElements } from '../elements/portfolio.elements';

export class ContactPage {
  constructor(private page: Page) {}

  // Navegação
  async navigateToContact() {
    await this.page.goto('https://portifolio.romulo-mastelari.com.br/contact');
    await this.page.waitForLoadState('networkidle');
  }

  // Preenchimento do formulário
  async fillContactForm(name: string, email: string, subject: string, message: string) {
    await this.page.waitForSelector(PortfolioElements.contactForm.name);
    await this.page.fill(PortfolioElements.contactForm.name, name);
    await this.page.fill(PortfolioElements.contactForm.email, email);
    await this.page.fill(PortfolioElements.contactForm.subject, subject);
    await this.page.fill(PortfolioElements.contactForm.message, message);
  }

  // Envio do formulário
  async submitForm() {
    await this.page.click(PortfolioElements.contactForm.submitButton);
    await this.page.waitForLoadState('networkidle');
  }

  // Verificações
  async verifySuccessMessage() {
    await this.page.waitForSelector(PortfolioElements.contactForm.successMessage, { state: 'visible' });
  }

  // Download do CV
  async downloadCV() {
    const downloadPromise = this.page.waitForEvent('download');
    await this.page.click(PortfolioElements.contactForm.downloadCV);
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toContain('Romulo_Mastelari_Curriculo');
  }
} 