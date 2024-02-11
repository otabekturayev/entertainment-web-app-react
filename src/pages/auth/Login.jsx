import "./Login.scss";
import { SignIn } from "../../components/signIn/SignIn";
import { SignUp } from "../../components/singUp/SignUp";
import { useState } from "react";

export const Login = () => {
  const [sign, setSign] = useState(true);

  return (
    <>
      {sign ? (
        <SignIn sign={sign} setSign={setSign} />
      ) : (
        <SignUp sign={sign} setSign={setSign} />
      )}
    </>
  );
};
