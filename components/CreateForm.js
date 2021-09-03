import styled from 'styled-components';
import { useForm } from 'react-hook-form';

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
  // const [result, setResult] = useState('');
  const onSubmit = (data) => {
    console.log(data);
    console.log(JSON.stringify(data));
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
        <Input {...register('registrant')} placeholder="Registrant name" />
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
