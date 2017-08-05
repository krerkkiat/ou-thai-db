import React from 'react'
import Entry from './Entry'

class SearchResultList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row">
        {this.props.items.length == 0 && <div className="col-sm-12">No results found.</div>}
        {this.props.items.map((item, index) =>
          <Entry
            key={index}
            {...item._source}
          />)}
      </div>
    )
  }
}

export default SearchResultList
