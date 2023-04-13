import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

const Requisites = ({
  caption,
  qrCodeCaption,
  tabs,
}: {
  caption: string;
  qrCodeCaption: string;
  tabs: Record<string, [string, string][]>;
}) => {
  return (
    <Tab.Group as="div" className="space-y-4">
      <p>{caption}</p>
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
          {Object.values(tabs).map((data, i) => (
            <Tab.Panel key={i}>
              <ul>
                {data.map(([key, value]) => (
                  <li key={key + value}>
                    {key}: <strong>{value}</strong>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default Requisites;
