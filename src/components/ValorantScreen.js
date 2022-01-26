import axios from 'axios';
import { useEffect, useState } from 'react';
import Agent from './Agent';
import RoleFilter from './RoleFilter';

const urlAgents = 'https://valorant-api.com/v1/agents';
const AGENTS = [];
const ROLES = [];

function ValorantScreen() {
  const [agents, setAgents] = useState([]);
  const [fetchedAgents, setFetchedAgents] = useState(false);
  const [roles, setRoles] = useState([]);

  function getRoles() {
    AGENTS.forEach((a) => {
      if (a.role?.displayName && !ROLES.includes(a.role.displayName)) {
        ROLES.push(a.role.displayName);
      }
    });
  }

  function handleChangeInput(e) {
    if (fetchedAgents) {
      filterAgents(e.target.value);
    }
  }

  function filterAgents(agent) {
    if (agent.trim() !== '') {
      setAgents(
        AGENTS.filter((a) =>
          a.displayName.toLowerCase().includes(agent.toLowerCase())
        )
      );
    } else {
      setAgents(AGENTS);
    }
  }

  useEffect(() => {
    async function getAgents() {
      const { data } = await axios.get(urlAgents);
      setAgents(data.data);
      setFetchedAgents(true);
      AGENTS.push(...data.data);
      getRoles();
      setRoles(ROLES.map((role) => <RoleFilter role={role} key={role} />));
    }

    getAgents();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center">
        <input
          id="searchAgent"
          type="text"
          placeholder="Search an agent..."
          className="my-8 rounded-lg text-lg border-2 border-indigo-400 w-5/12 p-4 focus:outline-none focus:ring focus:ring-indigo-400"
          onChange={handleChangeInput}
        />
      </div>

      <section id="filters" className="w-100 flex justify-center gap-10">
        {roles}
      </section>

      <div className="grid gap-4 gap-y-20 grid-cols-4 mt-8">
        {agents.length ? (
          agents.map(
            (agent) =>
              agent.isAvailableForTest && (
                <Agent key={agent.uuid} agent={agent} />
              )
          )
        ) : (
          <h1 className="text-2xl text-center col-start-2 col-end-4 uppercase font-bold">
            No agent found!
          </h1>
        )}
      </div>
    </div>
  );
}

export default ValorantScreen;
