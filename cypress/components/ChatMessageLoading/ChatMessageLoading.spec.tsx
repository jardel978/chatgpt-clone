/// <reference types="cypress" />

import { ChatMessageLoading } from "../../../src/components/ChatArea/components/index"

describe("Testing component ChatMessageLoading", () => {
  it("Deve renderizar o componente", () => {
    cy.mount(<ChatMessageLoading />)
  })

  it("", () => {
    cy.get("p").should("contains.text", "ExampleComponent")
  })

  // Adicione mais casos de teste conforme necessário
})
