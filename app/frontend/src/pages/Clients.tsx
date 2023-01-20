import { PlusIcon } from '@heroicons/react/24/outline';
import { ChangeEvent, useState } from 'react';
import ClientForm from '../components/usersAndClients/onlyClients/ClientForm';
import Sidebar from '../components/usersAndClients/onlyClients/Sidebar';

export default function Clients() {
  const [openNewCliente, setOpenNewClient] = useState(false);
  const [address, setAddress] = useState({
    street: '',
    city: '',
    stateAndCountry: '',
    cep: '',
  });
  const [userInformation, setUserInformation] = useState({
    name: '',
    username: '',
    email: '',
    cpf: '',
    phone: '',
  });

  const handleChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInformation({ ...userInformation, [name]: value });
  };

  const handleChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  return (
    <div className="border border-red-500 border-3 h-full">
      <button
        type="button"
        onClick={() => setOpenNewClient(true)}
        className="inline-flex items-center rounded-md border border-transparent bg-alga px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lima focus:outline-none focus:ring-2 focus:ring-lima focus:ring-offset-2"
      >
        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        Novo cliente
      </button>

      <Sidebar
        title="Cadastro de pessoas usuárias"
        children={
          <ClientForm
            userInformation={userInformation}
            changesFunction={{ handleChangeUser, handleChangeAddress }}
            address={address}
          />
        }
        open={openNewCliente}
        setOpen={setOpenNewClient}
      />
    </div>
  );
}
