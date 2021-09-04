function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center justify-center my-16">
        <h1 className="text-6xl font-bold text-gray-800">
          <span className="text-blue-500">F</span>sholehan.
        </h1>
        <p className="text-gray-400 font-medium text-lg md:text-xl my-16">
          Sengaja dibuat agar mudah buat kerja 😂
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-2">
          <div className="shadow-lg p-12 group cursor-pointer border-t rounded-xl hover:shadow-xl">
            <a
              href="https://github.com/fsholehan"
              className="text-gray-800 group-hover:text-blue-500 text-5xl"
            >
              Github
            </a>
          </div>
          <div className="shadow-lg p-12 group cursor-pointer border-t rounded-xl hover:shadow-xl">
            <a
              href="https://fsholehan.netlify.app"
              className="text-gray-800 group-hover:text-blue-500 text-5xl"
            >
              Portfolio
            </a>
          </div>
          <div className="shadow-lg p-12 group cursor-pointer border-t rounded-xl hover:shadow-xl">
            <a
              href="https://t.me/fuadns25"
              className="text-gray-800 group-hover:text-blue-500 text-5xl"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
