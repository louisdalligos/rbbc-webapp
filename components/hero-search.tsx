const HeroSearch = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage:
            "url('/images/photo-1501183638710-841dd1904471.jpeg')",
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-75 bg-black"
        ></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full px-4 ml-auto mr-auto text-center">
            <div className="xl:pr-12">
              <h1 className="text-white mt-10 font-semibold text-4xl leading-tight">
                Let's find that property that you've been looking for
              </h1>
              <p className="text-white my-8">
                Search confidently with your trusted source of homes for sale or
                rent
              </p>
              <form className="w-full max-w-lg mx-auto">
                <div className="flex items-center py-2 mt-8">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 rounded-l-lg py-4 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="Try townhouse in quezon city"
                    aria-label="Query"
                  />
                  <button
                    className="flex-shrink-0 bg-green-500 hover:bg-green-600 text-sm text-white py-4 -mt-3 px-8 rounded-r-lg focus:outline-none"
                    type="button"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
