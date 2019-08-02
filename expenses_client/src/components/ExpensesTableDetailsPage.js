import React from 'react';

import ExpensesDetails from './ExpensesTablePage_components/ExpensesDetails.js';
import InsertToExpenseTable from './ExpensesTablePage_components/InsertToExpenseTable.js';

const ExpensesTableDetailsPage = () => {
    return(
      <div className="tableDetailsPage">
        <div className="pageTitle">
          <h1>Table Deteils:</h1>
          <p>Chack your table Items, and Insert or Delete any of your Items...</p>
        </div>
        <div className="expensesTableDetailsPage">
          <InsertToExpenseTable/>
          <ExpensesDetails/>
        </div>
      </div>
    )
}


export default ExpensesTableDetailsPage;
