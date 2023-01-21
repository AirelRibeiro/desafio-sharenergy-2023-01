import { EnvelopeIcon } from '@heroicons/react/20/solid';
import { requestDeletClient } from '../../services/helpers/apiRequests';
import { IUsersViewProps } from '../../services/interfaces';

export default function UsersView({
  usersToDisplay,
  page,
  options,
  setClientInfo,
  setAddressInfo,
  setOpenForm,
  setTypeForm,
  setClientId,
  setOpentDetails,
}: IUsersViewProps) {
  const updateClient = (client: any) => {
    if (setAddressInfo && setClientInfo && setOpenForm && setTypeForm) {
      const { address, ...clientInformation } = client;
      setClientInfo(clientInformation);
      setAddressInfo(address);
      setOpenForm(true);
      setTypeForm('update');
    }
  };

  return (
    <>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {usersToDisplay.length ? (
          usersToDisplay.slice((page - 1) * 30, page * 30).map((user) => (
            <li
              key={user.id || user._id}
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
                  <div className="bg-lima h-10 w-10 flex items-center justify-center text-middlegray text-sm font-medium rounded-full">
                    {user.name[0]}
                  </div>
                )}
              </div>
              {options && (
                <span className="flex rounded-md self-center justify-center w-full shadow-sm">
                  <button
                    type="button"
                    onClick={() => {
                      if (setOpentDetails && setClientId) {
                        setClientId(user._id);
                        setOpentDetails(true);
                      }
                    }}
                    className="relative inline-flex items-center rounded-l-md border border-lima bg-white px-4 py-2 text-sm font-medium text-middlegray hover:bg-gray-50 focus:z-10 focus:border-alga focus:outline-none focus:ring-1 focus:ring-lime-200"
                  >
                    Ver detalhes
                  </button>
                  <button
                    type="button"
                    className="relative -ml-px inline-flex items-center border border-lima bg-white px-4 py-2 text-sm font-medium text-middlegray hover:bg-gray-50 focus:z-10 focus:border-alga focus:outline-none focus:ring-1 focus:ring-lime-200"
                    onClick={() => updateClient(user)}
                  >
                    Atualizar
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      return requestDeletClient(user._id)
                        .then(() => {
                          alert('Pessoa usuária excluída com sucesso');
                          window.location.reload();
                        })
                        .catch((err) => alert(err.response.data.message));
                    }}
                    className="relative -ml-px inline-flex items-center rounded-r-md border border-lima bg-white px-4 py-2 text-sm font-medium text-middlegray hover:bg-gray-50 focus:z-10 focus:border-alga focus:outline-none focus:ring-1 focus:ring-lime-200"
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
