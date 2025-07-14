/// <reference types="cypress"/>

import pb_challengingDom from "../support/pageObjects/pb_challengingDom "
const pb_challengingDom = new pb_challengingDom

Given("Acessar o site Challenging DOM", () => {
    pb_challengingDom.acessPage();
})

When("Clicar nos 3 botões", () => {
    pb_challengingDom.clickButton();
})

Then("Clicar nos botões Edit e Delete", () => {
    pb_challengingDom.columnAction();
    
    pb_challengingDom.buttonEditDelete();
})
