import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {GetStatisticsTitleGroup, GetExpensesData} from '../actions';

import ExpensesTablePage from './ExpensesTablePage.js'
import StatisticsPage from './StatisticsPage.js'
import Header from './Header.js'
import Fotter from './Fotter.js'
import SideConnectButton from './SideConnectButton.js'
import CreateNewTable from './CreateNewTable.js'
import IncomesPage from './IncomesPage.js'
import LoginPage from './LoginPage.js'
import ExpensesTableDetailsPage from './ExpensesTableDetailsPage.js'
import CreateAcountPage from './CreateAcountPage.js'

class App extends React.Component{

// get Statistics Data
  componentDidMount(){
    this.getData_Statistics();
    this.getData_AllExpenses();
  }
  getData_Statistics = () => {
    var statisticsObject = {
      tablesTitles: [],
      tablesTotalAmount: [],
      tablesTotalItems: [],
      tablesColor: []
    }
    fetch(`http://localhost:4000/statisticsTitle?user_id=${JSON.stringify(localStorage.getItem("userId"))}`)
    .then(response => response.json())
    .then(({ data }) => {
      for(var i = 0; i < data.length; i++){
        statisticsObject.tablesTitles.push(data[i].title)
      }
      for(var j = 0; j < data.length; j++){
        statisticsObject.tablesTotalAmount.push(data[j].money_from_title)
      }
      for(var l = 0; l < data.length; l++){
        statisticsObject.tablesTotalItems.push(data[l].number_of_items)
      }
      for(var g = 0; g < data.length; g++){
        statisticsObject.tablesColor.push(data[g].color)
      }
      this.props.GetStatisticsTitleGroup(statisticsObject)
    })
    .catch(err => console.error(err))
  }

  getData_AllExpenses = () => {
    fetch(`http://localhost:4000/?user_id=${JSON.stringify(localStorage.getItem("userId"))}`)
    .then(response => response.json())
    .then(({ data }) => {
      this.props.GetExpensesData(data)
    })
    .catch(err => console.error(err))
  }

  render(){
      return(
        <div className="app">
          <BrowserRouter>
            <div className="flex1">
              <Header/>
            </div>
            <div className="flex2">
              <div className="flex21">
                <SideConnectButton/>
                <Route path='/' exact component={LoginPage}/>
                <Route path='/CreateAcountPage' exact component={CreateAcountPage}/>
                <Route path='/Expenses' exact component={ExpensesTablePage}/>
                <Route path='/Incomes' exact component={IncomesPage}/>
                <Route path='/Statistics' exact component={StatisticsPage}/>
                <Route path='/CreateTable' exact component={CreateNewTable}/>
                <Route path='/ExpensesTableDetails' exact component={ExpensesTableDetailsPage}/>
              </div>
              <div className="flex22">
                <Fotter/>
              </div>
            </div>
          </BrowserRouter>
        </div>
      )
  }
}

export default connect(null, {GetStatisticsTitleGroup, GetExpensesData})(App);
