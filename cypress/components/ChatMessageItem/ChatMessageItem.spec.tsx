/// <reference types="cypress" />

import { ChatMessageItem } from "../../../src/components/ChatMessageItem/index"

describe("Testing component ChatMessageItem", () => {
  it("Deve renderizar o componente", () => {
    cy.mount(<ChatMessageItem />)
  })

  it("", () => {
    cy.get("p").should("contains.text", "ExampleComponent")
  })

  // Adicione mais casos de teste conforme necessário
})
