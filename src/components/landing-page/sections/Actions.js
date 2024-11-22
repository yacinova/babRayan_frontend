import React from 'react'
// import Pic2 from "../../../assets/actionsSolidaire/"
import Ftour from "../../../assets/actionsSolidaire/ftour.jpeg"

export default function Actions() {

  const action = [
    { titre: "Les Ftours Bab Rayan", img: Ftour, desc: "L’association Bab Rayan organise chaque année depuis 2015 le Ftour Bab Rayan. Pendant ce mois sacré, la plupart n’ont pas la chance de rompre leur jeûne autour d’une table garnie. Cette action apporte beaucoup de convivialité et de chaleur à leur environnement ; l’esprit de solidarité du Ramadan est alors au rendez-vous, grâce à vos dons !" },

  ]
  const actions = [
    { titre: "Les Ftours Bab Rayan", img: Ftour, desc: "L’association Bab Rayan organise chaque année depuis 2015 le Ftour Bab Rayan. Pendant ce mois sacré, la plupart n’ont pas la chance de rompre leur jeûne autour d’une table garnie. Cette action apporte beaucoup de convivialité et de chaleur à leur environnement ; l’esprit de solidarité du Ramadan est alors au rendez-vous, grâce à vos dons !" },
    { titre: "Les Ftours Bab Rayan", img: Ftour, desc: "L’association Bab Rayan organise chaque année depuis 2015 le Ftour Bab Rayan. Pendant ce mois sacré, la plupart n’ont pas la chance de rompre leur jeûne autour d’une table garnie. Cette action apporte beaucoup de convivialité et de chaleur à leur environnement ; l’esprit de solidarité du Ramadan est alors au rendez-vous, grâce à vos dons !" },
    { titre: "Les Ftours Bab Rayan", img: Ftour, desc: "L’association Bab Rayan organise chaque année depuis 2015 le Ftour Bab Rayan. Pendant ce mois sacré, la plupart n’ont pas la chance de rompre leur jeûne autour d’une table garnie. Cette action apporte beaucoup de convivialité et de chaleur à leur environnement ; l’esprit de solidarité du Ramadan est alors au rendez-vous, grâce à vos dons !" },

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
                <div className="col-6">
                  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={action.img} class="d-block w-100" alt="..." />
                      </div>
                      <div class="carousel-item">
                        <img src={action.img} class="d-block w-100" alt="..." />
                      </div>
                      <div class="carousel-item">
                        <img src={action.img} class="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>

                </div>
                <div className="col-6 my-auto"><div className="card-body">
                  <h2 style={{ color: "#c2aa79" }} className='text-center'>{action.titre} </h2>
                  <div style={{ color: "#EAE2B7" }}>{action.desc}</div>
                  <p className='text-center mt-4' style={{ cursor: "pointer", color: "#FCBF49" }}><u>Voir Plus</u></p>
                </div></div>
              </div>
            </div>
          </div>
        ))}
        {actions.map((action, index) => (
          <div key={index} className="col-12 mb-2 col-md-6 col-lg-4">
            <div className="card border-0" style={{ backgroundColor: "#003049" }}>
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
