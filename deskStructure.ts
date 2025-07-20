import {StructureBuilder} from 'sanity/structure'

const singletonTypes = ['homepage', 'aboutPage', 'contactPage', 'shopPage', 'eventPage', 'blogPage']

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Site Pages (singleton docs)
      S.listItem()
        .title('Site Pages')
        .child(
          S.list()
            .title('Pages')
            .items(
              singletonTypes.map((type) =>
                S.listItem()
                  .title(prettyTitle(type))
                  .child(
                    // open the first document of the type, if it exists
                    S.documentList()
                      .title(prettyTitle(type))
                      .schemaType(type)
                      .filter(`_type == $type`)
                      .params({type})
                      .child((docId) => S.document().schemaType(type).documentId(docId)),
                  ),
              ),
            ),
        ),

      // Site Content (normal docs)
      S.listItem()
        .title('Site Content')
        .child(
          S.list()
            .title('Content Types')
            .items([
              S.documentTypeListItem('event'),
              S.documentTypeListItem('artist'),
              S.documentTypeListItem('post'),
              S.documentTypeListItem('product'),
              S.documentTypeListItem('testimonial'),
            ]),
        ),

      // Site Non-Negotiables
      S.listItem()
        .title('Site Types')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.documentTypeListItem('productType'),
              S.documentTypeListItem('modalSection'),
              S.documentTypeListItem('siteSettings'),
            ]),
        ),
    ])

// helper function to clean up title casing
function prettyTitle(type: string) {
  return type.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())
}
