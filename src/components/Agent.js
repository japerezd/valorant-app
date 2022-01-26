import { Link } from 'react-router-dom';

export default function Agent({ agent }) {
  return (
    <div className="bg-gray-200 transform transition-transform hover:scale-105 text-center rounded-md shadow-md w-64 px-4 py-4">
      <Link to={`/agent/${agent.uuid}`}>
        <header className="mb-4">
          <p className="font-light">{agent.role?.displayName}</p>
        </header>
        <img
          className="w-full"
          src={agent.displayIcon}
          alt={agent.displayName}
        />
        <footer className="mt-4">
          <p className="uppercase text-lg text-red-500">{agent.displayName}</p>
        </footer>
      </Link>
    </div>
  );
}
