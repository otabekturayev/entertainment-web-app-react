import "./SignIn.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SignIn = ({ sign, setSign }) => {
  const form = useForm({
    mode: "onTouched",
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    // let res = await axios({
    //     method: 'post',
    //     url: "https://reqres.in/api/login",
    //     data: data
    // })
    // if(res.status !== 200){
    //
    // }
    // res = res.data
    axios({
      method: "post",
      url: "https://reqres.in/api/login",
      data: data,
    })
      .then((data) => {
        localStorage.setItem("accessToken", data.data.token);
        navigate("/");
      })
      .catch((error) => {
        setError("Email or password is incorrect");
        throw new Error("Xatolik yuz berdi");
      });
  };

  return (
    <div className="wrapperSignIn">
      <div className="wrapperInner">
        <div className="loginImg">
          <svg width="33" height="27" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
              fill="#FC4747"
            />
          </svg>
        </div>
        <form className="signIn" onSubmit={handleSubmit(onSubmit)} noValidate>
          <p>Login</p>
          <div className="emaildInput">
            <input
              className={`${errors.email && "errorInput"}`}
              type="email"
              id="email"
              {...register("email", {
                pattern: {
                  value: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm,
                  message: "Invalid email format",
                },
                required: {
                  value: true,
                  message: "Can't be empty",
                },
              })}
              placeholder="Email address"
            />
            <div className="errorMessage">{errors.email?.message}</div>
          </div>
          <div className="passwordInput">
            <input
              className={`${errors.password && "errorInput"}`}
              type="password"
              id="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Can't be empty",
                },
                minLength: {
                  value: 6,
                  message: "Minimum required length is 6",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum required length is 20",
                },
              })}
              placeholder="Password"
            />
            <div className="errorMessage">{errors.password?.message}</div>
            <div className="errorEmailOrPassword">{error}</div>
          </div>
          <button type="submit">Login to your account</button>
          <div className="sign">
            <div className="dontAccount">Don’t have an account?</div>
            <button
              type="button"
              className="singUp"
              onClick={() => setSign(!sign)}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
