import {defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'openGraphImage',
      title: 'Open Graph Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'logoAlt',
      title: 'Alternate Logo (used on scrolled or colored header)',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
    },
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
    },
    {
      name: 'supportText',
      title: 'Support Text',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'platform', title: 'Platform', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
          ],
        },
      ],
    },
    {
      name: 'design',
      title: 'Design System',
      type: 'object',
      fields: [
        {
          name: 'font',
          title: 'Font',
          type: 'string',
          options: {
            list: [
              {title: 'Inter', value: 'inter'},
              {title: 'Roboto', value: 'roboto'},
              {title: 'Poppins', value: 'poppins'},
              {title: 'Open Sans', value: 'open-sans'},
              {title: 'Lato', value: 'lato'},
              {title: 'Gotham', value: 'gotham'},
              {title: 'Montserrat', value: 'montserrat'},
              {title: 'System UI', value: 'system-ui'},
              {title: 'Serif', value: 'serif'},
              {title: 'Sans Serif', value: 'sans-serif'},
              {title: 'Custom Upload', value: 'custom'},
            ],
            layout: 'dropdown',
          },
        },
        {
          name: 'customFont',
          title: 'Custom Font Upload (.woff, .woff2)',
          type: 'file',
          options: {
            accept: '.woff,.woff2',
          },
          hidden: ({parent}) => parent?.font !== 'custom',
        },
        {
          name: 'bodySize',
          title: 'Body Text Size (px)',
          type: 'number',
          validation: (Rule) => Rule.min(10).max(32),
        },
        {
          name: 'heroHeaderSize',
          title: 'Big Header Size (px) (for main header font)',
          type: 'number',
          validation: (Rule) => Rule.min(12).max(128),
        },
        {
          name: 'headerSize',
          title: 'Header Size (px) (for minor headers)',
          type: 'number',
          validation: (Rule) => Rule.min(12).max(128),
        },
        {
          name: 'itemSpacing',
          title: 'Spacing Between Items (px)',
          type: 'number',
          validation: (Rule) => Rule.min(0).max(256),
        },
        {
          name: 'sectionSpacing',
          title: 'Spacing Between Sections (px)',
          type: 'number',
          validation: (Rule) => Rule.min(0).max(512),
        },
        {
          name: 'topMargin',
          title: 'Page Top Margin (px)',
          type: 'number',
          validation: (Rule) => Rule.min(0).max(512),
        },
        {
          name: 'sideMargin',
          title: 'Page Side Margin (px)',
          type: 'number',
          validation: (Rule) => Rule.min(0).max(512),
        },
      ],
    },
  ],
})
