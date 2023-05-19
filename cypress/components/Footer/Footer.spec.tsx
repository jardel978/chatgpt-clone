/// <reference types="cypress" />

import { Footer } from "../../../src/components/Footer/index"

describe("Testing component Footer", () => {
  it("Deve renderizar o componente", () => {
    cy.mount(<Footer />)
  })

  it("", () => {
    cy.get("p").should("contains.text", "ExampleComponent")
  })

  // Adicione mais casos de teste conforme necessário
})
