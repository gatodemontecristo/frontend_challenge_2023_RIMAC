
export const getPlans = async() => {
    const url = `https://rimac-front-end-challenge.netlify.app/api/plans.json`;
    try {
       const resp = await fetch(url);
       const { list } = await resp.json();
       const planes = list;
 
       return planes;
     } catch (err) {
       console.log(err);
       return [];
     }

 
}
