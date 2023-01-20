import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/solid';
import { IPaginationProps } from '../../services/interfaces';
export default function Pagination({
  page,
  setPage,
  totalDisplayed,
  totalUsers,
}: IPaginationProps) {
  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-4">
      <div className="-mt-px flex w-0 flex-1">
        <button
          className="inline-flex items-center rounded-md border border-transparent bg-middlegray px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-lima focus:ring-offset-2 disabled:hidden mb-4"
          disabled={page < 2}
          onClick={() => setPage(page - 1)}
        >
          <ArrowLongLeftIcon
            className="mr-3 h-5 w-5 text-gray-300"
            aria-hidden="true"
          />
          Anterior
        </button>
      </div>
      <div className="hidden md:-mt-px sm:flex">
        <span className="inline-flex items-center rounded-full border border-transparent bg-gray-300 py-1 px-3 text-middlegray shadow-sm focus:outline-none focus:ring-2 focus:ring-lima focus:ring-offset-2">
          {page}
        </span>
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <button
          className="inline-flex items-center rounded-md border border-transparent bg-middlegray px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-lima focus:ring-offset-2 mb-4 disabled:hidden"
          disabled={page * totalDisplayed - 1 > totalUsers}
          onClick={() => setPage(page + 1)}
        >
          Próxima
          <ArrowLongRightIcon
            className="ml-3 h-5 w-5 text-gray-300"
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>
  );
}
