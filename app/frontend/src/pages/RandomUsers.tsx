import { EnvelopeIcon } from '@heroicons/react/20/solid';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import Alert from '../components/Alert';
import Search from '../components/usersAndClients/Search';
import UsersView from '../components/usersAndClients/UsersView';
import { requestRandomUsers } from '../services/helpers/apiRequests';
import {
  filterUsers,
  formatsUsers,
} from '../services/helpers/auxiliaryFunctions';
import { IUsers } from '../services/interfaces';

export default function RandomUsers() {
  const [users, setUsers] = useState<IUsers[]>([]);
  const [usersToDisplay, setUsersToDisplay] = useState<IUsers[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const requestUsers = async () => {
      const results = await requestRandomUsers()
        .then((data) => data.results)
        .catch((err) => console.log(err));
      const formattedUsers = formatsUsers(results);
      setUsers(formattedUsers);
      setUsersToDisplay(formattedUsers);
      setLoading(false);
    };
    requestUsers();
  }, []);

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
        filterUsers={() =>
          filterUsers(users, search, {
            setUsersToDisplay,
            setPage,
            setNotFound,
          })
        }
      />
      <UsersView usersToDisplay={usersToDisplay} page={page} options={false} />
    </>
  );
}
