export default {
    name: 'resource',
    type: 'document',
    title: 'Resource',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'link',
            type: 'url',
            title: 'Link',
            description: 'The url to get the original document source.'
        },
        {
            name: 'document',
            type: 'file',
            title: 'Document'
        }
    ]
}