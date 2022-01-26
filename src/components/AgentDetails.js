import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Ability from './Ability';
import Passive from './Passive';

const baseUrl = 'https://valorant-api.com/v1/agents';

export default function AgentDetails() {
  const [agent, setAgent] = useState(null);
  const [abilities, setAbilities] = useState([]);
  const [passive, setPassive] = useState([]);

  const { agentId } = useParams();

  //   async function getAgentById() {
  //     const { data } = await axios.get(`${baseUrl}/${agentId}`);
  //     setAgent(data.data);
  //     setAbilities(data.data.abilities);
  //     const abilitiesArray = data.data.abilities;
  //     const [passive] = abilitiesArray.filter((a) => a.slot.toLowerCase() === 'passive');
  //     setPassive(passive);
  //   }

  const getAgentById = useCallback(async () => {
    const { data } = await axios.get(`${baseUrl}/${agentId}`);
    setAgent(data.data);
    setAbilities(data.data.abilities);
    const abilitiesArray = data.data.abilities;
    const passive = abilitiesArray.filter(
      (a) => a.slot.toLowerCase() === 'passive'
    );
    setPassive(passive);
  }, [agentId]);

  useEffect(() => {
    getAgentById();
  }, [getAgentById]);

  return (
    <div className="container mx-auto py-8 flex gap-24">
      <div className="max-w-4xl">
        <h1 className="text-4xl text-red-500 uppercase font-semibold text-center">
          {agent?.displayName}
        </h1>
        <img
          className="max-w-md mx-auto"
          src={agent?.fullPortrait}
          alt={agent?.displayName}
        />
        <p className="uppercase text-xl font-medium">
          {agent?.role.displayName}
        </p>
        <p>{agent?.role.description}</p>

        <aside className="mt-10">
          {passive?.map((ability) => (
            <Passive key={ability.slot} ability={ability}/>
          ))}
        </aside>
      </div>

      <article className="max-w-xl flex flex-col gap-10">
        {abilities?.map((ability) => (
          <Ability key={ability.displayName} ability={ability} />
        ))}
      </article>
    </div>
  );
}
