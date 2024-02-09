import { useEffect, useState } from 'react';

export const useFetchUser = (id) => {
    const [usuario, setusuario] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const getUser = async () => {
        const usarioNuevo = await getUser();
        setusuario(usarioNuevo);
        setIsLoading(false);
      };

      useEffect(() => {
        getUser();
      }, []);

  return  {usuario,isLoading}
  
}
