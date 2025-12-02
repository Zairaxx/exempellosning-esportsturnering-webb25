import { createContext, useState } from "react";

export const TeamContext = createContext();

const TeamProvider = ({children}) => {

    const defaultTeamA = [
  {
    username: "ShadowLynx",
    firstName: "Anna",
    lastName: "Svensson",
    age: 21,
    country: "Sverige",
    ranking: "Järn",
  },
  {
    username: "NordicBear",
    firstName: "Björn",
    lastName: "Karlsson",
    age: 24,
    country: "Sverige",
    ranking: "Brons",
  },
  {
    username: "FrostCecilia",
    firstName: "Cecilia",
    lastName: "Andersson",
    age: 19,
    country: "Norge",
    ranking: "Silver",
  },
  {
    username: "ArcticFalcon",
    firstName: "David",
    lastName: "Nilsson",
    age: 27,
    country: "Finland",
    ranking: "Guld",
  },
  {
    username: "ValkyrieNova",
    firstName: "Eva",
    lastName: "Johansson",
    age: 22,
    country: "Danmark",
    ranking: "Diamant",
  },
];

const defaultTeamB = [
  {
    username: "WolfRider",
    firstName: "Filip",
    lastName: "Larsson",
    age: 23,
    country: "Sverige",
    ranking: "Järn",
  },
  {
    username: "SnowSpark",
    firstName: "Greta",
    lastName: "Olsen",
    age: 20,
    country: "Norge",
    ranking: "Brons",
  },
  {
    username: "IceBreaker",
    firstName: "Henrik",
    lastName: "Lund",
    age: 25,
    country: "Finland",
    ranking: "Silver",
  },
  {
    username: "CrystalHuntress",
    firstName: "Ida",
    lastName: "Holm",
    age: 28,
    country: "Danmark",
    ranking: "Guld",
  },
  {
    username: "ThunderJohan",
    firstName: "Johan",
    lastName: "Ek",
    age: 26,
    country: "Sverige",
    ranking: "Diamant",
  },
];


  const [teamA, setTeamA] = useState(defaultTeamA);
  const [teamB, setTeamB] = useState(defaultTeamB);

  const addPlayer = (player) => {
    console.log(player, player.team);
    if (player.team === "A") {
      setTeamA([...teamA, player]);
    } else if (player.team === "B") {
      setTeamB([...teamB, player]);
    } else {
      console.log("Could not add player to any team.")
    }
  };

  const removePlayer = (username, team) => {
    if (team === "A") {
      setTeamA(teamA.filter((p) => p.username !== username));
    } else {
      setTeamB(teamB.filter((p) => p.username !== username));
    }
  };


    return(<TeamContext value={{teamA,teamB,addPlayer,removePlayer}}>
        {children}
    </TeamContext>)
}


export default TeamProvider