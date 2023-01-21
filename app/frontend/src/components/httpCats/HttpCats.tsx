import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IHttpCatsProps } from '../../services/interfaces';

export default function HttpCats({ open, setOpen, catStatus }: IHttpCatsProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 m-auto" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex flex-col w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <h1 className="my-3 text-center sm:text-3xl text-lg font-bold tracking-tight text-middlegray">
                    {catStatus.name}
                  </h1>
                  <img
                    src={`https://http.cat/${catStatus.value}`}
                    alt="Imagem de gato com status HTTP"
                    className="mx-auto self-center"
                  />
                  <div className="sm:col-span-8 lg:col-span-7">
                    <section aria-labelledby="options-heading" className="mt-8">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="mt-8 flex items-center justify-center rounded-md border border-transparent bg-alga :smpy-3 sm:px-8 sm:text-base font-medium px-2.5 py-1.5 text-sm text-white hover:lima focus:outline-none focus:ring-2 focus:ring-alga focus:ring-offset-2"
                      >
                        Escolher outro Status
                      </button>
                    </section>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
