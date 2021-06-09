import styled from "@emotion/styled";
import InputSign from "../components/signComponents/InputSign";
import Colors from "../components/ui/Colors";
import DividerLine from "../components/signComponents/DividerLine";
import {ButtonSign, ButtonSignFill } from "../components/signComponents/ButtonSign";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

const StyedLogin= styled.div`
  background-color: ${Colors.white};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StyedLink = styled.div`
  font-size:16px;
  font-weight:400;
  &:hover{
    color: #1da64d;
    text-decoration: underline;
  }
`;

const HeaderLogin = styled.div`
  padding: 28px 0 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #d9dadc;
  & > img {
    max-width: 100%;
    width: 200px;
  }
`;
const LoginBtnContent = styled.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #d9dadc;
`;

function Login () {

return(
  <StyedLogin>
    <HeaderLogin>
      <img alt="logo" src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png' />
    </HeaderLogin>
    <ButtonSignFill color="#3a61b3"><FaFacebook/>CONTINUE WITH FACEBOOK</ButtonSignFill>
    <ButtonSignFill color={`${Colors.black1}`}><FaApple/>CONTINUE WITH APPLE</ButtonSignFill>
    <ButtonSign><FcGoogle/>CONTINUE WITH GOOGLE</ButtonSign>
    <ButtonSign>CONTINUE WITH PHONE NUMBER</ButtonSign>
    <DividerLine dividerText="or"></DividerLine>
    <InputSign
    labelText='Email address or username '
    placeholder='Email address or username '
    inputType='text'
    value=''
    onChange=''
    inputName=''
    />
    <InputSign
      labelText='Password'
      placeholder='Password'
      inputType='password'
      value=''
      onChange=''
      inputName=''
    />
    <div>
      <StyedLink>Forgot your pasword?</StyedLink>
    </div>
    <LoginBtnContent>
      <label> 
        <input type="checkbox" id="cbox1" value="first_checkbox"/>
           Remember me
       </label>
      <ButtonSignFill
      color={`${Colors.primary}`} 
      size="210px"
      >LOG IN</ButtonSignFill>
    </LoginBtnContent>
    <h2>Don't have an account?</h2>
    <ButtonSign>SIGN UP FOR SPOTIFY</ButtonSign>
  </StyedLogin>
)

};

export default Login;
