import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.handleOnValueChange = this.handleOnValueChange.bind(this)
    this.handleOnSearchBtnClick = this.handleOnSearchBtnClick.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleOnClearBtnClick = this.handleOnClearBtnClick.bind(this)
  }

  handleOnValueChange(e) {
    this.props.onValueChange(e.target.value)
  }

  handleOnSearchBtnClick(e) {
    this.props.onSearchBtnClick()
  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.props.onSearchBtnClick()
  }

  handleOnClearBtnClick(e) {
    this.props.onClearBtnClick()
  }

  render() {
    return (
      <div className="row search-bar">
        <form className="form-horizontal" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="queryTxt" className="col-sm-1 control-label">Query </label>
            <div className="col-sm-11">
              <input
                name="queryTxt"
                id="queryTxt"
                className="form-control"
                placeholder="title_eng: History AND Cultural"
                type="text"
                value={this.props.value}
                onChange={this.handleOnValueChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-1 col-sm-11">
              <button
                className="btn btn-default"
                type="button"
                onClick={this.handleOnSearchBtnClick}
              >Search</button>
              <button
                className="btn btn-default "
                type="button"
                onClick={this.handleOnClearBtnClick}
              >Clear</button>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-1 col-sm-11">
              <span>More information on query syntax; please see <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax" target="_blank">here</a></span>
              </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
