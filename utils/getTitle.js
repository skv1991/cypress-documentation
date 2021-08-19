const { TITLE_SEPARATOR } = require('../content/constants')

module.exports.getTitle = (frontMatterTitle, t) => {
  return `${frontMatterTitle} ${TITLE_SEPARATOR} ${t && t('pages.doc_title')}`
}
