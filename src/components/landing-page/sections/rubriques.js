import React from 'react'
import "./sections.css"
import Foyer from "../../../assets/3rubrique/foyer.jpg"
import Ecole from "../../../assets/3rubrique/Ecole_palmier.jpg"
import CFI from "../../../assets/3rubrique/CFI.jpg"

export default function Rubriques() {
  const NavigateToRubrique = (id) => {
    window.location.href = "#"
  }

  return (
    <section className='mt-5 rubriques mx-5'>
      <div className='row w-100 '>
        <div className="col-12 col-md-6 col-lg-4">
          <div onClick={() => NavigateToRubrique()} className="card border-0 bg-transparent text-light h-100">
            <div className="card-header bg-transparent border-0">
              <img src={Foyer} className="card-img-custom rounded" alt="Foyer" />
            </div>
            <div className='card-body d-flex flex-column'>
              <h5 className="text-center fw-bold"><u>Foyer</u></h5>
              <p>
                Le Foyer Bab Rayan est un établissement de protection sociale (EPS) agréé et sous la tutelle du Ministère de la Solidarité, de l’Insertion Sociale et de la Famille.
                Le premier pavillon du Foyer Bab Rayan a ouvert ses portes en septembre 2015 et est habilité à accueillir des enfants orphelins, abandonnés, en situation difficile ou maltraités à partir de 3 ans jusqu’à l’âge de 18 ans, souvent envoyés par d'autres organisations.
              </p>
              <p className='mt-auto text-center'>
                <button className='btn'>Découvrir Plus</button>
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div onClick={() => NavigateToRubrique()} className="card border-0 bg-transparent text-light h-100">
            <div className="card-header bg-transparent border-0">
              <img src={Ecole} className="card-img-custom rounded" alt="Ecole palmier" />
            </div>
            <div className='card-body d-flex flex-column'>
              <h5 className="text-center fw-bold"><u>Ecole palmier</u></h5>
              <p>
                L’école Palmier est un établissement privé à caractère social, gratuit, agrée par le Ministère de l’Éducation Nationale, du préscolaire et des Sports.
                Chaque année, de nombreux enfants orphelins, abandonnés, issus de mères célibataires, de familles isolées, ou des enfants de la rue, abandonnent leur scolarité, confrontés à des difficultés insurmontables.
              </p>
              <p className='mt-auto text-center'>
                <button className='btn'>Découvrir Plus</button>
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div onClick={() => NavigateToRubrique()} className="card border-0 bg-transparent text-light h-100">
            <div className="card-header bg-transparent border-0">
              <img src={CFI} className="card-img-custom rounded" alt="CFI Programme CARE" />
            </div>
            <div className='card-body d-flex flex-column'>
              <h5 className="text-center fw-bold"><u>CFI Programme CARE</u></h5>
              <p>
                Ces formations gratuites et certifiantes d’un an, sont ouvertes aux jeunes de +18 ans issus du foyer Bab Rayan, des autres établissements de protection sociale (EPS) et des jeunes en précarité de la région Grand Casablanca. Le centre est agréé par l'Entraide Nationale.
              </p>
              <p className='mt-auto text-center'>
                <button className='btn'>Découvrir Plus</button>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
