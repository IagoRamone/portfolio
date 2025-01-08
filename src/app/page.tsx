export default function Home() {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gradient-to-r from-indigo-900 to-blue-800">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex w-4/5 max-w-7xl items-center justify-between">
          
          <div className="text-white md:w-1/2">
            <h2 className="mb-4 text-lg font-semibold uppercase tracking-wider">
              Criação de sistemas
            </h2>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Developer
            </h1>
            <button className="rounded-full bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600">
              See More About Us
            </button>
          </div>
          
          <div className="relative hidden h-full w-1/2 md:block">
            <img
              src="/foto_sobre.jpg"
              alt="Me"
              className="h-auto w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
