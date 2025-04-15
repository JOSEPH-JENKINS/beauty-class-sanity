export default (S) =>
  S.list()
    .title('Content')
    .items([
      // Singleton Pages
      S.listItem()
        .title('Homepage')
        .child(S.document().schemaType('homepage').documentId('homepage')),

      S.listItem()
        .title('About Page')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),

      S.listItem()
        .title('Founder Page')
        .child(S.document().schemaType('founderPage').documentId('founderPage')),

      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),

      // Regular Collections
      S.divider(),

      S.documentTypeListItem('testimonial'),
      S.documentTypeListItem('blogPost'),
      S.documentTypeListItem('category'),
      S.documentTypeListItem('event'),
      S.documentTypeListItem('artist'),
    ])
