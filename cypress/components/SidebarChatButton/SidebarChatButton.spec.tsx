/// <reference types="cypress" />

import { SidebarChatButton } from "../../../src/components/SidebarChatButton/index"

describe("Testing component SidebarChatButton", () => {
  it("Deve renderizar o componente", () => {
    cy.mount(<SidebarChatButton />)
  })

  it("", () => {
    cy.get("p").should("contains.text", "ExampleComponent")
  })

  // Adicione mais casos de teste conforme necessário
})
