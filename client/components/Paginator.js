import React from 'react'

class Paginator extends React.Component {
  constructor(props) {
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(e) {
    this.props.onPageChange(e.target.innerHTML)
  }

  render() {
    if (this.props.total == 0 || this.props.total <= this.props.size) {
      return false
    }

    let pages = []
    for (let i = 1; i < this.props.total / this.props.size; i++) {
      if (i == this.props.current) {
        pages.push(<li key={i} className="active"><a href="#" onClick={this.handleOnClick}>{i}</a></li>)
      } else {
        pages.push(<li key={i}><a href="#" onClick={this.handleOnClick}>{i}</a></li>)
      }
    }


    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li>
            <a href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {pages}
          <li>
            <a href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Paginator
