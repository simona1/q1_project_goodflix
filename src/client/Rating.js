const React = require('react');

class Rating extends React.Component {
  static propTypes = {
    rating: React.PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const stars = [];
    for (let i = 0; i < this.props.rating; ++i) {
      stars.push(<i className="material-icons md-icon dp48">grade</i>);
    }
    return (
      <span
        className="item-rating"
        style={{width: Math.floor(24 * this.props.rating) + 'px'}}>
        {stars}
      </span>
    );
  }
}

module.exports = Rating;
