/// <reference types="cypress" />

import { Header } from "../../../src/components/Header/index"

describe("Testing component Header", () => {
  it("Deve renderizar o componente", () => {
    cy.mount(<Header />)
  })

  it("", () => {
    cy.get("p").should("contains.text", "ExampleComponent")
  })

  // Adicione mais casos de teste conforme necessário
})
