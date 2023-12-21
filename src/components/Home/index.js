// Write your code here
// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount = () => {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const updatedTeamsList = teams.map(e => ({
      name: e.name,
      id: e.id,
      teamImageUrl: e.team_image_url,
    }))

    this.setState({teamsList: updatedTeamsList, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="bgCont">
        <div className="mainHeading">
          <img
            className="iplLogo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1>IPL Dashboard</h1>
        </div>

        <div>
          {isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          ) : (
            <ul data-testid="loader" className="TeamsList">
              {teamsList.map(e => (
                <TeamCard key={e.id} teamObj={e} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
