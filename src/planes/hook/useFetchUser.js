import { useEffect, useState } from 'react';
import { getUsuario } from '../helpers/getUsuario';

export const useFetchUser = () => {
    const [usuario, setusuario] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const getUser = async () => {
        const usarioNuevo = await getUsuario();
        setusuario(usarioNuevo);
        setIsLoading(false);
      };

      useEffect(() => {
        getUser();
      }, []);

  return  {usuario,isLoading}
  
}
