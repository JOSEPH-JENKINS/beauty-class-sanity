import {defineType} from 'sanity'

export const socialPost = defineType({
  type: 'object',
  name: 'socialPost',
  title: 'Social Media Post',
  fields: [
    {
      name: 'platform',
      type: 'string',
      title: 'Platform',
      options: {
        list: [
          {title: 'Instagram', value: 'instagram'},
          {title: 'Twitter/X', value: 'twitter'},
          {title: 'TikTok', value: 'tiktok'},
          {title: 'YouTube', value: 'youtube'},
          {title: 'LinkedIn', value: 'linkedin'},
        ],
      },
    },
    {
      name: 'url',
      type: 'url',
      title: 'Post URL',
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Optional caption',
    },
  ],
  preview: {
    select: {
      platform: 'platform',
      url: 'url',
    },
    prepare({platform, url}) {
      return {
        title: `Social Post - ${platform}`,
        subtitle: url,
      }
    },
  },
})
