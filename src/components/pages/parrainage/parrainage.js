import React, { useState, useEffect } from 'react';
import { ChevronRight, Heart, Mail, Gift, FileText } from 'lucide-react';
// import foyer from "../../../assets/Foyer/foyer.png"
// import child from "../../../assets/Foyer/pic2.png"
// import childs from "../../../assets/Foyer/enfants.JPG"

const useScrollAnimation = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return animated;
};

const App = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <SponsorshipForm />
      <InformationCards />
      <JoinUsSection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="position-relative vh-100">
      <div className="position-absolute w-100 h-100 overflow-hidden">
        {/* <img
          src={foyer}
          alt="Hero"
          className="w-100 h-100 object-cover"
        /> */}
        <div className="position-absolute w-100 h-100 bg-dark opacity-50" />
      </div>
      <div className="position-relative h-100 d-flex align-items-center justify-content-center text-center px-4">
        <div className="container">
          <h1 className="display-4 font-weight-bold text-white mb-4">
            Donner un avenir à un enfant
          </h1>
          <p className="lead text-white-50 mb-4">
            Votre don mensuel peut aider un enfant à sortir de la pauvreté et à
            construire un avenir meilleur.
          </p>
          <button className="btn btn-danger btn-lg">
            Parrainer un enfant
          </button>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const animated = useScrollAnimation();

  const steps = [
    {
      icon: <Heart size={48} className="text-danger" />,
      title: "Choisissez un enfant",
      description: "Sélectionnez parmi notre liste d'enfants dans le besoin"
    },
    {
      icon: <Gift size={48} className="text-primary" />,
      title: "Votre don mensuel",
      description: "Contribue à l'éducation, la nutrition et plus encore"
    },
    {
      icon: <ChevronRight size={48} className="text-success" />,
      title: "Impact direct",
      description: "Votre filleul bénéficie de votre soutien"
    },
    {
      icon: <Mail size={48} className="text-info" />,
      title: "Suivez son évolution",
      description: "Recevez des nouvelles régulières de votre filleul"
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center display-4 mb-5">Comment ça marche</h2>
        <div className="row">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`col-md-3 mb-4 ${
                animated ? 'animate__animated animate__fadeInUp' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="card h-100 text-center">
                <div className="card-body">
                  <div className="mb-3">{step.icon}</div>
                  <h5 className="card-title">{step.title}</h5>
                  <p className="card-text">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SponsorshipForm = () => {
  const [formData, setFormData] = useState({
    childName: '',
    age: '',
    gender: ''
  });

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="card shadow-lg p-4">
          <h2 className="text-center mb-4">Formulaire de parrainage</h2>
          <form>
            <div className="form-group mb-3">
              <label>Nom de l'enfant</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nom de l'enfant"
                value={formData.childName}
                onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
              />
            </div>
            <div className="form-group mb-3">
              <label>Âge de l'enfant</label>
              <select
                className="form-control"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              >
                <option value="">Choisir un âge</option>
                <option value="0-5">0-5 ans</option>
                <option value="6-10">6-10 ans</option>
                <option value="11-15">11-15 ans</option>
                <option value="16-18">16-18 ans</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <label>Genre</label>
              <select
                className="form-control"
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              >
                <option value="">Choisir un genre</option>
                <option value="M">Masculin</option>
                <option value="F">Féminin</option>
              </select>
            </div>
            <button type="submit" className="btn btn-danger btn-block">
              Valider
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const InformationCards = () => {
  const cards = [
    {
      title: "Pourquoi parrainer",
      description: "Changez la vie d'un enfant et la vôtre",
      icon: <Heart size={64} className="text-danger" />
    },
    {
      title: "Ce que vous recevez",
      description: "Suivez son évolution à travers des lettres et photos",
      icon: <Mail size={64} className="text-primary" />
    },
    {
      title: "Impact de vos dons",
      description: "Découvrez comment votre soutien change des vies",
      icon: <Gift size={64} className="text-success" />
    },
    {
      title: "Aspects fiscaux",
      description: "Informations sur la déduction fiscale de vos dons",
      icon: <FileText size={64} className="text-info" />
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          {cards.map((card, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <div className="mb-4">{card.icon}</div>
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const JoinUsSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center display-4 mb-4">
          Rejoignez-nous pour faire la différence
        </h2>
        <div className="row">
          {[1, 2, 3].map((index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                {/* <img
                  src={childs}
                  className="card-img-top"
                  alt={`Join Us ${index}`}
                /> */}
                <div className="card-img-overlay bg-dark bg-opacity-50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;