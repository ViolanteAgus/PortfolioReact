import AppClima from './assets/img/AppClima.png'
import Buscadordepelis from './assets/img/Buscadordepelis.png'
import cronometro from './assets/img/cronometro.png'

export const Projects = () => {
  return (
    <>
      <h1 id="titleProjects">Projects</h1>
    <div className="container">
      <div className="card">
        <div className="face front">
          <img src={AppClima} alt="Aplicacion del clima" />
          <h3>Aplicación del clima</h3>
        </div>
        <div className="face back">
          <h3>Aplicación del clima</h3>
          <p>Aplicacion para ver el clima en distintas ciudades, hecha con la llamada a una API desde React y utilizando css</p>
          <div className="link">
          <a href="https://github.com/ViolanteAgus/Clima-React" target='_blank'>Github</a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="face front">
          <img src={Buscadordepelis} alt="Buscador de peliculas" />
          <h3>Aplicación para buscar peliculas</h3>
        </div>
        <div className="face back">
          <h3>Aplicación para buscar peliculas</h3>
          <p>Aplicación para buscar peliculas, hecha con la llamada a una API desde React  y utilizando css</p>
          <div className="link">
          <a href="https://github.com/ViolanteAgus/Clima-React" target='_blank'>Github</a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="face front">
          <img src={cronometro} alt="Cronometro" />
          <h3>Cronometro</h3>
        </div>
        <div className="face back">
          <h3>Cronometro</h3>
          <p>Cronometro hecho con JavaScript, css y html</p>
          <div className="link">
          <a href="https://github.com/ViolanteAgus/Cronometro" target='_blank'>Github</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
