import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import HttpCats from '../components/httpCats/HttpCats';
import SelectFilter from '../components/httpCats/SelectHttp';
import { statusHttp } from '../constants';

export default function HttpStatus() {
  const [selected, setSelected] = useState(statusHttp[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow sm:rounded-lg h-4/6 bg-randomCat bg-no-repeat bg-cover bg-center">
      <div className="px-4 py-5 sm:pt-6 sm:mt-2 flex flex-col sm:flex-row justify-center sm:gap-8 sm:items-center">
        <SelectFilter selected={selected} setSelected={setSelected} />
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-transparent w-fit m-auto sm:m-0 bg-alga sm:px-4 sm:py-2 sm:text-base px-2.5 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-lima focus:outline-none focus:ring-2 focus:ring-alga focus:ring-offset-2"
          onClick={() => setOpen(true)}
        >
          <MagnifyingGlassIcon className="mr-2 h-5 w-5" aria-hidden="true" />
          Buscar
        </button>
      </div>
      <HttpCats open={open} setOpen={setOpen} catStatus={selected} />
    </div>
  );
}
