import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout, SEO } from '../components';

function TimetablePage({
  data: {
    allSanityTimetable: { nodes },
  },
}) {
  const monday = [];
  const tuesday = [];
  const wednesday = [];
  const thursday = [];
  const friday = [];
  const saturday = [];

  nodes.map((node) => {
    if (node.day === 'Monday') monday.push(node);
    if (node.day === 'Tuesday') tuesday.push(node);
    if (node.day === 'Wednesday') wednesday.push(node);
    if (node.day === 'Thursday') thursday.push(node);
    if (node.day === 'Friday') friday.push(node);
    if (node.day === 'Saturday') saturday.push(node);
  });

  console.log(monday, tuesday, wednesday, thursday, friday, saturday);

  return (
    <Layout>
      <SEO title="Coming soon" />
      <table className="border-4 mt-12 table-auto">
        <thead>
          <tr>
            <th className="px-2 py-3 border uppercase">Time</th>
            <th className="px-2 py-3 border uppercase">Monday</th>
            <th className="px-2 py-3 border uppercase">Tuesday</th>
            <th className="px-2 py-3 border uppercase">Wednesday</th>
            <th className="px-2 py-3 border uppercase">Thursday</th>
            <th className="px-2 py-3 border uppercase">Friday</th>
            <th className="px-2 py-3 border uppercase">Saturday</th>
            <th className="px-2 py-3 border uppercase">Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center px-2 py-3 border">{monday[0].time}</td>
            <td className="text-center px-2 py-3 border">
              {monday[0].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {tuesday[0].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {wednesday[0].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {thursday[0].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {friday[0].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {saturday[0].activity}
            </td>
            <td rowSpan="11" className="text-center px-2 py-3 border">
              nXt LvL REST <br />
              &amp; RESTORE
            </td>
          </tr>
          <tr>
            <td className="text-center px-2 py-3 border">{monday[1].time}</td>
            <td className="text-center px-2 py-3 border">
              {monday[1].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {tuesday[1].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {wednesday[1].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {thursday[1].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {friday[1].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {saturday[1].activity}
            </td>
          </tr>
          <tr>
            <td className="text-center px-2 py-3 border">{monday[2].time}</td>
            <td className="text-center px-2 py-3 border">
              {monday[2].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {tuesday[2].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {wednesday[2].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {thursday[2].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {friday[2].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {saturday[2].activity}
            </td>
          </tr>
          <tr>
            <td className="text-center px-2 py-3 border">{monday[3].time}</td>
            <td className="text-center px-2 py-3 border">
              {monday[3].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {tuesday[3].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {wednesday[3].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {thursday[3].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {friday[3].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {saturday[3].activity}
            </td>
          </tr>
          <tr>
            <td className="text-center px-2 py-3 border">{monday[4].time}</td>
            <td className="text-center px-2 py-3 border">
              {monday[4].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {tuesday[4].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {wednesday[4].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {thursday[4].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {friday[4].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {saturday[4].activity}
            </td>
          </tr>
          <tr>
            <td className="text-center px-2 py-3 border">{monday[5].time}</td>
            <td className="text-center px-2 py-3 border">
              {monday[5].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {tuesday[5].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {wednesday[5].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {thursday[5].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {friday[5].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {saturday[5].activity}
            </td>
          </tr>
          <tr>
            <td className="text-center px-2 py-3 border">{monday[6].time}</td>
            <td className="text-center px-2 py-3 border">
              {monday[6].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {tuesday[6].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {wednesday[6].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {thursday[6].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {friday[6].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {saturday[6].activity}
            </td>
          </tr>
          <tr>
            <td className="text-center px-2 py-3 border">{monday[7].time}</td>
            <td className="text-center px-2 py-3 border">
              {monday[7].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {tuesday[7].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {wednesday[7].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {thursday[7].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {friday[7].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {saturday[7].activity}
            </td>
          </tr>
          <tr>
            <td className="text-center px-2 py-3 border">{monday[8].time}</td>
            <td className="text-center px-2 py-3 border">
              {monday[8].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {tuesday[8].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {wednesday[8].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {thursday[8].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {friday[8].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {saturday[8].activity}
            </td>
          </tr>
          <tr>
            <td className="text-center px-2 py-3 border">{monday[9].time}</td>
            <td className="text-center px-2 py-3 border">
              {monday[9].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {tuesday[9].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {wednesday[9].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {thursday[9].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {friday[9].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {saturday[9].activity}
            </td>
          </tr>
          <tr>
            <td className="text-center px-2 py-3 border">{monday[10].time}</td>
            <td className="text-center px-2 py-3 border">
              {monday[10].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {tuesday[10].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {wednesday[10].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {thursday[10].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {friday[10].activity}
            </td>
            <td className="text-center px-2 py-3 border">
              {saturday[10].activity}
            </td>
          </tr>
          <tr>
            <td colSpan="8" className="text-center px-2 py-3 border-4">
              The first Friday of each month there will be NO 4.30pm or 5.30pm
              classes. Instead we will host FRIDAY NIGHT LIGHTS - Lifting,
              skills, wood, music, food and BYO drinks
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}

TimetablePage.propTypes = {
  data: PropTypes.object,
};

export const graphqlQuery = graphql`
  query MyTimetableQuery {
    allSanityTimetable {
      nodes {
        time
        day
        activity
        id
      }
    }
  }
`;

export default TimetablePage;
