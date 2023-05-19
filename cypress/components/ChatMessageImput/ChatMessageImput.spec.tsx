/// <reference types="cypress" />

import { ChatMessageImput } from "../../../src/components/ChatArea/components/ChatMessageImput/index"

describe("Testing component ChatMessageImput", () => {
  it("Deve renderizar o componente", () => {
    cy.mount(<ChatMessageImput />)
  })

  it("", () => {
    cy.get("p").should("contains.text", "ExampleComponent")
  })

  // Adicione mais casos de teste conforme necessário
})
