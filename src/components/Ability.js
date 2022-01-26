export default function Ability({ ability }) {
  return (
    <>
      {ability.slot !== 'Passive' && (
        <div className="flex gap-10">
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
            <h5 className="text-xl font-medium">{ability.displayName}</h5>
            <p>{ability.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
