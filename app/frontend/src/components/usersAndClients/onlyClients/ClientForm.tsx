import { IClientProps } from '../../../services/interfaces';

export default function ClientForm({
  userInformation,
  changesFunction,
  address,
}: IClientProps) {
  return (
    <div className="lg:grid-cols-12 lg:gap-x-5 w-full">
      <form action="#" method="POST">
        <div className="shadow sm:overflow-hidden sm:rounded-md">
          <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  placeholder="Agnes Yreh"
                  value={userInformation.name}
                  onChange={changesFunction.handleChangeUser}
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-alga focus:outline-none focus:ring-lima sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  placeholder="agyreh"
                  value={userInformation.username}
                  onChange={changesFunction.handleChangeUser}
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-alga focus:outline-none focus:ring-lima sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  placeholder="agnes.yreh@email.com"
                  value={userInformation.email}
                  onChange={changesFunction.handleChangeUser}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-alga focus:ring-lima sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Telefone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="phone"
                  placeholder="23991234567"
                  value={userInformation.phone}
                  onChange={changesFunction.handleChangeUser}
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-alga focus:outline-none focus:ring-lima sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="cpf"
                  className="block text-sm font-medium text-gray-700"
                >
                  CPF
                </label>
                <input
                  type="text"
                  name="cpf"
                  id="cpf"
                  autoComplete="cpf"
                  placeholder="12345678910"
                  value={userInformation.cpf}
                  onChange={changesFunction.handleChangeUser}
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-alga focus:outline-none focus:ring-lima sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="street"
                  className="block text-sm font-medium text-gray-700"
                >
                  Endereço
                </label>
                <input
                  type="text"
                  name="street"
                  id="street"
                  autoComplete="street"
                  placeholder="Av. do Contorno, 2905. Santa Efigênia"
                  value={address.street}
                  onChange={changesFunction.handleChangeAddress}
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-alga focus:outline-none focus:ring-lima sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cidade
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  placeholder="Belo Horizonte"
                  value={address.city}
                  onChange={changesFunction.handleChangeAddress}
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-alga focus:outline-none focus:ring-lima sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700"
                >
                  Estado / País
                </label>
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  placeholder="Minas Gerais/BR"
                  value={address.stateAndCountry}
                  onChange={changesFunction.handleChangeAddress}
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-alga focus:outline-none focus:ring-lima sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="cep"
                  className="block text-sm font-medium text-gray-700"
                >
                  CEP
                </label>
                <input
                  type="text"
                  name="cep"
                  id="cep"
                  autoComplete="cep"
                  placeholder="30110915"
                  value={address.cep}
                  onChange={changesFunction.handleChangeAddress}
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-alga focus:outline-none focus:ring-lima sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-alga py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lima focus:outline-none focus:ring-2 focus:ring-middlegray focus:ring-offset-2"
            >
              Salvar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
