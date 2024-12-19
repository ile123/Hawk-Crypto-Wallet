import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isJwtValid } from "../../helper/Jwt";
import { Card } from "antd";

export default function Main() {
  const navigate = useNavigate();
  const [doesUserHaveWallet, setDoesUserHaveWallet] = useState(false);

  useEffect(() => {
    if (!isJwtValid()) navigate("/login", { replace: true });
  }, [navigate]);

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <Card className="text-center font-medium w-96">
            {doesUserHaveWallet ? (
                <h3>Create a new wallet</h3>
            ) : (
                <h3>Napravi provjeru jeli postoji wallet za korisnika</h3>
            )}
        </Card>
      </div>
    </>
  );
}
