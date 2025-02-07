import { ARCHIVE_BLOCK, CALL_TO_ACTION, CONTENT, MEDIA_BLOCK } from './blocks'
import { LINK_FIELDS } from './link'
import { MEDIA } from './media'
import { META } from './meta'

export const PROJECTS = `
  query Projects ($locale:LocaleInputType) {
    Projects(limit: 300 ,locale:$locale) {
      docs {
        slug
      }
    }
  }
`

export const PROJECT = `
  query Project($slug: String, $draft: Boolean ,$locale:LocaleInputType) {
    Projects(where: { slug: { equals: $slug }}, limit: 1, draft: $draft ,locale:$locale ) {
      docs {
        id
        title
        categories {
          title
        }
        createdAt
        hero {
          type
          richText
          links {
            link ${LINK_FIELDS()}
          }
          ${MEDIA}
        }
        layout {
          ${CONTENT}
          ${CALL_TO_ACTION}
          ${CONTENT}
          ${MEDIA_BLOCK}
          ${ARCHIVE_BLOCK}
        }
        relatedProjects {
          id
          slug
          title
          ${META}
        }
        ${META}
      }
    }
  }
`
