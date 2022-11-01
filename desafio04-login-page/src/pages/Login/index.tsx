import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { defaultValues, IFormLogin } from './types'

import {
  Container, LoginContainer, Column, Spacing, Title
} from "./styles";

const schema = yup.object({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
  password: yup
    .string()
    .min(6, 'Insira no mínimo 6 carácteres')
    .required('Campo obrigatório'),
}).required();

const Login = () => {
  const { control, formState: { errors, isValid } } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues,
    reValidateMode: 'onChange'
  });

  console.log(isValid)

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input
            name="email"
            placeholder="E-mail"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          <Input
            name="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Spacing />
          <Button title="Entrar" disabled={!isValid} />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
