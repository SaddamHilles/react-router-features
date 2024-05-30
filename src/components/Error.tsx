import { useNavigate, useRouteError } from 'react-router-dom';

interface RouteError {
  status: number;
  statusText: string;
  error: { message: string };
  message: string;
}
function Error() {
  const navigate = useNavigate();
  const error = useRouteError() as RouteError;

  return (
    <div>
      <p>Something went wrong 😥</p>
      <p>{error.message || error.error.message}</p> 
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
