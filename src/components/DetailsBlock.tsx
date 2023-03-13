import type { ReactNode } from 'react';
import Modal from './Modal';
import { content } from '../lib/content';

const DetailsBlock = ({
  title,
  children,
  excerpt,
  theme,
  className = '',
}: {
  title: ReactNode;
  children: ReactNode;
  excerpt?: ReactNode;
  className?: string;
  theme: 'dark' | 'light' | 'white';
}) => {
  const bg = {
    dark: 'bg-primary-blue',
    light: 'bg-primary-blue-light',
    white: 'bg-white',
  }[theme];

  const text = {
    dark: 'text-white',
    light: 'text-white',
    white: 'text-black',
  }[theme];

  const cubePosition = {
    dark: 'bottom-0 left-0',
    light: 'top-0 right-0',
    white: '',
  }[theme];

  return (
    <article
      className={[
        'group relative relative flex flex-col p-7 sm:p-9 md:p-12',
        text,
        bg,
        theme,
        className,
      ].join(' ')}
    >
      <h3 className="mb-5 font-heading text-xl md:text-2xl">{title}</h3>
      <p className="mb-5 md:text-lg">{excerpt}</p>
      <Modal
        variant="zoomIn"
        rootClassName="sm:p-5 p-3"
        className="relative m-auto w-full max-w-2xl bg-white p-6 pr-3 md:p-10 md:pr-6"
        target={({ onClick }) => (
          <button
            type="button"
            onClick={onClick}
            className="ml-auto border border-primary-yellow py-2 px-4 text-xs font-bold uppercase text-primary-yellow group-[.white]:text-black"
          >
            Докладніше
          </button>
        )}
      >
        <div className="absolute top-2 right-2">
          <Modal.CloseButton />
        </div>
        <h3 className="mb-6 font-heading text-xl md:text-2xl">{title}</h3>
        <p className="mb-5 max-h-[500px] overflow-auto pr-3 text-base md:pr-6 md:text-lg">
          {children}
        </p>
        <a
          data-close-modal
          href="#join"
          className="bg-primary-yellow py-2 px-4 font-bold text-black"
        >
          долучитись до збору
        </a>
      </Modal>
      {['dark', 'light'].includes(theme) && (
        <div
          className={[
            'absolute h-[50px] w-[50px] bg-primary-yellow',
            cubePosition,
          ].join(' ')}
        />
      )}
    </article>
  );
};

export const DetailsBlock1 = ({ className }: { className: string }) => (
  <DetailsBlock
    theme="dark"
    className={className}
    title={
      <>
        Допомога <br />
        <b>захисникам</b>
      </>
    }
    excerpt={
      <>
        24 лютого 2022 року життя України змінилось назавжди. Того злощасного
        ранку наша країна прокинулась.
      </>
    }
  >
    {content}
  </DetailsBlock>
);

export const DetailsBlock2 = ({ className }: { className: string }) => (
  <DetailsBlock
    theme="white"
    className={className}
    title={
      <>
        Допомога на <br />
        <b>відбудову Харкова</b>
      </>
    }
    excerpt={
      <>
        24 лютого 2022 року життя України змінилось назавжди. Того злощасного
        ранку.
      </>
    }
  >
    {content}
  </DetailsBlock>
);

export const DetailsBlock3 = ({ className }: { className: string }) => (
  <DetailsBlock
    theme="light"
    className={className}
    title={
      <>
        Допомога <br />
        <b>постраждалим</b>
      </>
    }
    excerpt={
      <>
        24 лютого 2022 року життя України змінилось назавжди. Того злощасного
        ранку наша країна прокинулась від звуків російських обстрілів.
      </>
    }
  >
    {content}
  </DetailsBlock>
);
