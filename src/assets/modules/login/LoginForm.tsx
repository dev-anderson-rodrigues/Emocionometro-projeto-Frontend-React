import React, { useState, FormEvent } from 'react';
import * as S from './Login';
import logo from '../../images/Frame 8804.png';
import imagem from '../../images/BG.png';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
    <S.ContainerHome>
      <S.ContainerImage>
        <img src={imagem} alt="" />
      </S.ContainerImage>
        
    <S.Container onSubmit={handleSubmit}>

      <S.ContainerLogin>
        <div className='logo'><img src={logo} alt="logo" /></div>
        <h1>Faça seu login</h1>
        <div className='group-form'>
          <label>E-mail</label>
          <S.ContainerInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='group-form'>
          <label>Senha</label>
          <S.ContainerInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='help'>
            <div className='link-lembrar-me'>
              <span
                ><input
                  type="checkbox"
              /></span>
              <span>Lembrar-me</span>
            </div>
            <div>
              <a href="/pages/login/recuperarSenha/recuperar.html">Esqueceu sua senha?</a>
            </div>
        </div>
        <S.Button type="submit">Entrar</S.Button>
         <div className="ou-entao">
            <div className="linha-traco"></div>
            <div>Ou então</div>
            <div className="linha-traco"></div>
          </div>
          <S.Button className='button-cadastre-se' type="submit">Cadastre-se</S.Button>
      </S.ContainerLogin>
    </S.Container>
    </S.ContainerHome>
  );
};

export default LoginForm;
