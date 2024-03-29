import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import Modal from './Modal';
import { instagramUrl } from '../lib/content';

const MobileMenu = ({
  menuItems,
  supportedLanguages,
}: {
  supportedLanguages: Record<string, string>;
  menuItems: {
    title: string;
    href: string;
  }[];
}) => {
  const { t } = useTranslation('translation', { i18n });
  return (
    <Modal
      className="flex h-full w-[75vw] max-w-[300px] flex-col bg-white shadow-2xl"
      target={({ onClick }) => (
        <button
          type="button"
          className="w-7 space-y-2 lg:hidden"
          onClick={onClick}
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-full bg-black"></span>
          <span className="block h-0.5 w-full bg-black"></span>
          <span className="block h-0.5 w-full bg-black"></span>
        </button>
      )}
    >
      <div className="flex min-h-[78px] items-center justify-between px-5 md:min-h-[125px]">
        <img
          src={
            t('navigation.logoUrl', { defaultValue: '/images/logo-uk.svg' }) ||
            ''
          }
          alt="logo"
          className="h-12 md:h-[77px]"
        />
        <Modal.CloseButton />
      </div>
      <ul className="text-sm font-bold uppercase leading-5 text-black">
        {menuItems.map((item) => (
          <li key={item.title}>
            <a
              data-close-modal
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
            <a data-close-modal href={instagramUrl} aria-label="Instagram link">
              <img src="/images/instagram-icon.svg" alt="" />
            </a>
            {/* <a data-close-modal href="#">
              <img src="/images/facebook-icon.svg" alt="" />
            </a> */}
          </div>
          {Object.entries(supportedLanguages).map(([key, value]) => (
            <a
              key={key}
              className="block py-1.5 px-2 uppercase hover:bg-primary-blue hover:text-white"
              href={value}
              data-close-modal
            >
              {key}
            </a>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default MobileMenu;
