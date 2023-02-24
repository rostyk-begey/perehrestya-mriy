import { Fragment, useState, MouseEvent } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const MobileMenu = ({
  menuItems,
}: {
  menuItems: {
    title: string;
    href: string;
  }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChildrenClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.dataset.action === 'close') {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className="w-7 space-y-2 md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <span className="block h-0.5 w-full bg-black"></span>
        <span className="block h-0.5 w-full bg-black"></span>
        <span className="block h-0.5 w-full bg-black"></span>
      </button>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          onClose={() => setIsOpen(false)}
          className="fixed top-0 z-50 h-[100dvh] w-full"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30"></div>
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition duration-500 ease-out"
            enterFrom="transition -translate-x-full opacity-0"
            enterTo="transition translate-x-0 opacity-100"
            leave="transition duration-500 ease-out"
            leaveFrom="transition translate-x-0 opacity-100"
            leaveTo="transition -translate-x-full opacity-0"
          >
            <Dialog.Panel
              className="flex h-full w-[75vw] max-w-[300px] flex-col bg-white shadow-2xl"
              onClick={handleChildrenClick}
            >
              <div className="flex min-h-[78px] items-center justify-between px-5 md:min-h-[125px]">
                <img
                  src="/logo-uk.svg"
                  alt="logo"
                  className="h-12 md:h-[77px]"
                />
                <button
                  type="button"
                  className="relative h-[22px] w-7"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="absolute block h-0.5 w-full rotate-45 bg-black"></span>
                  <span className="absolute block h-0.5 w-full -rotate-45 bg-black"></span>
                </button>
              </div>
              <ul className="text-sm font-bold uppercase leading-5 text-black">
                {menuItems.map((item) => (
                  <li key={item.title}>
                    <a
                      data-action="close"
                      href={item.href}
                      className="group block py-4 px-5"
                    >
                      <span className="border-l-2 border-transparent pl-2 group-hover:border-l-primary-yellow">
                        {item.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col p-5">
                <a
                  href="#contact"
                  className="mx-auto mb-4 w-full max-w-[260px] bg-primary-yellow py-2 px-4 text-center font-bold uppercase text-black"
                >
                  Contact us
                </a>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <a data-action="close" href="#">
                      <img src="/instagram-icon.svg" alt="" />
                    </a>
                    <a data-action="close" href="#">
                      <img src="/facebook-icon.svg" alt="" />
                    </a>
                  </div>
                  <a
                    className="block py-1.5 px-2 hover:bg-primary-blue hover:text-white"
                    href="/en"
                    data-action="close"
                  >
                    EN
                  </a>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileMenu;
