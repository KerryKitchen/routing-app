import { Link } from "react-router-dom";

const NoPage = () => {
  return (
      <div>
        <h1>404: Page not found :(</h1>
        <p>Want to go back <Link to="/">home</Link>?</p>
      </div>
    );
};

export default NoPage;