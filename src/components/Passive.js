import React from 'react';

export default function Passive({ability}) {
  return (
    <div className="flex">
      <div>
        {ability.displayIcon && (
          <img
            className="bg-gray-200 max-w-xs w-24"
            src={ability.displayIcon}
            alt={ability.description}
          />
        )}
      </div>
      <div>
        <h5 className="text-xl font-medium">{ability.displayName} - Passive</h5>
        <p>{ability.description}</p>
      </div>
    </div>
  );
}
