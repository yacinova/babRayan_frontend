import React, { useState } from 'react';
import './don.css';

const DonationPage = () => {
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [cause, setCause] = useState('');
  const [comment, setComment] = useState(false);

  const predefinedAmounts = [20, 50, 100, 200, 500];

  const handleAmountChange = (value) => {
    if (typeof value === 'number') {
      setAmount(value);
      setCustomAmount('');
    } else {
      setAmount('custom');
    }
  };

  return (
    <div className="donation-page"> 
    <div className="donation-container">
      {/* Logo Section */}
      <div className="logo-section">
        <div className="logo-content">
          <span className="arabic-text">باب ريان</span>
          <span className="latin-text">BAB RAYAN</span>
        </div>
        <div className="logo-subtitle">Ensemble pour un futur meilleur</div>
      </div>

      {/* Main Form */}
      <div className="donation-form">
        <div className="form-header">Choose amount</div>
        
        {/* Progress Dots */}
        <div className="progress-dots">
          <div className={`dot ${donationType === 'one-time' ? 'active' : ''}`}></div>
          <div className={`dot ${donationType === 'monthly' ? 'active' : ''}`}></div>
          <div className="arrow">→</div>
        </div>

        {/* Donation Type Toggle */}
        <div className="donation-type">
          <button 
            className={`type-button ${donationType === 'one-time' ? 'active' : ''}`}
            onClick={() => setDonationType('one-time')}
          >
            One-time
          </button>
          <button 
            className={`type-button ${donationType === 'monthly' ? 'active' : ''}`}
            onClick={() => setDonationType('monthly')}
          >
            Monthly
          </button>
        </div>

        {/* Amount Grid */}
        <div className="amount-grid">
          {predefinedAmounts.map((value) => (
            <button
              key={value}
              className={`amount-button ${amount === value ? 'active' : ''}`}
              onClick={() => handleAmountChange(value)}
            >
                MAD {value}
            </button>
          ))}
        </div>

        {/* Custom Amount Input */}
        <input
          type="text"
          placeholder="MAD Custom Amount"
          className="custom-amount"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setAmount('custom');
          }}
        />

        {/* Cause Selection */}
        <select
          className="cause-select"
          value={cause}
          onChange={(e) => setCause(e.target.value)}
        >
          <option value="">Choose Your Cause</option>
          <option value="education">Education</option>
          <option value="food">Food Security</option>
          <option value="health">Healthcare</option>
        </select>

        {/* Comment Checkbox */}
        <div className="comment-section">
          <input
            type="checkbox"
            id="comment"
            checked={comment}
            onChange={(e) => setComment(e.target.checked)}
          />
          <label htmlFor="comment">Write us a comment</label>
        </div>

        {/* Next Button */}
        <button className="next-button">
          Next
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
    </div>
  );
};

export default DonationPage;