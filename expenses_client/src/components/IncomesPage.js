import React from 'react';
import {connect} from 'react-redux';
import {GetIncomesDate, GetincomesStatistics} from '../actions';
import IncomesTable from './IncomesPage_components/IncomesTable.js'
import AddIncome from './IncomesPage_components/AddIncome.js'
import IncomesDoughnut from './IncomesPage_components/IncomesDoughnut.js'

class IncomesPage extends React.Component{

  componentDidMount(){
    this.getIncomes_Statistics_and_data()
  }

  getIncomes_Statistics_and_data = () => {
    var incomesObject = {
      incomeSource: [],
      incomeAmount: [],
      incomeColor: [],
      incomeSum: 0
    }
    fetch(`http://localhost:4000/income?user_id=${JSON.stringify(localStorage.getItem("userId"))}`)
    .then(response => response.json())
    .then(({ data }) => {
      for(var i = 0; i < data.length; i++){
        incomesObject.incomeSource.push(data[i].incom_source)
      }
      for(var j = 0; j < data.length; j++){
        incomesObject.incomeAmount.push(data[j].amount)
      }
      for(var w = 0; w < data.length; w++){
        incomesObject.incomeColor.push(data[w].color)
      }
      for(var s = 0; s < data.length; s++){
        incomesObject.incomeSum = incomesObject.incomeSum + data[s].amount
      }
      this.props.GetincomesStatistics(incomesObject)
      this.props.GetIncomesDate(data)
    })
    .catch(err => console.error(err))
  }

  render(){
    return(
      <div className="incomesPage">
        <div className="pageTitle">
          <h1>My Incomes:</h1>
          <p>
            MY Expenses lets you also track your Incomes from diffrent sources!<br/>
            Add or Remove an Income and see below how you Expenses divided.
          </p>
        </div>
        <div className="incompesPageComponents">
          <AddIncome/>
          <h1>My Incomes List</h1>
          <IncomesTable/>
          <h1>My Incomes Statistics</h1>
          <IncomesDoughnut/>
        </div>
      </div>
    )
  }
}

export default connect(null, {GetIncomesDate, GetincomesStatistics})(IncomesPage);
