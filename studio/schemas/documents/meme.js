export default {
  name: 'meme',
  type: 'document',
  title: 'MEMEs',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true
      },
      fields: [
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
          imageUrl: 'asset.url'
        }
      }
    }
  ]
}