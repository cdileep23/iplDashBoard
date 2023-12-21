// Write your code here
// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    TeamDetails: {},
    isLoading: true,
  }

  componentDidMount = () => {
    const {match} = this.props
    console.log(match)
    const {params} = match
    const {id} = params
    this.getFranchiseDetails(id)
  }

  getFranchiseDetails = async id => {
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const UpdatedTeamDetails = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }

    this.setState({
      TeamDetails: UpdatedTeamDetails,
      isLoading: false,
    })
  }

  render() {
    const {TeamDetails, isLoading} = this.state

    const {latestMatchDetails, teamBannerUrl, recentMatches} = TeamDetails

    const {match} = this.props
    const {params} = match
    const {id} = params
    const MainContClassName = `bgCont-${id}`

    console.log(latestMatchDetails)

    return (
      <div data-testid="loader" className={`${MainContClassName} forloader`}>
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} />
        ) : (
          <>
            <img className="bannerTeam" src={teamBannerUrl} alt="team banner" />
            <h1 className="latest-match-heading">Latest Match</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />

            <ul className="allMatchesList">
              {recentMatches.map(e => (
                <MatchCard key={e.id} matchObj={e} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
