/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const fs = require("fs")

function getNavigators(comp, folder = "app") {
  const pageContainers = fs.readdirSync(`src/${folder}`)
  let navigators = pageContainers.filter((element) =>
    element.includes("Navigator")
  )
  navigators =
    navigators.length == 0 ? navigators : navigators.concat("Default")
  return navigators
}

function componentExists(comp, folder = "components") {
  const pageComponents = fs.readdirSync(`src/${folder}`)
  const pageContainers = fs.readdirSync("src/app")
  const components = pageComponents.concat(pageContainers)
  return components.indexOf(comp) >= 0
}

function navigatorExistsForViews(comp, folder = "app", navigator) {
  const pageContainers = fs.readdirSync(`src/app/${navigator}`)
  return pageContainers.indexOf(`${comp}`) >= 0
}

function viewExists(comp, folder = "app") {
  const pageContainers = fs.readdirSync("src/app")
  return pageContainers.indexOf(comp) >= 0
}

module.exports = {
  getNavigators,
  componentExists,
  navigatorExistsForViews,
  viewExists
}
