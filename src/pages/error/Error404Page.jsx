import { Link } from "react-router-dom";
import "./Error404Page.scss";

export const Error404Page = () => {
  return (
    <>
      <div className="wrapper">
        <div className="errorNumber">404</div>
        <p className="errorText1">Oops! That page can’t be found</p>
        <p className="errorText2">
          The page you are looking for it maybe deleted
        </p>
        <Link className="btn" to="/">
          Go To Home
        </Link>
      </div>
    </>
  );
};
