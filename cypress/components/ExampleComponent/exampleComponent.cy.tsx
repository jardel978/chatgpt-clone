/// <reference types="cypress" />

import { ExampleComponent } from "../../../src/components/ExampleComponent/index"

describe("Meu Componente", () => {
  it("Deve renderizar o componente", () => {
    cy.mount(<ExampleComponent />)
  })

  it("Deve exibir um texto", () => {
    cy.get("p").should("contains.text", "ExampleComponent")
  })

  // Adicione mais casos de teste conforme necessário
})
