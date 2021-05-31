import React from 'react';
import './App.css';
import { ElectronicsTable, Electronics } from './Components/ElectronicsTable';
import { VideogamesTable, Videogames } from './Components/VideogamesTable';

type ElectronicsState = {
  electronics: Electronics[];
}

type GamesState = {
  videogames: Videogames[];
}

class App extends React.Component<{}, ElectronicsState, GamesState> {

  state: ElectronicsState = {
    electronics: [
      {
        device: "Computer",
        quantity: 24,
        warranty: "365 Days"
      },
      {
        device: "Xbox One",
        quantity: 3,
        warranty: "730 Days"
      },
    ]

    
  }

  removeDevice = (index:any) => {
    const {electronics} = this.state
      this.setState({
        electronics: electronics.filter((_, i) => {
          return i !== index
        }),
      })
  }

  state2: GamesState = {
    videogames: [
      {
        name: "God Of War",
        console: "PS4",
        quantity: 3
      },
      {
        name: "Horizon",
        console: "PS4",
        quantity: 6
      },
      {
        name: "SnowRunner",
        console: "PS4/PC/XBOX",
        quantity: 6
      },
    ]
  }

  render() {
    return (
      <div className="container">
        <h2 className="titles">Electronic Devices</h2>
        <ElectronicsTable electronics={this.state.electronics} removeDevice={this.removeDevice}/>
        <h2 className="titles">Videogames</h2>
        <VideogamesTable videogames={this.state2.videogames} />
      </div>
    );
  }

}

export default App;
