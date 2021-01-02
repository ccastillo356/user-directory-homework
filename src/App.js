import React, { Component } from 'react';
import './App.css';
import User from './User/User';
import Header from './Header/Header';



class App extends Component  {
  state = {
    users: [
      {
        id: 1,
        image: "",
        name: "Christian Castillo",
        phone: "(559) 578-3928",
        email: "christianjcastillo@blackeyedpeas.com",
        dob: "01-42-1984"
      },
      {
        id: 2,
        image: "",
        name: "Will Iam",
        phone: "(648)938-4533",
        email: "willIam@blackeyedpeas.com",
        dob: "03-03-1996"
      },
      {
        id: 3,
        image: "",
        name: "Fergie Ferg",
        phone: "(901)457-8245",
        email: "fergalicious420@blackeyedpeas.com",
        dob: "006-06-2183"
      }
    ],
    search : ""
  }

  updateSearch = (event) => {
    this.setState({ search: event.target.value.substr(0, 30) });
  }

  render() {
    console.log('this', this)
    let filteredUsers = this.state.users.filter(
      (users) => {
        return (users.name.toLowerCase()).indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className="App">
        <nav className="Nav">
          <p className="NavTitle">Employee Directory</p>
        </nav>

        <input
          type='text'
          placeholder='Search name'
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} />

        <Header />
        {filteredUsers.map(user => {
          return (
            <User
              image={user.image}
              name={user.name}
              phone={user.phone}
              email={user.email}
              dob={user.dob}
              key={user.id} />
          );
        })}
      </div>
    );
  }
}

export default App;
