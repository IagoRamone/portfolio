export default function Homepage() {
  return (
    <>
      <div className="mx-auto w-full">
        < Home />
        <Portfolio />
      </div>
    </>
  );
}

function Home() {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-black">
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
              Quero conhecer mais!
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

function Portfolio() {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-blue-400">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex w-4/5 max-w-7xl flex-col items-center justify-between">
          
        <div className="max-w-8xl mt-12 grid min-h-[400px] w-full grid-cols-1 gap-6 md:grid-cols-3">

            {[
              { title: 'Adez', gif: '/portfolio/adez-portfolio.gif', static: '/portfolio/adez.png' },
              { title: 'Projeto 2', gif: '/gif2.gif', static: '/static2.jpg' },
              { title: 'Projeto 3', gif: '/gif3.gif', static: '/static3.jpg' },
            ].map((card, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
              >
                {/* Imagem que troca no hover */}
                <img
                  src={card.static}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src={card.gif}
                  alt={`${card.title} GIF`}
                  className="absolute inset-0 h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                {/* Texto abaixo */}
                <div className="relative z-10 mt-auto w-full bg-black bg-opacity-70 p-4 text-center text-white">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm">Descrição do {card.title}.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

