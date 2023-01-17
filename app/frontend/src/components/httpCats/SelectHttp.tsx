import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { statusHttp } from '../../constants';
import { ISelectHttpProps } from '../../services/interfaces';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function SelectFilter({
  selected,
  setSelected,
}: ISelectHttpProps) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-1 sm:w-3/5 mb-2 sm:mb-0">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-2 px-2 sm:pl-3 sm:pr-10 text-sm shadow-sm  focus:outline-none focus:ring-2 focus:ring-alga sm:text-sm border border-middlegray">
              <span className="text-middlegray hidden md:inline-block sm:font-bold absolute inset-y-0 left-0 ml-2.5 mt-3">
                Escolha um gatinho:
              </span>
              <span className="block truncate sm:text-xl pr-4">{`${selected.value} - ${selected.name}`}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm text-center shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                {statusHttp.map((status) => (
                  <Listbox.Option
                    key={status.value}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-alga' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={status}
                  >
                    {({ selected, active }) => (
                      <>
                        <h1
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate text-sm sm:text-xl'
                          )}
                        >
                          {`${status.value} - ${status.name}`}
                        </h1>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-alga',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-7 w-7" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
