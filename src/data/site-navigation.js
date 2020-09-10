import { graphql, useStaticQuery } from 'gatsby';
import { nanoid } from 'nanoid';
import { SiFacebook, SiInstagram } from 'react-icons/si';

function useMainNavigation() {
  const { allSanityService } = useStaticQuery(
    graphql`
      {
        allSanityService(sort: { order: ASC, fields: order }) {
          nodes {
            id
            slug {
              current
            }
            title
          }
        }
      }
    `
  );

  const services = allSanityService.nodes.map((service) => ({
    id: service.id,
    slug: `/services/${service.slug.current}/`,
    title: service.title,
  }));

  const mainNavigation = [
    {
      id: nanoid(),
      title: 'Services',
      slug: '/services/',
      submenu: [
        {
          id: nanoid(),
          title: 'nXtLvL Services',
          slug: '/services/',
        },
        ...services,
      ],
    },
    {
      id: nanoid(),
      title: 'nXtLvL',
      slug: '/nxtlvl/',
      submenu: [
        {
          id: nanoid(),
          title: 'nXtLvL Classes',
          slug: '/classes/',
        },
        {
          id: nanoid(),
          title: 'Timetable',
          slug: '/timetable/',
        },
        {
          id: nanoid(),
          title: 'Merch',
          slug: '/merch/',
        },
      ],
    },
    {
      id: nanoid(),
      title: 'Meet Us',
      slug: '/meet-us/',
    },
    {
      id: nanoid(),
      title: 'Membership',
      slug: '/membership/',
    },
    {
      id: nanoid(),
      title: 'Contact',
      slug: '/contact/',
    },
  ];

  return { mainNavigation };
}

const socialLinks = [
  {
    id: nanoid(),
    title: 'Instagram',
    url: 'https://www.instagram.com/nxtlvl_pmq/',
    icon: SiInstagram,
  },
  {
    id: nanoid(),
    title: 'Facebook',
    url: 'https://www.facebook.com/nxtlvlpmq/',
    icon: SiFacebook,
  },
];

export { useMainNavigation, socialLinks };
