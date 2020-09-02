import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import {
  Layout,
  SEO,
  GradientContainer,
  Table,
  TableRow,
  TableHeading,
  TableBody,
  TableCell,
} from '../components';

function TimetablePage({
  data: {
    allSanityTimetable: { nodes },
  },
}) {
  let monday = [];
  let tuesday = [];
  let wednesday = [];
  let thursday = [];
  let friday = [];
  let saturday = [];

  function sortTimes(node) {
    const times = [];

    node.forEach((n) => {
      if (n.time.indexOf('pm') !== -1) {
        times.push([
          n.time.substr(0, n.time.indexOf('pm') + 2),
          n.time.substr(n.time.indexOf('(')),
          n.activity ? n.activity : '',
        ]);
      }
      if (n.time.indexOf('am') !== -1) {
        times.push([
          n.time.substr(0, n.time.indexOf('am') + 2),
          n.time.substr(n.time.indexOf('(')),
          n.activity ? n.activity : '',
        ]);
      }
    });
    times.sort(function (a, b) {
      return new Date(`1970/01/01 ${a[0]}`) - new Date(`1970/01/01 ${b[0]}`);
    });
    return times;
  }

  nodes.map((node) => {
    if (node.day === 'Monday') monday.push(node);
    if (node.day === 'Tuesday') tuesday.push(node);
    if (node.day === 'Wednesday') wednesday.push(node);
    if (node.day === 'Thursday') thursday.push(node);
    if (node.day === 'Friday') friday.push(node);
    if (node.day === 'Saturday') saturday.push(node);
    return null;
  });

  monday = sortTimes(monday);
  tuesday = sortTimes(tuesday);
  wednesday = sortTimes(wednesday);
  thursday = sortTimes(thursday);
  friday = sortTimes(friday);
  saturday = sortTimes(saturday);

  return (
    <Layout>
      <SEO title="Timetable" />
      <GradientContainer>
        <div className="relative flex flex-col">
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-4 sm:w-6 lg:w-8 bg-gradient-to-r from-black to-transparent"
          />
          <div
            aria-hidden
            className="absolute inset-y-0 right-0 w-4 sm:w-6 lg:w-8 bg-gradient-to-l from-black to-transparent"
          />
          <div className="-mt-2 overflow-x-auto">
            <div className="inline-block min-w-full px-4 py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden border-2 border-white">
                <Table>
                  <thead>
                    <TableRow>
                      <TableHeading>Time</TableHeading>
                      <TableHeading>Monday</TableHeading>
                      <TableHeading>Tuesday</TableHeading>
                      <TableHeading>Wednesday</TableHeading>
                      <TableHeading>Thursday</TableHeading>
                      <TableHeading>Friday</TableHeading>
                      <TableHeading>Saturday</TableHeading>
                      <TableHeading>Sunday</TableHeading>
                    </TableRow>
                  </thead>
                  <TableBody>
                    {/* Create the first row...well, first, because it contains the rowSpan cell */}
                    <TableRow>
                      <TableCell>{`${monday[0][0]} ${monday[0][1]}`}</TableCell>
                      <TableCell>{monday[0][2]}</TableCell>
                      <TableCell>{tuesday[0][2]}</TableCell>
                      <TableCell>{wednesday[0][2]}</TableCell>
                      <TableCell>{thursday[0][2]}</TableCell>
                      <TableCell>{friday[0][2]}</TableCell>
                      <TableCell>{saturday[0][2]}</TableCell>
                      <TableCell rowSpan={monday.length}>
                        nXtLvL <span className="uppercase">Rest</span> <br />
                        &amp; <span className="uppercase">Restore</span>
                      </TableCell>
                    </TableRow>
                    {/* Create the rest of the rows */}
                    {monday.map((ele, i) => {
                      return i > 0 ? (
                        <TableRow key={i}>
                          <TableCell>{`${ele[0]} ${ele[1]}`}</TableCell>
                          <TableCell>{ele[2]}</TableCell>
                          <TableCell>{tuesday[i][2]}</TableCell>
                          <TableCell>{wednesday[i][2]}</TableCell>
                          <TableCell>{thursday[i][2]}</TableCell>
                          <TableCell>{friday[i][2]}</TableCell>
                          <TableCell>{saturday[i][2]}</TableCell>
                        </TableRow>
                      ) : null;
                    })}

                    <TableRow>
                      <TableCell colSpan={8}>
                        The first Friday of each month there will be{' '}
                        <span className="uppercase">no</span> 4.30pm or 5.30pm
                        classes. Instead we will host{' '}
                        <span className="uppercase">Friday Night Lights</span> -
                        Lifting, skills, WOD, music, food and BYO drinks
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={8}>
                        OPEN GYM: Monday – Friday 5:15am – 6:30pm & Saturday
                        7.00am – 10:30am
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </GradientContainer>
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
