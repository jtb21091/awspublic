import React, { useState } from 'react';
import PropTypes from 'prop-types';

function COPQ({ initialCostPerDefectUnit, initialNumberOfDefects }) {
  const [costPerDefectUnit, setCostPerDefectUnit] = useState(initialCostPerDefectUnit);
  const [numberOfDefects, setNumberOfDefects] = useState(initialNumberOfDefects);

  const calculateTotalCost = () => {
    const costPerUnit = parseFloat(costPerDefectUnit) || 0;
    const defects = parseInt(numberOfDefects, 10) || 0;
    return costPerUnit * defects;
  };

  return (
    <div>
      <h2>Cost of Poor Quality (COPQ)</h2>
      <div>
        <label>
          Cost per Defective Unit ($):
          <input
            type="number"
            value={costPerDefectUnit}
            onChange={(e) => setCostPerDefectUnit(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Number of Defective Units:
          <input
            type="number"
            value={numberOfDefects}
            onChange={(e) => setNumberOfDefects(e.target.value)}
          />
        </label>
      </div>
      <h3>Total COPQ: ${calculateTotalCost().toFixed(2)}</h3>
    </div>
  );
}

COPQ.propTypes = {
  initialCostPerDefectUnit: PropTypes.string,
  initialNumberOfDefects: PropTypes.string,
};

COPQ.defaultProps = {
  initialCostPerDefectUnit: '',
  initialNumberOfDefects: '',
};

export default COPQ;
