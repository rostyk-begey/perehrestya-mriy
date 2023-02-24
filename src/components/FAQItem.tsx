import { Disclosure, Transition } from '@headlessui/react';

const FaqItem = ({ title, children }: { title: string; children: string }) => (
  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className="flex w-full items-center justify-between border-t border-gray-500 py-4 text-left">
          <span className="text-2xl font-bold">{title}</span>
          <svg
            data-accordion-icon
            className={`h-6 w-6 shrink-0 ${open && 'rotate-180'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            ></path>
          </svg>
        </Disclosure.Button>
        <Transition
          enter="transition-all duration-300 ease-in"
          enterFrom="transition-all max-h-0 opacity-0"
          enterTo="transition-all max-h-screen opacity-100"
          leave="transition-all duration-300 ease-out"
          leaveFrom="transition-all max-h-screen opacity-100"
          leaveTo="transition-all max-h-0 opacity-0"
        >
          <Disclosure.Panel className="mb-10 text-lg">
            {children}
          </Disclosure.Panel>
        </Transition>
      </>
    )}
  </Disclosure>
);

export default FaqItem;
