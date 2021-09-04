import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Layout from '../components/layout';
import { BigT, CertiT } from './index';
import { ConnectButton } from '../components/Header';

const Box = styled.div`
  height: 50vh;
  width: 30vw;
  /* background: green; */

  margin: 100px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

// const BigT = styled.div``;
const CreateBigT = styled(BigT)`
  text-align: center;
`;

const SigInput = styled.input`
  all: unset;

  background: transparent;
  border-bottom: 2px solid #e5e5e5;

  width: 400px;
  padding: 14px 18px;
  color: #f2f2f2;
`;

const VerifyButton = styled(ConnectButton)``;

export default function VerifyPage() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    router.push('/view?sig=' + data.sig);
  };

  return (
    <Layout>
      <Box>
        <CreateBigT>
          Verify <CertiT>Certificate</CertiT>
        </CreateBigT>
        <SigInput
          {...register('sig')}
          placeholder="Certificate Signature"
          autoComplete="off"
        />
        <VerifyButton onClick={handleSubmit(onSubmit)}>Verify</VerifyButton>
      </Box>
    </Layout>
  );
}
