import React from 'react';

function ProgressBar({ current, total }) {
  const percent = (current / total) * 100;
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${percent}%` }}></div>
      <div className="progress-text">
        {current}/{total}
      </div>
    </div>
  );
}

export default ProgressBar;
