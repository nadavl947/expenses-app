import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import DeleteTable from './DeleteTable.js';

class TableTitleRender extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        tablesTitles: "",
        tablesColor: ''
      }
    }
componentDidMount(){
  setTimeout(() => {
    this.setState({
      tablesTitles: this.props.statisticsGroupByTitleReducer.tablesTitles,
      tablesColor: this.props.statisticsGroupByTitleReducer.tablesColor,
    })
  }, 300)
}

  RenderTitle = (y) => {
      return(
        <div key={this.state.tablesTitles[y]} className="singleTable" style={{background: `linear-gradient(to bottom right, ${this.state.tablesColor[y]} , white)`}}>
          <DeleteTable tableName={this.state.tablesTitles[y]}/><br/>
          <Link to="/ExpensesTableDetails" className="tabletitle">
            <button onClick={() => localStorage.setItem('tableName', this.state.tablesTitles[y])}>
              <h1>{this.state.tablesTitles[y]}</h1>
            </button>
          </Link><br/>
        </div>
      )
  }
  renderTitleByIndex = (x) => {
    var l = [];
    for(var i = 0; i < x.length; i++){
      l[i] = this.RenderTitle(i)
    }
    return l;
  }
render(){
    return(
      <div>
        {this.renderTitleByIndex(this.state.tablesTitles)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    statisticsGroupByTitleReducer: state.statisticsGroupByTitleReducer
  }
}
export default connect(mapStateToProps)(TableTitleRender);
