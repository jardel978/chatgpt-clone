/// <reference types="cypress" />

import { ButtonComponent } from "../../../src/components/ButtonComponent/index"

describe("Testing component Button", () => {
  it("Deve renderizar o componente", () => {
    cy.mount(<ButtonComponent />)
  })

  it("", () => {
    cy.get("p").should("contains.text", "ExampleComponent")
  })

  // Adicione mais casos de teste conforme necessário
})
