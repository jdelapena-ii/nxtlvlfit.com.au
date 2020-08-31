import { graphql, useStaticQuery } from 'gatsby';
import { SiFacebook, SiInstagram } from 'react-icons/si';

function useMainNavigation() {
  const { allSanityService } = useStaticQuery(
    graphql`
      {
        allSanityService {
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
  const mainNavigation = [
    {
      id: '2957432e-d071-4468-b9a0-c4a2a202743d',
      title: 'Services',
      slug: '/services/',
      submenu: [
        {
          id: '7ef6f429-3013-40b7-8cf3-fc1fa2329318',
          title: 'nXtLvL Services',
          slug: {
            current: '/services/',
          },
        },
        ...allSanityService.nodes,
      ],
    },
    {
      id: '696c5b1e-cbeb-41ea-b48d-ae474ed8ddc9',
      title: 'nXtLvL Classes',
      slug: '/classes/',
    },
    {
      id: '548c4a36-7e29-47b3-9046-60914321f3fd',
      title: 'Meet Us',
      slug: '/meet-us/',
    },
    {
      id: 'f8d7f0e4-78e6-4288-bd18-1c09183fa0d0',
      title: 'Membership',
      slug: '/membership/',
    },
    {
      id: 'c214fe84-a398-4556-a656-74f41578a2ce',
      title: 'Timetable',
      slug: '/timetable/',
    },
    {
      id: '6032c728-23e9-4611-8613-48e7973c998c',
      title: 'Contact',
      slug: '/contact/',
    },
  ];

  return { mainNavigation };
}

const socialLinks = [
  {
    id: 'b224c849-eb7d-43d1-873f-065a19a62dc9',
    title: 'Instagram',
    url: 'https://www.instagram.com/nxtlvl_pmq/',
    icon: SiInstagram,
  },
  {
    id: '0f679d69-df8e-4548-94e5-dd5cb1055857',
    title: 'Facebook',
    url: 'https://www.facebook.com/nxtlvlpmq/',
    icon: SiFacebook,
  },
];

export { useMainNavigation, socialLinks };
