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

  return (
    <Layout>
      <SEO title="Coming soon" />
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
          <div className="-my-2 overflow-x-auto">
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
                    {/* **********************************************************
                  /* The following code is total garbage.
                  /* It used to be done with map() until I ran into
                  /* a bunch of problems
                  /* which will be fixed soon
                  /* ******************************************************* */}
                    <TableRow>
                      <TableCell>{monday[0].time}</TableCell>
                      <TableCell>{monday[0].activity}</TableCell>
                      <TableCell>{tuesday[0].activity}</TableCell>
                      <TableCell>{wednesday[0].activity}</TableCell>
                      <TableCell>{thursday[0].activity}</TableCell>
                      <TableCell>{friday[0].activity}</TableCell>
                      <TableCell>{saturday[0].activity}</TableCell>
                      <TableCell rowSpan={11}>
                        nXt LvL REST <br />
                        &amp; RESTORE
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{monday[1].time}</TableCell>
                      <TableCell>{monday[1].activity}</TableCell>
                      <TableCell>{tuesday[1].activity}</TableCell>
                      <TableCell>{wednesday[1].activity}</TableCell>
                      <TableCell>{thursday[1].activity}</TableCell>
                      <TableCell>{friday[1].activity}</TableCell>
                      <TableCell>{saturday[1].activity}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{monday[2].time}</TableCell>
                      <TableCell>{monday[2].activity}</TableCell>
                      <TableCell>{tuesday[2].activity}</TableCell>
                      <TableCell>{wednesday[2].activity}</TableCell>
                      <TableCell>{thursday[2].activity}</TableCell>
                      <TableCell>{friday[2].activity}</TableCell>
                      <TableCell>{saturday[2].activity}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{monday[3].time}</TableCell>
                      <TableCell>{monday[3].activity}</TableCell>
                      <TableCell>{tuesday[3].activity}</TableCell>
                      <TableCell>{wednesday[3].activity}</TableCell>
                      <TableCell>{thursday[3].activity}</TableCell>
                      <TableCell>{friday[3].activity}</TableCell>
                      <TableCell>{saturday[3].activity}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{monday[4].time}</TableCell>
                      <TableCell>{monday[4].activity}</TableCell>
                      <TableCell>{tuesday[4].activity}</TableCell>
                      <TableCell>{wednesday[4].activity}</TableCell>
                      <TableCell>{thursday[4].activity}</TableCell>
                      <TableCell>{friday[4].activity}</TableCell>
                      <TableCell>{saturday[4].activity}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{monday[5].time}</TableCell>
                      <TableCell>{monday[5].activity}</TableCell>
                      <TableCell>{tuesday[5].activity}</TableCell>
                      <TableCell>{wednesday[5].activity}</TableCell>
                      <TableCell>{thursday[5].activity}</TableCell>
                      <TableCell>{friday[5].activity}</TableCell>
                      <TableCell>{saturday[5].activity}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{monday[6].time}</TableCell>
                      <TableCell>{monday[6].activity}</TableCell>
                      <TableCell>{tuesday[6].activity}</TableCell>
                      <TableCell>{wednesday[6].activity}</TableCell>
                      <TableCell>{thursday[6].activity}</TableCell>
                      <TableCell>{friday[6].activity}</TableCell>
                      <TableCell>{saturday[6].activity}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{monday[7].time}</TableCell>
                      <TableCell>{monday[7].activity}</TableCell>
                      <TableCell>{tuesday[7].activity}</TableCell>
                      <TableCell>{wednesday[7].activity}</TableCell>
                      <TableCell>{thursday[7].activity}</TableCell>
                      <TableCell>{friday[7].activity}</TableCell>
                      <TableCell>{saturday[7].activity}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{monday[8].time}</TableCell>
                      <TableCell>{monday[8].activity}</TableCell>
                      <TableCell>{tuesday[8].activity}</TableCell>
                      <TableCell>{wednesday[8].activity}</TableCell>
                      <TableCell>{thursday[8].activity}</TableCell>
                      <TableCell>{friday[8].activity}</TableCell>
                      <TableCell>{saturday[8].activity}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{monday[9].time}</TableCell>
                      <TableCell>{monday[9].activity}</TableCell>
                      <TableCell>{tuesday[9].activity}</TableCell>
                      <TableCell>{wednesday[9].activity}</TableCell>
                      <TableCell>{thursday[9].activity}</TableCell>
                      <TableCell>{friday[9].activity}</TableCell>
                      <TableCell>{saturday[9].activity}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{monday[10].time}</TableCell>
                      <TableCell>{monday[10].activity}</TableCell>
                      <TableCell>{tuesday[10].activity}</TableCell>
                      <TableCell>{wednesday[10].activity}</TableCell>
                      <TableCell>{thursday[10].activity}</TableCell>
                      <TableCell>{friday[10].activity}</TableCell>
                      <TableCell>{saturday[10].activity}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={8}>
                        The first Friday of each month there will be NO 4.30pm
                        or 5.30pm classes. Instead we will host FRIDAY NIGHT
                        LIGHTS - Lifting, skills, wood, music, food and BYO
                        drinks
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
