/// <reference types="cypress"/>

import pb_challengingDom from "../support/pageObjects/pb_challengingDom "


describe('template spec', () => {
  it('passes', () => {
    
    pb_challengingDom.acessPage();

    pb_challengingDom.clickButton();

    pb_challengingDom.columnAction();

    pb_challengingDom.buttonEditDelete();

  })
})