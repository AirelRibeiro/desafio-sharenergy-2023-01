import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import { requestLogin } from '../services/helpers/apiRequests';
import { recoverData, saveData } from '../services/helpers/storageFunctions';
import { isTokenExpired } from '../services/helpers/verificationFunctions';
import Alert from '../components/Alert';

export default function Login() {
  const [user, setUser] = useState({ username: '', password: '' });
  const [remember, setRemember] = useState(false);
  const [requestFailed, setRequestFailed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userPreferences = recoverData();
    if (!userPreferences || userPreferences.remember === false) return;
    if (!isTokenExpired(userPreferences.token)) return navigate('/users');
    localStorage.removeItem('userPreferences');
  }, [navigate]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const login = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    return requestLogin(user)
      .then((data) => {
        saveData({
          token: data.token,
          remember,
        });
        return navigate('/users');
      })
      .catch((err) => {
        console.log(err);
        setRequestFailed(true);
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        {requestFailed && (
          <Alert
            message="Falha no login. Verifique os dados e tente novamente!"
            closeAlert={() => setRequestFailed(!setRequestFailed)}
          />
        )}
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-12 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-lima">
            Airel & Sharenergy
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-middlegray"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-middlegray"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-alga focus:ring-alga"
                    onChange={() => setRemember(!remember)}
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm font-medium text-middlegray"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-alga py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  onClick={login}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
