import styled from 'styled-components';

import Layout from '../../components/layout';

import CreateCustomForm from '../../components/CreateCustomForm';
import { BigT, CertiT } from '../index';

const FormContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;

  margin-top: 40px;
`;

const CreateT = styled(BigT)`
  font-size: 50px;
  text-align: center;
  margin-top: 40px;
`;

export default function CreatePage() {
  return (
    <Layout>
      <CreateT>Custom certificate</CreateT>
      <FormContainer>
        <CreateCustomForm />
      </FormContainer>
    </Layout>
  );
}
