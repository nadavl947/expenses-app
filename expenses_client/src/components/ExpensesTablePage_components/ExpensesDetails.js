import React from 'react';
import {connect} from 'react-redux';
import DeleteItemFromTable from './DeleteItemFromTable.js';

class ExpensesDetails extends React.Component{
  renderTableContent = (y) => {
    if(localStorage.getItem('tableName') === this.props.allDataReducer[y].title){
      return(
        <tr key={this.props.allDataReducer[y].id}>
          <td>{this.props.allDataReducer[y].sub_title}</td>
          <td style={{textAlign: "center", color: 'green', fontWeight: 'bold'}}>{this.props.allDataReducer[y].amount}</td>
          <td style={{textAlign: "center"}}><DeleteItemFromTable itemId={this.props.allDataReducer[y].id}/></td>
        </tr>
      )
    }
  }
  renderContentByIndex = (x) => {
    var l = [];
    for(var i = 0; i < x.length; i++){
      l[i] = this.renderTableContent(i)
    }
    return l;
  }

  render(){
    return(
      <div className="expensesDetails">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.renderContentByIndex(this.props.allDataReducer)}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allDataReducer: state.allDataReducer,
    // tableNameToInsert: state.tableNameToInsert
  }
}

export default connect(mapStateToProps)(ExpensesDetails)
