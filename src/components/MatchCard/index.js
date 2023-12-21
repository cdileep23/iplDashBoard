// Write your code here
// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchObj} = props

  const newObj = {
    competingTeamLogo: matchObj.competing_team_logo,
    competingTeam: matchObj.competing_team,
    result: matchObj.result,
    matchStatus: matchObj.match_status,
  }
  const {competingTeamLogo, competingTeam, result, matchStatus} = newObj
  const resultclassName = matchStatus === 'Won' ? 'win' : 'lose'
  return (
    <div className="Match-card">
      <img
        className="opponent-logo"
        src={competingTeamLogo}
        alt={`Competing team ${competingTeam}`}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={resultclassName}>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
