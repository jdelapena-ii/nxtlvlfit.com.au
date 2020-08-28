export default {
  name: 'timetable',
  title: 'Timetable',
  type: 'document',
  fields: [
    {
      name: 'day',
      title: 'Day',
      type: 'string',
      options: {
        layout: 'dropdown',
        direction: 'Horizontal',
        list: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
      },
      validation: (Rule) => Rule.required().error('This field is required'),
    },
    {
      name: 'time',
      title: 'Time Period',
      type: 'string',
      validation: (Rule) => Rule.required().error('This field is required'),
    },
    {
      name: 'activity',
      title: 'Activity (eg. nXt LvL CALI)',
      type: 'string',
    },
  ],
  preview: {
    select: { time: 'time', activity: 'activity' },
    prepare({ time, activity }) {
      return {
        title: `Time: ${time}, Activity: ${activity || 'None'}`,
      };
    },
  },
};
