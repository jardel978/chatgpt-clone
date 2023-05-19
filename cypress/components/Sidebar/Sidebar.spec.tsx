/// <reference types="cypress" />

import { Sidebar } from "../../../src/components/Sidebar/index"

describe("Testing component Sidebar", () => {
  it("Deve renderizar o componente", () => {
    cy.mount(<Sidebar />)
  })

  it("", () => {
    cy.get("p").should("contains.text", "ExampleComponent")
  })

  // Adicione mais casos de teste conforme necessário
})
