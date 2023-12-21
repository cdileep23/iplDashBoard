// Write your code here
// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamObj} = props
  const {id, name, teamImageUrl} = teamObj

  return (
    <Link className="forLink" to={`/team-matches/${id}`}>
      <li className="eachTeamCard">
        <img className="franchise-logo" src={teamImageUrl} alt={name} />
        <p className="teamName">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
