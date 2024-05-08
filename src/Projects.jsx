import AppClima from './assets/img/AppClima.png'
import Buscadordepelis from './assets/img/Buscadordepelis.png'
import cronometro from './assets/img/cronometro.png'

export const Projects = () => {
  return (
    <>
    <div className="container">
    <div className="box1"><img src={AppClima} alt="Proyecto App Clima" /></div>
    <div className="box2"><img src={Buscadordepelis} alt="Proyecto Buscador de peliculas" /></div>
    <div className="box3"><img src={cronometro} alt="proyecto cronometro" /></div>
    </div>
    </>
  )
}
