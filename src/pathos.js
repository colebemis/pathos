const sheet = document.head.appendChild(document.createElement('style')).sheet

export function css(declarationBlock) {
  const index = sheet.cssRules.length
  const id = index.toString(36)
  const className = `css-${id}`
  const rule = `.${className} { ${declarationBlock} }`
  sheet.insertRule(rule, index)
}
