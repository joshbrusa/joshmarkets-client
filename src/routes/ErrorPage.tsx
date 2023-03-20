export default function ErrorPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-2xl">Route Not Found!</h1>
        <a href="/" className="m-2 p-2 bg-neutral-300 rounded-lg">
          Home
        </a>
      </div>
    </>
  );
}
