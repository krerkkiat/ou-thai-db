import React from 'react'

class Entry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visibility: false
    }

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(e) {
    this.setState({
      visibility: !this.state.visibility
    })
  }

  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading"></div>
        <ul className="list-group">
          <li className="list-group-item"><strong>Title (ENG)</strong> {this.props.title_eng}</li>
          <li className="list-group-item"><strong>Title (TH)</strong> {this.props.title_th}</li>
          <li className="list-group-item"><strong>Author</strong> {this.props.author_eng} / {this.props.author_th}</li>
          {this.state.visibility == false && <li className="list-group-item"><a href="#!" onClick={this.handleOnClick}>Show more</a></li>}
          {this.state.visibility == true && <li className="list-group-item"><strong>Description</strong> {this.props.description}</li>}
          {this.state.visibility == true && <li className="list-group-item"><strong>Imprint</strong> {this.props.imprint_eng} / {this.props.imprint_th}</li>}
          {this.state.visibility == true && <li className="list-group-item"><strong>Note</strong> {this.props.note_eng} / {this.props.note_th}</li>}
          {this.state.visibility == true && <li className="list-group-item">
            <strong>Subjects</strong>
            <ul>
              {this.props.subjects.map((subject, index) =>
                <li key={index}>{subject}</li>)}
            </ul>
          </li>}
          {this.state.visibility == true && <li className="list-group-item"><strong>OU Call Number</strong> {this.props.call_number}</li>}
          {this.state.visibility == true && <li className="list-group-item"><strong>URL</strong> <a href={this.props.url} target="_blank">{this.props.url}</a></li>}
          {this.state.visibility == true && <li className="list-group-item"><a href="#!" onClick={this.handleOnClick}>Show less</a></li>}
        </ul>
      </div>
    )
  }
}

export default Entry
