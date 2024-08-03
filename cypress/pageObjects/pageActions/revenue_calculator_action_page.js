import { page_elements } from "../pageElements/revenue_calculator_page_elements";

export class PageActionClass{

    adjustSlide = (xpath,targetValue)=>{
    cy.xpath(xpath).should('be.visible').scrollIntoView();
  // Get the slider element
    cy.xpath(xpath).then($slider => {
    // Set the slider value using JavaScript
    cy.wrap($slider).invoke('val', targetValue).trigger('input', { force: true }).trigger('change', { force: true });

    // Verify the slider's value
    cy.wrap($slider).should('have.value', targetValue.toString());
    });

       //   // Adjust the slider to set its value to 820
    //     cy.xpath(page_elements.REVENUE_CALCULATOR_SLIDER_BTN_XPATH).invoke('val','820').trigger('input',{force:true});
    // //   Verify that the bottom text field value updates to 820
    //     cy.xpath(page_elements.REVENUE_CALCULATOR_SLIDER_BTN_XPATH).should('have.value', '820'); 
    }

    updateInputValue = (targetValue)=>{
         // Adjust slider to match the value in the text field
        cy.xpath(page_elements.REVENUE_CALCULATOR_VALUE_INPUT_ELEMENT_XPATH).clear().type(targetValue);
         // Verify the slider value
        cy.xpath(page_elements.REVENUE_CALCULATOR_SLIDER_BTN_XPATH).invoke('val').should('equal', targetValue);
    }

    checkCPTcode=(cptCodes,targetValue)=>{
    // Adjust slider to match the value in the text field
    cy.xpath(page_elements.REVENUE_CALCULATOR_VALUE_INPUT_ELEMENT_XPATH).clear().type(targetValue);
    // Verify the slider value
    cy.xpath(page_elements.REVENUE_CALCULATOR_SLIDER_BTN_XPATH).invoke('val').should('equal', targetValue);

    // Select the CPT code checkboxes
    cptCodes.forEach(code=>{
        cy.contains('p', code)
        .parents('.css-4o8pys')
        .find('input[type="checkbox"]')
        .check();
    })
    }

    validateCptCodes=(targetValue)=>{
          // Verify the header displaying total recurring reimbursement for all patients per month
        cy.scrollTo('bottom');
        cy.contains('Total Recurring Reimbursement for all Patients Per Month: $110700').should('exist');

        // Validate the total recurring reimbursement value
        cy.contains('Total Recurring Reimbursement for all Patients Per Month: $110700').should('have.text', 'Total Recurring Reimbursement for all Patients Per Month: $110700');
    }
}
