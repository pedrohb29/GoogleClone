import React, { Component } from 'react';
import './style.scss';

class SearchScreenResultBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText : props.search,
      capitalizedSearchString : props.search[0].toUpperCase() + props.search.slice(1),
      searchTextWithNoSpaces : props.search.replace(/\s/, '')
    }
  }


  renderResultSearch = (element,index) => {
    return (
      <div key={index} className="result__site">
        <div className="result__url">
          <a className="result__url" rel="noreferrer" target="_blank" href={element.href}>{element.href}</a>
        </div>
        <div className="result__homeURL">
          <a className="result__homeURL" rel="noreferrer" target="_blank" href={element.href}>{element.homeURL}</a>
        </div>
        <div className="result__description">
          {element.description}
        </div>
      </div>
    )
  }

  render() {
    const { resultArray } = this.props;
    return (
      <div>
        <div className="result__search">
          <span>About 63,100 results (0.91 seconds) </span>
        </div>
        {
          // PostGreSQL
          //resultArray && resultArray.length > 0 ? resultArray.map((element,index) => this.renderResultSearch(element,index)) : null
        
          // Mongodb
          resultArray && resultArray.length > 0 ? resultArray[0].searchInfo.map((element,index) => this.renderResultSearch(element,index)) : null
        }
      </div>
    )
  }
}

export default SearchScreenResultBlock;