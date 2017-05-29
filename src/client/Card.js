const React = require('react');
const Rating = require('./Rating.js');

class Card extends React.Component {
  static propTypes = {
    imageUrl: React.PropTypes.string.isRequired,
    heading: React.PropTypes.string.isRequired,
    subheading: React.PropTypes.string.isRequired,
    rating: React.PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col s1 m2">
        <div className="card item-card">
          <div className="card-image">
            <img src={this.props.imageUrl} />
          </div>
          <div className="card-content">
            <div className="item-heading">{this.props.heading}</div>
            <div className="item-subheading">{this.props.subheading}</div>
            <Rating rating={this.props.rating} />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Card;
