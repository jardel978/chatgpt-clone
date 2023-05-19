/// <reference types="cypress" />

import { ChatArea } from "../../../src/components/ChatArea/ChatArea"

describe("Testing component ChatArea", () => {
  it("Deve renderizar o componente", () => {
    cy.mount(<ChatArea />)
  })

  it("", () => {
    cy.get("p").should("contains.text", "ExampleComponent")
  })

  // Adicione mais casos de teste conforme necessário
})
