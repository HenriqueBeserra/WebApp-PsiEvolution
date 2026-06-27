import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PrivateRoute() {
  const [isAuthorized, setIsAuthorized] = useState<null | boolean>(null);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthorized(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:3333/isvalid_token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ token }),
        });

        const data = await response.json();
        setIsAuthorized(data.userAuthorization === true);
      } catch (err) {
        console.error("Erro ao verificar token:", err);
        setIsAuthorized(false);
      }
    };

    verifyToken();
  }, []);

  if (isAuthorized === null) {
    return <p>Verificando autorização...</p>; // ou um spinner
  }

  if (!isAuthorized) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}