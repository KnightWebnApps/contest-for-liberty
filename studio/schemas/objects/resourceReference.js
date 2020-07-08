export default {
    name: 'resourceReference',
    type: 'object',
    title: 'Resource reference',
    fields: [
      {
        name: 'resourceRef',
        type: 'reference',
        to: [
          {
            type: 'resource'
          }
        ]
      }
    ],
    preview: {
      select: {
        title: 'resource.title',
        media: 'resource.document.asset'
      }
    }
  }