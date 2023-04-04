import React from 'react';

const BadgeSystem = ({ score }) => {
  let badge = null;

  if (score >= 100) {
    badge = "Gold";
  } else if (score >= 80) {
    badge = "Silver";
  } else if (score >= 50) {
    badge = "Bronze";
  }

  return (
    <div>
      {badge ? `Congratulations! You earned a ${badge} Badge!` : ""}
    </div>
  );
};

export default BadgeSystem;