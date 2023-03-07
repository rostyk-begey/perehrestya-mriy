import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

const tabs = {
  UAH: {
    IBAN: 'UA213052990000026004021027544',
    ЄДРПОУ: '44874701',
    'Назва банку': 'АТ КБ "Приватбанк"',
    Отримувач: 'БО БФ Перехрестя Мрій',
    'Призначення платежу': 'Благодійна пожертва',
  },
  USD: {
    IBAN: 'USD',
    ЄДРПОУ: '44874701',
    'Назва банку': 'АТ КБ "Приватбанк"',
    Отримувач: 'БО БФ Перехрестя Мрій',
    'Призначення платежу': 'Благодійна пожертва',
  },
  EUR: {
    IBAN: 'EUR',
    ЄДРПОУ: '44874701',
    'Назва банку': 'АТ КБ "Приватбанк"',
    Отримувач: 'БО БФ Перехрестя Мрій',
    'Призначення платежу': 'Благодійна пожертва',
  },
};

const Requisites = () => {
  return (
    <Tab.Group as="div" className="space-y-4">
      <p>Бажаєте долучитись до збору коштів? Наші реквізити:</p>
      <Tab.List className="flex gap-1.5">
        {Object.keys(tabs).map((tab) => (
          <Tab as={Fragment} key={tab}>
            {({ selected }) => (
              <button
                className={`border border-primary-yellow py-1 px-2.5 ${
                  selected ? 'bg-primary-yellow' : 'hover:bg-primary-yellow'
                }`}
              >
                {tab}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <div className="flex flex-wrap justify-between gap-5">
        <Tab.Panels as={Fragment}>
          {Object.values(tabs).map((data) => (
            <Tab.Panel>
              <ul>
                {Object.entries(data).map(([key, value]) => (
                  <li key={key}>
                    {key}: <strong>{value}</strong>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
        <div className="flex max-w-[273px] items-center gap-6">
          <p className="text-xs">
            QR-код для швидкого переказу через Приват24:
          </p>
          <img src="/images/Pryvat-QR-code.png" alt="" />
        </div>
      </div>
    </Tab.Group>
  );
};

export default Requisites;
