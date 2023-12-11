"use client";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
// import LoginTab from "./LoginTab";
const Login = () => {
  return(
  <SessionProvider>
    <LoginTab />
  </SessionProvider>
)};

const LoginTab = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <>
          <h4>Welcome {session.userName}</h4>
          <button onClick={() => signOut()}>Log out</button>
        </>
      ) : (
        <button onClick={() => signIn()}>Log in</button>
      )}
    </>
  );
};

export default Login;
