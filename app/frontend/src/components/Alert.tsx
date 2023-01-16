import { XMarkIcon } from '@heroicons/react/24/solid';
import { IAlertProps } from '../services/interfaces';

export default function Alert({ message, closeAlert }: IAlertProps) {
  return (
    <div
      id="alert-2"
      className="mb-4 flex w-2/5 sm:w-fit self-center rounded-lg shadow ring-opacity-40 ring-lima ring-1 p-4 bg-white"
      role="alert"
    >
      <p className="mx-3 text-center text-sm font-medium text-alga">
        {message}
      </p>
      <button
        type="button"
        className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 text-middlegray hover:bg-lima focus:ring-2 focus:ring-lima"
        data-dismiss-target="#alert-2"
        aria-label="Close"
        onClick={closeAlert}
      >
        <span className="sr-only">Close</span>
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
