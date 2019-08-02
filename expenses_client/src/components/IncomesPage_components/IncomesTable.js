import React from 'react';
import {connect} from 'react-redux';
import DeleteIncome from './DeleteIncome.js'

class IncomesTable extends React.Component{
  renderIncomes = (y) => {
    return(
      <tr key={this.props.incomesDataReducer[y].id}>
        <td>{this.props.incomesDataReducer[y].incom_date}</td>
        <td>{this.props.incomesDataReducer[y].incom_source}</td>
        <td style={{textAlign: 'center', color: 'green', fontWeight: 'bold'}}>{this.props.incomesDataReducer[y].amount}</td>
        <td><DeleteIncome ItemsId={this.props.incomesDataReducer[y].id}/></td>
      </tr>
    )
  }
  renderIncomesByIndex = (x) => {
    var l = [];
    for(var i = 0; i < x.length; i++){
      l[i] = this.renderIncomes(i)
    }
    return l;
  }
  render(){
    return(
      <div className="incomesTable">
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Source</th>
              <th>Amount</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.renderIncomesByIndex(this.props.incomesDataReducer)}
            <tr style={{backgroundColor: 'rgb(65, 105, 225, 0.5)', fontWeight: 'bold', textAlign: 'center', color: 'white'}}>
              <td></td>
              <td>Incomes Sum</td>
              <td>{this.props.incomesStatisticsReducer.incomeSum}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    incomesDataReducer: state.incomesDataReducer,
    incomesStatisticsReducer: state.incomesStatisticsReducer
  }
}
export default connect(mapStateToProps)(IncomesTable);
