import "../styles/pasosStyles.scss";

export const Pasos = () => {
  return (
    <div className='pasos__progreso'>
        <button className='pasos__progreso--1 btn btn-primary' type="button" >1</button>
        <p className='pasos__progreso--plans'>Planes y coberturas</p>
        <p className='pasos__progreso--points'>....</p>
        <button className='pasos__progreso--2 btn btn-outline-secondary' type="button" >2</button>
        <p className='pasos__progreso--resumen'>Resumen</p>

    </div>
  )
}
