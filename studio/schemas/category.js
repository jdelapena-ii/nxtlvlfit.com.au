import { IoIosPricetag } from 'react-icons/io';

export default {
  name: 'category',
  title: 'Blog Post Category',
  icon: IoIosPricetag,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};
