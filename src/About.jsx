import React from 'react'
import n from './assets/img/n.jpg'

export const About = () => {
  return (
    <>
    <div className="margen_total">
        <main className="profile" id="profile">
        <div className="profile_wrapper">
            <div className="profile_img-container">
                <img src={n} alt="yo" className="profile_img"/>
            </div>
            <div className="profile_data-container">
                <div className="profile-data">
                    <div className="profile_description">
                        <h1>¿Quién soy?</h1>
                        <p>Mi Nombre es Agustin Violante, soy <span> FrontEnd Developer </span> tengo un año de experiencia en HTML, CSS y Javascript, me gusta aprender cosas nuevas, y siempre intento mejorar en lo que hago. </p>
                    </div>
                    <div className="profile_skills">
                        <h2>SKILLS</h2>
                        <ul>
                            <li className="profile_skill">
                                <div className="load-bar">
                                    <div className="load-bar-bar bar--80">80%</div>
                                </div>
                                <span className="profile_skill-name">HTML</span>
                            </li>
                            <li className="profile_skill">
                                <div className="load-bar">
                                    <div className="load-bar-bar bar--80">80%</div>
                                </div>
                                <span className="profile_skill-name">CSS</span>
                            </li>
                            <li className="profile_skill">
                                <div className="load-bar">
                                    <div className="load-bar-bar bar--60">60%</div>
                                </div>
                                <span className="profile_skill-name">JavaScript</span>
                            </li>
                            <li className="profile_skill">
                                <div className="load-bar">
                                    <div className="load-bar-bar bar--50">50%</div>
                                </div>
                                <span className="profile_skill-name">React</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
    </>
  )
}
