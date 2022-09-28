import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";
export function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/auth-pages/login" />;
}
