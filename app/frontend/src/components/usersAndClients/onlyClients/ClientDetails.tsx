import { useEffect, useState } from 'react';
import {
  requestDeletClient,
  requestSingleClient,
} from '../../../services/helpers/apiRequests';
import { parsePhoneNumber } from 'libphonenumber-js';
import { cpf } from 'cpf-cnpj-validator';

export default function ClientDetails({ clientId }: any) {
  const [client, setClient] = useState({
    _id: '',
    name: '',
    email: '',
    phone: '',
    cpf: '',
    username: '',
    address: {
      street: '',
      city: '',
      stateAndCountry: '',
      cep: '',
    },
  });

  const recoverClient = async () => {
    const data = await requestSingleClient(clientId);
    console.log(data);

    setClient(data);
  };

  useEffect(() => {
    recoverClient();
  }, []);

  return (
    <div>
      {client.name !== '' ? (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {client.name.split(' ')[0]}
            </h3>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Nome</dt>
                <dd className="mt-1 text-sm text-gray-900">{client.name}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Username</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {client.username}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900">{client.email}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Telefone</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {parsePhoneNumber(client.phone, 'BR').formatNational()}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">CPF</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {cpf.format(client.cpf)}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Endereço</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {`Residente em ${client.address.street}. Cidade de ${client.address.city}, em ${client.address.stateAndCountry}.`}
                </dd>
                <dd className="mt-1 text-sm text-gray-900">
                  {`CEP: ${client.address.cep}`}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Opções</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                      <span className="flex rounded-md self-center justify-center w-full shadow-sm gap-4">
                        <button
                          type="button"
                          className="relative inline-flex rounded-md items-center border border-alga bg-alga px-4 py-2 text-sm font-medium text-white hover:bg-middlegray focus:z-10 focus:border-lima focus:outline-none focus:ring-1 focus:ring-lime-200"
                          onClick={() =>
                            alert('Funcionalidade a ser implementada.')
                          }
                        >
                          Atualizar
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            return requestDeletClient(client._id)
                              .then(() => {
                                alert('Pessoa usuária excluída com sucesso');
                                window.location.reload();
                              })
                              .catch((err) => alert(err.response.data.message));
                          }}
                          className="relative rounded-md inline-flex items-center border border-alga bg-alga px-4 py-2 text-sm font-medium text-white hover:bg-middlegray focus:z-10 focus:border-lima focus:outline-none focus:ring-1 focus:ring-lime-200"
                        >
                          Apagar
                        </button>
                      </span>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      ) : null}
    </div>
  );
}
