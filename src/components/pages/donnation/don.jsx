import React, { useState } from 'react';
import { Card, Slider, Drawer, Input, Radio, Form } from 'antd';
import Icon1 from '../../../assets/Logo.png';
import Icon2 from '../../../assets/Logo.png';
import Icon3 from '../../../assets/Logo.png';
import Icon4 from '../../../assets/Logo.png';


import "./don.css";

const DonationPage = () => {
  const [donationType, setDonationType] = useState('monthly');
  const [customAmount, setCustomAmount] = useState(500);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [open, setOpen] = useState(false);

  const donationOptions = [
    {
      index: 1,
      amount: 200,
      picto: Icon1,
      description: "Ce don permettra de fournir des fournitures scolaires et des repas nutritifs à 2 enfants pendant un mois."
    },
    {
      index: 2,
      amount: 500,
      picto: Icon2,
      description: "Ce don aidera à couvrir les frais de scolarité, les uniformes et le soutien éducatif pour 5 enfants.",
      recommended: true
    },
    {
      index: 3,
      amount: 1000,
      picto: Icon3,
      description: "Ce don majeur permettra de soutenir 10 enfants avec une éducation complète et des soins de santé."
    },
    {
      index: 4,
      amount: 'Montant Mensuel Personnalisé',
      picto: Icon4,
      description: "Choisissez le montant qui correspond à votre générosité et soutenez nos actions à votre rythme."
    }
  ];

  const showDrawer = () => {
    setOpen(true);
  };

  const renderPaymentMethodLogo = (method) => {
    const commonStyles = { width: '60px', height: 'auto', objectFit: 'contain' };
    switch (method) {
      case 'paypal':
        return "🅿️"; // Replace with actual PayPal logo
      case 'stripe':
        return "💳"; // Replace with actual Stripe logo
      case 'cmi':
        return "🏦"; // Replace with actual CMI logo
      default:
        return null;
    }
  };

  const onClose = () => {
    setOpen(false);
  };

  const drawerContent = (
    <div className="donation-drawer">
      <div className="thank-you-section">
        <h2 style={{ color: '#003049', marginBottom: '20px', textAlign: 'center' }}>
          Merci pour votre générosité! 🙏
        </h2>
        <p style={{ textAlign: 'center', fontSize: '1.1em', color: '#666', marginBottom: '30px' }}>
          Votre don de <span style={{ color: '#F77F00', fontWeight: 'bold' }}>{customAmount} DH</span> en tant que don
          <span style={{ color: '#F77F00', fontWeight: 'bold' }}> {donationType === 'monthly' ? 'mensuel' : 'unique'}</span> va
          faire une réelle différence dans la vie des enfants. 💝
        </p>
      </div>

      <div className="donation-type-section">
        <h3 style={{ color: '#003049', marginBottom: '15px' }}>Type de donateur</h3>
        <Radio.Group
          onChange={(e) => setIsAnonymous(e.target.value)}
          value={isAnonymous}
          className="custom-radio-group"
        >
          <div className="d-flex w-100">
            <Radio value={false}>Donateur <b>identifié</b> </Radio>
            <Radio value={true}>Donateur <b>anonyme</b></Radio>
          </div>
        </Radio.Group>
      </div>

      {!isAnonymous && (
        <Form layout="vertical" className="donor-info-form">
          <h3 style={{ color: '#003049', marginTop: '20px', marginBottom: '15px' }}>
            Vos informations
          </h3>
          <Form.Item label="Nom complet" required className="form-item">
            <Input placeholder="Entrez votre nom complet" />
          </Form.Item>
          <Form.Item label="Email" required className="form-item">
            <Input placeholder="Entrez votre email" type="email" />
          </Form.Item>
          <Form.Item label="Téléphone" required className="form-item">
            <Input placeholder="Entrez votre numéro de téléphone" />
          </Form.Item>
        </Form>
      )}

      <div className="payment-section">
        <h3 style={{ color: '#003049', marginTop: '20px', marginBottom: '15px' }}>Méthode de paiement</h3>
        <div className="payment-methods">
          {['stripe', 'paypal', 'cmi'].map((method) => (
            <div
              key={method}
              className={`payment-method-card ${paymentMethod === method ? 'selected' : ''}`}
              onClick={() => setPaymentMethod(method)}
            >
              <div className="payment-logo">
                {renderPaymentMethodLogo(method)}
              </div>
              <span className="payment-name">{method.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        className="proceed-payment-btn"
        onClick={() => {
          // Handle payment processing
          console.log('Processing payment...');
        }}
      >
        Procéder au paiement
      </button>
    </div>
  );

  return (
    <div className="bg_don">
      <div className="bg_don_overlay"></div>

      <div className="donation_text py-12">
        <div className="container">
          {/* <Card className="donation-card"> */}
            <div className="header">
              <h1>Faire un Don</h1>
              <p>Ensemble, nous pouvons faire la différence dans la vie des enfants</p>
            </div>

            <div className="donation-type-selector">
              <button className={`type-btn ${donationType === 'monthly' ? 'active' : ''}`} onClick={() => setDonationType('monthly')}>
                Don Mensuel
              </button>
              <button className={`type-btn ${donationType === 'once' ? 'active' : ''}`} onClick={() => setDonationType('once')}>
                Don Unique
              </button>
            </div>

            <div className="donation-options">
              {donationOptions.map((option) => (
                <div style={{ cursor: "pointer" }} key={option.index} className="donation-option-wrapper" onClick={() => setCustomAmount(option.amount)}>
                  <div className={`donation-option ${customAmount === option.amount ? 'recommended' : ''}`}>
                    {option.recommended && (
                      <div className="recommended-badge">
                        Recommandé
                      </div>
                    )}
                    <div className="option-content text-white">
                      <h3 className='text-center'>{option.amount}Dhs / Mois</h3>
                      <img src={option.picto} alt="donation icon" />
                      <p>{option.description}</p>
                    </div>
                    <button className={`select-btn ${customAmount === option.amount ? 'recommended' : ''}`}>
                      Choisir
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <p className="donation-footer">
              {donationType === 'monthly' ? "Votre don mensuel nous aide à planifier et à soutenir les enfants de manière durable. 💖" :
                "Votre don unique fait une différence immédiate dans la vie des enfants. 💖 "}
            </p>
          {/* </Card> */}
        </div>
      </div>

      <Drawer
        style={{ zIndex: 9999999 }}
        className="custom-drawer"
        title={<div style={{ color: '#003049', fontSize: '1.5em' }}>Continuation du DON 🕊️</div>}
        onClose={onClose}
        open={open}
        width={420}
      >
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default DonationPage;
