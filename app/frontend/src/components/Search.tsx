import {
  MagnifyingGlassIcon,
  UsersIcon,
  TrashIcon,
} from '@heroicons/react/20/solid';
import { ISearchProps } from '../services/interfaces';

export default function Search({
  searchText,
  setSearchText,
  clearSearch,
  filterUsers,
}: ISearchProps) {
  return (
    <div className="mb-10">
      <label
        htmlFor="search_input"
        className="block text-sm font-medium text-gray-500"
      >
        Buscar pessoas usuárias
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="search_input"
            id="search_input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="block w-full rounded border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Busca por nome, email e username"
          />
        </div>
        <button
          type="button"
          onClick={filterUsers}
          className="relative mx-2 inline-flex items-center space-x-2 rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span>Buscar</span>
        </button>
        <button
          type="button"
          onClick={clearSearch}
          className="relative inline-flex items-center space-x-2 rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <TrashIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          <span>Limpar busca</span>
        </button>
      </div>
    </div>
  );
}
