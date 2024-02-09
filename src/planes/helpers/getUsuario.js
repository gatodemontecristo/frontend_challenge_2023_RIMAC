
export const getUsuario = async() => {
       const url = `https://rimac-front-end-challenge.netlify.app/api/user.json`;
       try {
          const resp = await fetch(url);
          const usuario = await resp.json();
    
          return usuario;
        } catch (err) {
          console.log(err);
          return {};
        }
  
    
  }
  