import Link from 'next/link';
import { useUser } from '../context/user';
import { logout } from '../services/Auth';

const Navbar = () => {
  const user = useUser();
  const { uid } = user;
  async function handleLogout() {
    await logout();
  }
  if (!uid) {
    return (
      <>
        <nav className="flex items-center justify-between flex-wrap p-8 border-b-[3px] border-ruddy-pink">
          <div className="flex items-center flex-shrink-0 mr-6">
            <Link href="/">
              <a className="text-3xl font-semibold tracking-tight text-ruddy-pink">
                LepasAja
              </a>
            </Link>
          </div>

          <div className="flex-grow block w-full text-center lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow text-ruddy-pink">
              <Link href="/">
                <a className="block mt-4 mr-4 text-lg lg:inline-block lg:mt-0 hover:underline underline-offset-8">
                  Home
                </a>
              </Link>

              <a
                href="#responsive-header"
                className="block mt-4 mr-4 text-lg lg:inline-block lg:mt-0 hover:underline underline-offset-8"
              >
                About
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 mr-4 text-lg lg:inline-block lg:mt-0 hover:underline underline-offset-8"
              >
                Blog
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 text-lg lg:inline-block lg:mt-0 hover:underline underline-offset-8"
              >
                Know How
              </a>
            </div>
            <div className="space-x-2">
              <Link href="/login">
                <a className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded bg-ruddy-pink hover:border-ruddy-pink hover:text-ruddy-pink hover:bg-white lg:mt-0">
                  Login
                </a>
              </Link>
              <Link href="/register">
                <a className="inline-block px-4 py-2 mt-4 text-sm leading-none border rounded text-ruddy-pink border-ruddy-pink hover:border-transparent hover:text-white hover:bg-ruddy-pink lg:mt-0">
                  Sign Up
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
  }
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-8 border-b-[3px] border-ruddy-pink">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link href="/">
            <a className="text-3xl font-semibold tracking-tight text-ruddy-pink">
              LepasAja
            </a>
          </Link>
        </div>

        <div className="flex-grow block w-full text-center lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow text-ruddy-pink">
            <Link href="/">
              <a className="block mt-4 mr-4 text-lg lg:inline-block lg:mt-0 hover:underline underline-offset-8">
                Home
              </a>
            </Link>

            <a
              href="#responsive-header"
              className="block mt-4 mr-4 text-lg lg:inline-block lg:mt-0 hover:underline underline-offset-8"
            >
              About
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 mr-4 text-lg lg:inline-block lg:mt-0 hover:underline underline-offset-8"
            >
              Blog
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 text-lg lg:inline-block lg:mt-0 hover:underline underline-offset-8"
            >
              Know How
            </a>
          </div>
          <div className="group inline-block relative">
            <button className="text-ruddy-pink font-semibold py-2 px-4 rounded inline-flex items-center">
              <span className="mr-1">{user.email}</span>
              <img
                class="w-8 ml-1 h-8 rounded-full"
                src="/images/avatar.png"
                alt="user-photo"
              />
            </button>
            <ul className="absolute hidden text-gray-700 pt-1 min-w-[200px] group-hover:block z-10">
              <li className="">
                <a
                  className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  My Dashboard
                </a>
              </li>
              <li className="">
                <Link href="/create-room">
                  <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                    Create Giveaway
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/">
                  <a
                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    onClick={handleLogout}
                  >
                    Log Out
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
