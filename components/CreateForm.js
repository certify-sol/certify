import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useGlobalState } from '../components/layout';
import { useToasts } from 'react-toast-notifications';
import { useRouter } from 'next/router';
import { ConnectButton } from './Header';

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

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <Headers /> */}
        <Input {...register('firstName')} placeholder="First name" />
        <Input {...register('secondName')} placeholder="Second name" />
        <Input {...register('location')} placeholder="Place of unision" />
        <Input {...register('date')} placeholder="Date" />
        <Input {...register('officiant')} placeholder="Officiant" />
        {/* <Input {...register('registrant')} placeholder="Registrant name" /> */}
        {/* <select {...register('category')}>
          <option value="">Select...</option>
          <option value="A">Category A</option>
          <option value="B">Category B</option>
        </select> */}

        {/* <p>{result}</p> */}
        <SubmitButton type="submit" />
        {/* <SubmitButton onClick={() => handleSubmit(onSubmit)}>
          Submit
        </SubmitButton> */}
      </form>
    </Container>
  );
}
