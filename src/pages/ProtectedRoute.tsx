import { ReactElement, useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
// import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  token,
  children,
}: {
  token: string;
  children: ReactElement;
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    if (!token || token === "null") {
      window.location.replace("/login");
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex w-full justify-center items-center absolute h-full bg-[#19173D]">
          <ImSpinner9 color="#FFFFFF" size={28} className="animate-spin" />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default ProtectedRoute;
