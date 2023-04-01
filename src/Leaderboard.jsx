import React from 'react';
import { players } from './seedData.js'
import './Leaderboard.css';



const Leaderboard = () => {
  return(
    <>
    <h1>Leaderboard</h1>

    <div className="leaderboard-option">
    <h3>Weekly</h3>
    <h3>All Time</h3>
    </div>

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