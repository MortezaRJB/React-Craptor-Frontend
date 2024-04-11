import { useAuth } from "./AuthProvider";

function Logout() {
  const auth = useAuth();
  const handleLogout = async () => {
    await auth.logOut();
  }

  handleLogout();
  return(
    <></>
  );
}

export default Logout;
