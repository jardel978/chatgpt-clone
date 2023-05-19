/// <reference types="cypress" />

import { ChatPlaceholder } from "../../../src/components/ChatPlaceholder/index"

describe("Testing component ChatPlaceholder", () => {
  it("Deve renderizar o componente", () => {
    cy.mount(<ChatPlaceholder />)
  })

  it("", () => {
    cy.get("p").should("contains.text", "ExampleComponent")
  })

  // Adicione mais casos de teste conforme necessário
})
