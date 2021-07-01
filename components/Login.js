import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-768x480.png"
        height={400}
        width={400}
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;