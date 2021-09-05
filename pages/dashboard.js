import styled from 'styled-components';

import Layout from '../components/layout';
import DashGrid from '../components/DashGrid';

const Heading = styled.div`
  font-weight: 700;
  font-size: 55px;

  text-align: center;
  margin: 40px 0;
`;

export default function Dashboard() {
  return (
    <Layout>
      {/* <Heading>Dashboard</Heading> */}
      <DashGrid />
    </Layout>
  );
}
