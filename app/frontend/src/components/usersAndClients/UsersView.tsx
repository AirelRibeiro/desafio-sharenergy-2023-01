import { EnvelopeIcon } from '@heroicons/react/20/solid';
import { IUsersViewProps } from '../../services/interfaces';

export default function UsersView({
  usersToDisplay,
  page,
  options,
}: IUsersViewProps) {
  return (
    <>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {usersToDisplay.length ? (
          usersToDisplay.slice((page - 1) * 30, page * 30).map((user) => (
            <li
              key={user.id}
              className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
            >
              <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 ">
                  <div className="flex items-center space-x-3">
                    <h3 className=" text-sm font-medium text-gray-900">
                      {user.name}
                    </h3>
                    {user.age && (
                      <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                        {`${user.age} anos`}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{user.username}</p>
                </div>
                {user.image ? (
                  <img
                    className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                    src={user.image}
                    alt={`Foto de ${user.name}`}
                  />
                ) : (
                  <div className="bg-lima flex-shrink-0 flex items-center justify-center w-16 text-middlegray text-sm font-medium rounded-l-md">
                    {user.name[0]}
                  </div>
                )}
              </div>
              {options && (
                <span className="isolate inline-flex rounded-md shadow-sm">
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  >
                    Ver detalhes
                  </button>
                  <button
                    type="button"
                    className="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  >
                    Atualizar
                  </button>
                  <button
                    type="button"
                    className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  >
                    Apagar
                  </button>
                </span>
              )}
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1">
                    <p className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                      <EnvelopeIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">{user.email}</span>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p>Carregando</p>
        )}
      </ul>
    </>
  );
}
