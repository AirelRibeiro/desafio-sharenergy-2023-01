import { useEffect, useState } from 'react';
import { requestRandomDogs } from '../services/helpers/apiRequests';

export default function RandomDogs() {
  const [urlDog, setUrlDog] = useState(
    'https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700'
  );
  const [isVideo, setIsVideo] = useState(false);

  const requestUsers = async () => {
    setUrlDog(
      'https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700'
    );
    const url = await requestRandomDogs()
      .then((data) => data.url)
      .catch((err) => console.log(err));
    if (url.endsWith('.mp4')) {
      setIsVideo(true);
    } else {
      setIsVideo(false);
    }
    setUrlDog(url);
  };

  useEffect(() => {
    requestUsers();
  }, []);

  return (
    <>
      <div className="mx-auto rounded sm:h-4/5 flex flex-col sm:flex-row sm:justify-evenly sm:items-center sm:bg-white sm:pt-8">
        <div className="h-full max-w-lg flex sm:items-center bg-alga bg-opacity-60 rounded-xl p-4">
          {isVideo ? (
            <video
              id="videoBanner"
              className="sm:h-4/5 mx-auto sm:mx-0"
              loop
              autoPlay
            >
              <source src={urlDog} type="video/mp4"></source>
            </video>
          ) : (
            <img
              className="sm:h-4/5 mx-auto sm:mx-0"
              src={urlDog}
              alt="Imagem de cachorro gerada aleatoriamente"
            />
          )}
        </div>
        <div className=" mt-6 sm:mt-0 mx-auto sm:mx-0">
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-alga hover:bg-lima focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-alga"
            onClick={requestUsers}
          >
            Novo doguinho
          </button>
        </div>
      </div>
    </>
  );
}
