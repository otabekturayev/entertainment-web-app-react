import "./SignUp.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SignUp = ({ sign, setSign }) => {
  const form = useForm();
  const { register, handleSubmit, formState, watch } = form;
  const { errors } = formState;
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // let res = await axios({
    //     method: 'post',
    //     url: "https://reqres.in/api/register",
    //     data: data
    // })
    // if(res.status !== 200){
    //     throw new Error('Xatolik yuz berdi')
    // }
    // res = res.data

    // if(res.token){
    //     navigate('/')
    //     localStorage.setItem('accessToken', res.token)
    // }
    axios({
      method: "post",
      url: "https://reqres.in/api/register",
      data: data,
    })
      .then((data) => {
        localStorage.setItem("accessToken", data.data.token);
        navigate("/");
      })
      .catch((error) => {
        throw new Error("Xatolik yuz berdi");
      });
  };

  const password = watch("password");

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
          <p>Sign Up</p>
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
          <div className="passwordFirst">
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
          </div>
          <div className="passwordSecond">
            <input
              className={`${errors.passwordConfirm && "errorInput"}`}
              type="password"
              id="passwordConfirm"
              {...register("passwordConfirm", {
                required: {
                  value: true,
                  message: "Can't be empty",
                },
                validate: (value) =>
                  value === password || "The passwords do not match",
              })}
              placeholder="Repeat password"
            />
            <div className="errorMessage">
              {errors.passwordConfirm?.message}
            </div>
          </div>
          <button type="submit">Create an account</button>
          <div className="sign">
            <div className="dontAccount">Already have an account?</div>
            <button
              type="button"
              className="singUp"
              onClick={() => setSign(!sign)}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
