const Card = require('./Card.js');
const React = require('react');

class ItemList extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div className="row">
        {this.props.items.map(item => 
          <Card 
            heading={item.heading}
            subheading={item.subheading}
            rating={item.rating}
            imageUrl={item.imageUrl}
          />
        )}
      </div>
    );
  }
}

module.exports = ItemList;
