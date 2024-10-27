import React, { useState } from "react";
// import './Solution.css';
import { data as initialData } from '../data.js';

const Solution = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(initialData);
  const [newEntry, setNewEntry] = useState({
    photo: '',
    name: '',
    description: '',
    donationSum: 0,
    amountEarned: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({
      ...prev,
      [name]: name === 'donationSum' || name === 'amountEarned' ? parseFloat(value) : value,
    }));
  };

  const handleDonation = (projectId) => {
    const card = prompt('Karta raqamini kiriting:');
    if (card && card.length === 19) {
      const donationAmount = parseFloat(prompt("Xayriya miqdorini kiriting:"));
      if (donationAmount && !isNaN(donationAmount)) {
        setData((prevData) =>
          prevData.map((item) =>
            item.id === projectId
              ? {
                  ...item,
                  amountEarned: item.amountEarned + donationAmount,
                }
              : item
          )
        );
        alert(`Sizning ehson uchun rahmat $${donationAmount}.`);
      } else {
        alert("Iltimos, haqiqiy xayriya miqdorini kiriting.");
      }
    } else {
      alert('Xaqiqiy kartani raqamini kiriting');
    }
  };

  const handleSubmitTemplate = (event) => {
    event.preventDefault();
    setData((prevData) => [
      ...prevData,
      { ...newEntry, id: Date.now() }
    ]);
    setNewEntry({
      photo: '',
      name: '',
      description: '',
      donationSum: 0,
      amountEarned: 0,
    });
    setModalVisible(false);
  };

  return (
    <>
    
      <h1 className="qq">Loyhalar</h1>
      <div className="divs">
        {data.map((value) => (
          <div key={value.id} className="project-card">
            <img
              src={value.foto}  
              alt={value.name}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <h2>{value.nomi}</h2>
            <p>{value.tavsifi}</p>
            <p>Donat summasi: ${value.donationSum.toFixed(2)}</p>
            <p>
              Ishlangan summasi: ${value.amountEarned.toFixed(2)}
            </p>
            <div className="progress-bar">
              <div
                className="progress-bar-filled"
                style={{
                  width: `${Math.min(
                    (value.amountEarned / value.donationSum) * 100,
                    100
                  )}%`,
                }}
              >
                {Math.round((value.amountEarned / value.donationSum) * 100)}%
              </div>
            </div>
            <button
              className="donat"
              onClick={() => handleDonation(value.id)}
            >
              Donat qilish
            </button>
          </div>
        ))}
      </div>

      <button className="q" onClick={() => setModalVisible(true)}>
        Loyha qoshish
      </button>

      {modalVisible && (
        <div id="modal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalVisible(false)}>
              &times;
            </span>
            <form onSubmit={handleSubmitTemplate}>
              <label htmlFor="photo">Rasm URL:</label>
              <input
                type="text"
                name="photo"
                value={newEntry.photo}
                onChange={handleInputChange}
                required
              /><br/>
              <label htmlFor="name">Oti:</label><br/>
              <input
                type="text"
                name="name"
                value={newEntry.name}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="description">Tavsifi:</label>
              <textarea
                name="description"
                value={newEntry.description}
                onChange={handleInputChange}
                required
              ></textarea>
              <label htmlFor="donationSum">Donatlar summasi:</label>
              <input
                type="number"
                name="donationSum"
                value={newEntry.donationSum}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="amountEarned">Ishlangan pul:</label>
              <input
                type="number"
                name="amountEarned"
                value={newEntry.amountEarned}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Qoshish</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Solution;
