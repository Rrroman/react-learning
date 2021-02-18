const React = require('react');

class Universe extends React.Component {
  constructor() {
    super();
    this.state = {
      intransitToPlanet: null,
      intransitToStarShip: null,
    };
  }

  // transport(name) {
  //   const currentState = { ...this.state };

  //   const toPlanetIndex = currentState.intransitToPlanet.findIndex(
  //     (person) => person === name,
  //   );

  //   const toStarShipIndex = currentState.intransitToStarShip.findIndex(
  //     (person) => person === name,
  //   );

  //   if (toPlanetIndex !== -1) {
  //     const liftingPerson = currentState.intransitToPlanet.splice(
  //       toPlanetIndex,
  //       1,
  //     );
  //     currentState.intransitToStarShip.push(liftingPerson);
  //   }

  //   if (toStarShipIndex !== -1) {
  //     const liftingPerson = currentState.intransitToStarShip.splice(
  //       toStarShipIndex,
  //       1,
  //     );
  //     currentState.intransitToPlanet.push(liftingPerson);
  //   }

  //   this.setState({
  //     currentState,
  //   });
  // }

  liftPerson(liftPerson, destination) {
    this.setState({ destination: liftPerson });
  }

  render() {
    return (
      <div className="Universe">
        <h1>Universe</h1>
        <Starship
          person={this.state.intransitToPlanet}
          liftPerson={this.liftPerson}
        />
        <Planet
          person={this.state.intransitToStarShip}
          liftPerson={this.liftPerson}
        />
      </div>
    );
  }
}

class Starship extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inhabitants: ['Lauras', 'Tobin', 'Robot'] };
  }

  transport = (name) => {
    const currentCitizens = [...this.state.inhabitants];

    const personIndex = currentCitizens.findIndex((person) => person === name);

    if (personIndex !== -1) {
      const liftingPerson = currentCitizens.splice(personIndex, 1);
      this.props.liftPerson(liftingPerson, 'intransitToPlanet');
    }

    this.setState({
      inhabitants: currentCitizens,
    });
  };

  render() {
    return (
      <div className="Starship">
        <h3>Starship Finderprise</h3>
        {this.state.inhabitants.map((name) => {
          return (
            <button key={name} onClick={this.transport.bind(this, name)}>
              Transport {name}
            </button>
          );
        })}
      </div>
    );
  }
}

class Planet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inhabitants: ['Attilus', 'Dennix', 'Mobius'] };
  }

  transport = (name) => {
    const currentCitizens = [...this.state.inhabitants];

    const personIndex = currentCitizens.findIndex((person) => person === name);

    if (personIndex !== -1) {
      const liftingPerson = currentCitizens.splice(personIndex, 1);
      this.props.liftPerson(liftingPerson, 'intransitToStarShip');
    }

    this.setState({
      inhabitants: currentCitizens,
    });
  };

  render() {
    return (
      <div className="Planet">
        <h3>Planet Earth</h3>
        {this.state.inhabitants.map((name) => {
          return (
            <button key={name} onClick={this.transport.bind(this, name)}>
              Transport {name}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Universe;
