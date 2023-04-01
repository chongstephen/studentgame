import React from 'react';
import { players } from './seedData.js'
import './Leaderboard.css';



const Leaderboard = () => {
  return(
    <>
    <h1>Leaderboard</h1>
    <table className="leaderboard">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
        {players.map((player, index) => (
            <tr key={player.name}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  )
}

export default Leaderboard;