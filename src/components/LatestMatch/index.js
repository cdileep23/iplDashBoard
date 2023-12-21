// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  console.log(latestMatchDetails)
  const updatedLatestMatchDetais = {
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.match_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    venue: latestMatchDetails.venue,
    id: latestMatchDetails.id,
    umpires: latestMatchDetails.umpires,
  }

  console.log(latestMatchDetails)
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    venue,
    id,
    umpires,
  } = updatedLatestMatchDetais

  return (
    <div className="latest-match-card">
      <div className="latestMatch-card-result">
        <h1>{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>

      <img
        className="competing-team-logo"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div className="latest-match-details">
        <h3>First Innings</h3>
        <p>{firstInnings}</p>
        <h3>Second Innings</h3>
        <p>{secondInnings}</p>
        <h3>Man of the Match</h3>
        <p>{manOfTheMatch}</p>
        <h3>Umpires</h3>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
