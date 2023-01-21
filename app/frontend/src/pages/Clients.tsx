import { PlusIcon } from '@heroicons/react/24/outline';
import { ChangeEvent, useEffect, useState } from 'react';
import ClientDetails from '../components/usersAndClients/onlyClients/ClientDetails';
import ClientForm from '../components/usersAndClients/onlyClients/ClientForm';
import Sidebar from '../components/usersAndClients/onlyClients/Sidebar';
import Pagination from '../components/usersAndClients/Pagination';
import UsersView from '../components/usersAndClients/UsersView';
import { requestClients } from '../services/helpers/apiRequests';

export default function Clients() {
  const [openClienteForm, setOpenClientForm] = useState(false);
  const [openClientDetails, setOpenClientDetails] = useState(false);
  const [clientsToDisplay, setClientsToDisplay] = useState([]);
  const [clientId, setClientId] = useState('');
  const [page, setPage] = useState(1);
  const [typeForm, setTypeForm] = useState('');
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
    password: '',
  });

  const fetchClients = async () => {
    const results = await requestClients()
      .then((data) => data)
      .catch((err) => console.log(err));
    setClientsToDisplay(results);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInformation({ ...userInformation, [name]: value });
  };

  const handleChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  return (
    <div className="h-full">
      <button
        type="button"
        onClick={() => {
          setOpenClientForm(true);
          setTypeForm('create');
          setUserInformation({
            name: '',
            username: '',
            email: '',
            cpf: '',
            phone: '',
            password: '',
          });
          setAddress({
            street: '',
            city: '',
            stateAndCountry: '',
            cep: '',
          });
        }}
        className="inline-flex items-center rounded-md border border-transparent bg-alga px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lima focus:outline-none focus:ring-2 focus:ring-lima focus:ring-offset-2"
      >
        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        Novo cliente
      </button>

      <div className="mt-5">
        <UsersView
          usersToDisplay={clientsToDisplay}
          page={page}
          options={true}
          setAddressInfo={setAddress}
          setClientInfo={setUserInformation}
          setOpenForm={setOpenClientForm}
          setTypeForm={setTypeForm}
          setOpentDetails={setOpenClientDetails}
          setClientId={setClientId}
        />
        <Pagination
          page={page}
          setPage={setPage}
          totalDisplayed={30}
          totalUsers={clientsToDisplay.length}
        />
      </div>

      <Sidebar
        title={
          typeForm === 'create'
            ? 'Cadastro de pessoas usuárias'
            : 'Atualização de pessoa usuária'
        }
        children={
          <ClientForm
            userInformation={userInformation}
            changesFunction={{ handleChangeUser, handleChangeAddress }}
            address={address}
            typeForm={typeForm}
          />
        }
        open={openClienteForm}
        setOpen={setOpenClientForm}
      />
      <Sidebar
        title="Detalhes da pessoa usuária"
        children={<ClientDetails clientId={clientId} />}
        open={openClientDetails}
        setOpen={setOpenClientDetails}
      />
    </div>
  );
}
