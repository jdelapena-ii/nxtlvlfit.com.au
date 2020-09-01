export default {
  type: 'document',
  name: 'service',
  title: 'Service',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page title',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order in navigation',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'heroHeading',
      title: 'Hero heading text',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'serviceHeadingLineOne',
      title: 'Service main heading text line 1',
      type: 'string',
    },
    {
      name: 'serviceHeadingLineTwo',
      title: 'Service main heading text line 2',
      type: 'string',
    },
    {
      title: 'Service main text',
      name: 'serviceText',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'serviceImage',
      title: 'Service image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'How it works',
      name: 'howItWorks',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Benefits',
      name: 'benefits',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Service small images',
      name: 'smallImages',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
};
