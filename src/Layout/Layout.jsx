import "./Layout.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";

export const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/sign-in");
    }
  }, []);

  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
};
