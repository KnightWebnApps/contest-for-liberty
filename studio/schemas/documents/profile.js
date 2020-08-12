export default {
  name: 'profile',
  type: 'document',
  title: 'Political Profile',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'profileImage',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true
          }
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
          options: {
            isHighlighted: true
          }
        }
      ],
      preview: {
        select: {
          imageUrl: 'asset.url',
          title: 'caption'
        }
      }
    },
    {
      name: 'positions',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Positions Held',
      description: 'Posisiton - Dates Held'
    },
    {
      name: 'history',
      type: 'bodyPortableText',
      title: 'History'
    }
  ]
}