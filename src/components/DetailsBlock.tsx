import i18n from 'i18next';
import { Trans, useTranslation } from 'react-i18next';
import type { ReactNode } from 'react';
import Modal from './Modal';

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
  const { t } = useTranslation('translation', { i18n });
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
            {t('directions.readMore')}
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
          {t('directions.joinButton')}
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

export const DetailsBlock1 = ({ className }: { className: string }) => {
  const { t } = useTranslation('translation', { i18n });

  return (
    <DetailsBlock
      theme="dark"
      className={className}
      title={
        <Trans i18n={i18n} i18nKey="directions.items.0.title">
          Допомога
          <b>захисникам</b>
        </Trans>
      }
      excerpt={t('directions.items.0.excerpt')}
    >
      {t('directions.items.0.content')}
    </DetailsBlock>
  );
};

export const DetailsBlock2 = ({ className }: { className: string }) => {
  const { t } = useTranslation('translation', { i18n });

  return (
    <DetailsBlock
      theme="white"
      className={className}
      title={
        <Trans i18n={i18n} i18nKey="directions.items.1.title">
          Допомога на
          <b>відбудову Харкова</b>
        </Trans>
      }
      excerpt={t('directions.items.1.excerpt')}
    >
      {t('directions.items.1.content')}
    </DetailsBlock>
  );
};

export const DetailsBlock3 = ({ className }: { className: string }) => {
  const { t } = useTranslation('translation', { i18n });

  return (
    <DetailsBlock
      theme="light"
      className={className}
      title={
        <Trans i18n={i18n} i18nKey={`directions.items.${2}.title` as const}>
          Допомога
          <b>постраждалим</b>
        </Trans>
      }
      excerpt={t('directions.items.2.excerpt')}
    >
      {t('directions.items.2.content')}
    </DetailsBlock>
  );
};
