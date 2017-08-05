import React from 'react'
import jQuery from 'jquery'
import SearchBar from './SearchBar'
import SearchResultList from './SearchResultList'
import Paginator from './Paginator'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: 1,
      size: 10,
      totalHits: 0,
      currentSearchResult: [],
      query: ''
    }

    this.handleOnValueChange = this.handleOnValueChange.bind(this)
    this.handleSearchBtnClick = this.handleSearchBtnClick.bind(this)
    this.handleOnClearBtnClick = this.handleOnClearBtnClick.bind(this)
    this.handleOnPageChange = this.handleOnPageChange.bind(this)
  }

  handleOnValueChange(new_value) {
    this.setState({
      query: new_value
    })
  }

  handleSearchBtnClick() {
    this.setState({
      currentPage: 1
    })
    this.fetch(this.state.query, 1, this.state.size)
  }

  handleOnClearBtnClick() {
    this.setState({
      currentPage: 1,
      query: '',
      totalHits: 0,
      currentSearchResult: []
    })
  }

  fetch(q, page, size) {
    jQuery.ajax('/api/v1/search/', {
      method: 'GET',
      data: {
        q: q,
        start: (page-1) * size,
        size: size
      },
    }).then((data) => {
      this.setState({
        currentSearchResult: data['hits']['hits'],
        totalHits: data['hits']['total']
      })
    })
  }

  handleOnPageChange(page) {
    page = parseInt(page)

    this.fetch(this.state.query, page, this.state.size)

    this.setState({
      currentPage: page
    })

  }

  render() {
    return (
      <div>
        <SearchBar
          value={this.state.query}
          onValueChange={this.handleOnValueChange}
          onSearchBtnClick={this.handleSearchBtnClick}
          onClearBtnClick={this.handleOnClearBtnClick}
        />
        <SearchResultList
          items={this.state.currentSearchResult}
        />
      <Paginator
        total={this.state.totalHits}
        current={this.state.currentPage}
        size={this.state.size}
        onPageChange={this.handleOnPageChange}
      />
      </div>
    );
  }
}

export default App
