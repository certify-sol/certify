import styled from 'styled-components';

import { useForm } from 'react-hook-form';
import { useGlobalState } from '../components/layout';
import { useToasts } from 'react-toast-notifications';
import { useRouter } from 'next/router';
import { useState } from 'react';

import GridLoader from 'react-spinners/GridLoader';

const Container = styled.div`
  /* margin: 0 auto; */
`;

const Input = styled.input`
  all: unset;
  display: block;

  background: transparent;
  border-bottom: 2px solid #e5e5e5;

  width: 400px;
  padding: 14px 18px;
  color: #f2f2f2;
`;

const SubmitButton = styled.input`
  /* width: 120px; */
  all: unset;
  /* margin: 0 auto; */
  margin-top: 20px;

  padding: 10px 30px;
  border-radius: 30px;
  position: relative;

  border: 2px solid #725bdc;

  cursor: pointer;

  transition: all 0.3s ease-in;
  &:hover {
    transform: translateY(-1px);
  }
`;

export default function CreateForm() {
  const { register, handleSubmit } = useForm();
  const [publicKey, setPublicKey] = useGlobalState('publicKey');
  const [walletConnected, setWalletConnected] =
    useGlobalState('walletConnected');

  const [loading, setLoading] = useState(false);

  const { addToast } = useToasts();

  const router = useRouter();

  const onSubmit = (data) => {
    if (!walletConnected) {
      console.log('Cannot create certi without wallet being connected');
      addToast('Please connect your wallet to create a certificate', {
        appearance: 'error',
        autoDismiss: true,
      });
    } else {
      setLoading(true);

      data = { ...data, registrant: publicKey };

      console.log(data);
      fetch('/api/create-certi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((resp) => resp.json())
        .then((res) => {
          console.log(res);
          addToast('Certificate generated successfully, redirecting...', {
            appearance: 'success',
            autoDismiss: true,
          });

          router.push('/view?sig=' + res.sig);
        });

      console.log(JSON.stringify(data));
    }
  };

  return loading ? (
    <div>
      <GridLoader color="#7828AA" size={20} />
    </div>
  ) : (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('firstName')}
          placeholder="First name"
          autoComplete="off"
        />
        <Input
          {...register('secondName')}
          placeholder="Second name"
          autoComplete="off"
        />
        <Input
          {...register('location')}
          placeholder="Place of unision"
          autoComplete="off"
        />
        <Input {...register('date')} placeholder="Date" autoComplete="off" />
        <Input
          {...register('officiant')}
          placeholder="Officiant"
          autoComplete="off"
        />
        <SubmitButton type="submit" />
      </form>
    </Container>
  );
}
