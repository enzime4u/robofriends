import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import Scroll from '../components/Scroll';
import './App.css';

//state => on object that describes your application
// props => things that come out of state


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => { 
        return response.json();
      })
      .then(users => { 
        this.setState({ robots: users });
      })
    }
    onSearchChange = (event) => {
        this.setState( { searchfield: event.target.value } )
    }
    render() {
      const {robots, searchfield} = this.state;
      const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        if(!robots.length) {
          return <h1>Loading</h1>
        } else  {
          return (
              <div className='tc'>
                  <h1 className='f1'>RoboFriends</h1>
                  <SearchBox searchChange={this.onSearchChange} />
                  <Scroll>
                    <CardList robots={filteredRobots} />
                  </Scroll> 
              </div>
          );
        }
    }
}

export default App;