import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {GetExpensesData} from '../actions';
import TableTitleRender from './ExpensesTablePage_components/TableTitleRender.js';

class ExpensesTablePage extends React.Component{
  render(){
    return(
      <div className="expensesPage">
        <div className="pageTitle">
          <h1>My Tables:</h1>
          <p>Click any of your tables for more deteils!</p>
        </div>
        <div className="expensesTablePage">
          <TableTitleRender/>
          <Link to="/CreateTable" className="createTableLink"><h2>Create Table</h2></Link>
        </div>
      </div>
    )
  }
}

export default connect(null, {GetExpensesData})(ExpensesTablePage);
