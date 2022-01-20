const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-8 border-b-4 border-ruddy-pink">
        <div className="flex items-center flex-shrink-0  mr-6">
          <span className="font-semibold text-3xl tracking-tight text-ruddy-pink">
            LepasAja
          </span>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center">
          <div className="text-sm lg:flex-grow text-ruddy-pink">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:underline underline-offset-8 text-lg mr-4"
            >
              Home
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:underline underline-offset-8 text-lg mr-4"
            >
              About
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:underline underline-offset-8 text-lg mr-4"
            >
              Blog
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:underline underline-offset-8 text-lg"
            >
              Know How
            </a>
          </div>
          <div className="space-x-2">
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded bg-ruddy-pink text-white border-white hover:border-ruddy-pink hover:text-ruddy-pink hover:bg-white mt-4 lg:mt-0"
            >
              Login
            </a>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-ruddy-pink border-ruddy-pink hover:border-transparent hover:text-white hover:bg-ruddy-pink mt-4 lg:mt-0"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
