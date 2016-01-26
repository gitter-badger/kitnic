const React       = require('react');
const ReactDOM    = require('react-dom');
const SearchInput = require('react-search-input');
const TitleBar    = require('./TitleBar');
const BoardThumb  = require('./BoardThumb');
const boards      = require('./boards.json');

var BoardList = React.createClass({
  render: function () {
    var initialLoad = !(this.props.searching);
    if (this.props.data.length === 0) {
      return (
        <div>
          <div style={{height:'40%'}}></div>
          <div style={{width:'100%', textAlign:'center'}}>
                No results
          </div>
        </div>
      );
    }
    var thumbNodes = this.props.data.map(function(data, index) {
      return (
        <BoardThumb data={data} key={data.id + index}
          lazyLoad={ (! initialLoad) || (index > 10) }/>
      );
    });
    var intro = (
      <div style=
        {{
          marginLeft:'10%'
          , marginRight:'10%'
          , marginTop:32
          , marginBottom: 32
          , display:(initialLoad ? 'inherit' : 'none')
      }}>
      <center>
        <div style=
          {{
            backgroundColor: '#FAFAFA'
            , padding: 20
            , borderRadius: 5
            , textAlign:'left'
            , maxWidth:700
        }}>
        <p>

          Kitnic.it is a repository of open hardware electronics projects that
          are ready for you to order and build. Click on a project to get further
          info, download the gerbers and see the bill of materials.

        </p><p>

          To quickly purchase the parts from various retailers you should
          <a href='http://1clickBOM.com'> install</a> the 1-click-BOM extension.
          It's pretty useful on it's own too and can be used on other sites.
          Read more about it <a href='http://1clickBOM.com'>here</a>.

        </p><p>

          <a href='/submit'> Submit</a> your own project to have it listed here!

        </p>
      </div>
      </center>
      </div>
    );
    return (
      <div>
          {intro}
        <div style={{margin: 32, textAlign:'center'}}>
          {thumbNodes}
        </div>
      </div>
    );
  }
});

var Main = React.createClass({

  getInitialState: function() {
    return {
      result: boards
      , searching: false
    };
  },

  render: function () {
    return (
      <div>
        <TitleBar>
          <SearchInput
            className='search-input'
            ref='search'
            onChange={this.searchUpdated}
           />
        </TitleBar>
        <BoardList data={this.state.result} searching={this.state.searching}/>
      </div>
    );
  },

  searchUpdated: function (term) {
    if (this.refs.search) {
      var filters = ['id', 'description'];
      var result = boards.filter(this.refs.search.filter(filters));
      if (term.length > 2) {
        //piwik tracking
        _paq.push(['trackSiteSearch',
            // Search keyword searched for
            term,
            // Search category selected in your search engine. If you do not
            // need this, set to false
            "Boards",
            // Number of results on the Search results page. Zero indicates a
            // 'No Result Search Keyword'. Set to false if you don't know
            result.length
        ]);
      }
      this.setState({result: result, searching:(term.length > 0)});
    }
  }
});

module.exports = Main;
