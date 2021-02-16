const React = require('react');

class Universe extends React.Component {
  constructor() {
    super();
    this.state = {
      intransitToPlanet: ['Lauras', 'Tobin', 'Robot'],
      intransitToStarShip: ['Attilus', 'Dennix', 'Mobius'],
    };
  }

  transport(name) {
    const currentState = { ...this.state };

    const toPlanetIndex = currentState.intransitToPlanet.findIndex(
      (person) => person === name,
    );

    const toStarShipIndex = currentState.intransitToStarShip.findIndex(
      (person) => person === name,
    );

    if (toPlanetIndex !== -1) {
      const liftingPerson = currentState.intransitToPlanet.splice(
        toPlanetIndex,
        1,
      );
      currentState.intransitToStarShip.push(liftingPerson);
    }

    if (toStarShipIndex !== -1) {
      const liftingPerson = currentState.intransitToStarShip.splice(
        toStarShipIndex,
        1,
      );
      currentState.intransitToPlanet.push(liftingPerson);
    }

    this.setState({
      currentState,
    });
  }

  render() {
    return (
      <div className="Universe">
        <h1>Universe</h1>
        <Starship
          person={this.state.intransitToPlanet}
          transport={this.transport.bind(this)}
        />
        <Planet
          person={this.state.intransitToStarShip}
          transport={this.transport.bind(this)}
        />
      </div>
    );
  }
}

class Starship extends React.Component {
  constructor(props) {
    super(props);
    this.inhabitants = props.person;
  }

  render() {
    return (
      <div className="Starship">
        <h3>Starship Finderprise</h3>
        {this.inhabitants.map((name) => {
          return (
            <button key={name} onClick={this.props.transport.bind(this, name)}>
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
    this.inhabitants = props.person;
  }

  render() {
    return (
      <div className="Planet">
        <h3>Planet Earth</h3>
        {this.inhabitants.map((name) => {
          return (
            <button key={name} onClick={this.props.transport.bind(this, name)}>
              Transport {name}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Universe;
