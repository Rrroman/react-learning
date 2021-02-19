const React = require('react');

class WishlistForm extends React.Component {
  constructor(props) {
    super(props);
    this.send = props.send;
    this.state = {
      name: '',
      wish: '',
      defaultValue: 'Please write your wish.',
      priority: 1,
    };
  }

  textHandler(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handlePriority(event) {
    this.setState({ priority: event.target.value });
  }

  handleSubmit(event) {
    this.send(this.state);
    event.preventDefault();
  }

  render() {
    const wishArray = [...Array(5)].map((number, index) => index + 1);

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Name:
          <input type="text" id="name" onChange={this.textHandler.bind(this)} />
        </label>
        <textarea
          id="wish"
          placeholder={this.state.defaultValue}
          value={this.state.wish}
          onChange={this.textHandler.bind(this)}
        />
        <select
          value={this.state.priority}
          id="priority"
          onChange={this.handlePriority.bind(this)}
        >
          {wishArray.map((wishNumber) => (
            <option key={wishNumber}>{wishNumber}</option>
          ))}
        </select>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default WishlistForm;
