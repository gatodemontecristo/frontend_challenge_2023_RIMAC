import { useEffect, useState } from 'react';
import { getPlans } from '../helpers/getPlans';

export const useFetchPlans = () => {
    const [planes, setplanes] = useState([]);
    const [isLoading2, setIsLoading] = useState(true);


    const getPlanes = async () => {
        const planesArreglo = await getPlans();
        setplanes(planesArreglo);
        setIsLoading(false);
      };

      useEffect(() => {
        getPlanes();
      }, []);

  return  {planes,isLoading2}
  
}
