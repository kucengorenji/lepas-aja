import { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { logout } from '../../services/Auth';
import { useUser } from '../../context/user';
import { useRouter } from 'next/dist/client/router';
import { getProfileById } from '../../services/api';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const LinkDropdown = (props) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
};

const Dropdown = () => {
  const user = useUser();
  const router = useRouter();
  const [image, setImage] = useState(null);
  async function handleLogout() {
    await logout();
  }
  useEffect(() => {
    getProfileById(user.uid).then((data) => {
      setImage(data.photoUrl);
    });
  }, []);

  return (
    <Menu as="div" className="relative z-50 inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-gray-700 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <span className="mr-1">{user.email}</span>
          <img
            className="w-8 h-8 ml-1 rounded-full"
            src={image}
            alt="user-photo"
          />
          <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <LinkDropdown href="/profile">
                  <a
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-md'
                    )}
                  >
                    My Dashboard
                  </a>
                </LinkDropdown>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <LinkDropdown href="/create-room">
                  <a
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-md '
                    )}
                  >
                    Create Giveaway
                  </a>
                </LinkDropdown>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block w-full text-left px-4 py-2 text-md'
                  )}
                  onClick={handleLogout}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
