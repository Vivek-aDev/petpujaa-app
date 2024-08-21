import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>oops...</h1>
      <h2>something went wrong!!!🤭</h2>
      <h3>{err.data}</h3>
      <p>{err.status}: {err.statusText}</p>
    </div>
  );
};

export default Error;
