import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../store/auth-context";
import { ROUTES } from "../../utils/routes";
import HomePageLayout from "../layouts/HomePageLayout";
import { useEffect } from "react";
import { Spinner } from "@material-tailwind/react";

const ProtectedRoute = () => {
  const { isLoggedIn, checkingAuthState } = useAuthContext();
  useEffect(() => {}, [isLoggedIn, checkingAuthState]);
  if (checkingAuthState) {
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Spinner className="w-12 h-12" />
      </div>
    );
  }
  if (!isLoggedIn) {
    return <Navigate to={ROUTES.LOGIN} />;
  }
  return (
    <>
      <HomePageLayout />
    </>
  );
};

export default ProtectedRoute;