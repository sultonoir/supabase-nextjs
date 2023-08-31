import AuthForm from "./AuthForm";

export default function Home() {
  return (
    <div className="container mx-auto w-max mt-1">
      <div className="">
        <h1 className="">Supabase Auth + Storage</h1>
        <p className="">
          Experience our Auth and Storage through a simple profile management
          example. Create a user profile and upload an avatar image. Fast,
          simple, secure.
        </p>
      </div>
      <AuthForm />
    </div>
  );
}
