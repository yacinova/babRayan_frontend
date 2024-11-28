import React from 'react'
// import Pic2 from "../../../assets/actionsSolidaire/"
import Ftour from "../../../assets/ftour/ftour.jpeg"
import Ftour1 from "../../../assets/ftour/ftour1.jpg"
import Ftour2 from "../../../assets/ftour/ftour2.jpg"
import Ftour3 from "../../../assets/ftour/ftour3.jpg"

export default function Actions() {

  const action = [
    { titre: "Les Ftours Bab Rayan", img: [Ftour1, Ftour2, Ftour3], desc: "L’association Bab Rayan organise chaque année depuis 2015 le Ftour Bab Rayan. Pendant ce mois sacré, la plupart n’ont pas la chance de rompre leur jeûne autour d’une table garnie. Cette action apporte beaucoup de convivialité et de chaleur à leur environnement ; l’esprit de solidarité du Ramadan est alors au rendez-vous, grâce à vos dons !" },

  ]
  const actions = [
    {
      titre: "Mécénat culturel : Éveiller les talents et les passions de nos jeunes", img: Ftour,
      desc: `l’Association Bab Rayan donne à ses jeunes la chance de découvrir le monde fascinant de la culture et de l’art. À travers le programme de l’école du jeune spectateur, de nombreuses sorties au théâtre sont organisées, offrant aux enfants et adolescents une immersion unique dans l’univers des arts vivants.<br />
      Au-delà du théâtre, nos jeunes participent activement à des expositions d’art, explorant les œuvres et les histoires qu’elles racontent. Des ateliers de peinture et d’expression artistique leur permettent également de développer leur sensibilité, leur créativité et leur confiance en eux. <br />
      Ces initiatives culturelles sont bien plus que des moments de loisir : elles nourrissent l’imaginaire, ouvrent de nouveaux horizons et encouragent chacun de nos jeunes à croire en ses talents. Nous remercions chaleureusement tous nos partenaires pour leur engagement à rendre l’art et la culture accessibles à tous.`
    },
    {
      titre: "La Digitalisation au cœur des projets de Bab Rayan", img: Ftour,
      desc: `Aujourd’hui, plusieurs projets de l’association Bab Rayan intègrent la digitalisation comme levier d’apprentissage et d’insertion professionnelle. À l’école élémentaire, nous sensibilisons dès le plus jeune âge à l’informatique à travers des programmes de codage interactifs, spécialement conçus pour éveiller l’intérêt des enfants pour les métiers de l’IT.<br />
      Au niveau du Centre de Formation et d’Insertion (CFI), un module dédié aux outils bureautiques (Microsoft Office) a été intégré au curriculum pour renforcer les compétences techniques essentielles. En parallèle, le CFI a lancé un projet pilote ambitieux : ForsaTech.`
    },
    {
      titre: "ForsaTech : Une porte d’entrée vers les métiers du numérique", img: Ftour,
      desc: `Créé pour répondre aux besoins croissants du marché digital, ForsaTech propose des formations accélérées aux jeunes en difficulté, axées sur les compétences numériques les plus demandées. Conçu en collaboration avec des entreprises partenaires, ce programme garantit une employabilité directe grâce à une sélection rigoureuse des modules et des candidats.<br />
      Forts de notre expertise dans les métiers de l’hôtellerie et de la restauration, et inspirés par le succès de ce modèle, nous sommes déterminés à élargir notre impact en ouvrant de nouvelles perspectives dans le secteur numérique. <br />
      Avec ces initiatives, Bab Rayan continue de transformer les défis de la jeunesse en opportunités durables, en bâtissant un pont solide entre éducation, technologie et insertion professionnelle.`
    },

  ]

  return (
    <section className='actions mt-5'>
      <h3 className="fw-bold text-center">ACTIONS SOLIDAIRES</h3>
      <h6 className="text-secondary text-center">Solidaires ensemble !</h6>
      <div className="mt-3 text-center"> <hr /> </div>
      <div className="mt-4 row w-75 d-flex justify-content-center m-auto ">
        {action.map((action, index) => (
          <div key={index} className="col-12 mb-4">
            <div className="card border-0" style={{ backgroundColor: "#003049" }}>
              <div className="row w-100">
                <div className="col-12  col-md-6  ">
                  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={action.img[0]} className="d-block w-100" style={{ height: "400px", objectFit: "cover" }} alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={action.img[1]} className="d-block w-100" style={{ height: "400px", objectFit: "cover" }} alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={action.img[2]} className="d-block w-100" style={{ height: "400px", objectFit: "cover" }} alt="..." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>

                </div>
                <div className="col-12  col-md-6  my-auto"><div className="card-body">
                  <h2 style={{ color: "#c2aa79" }} className='text-center'>{action.titre} </h2>
                  <div style={{ color: "#EAE2B7" }}>{action.desc}</div>
                  <p className='text-center mt-4' style={{ cursor: "pointer", color: "#FCBF49" }}><u>Voir Plus</u></p>
                </div></div>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center fw-bold">
          <h3>
            <i style={{textShadow : "0 0 5px #002f49b2"}}>BON À SAVOIR? </i>
          </h3>
        </div>
        {actions.map((action, index) => (
          <div key={index} className="col-12 mb-2 col-md-6 col-lg-4">
            <div className="card h-100 border-0" style={{ backgroundColor: "#003049" }}>
              <div className="p-2 card-hedader">
                <img src={action.img} alt="ftour" className="img-fluid roudndeed" />
              </div>
              <div className="card-body">
                <h2 style={{ color: "#c2aa79" }} className='text-center'>{action.titre} </h2>
                <div style={{ color: "#EAE2B7" }}>{action.desc}</div>
                <p className='text-center mt-4' style={{ cursor: "pointer", color: "#FCBF49" }}><u>Voir Plus</u></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
