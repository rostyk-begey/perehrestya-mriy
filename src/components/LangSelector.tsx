import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function LangSelector() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? '' : 'text-opacity-90'}
                flex items-center border border-transparent py-1.5 px-2 text-sm font-medium focus:border-primary-blue`}
          >
            <span>UK</span>
            <svg
              className={`-mr-1 ml-2 h-5 w-5 ${open ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              />
            </svg>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-full -translate-x-1/2 transform">
              <ul
                id="locale-tooltip"
                className="border text-sm font-medium"
                role="tooltip"
              >
                <li>
                  <a
                    className="block py-1.5 px-2 hover:bg-primary-blue hover:text-white"
                    href="/en"
                  >
                    EN
                  </a>
                </li>
              </ul>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
