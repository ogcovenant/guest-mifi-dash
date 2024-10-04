import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  token,
  children,
}: {
  token: string;
  children: ReactElement;
}) => {
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};


export default ProtectedRoute;