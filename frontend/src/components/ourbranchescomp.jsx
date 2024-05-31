import React, { useState, useEffect } from 'react';
import '../css/ourbranches.css';

const OurBranchesComp = () => {
  const [selectedBranch, setSelectedBranch] = useState({
    name: 'Patna',
    image: 'https://www.indiasinvitation.com/wp-content/uploads/2016/09/Patna-Tourism.jpg',
    address: 'Patna Address details here'
  });
  const [branches, setBranches] = useState([
    { name: 'Patna', image: 'https://www.indiasinvitation.com/wp-content/uploads/2016/09/Patna-Tourism.jpg', address: 'Patna Address details here' },
    { name: 'Noida', image: 'https://themetrorailguy.com/wp-content/uploads/2015/11/WaveOneb.jpg', address: 'Noida Address details here' },
    { name: 'Delhi', image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/c5/e8/5c.jpg', address: 'Delhi Address details here' }
  ]);
  const [showClickBranch, setShowClickBranch] = useState(true);

  const handleBranchClick = (branch) => {
    setSelectedBranch(branch);
    setShowClickBranch(false);
  };

  useEffect(() => {
    showTop();
  }, []);

  const showTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="our-branches-section">
        <h2>Our Branches</h2>
        <div className="branches">
          {branches.map(branch => (
            <div key={branch.name} className="branch" onClick={() => handleBranchClick(branch)}>
              <div className="brance-image">
                <img src={branch.image} alt={branch.name} />
              </div>
              <h3>{branch.name}</h3>
            </div>
          ))}
        </div>
        <br />
        {showClickBranch && (
          <h3 className='click-branch'>
            Click The Branches To View Address & Location.
          </h3>
        )}
        <div className="branches-details">
          {selectedBranch && (
            <>
              <h2>{selectedBranch.name} Address</h2>
              <p>{selectedBranch.address}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default OurBranchesComp;
