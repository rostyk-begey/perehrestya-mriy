import { Fragment, useState, MouseEvent, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { cva, cx } from 'class-variance-authority';

const enterFrom = cva(['transition opacity-0'], {
  variants: {
    variant: {
      slideInLeft: ' -translate-x-full',
      zoomIn: ' scale-95',
    },
  },
});

const enterTo = cva(['transition opacity-100'], {
  variants: {
    variant: {
      slideInLeft: ' translate-x-0',
      zoomIn: ' scale-100',
    },
  },
});

const leaveFrom = cva(['transition opacity-100'], {
  variants: {
    variant: {
      slideInLeft: ' translate-x-0',
      zoomIn: ' scale-100',
    },
  },
});

const leaveTo = cva(['transition opacity-0'], {
  variants: {
    variant: {
      slideInLeft: ' -translate-x-full',
      zoomIn: ' scale-95',
    },
  },
});

const Modal = ({
  target,
  children,
  className,
  rootClassName,
  variant = 'slideInLeft',
}: {
  target: ({ onClick }: { onClick: () => void }) => ReactNode;
  children: ReactNode;
  className?: string;
  rootClassName?: string;
  variant?: 'slideInLeft' | 'zoomIn';
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    document.documentElement.style.overflow = 'hidden';
    setIsOpen(true);
  };

  const handleClose = () => {
    document.documentElement.style.overflow = 'auto';
    setIsOpen(false);
  };

  const handleChildrenClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-close-modal]')) {
      handleClose();
    }
  };

  return (
    <>
      {target({ onClick: handleOpen })}
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          onClose={handleClose}
          className={cx(
            'fixed top-0 z-50 flex h-[100dvh] w-full',
            rootClassName,
          )}
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
            <div className="fixed inset-0 bg-primary-blue/[.85]" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition duration-500 ease-out"
            enterFrom={enterFrom({ variant })}
            enterTo={enterTo({ variant })}
            leave="transition duration-500 ease-out"
            leaveFrom={leaveFrom({ variant })}
            leaveTo={leaveTo({ variant })}
          >
            <Dialog.Panel className={className} onClick={handleChildrenClick}>
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

Modal.CloseButton = ({ onClick }: { onClick?: () => void }) => (
  <button
    type="button"
    className="relative flex h-[40px] w-[40px] flex-col items-center justify-center"
    onClick={onClick}
    data-close-modal
  >
    <span className="absolute block h-0.5 w-[23px] rotate-45 bg-black" />
    <span className="absolute block h-0.5 w-[23px] -rotate-45 bg-black" />
  </button>
);

export default Modal;
