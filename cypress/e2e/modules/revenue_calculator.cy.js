import { page_elements } from "../../pageObjects/pageElements/revenue_calculator_page_elements";
import { PageActionClass } from "../../pageObjects/pageActions/revenue_calculator_action_page";
const pageAction = new PageActionClass();

describe('Verify revenue calculator functionality and correct value updates.', () => {
    // Navigate to the Revenue Calculator Page
    beforeEach('TC_01 & 02: Navigate to FitPeo Homepage & Revenue Calculator Page',() => {
        cy.visit('//');
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.xpath(page_elements.REVENUE_CALCULATOR_PAGE_ELEMENT_XPATH).should('exist').click({force:true});
    });

    it('TC_03: Scrolls to the Slider Section', () => {
      // Scroll down to the slider section
        cy.xpath(page_elements.REVENUE_CALCULATOR_SLIDER_XPATH).should('be.visible').scrollIntoView();
    });

    it('TC_04: Adjusts the Slider', () => {
        pageAction.adjustSlide(page_elements.REVENUE_CALCULATOR_SLIDER_BTN_XPATH,'820');
    });

    it('TC_05 & TC_06: Updates the Text Field & validate', () => {
        pageAction.updateInputValue('560');
    });

    it('TC_07: Select the CPT Codes', () => {
        const cptCodes = ['CPT-99091', 'CPT-99453', 'CPT-99454', 'CPT-99474'];

        pageAction.checkCPTcode(cptCodes,'820');
    })

    it('TC_08 & TC_09: Validate and Verify that the header displaying Total Recurring Reimbursement for all Patients Per Month',() => {
        const cptCodes = ['CPT-99091', 'CPT-99453', 'CPT-99454', 'CPT-99474'];

        pageAction.checkCPTcode(cptCodes,'820');
        pageAction.validateCptCodes('820');
    })
});