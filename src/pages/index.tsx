import { useNonce } from "@/hooks/useNonce";
import Link from "next/link";

export default function Home() {
  const REDIRECT_URI = "http://localhost:3000/auth";
  const { nonce } = useNonce();

  // const REDIRECT_URI = `${apiUrl}/dashboard`;

  const params = new URLSearchParams({
    state: new URLSearchParams({
      redirect_uri: REDIRECT_URI,
    }).toString(),
    client_id:
      "25769832374-famecqrhe2gkebt5fvqms2263046lj96.apps.googleusercontent.com",
    redirect_uri: "https://zklogin-dev-redirect.vercel.app/api/auth",
    response_type: "id_token",
    scope: "openid",
    nonce: nonce || "",
  });

  const loginURL = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
  return (
    <>
      <h1>ZKLogin Demo</h1>
      <Link
        className="flex text-lg items-center justify-center border-solid border-[2px] border-gray-200 w-full gap-2 pr-4 rounded-md text-gray-700 hover:bg-gray-200 max-w-[20em] font-bold"
        href={loginURL}
      >
        Login to Google
      </Link>
    </>
  );
}
