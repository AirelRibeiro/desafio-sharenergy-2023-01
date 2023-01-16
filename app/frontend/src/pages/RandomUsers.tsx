import { EnvelopeIcon } from '@heroicons/react/20/solid';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import Alert from '../components/Alert';
import Search from '../components/Search';
import { requestRandomUsers } from '../services/helpers/apiRequests';
import { IResult } from '../services/interfaces';

export default function RandomUsers() {
  const [users, setUsers] = useState<IResult[]>([]);
  const [usersToDisplay, setUsersToDisplay] = useState<IResult[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const requestUsers = async () => {
      const results = await requestRandomUsers()
        .then((data) => data.results)
        .catch((err) => console.log(err));
      setUsers(results);
      setUsersToDisplay(results);
    };
    requestUsers();
  }, []);

  const filterUsers = () => {
    const filteredUsers = [...users].filter((u) => {
      return (
        u.email.includes(search) ||
        u.login.username.includes(search) ||
        u.name.first.includes(search) ||
        u.name.last.includes(search)
      );
    });
    if (filterUsers.length) {
      setUsersToDisplay(filteredUsers);
      setPage(1);
    } else {
      setNotFound(true);
    }
  };

  const clearSearch = () => {
    setSearch('');
    setUsersToDisplay([...users]);
    setPage(1);
  };

  return (
    <>
      {notFound && (
        <Alert
          message="Nenhuma pessoa usuária correspondente encontrada!"
          closeAlert={() => setNotFound(!notFound)}
        />
      )}
      <Search
        searchText={search}
        setSearchText={setSearch}
        clearSearch={clearSearch}
        filterUsers={filterUsers}
      />

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {usersToDisplay.length ? (
          usersToDisplay.slice((page - 1) * 30, page * 30).map((user) => (
            <li
              key={user.login.uuid}
              className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
            >
              <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 ">
                  <div className="flex items-center space-x-3">
                    <h3 className=" text-sm font-medium text-gray-900">
                      {`${
                        user.name.title === 'Mrs'
                          ? 'Sra.'
                          : user.name.title === 'Mr'
                          ? 'Sr.'
                          : 'Srta.'
                      } ${user.name.first} ${user.name.last}`}
                    </h3>
                    <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                      {`${user.dob.age} anos`}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {user.login.username}
                  </p>
                </div>
                <img
                  className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                  src={user.picture.thumbnail}
                  alt={`Foto de ${user.name.first}`}
                />
              </div>
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
      <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-4">
        <div className="-mt-px flex w-0 flex-1">
          <button
            className="inline-flex items-center rounded-md border border-transparent bg-middlegray px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-lima focus:ring-offset-2 disabled:hidden"
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
            className="inline-flex items-center rounded-md border border-transparent bg-middlegray px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-200 focus:ring-offset-2 mt-4 disabled:hidden"
            disabled={page * 30 - 1 > usersToDisplay.length}
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
    </>
  );
}
