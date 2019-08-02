import React from 'react';
import {connect} from 'react-redux';

class InsertToExpenseTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sub_title: '',
      amount: '',
      expense_date: '',
      tableName: localStorage.getItem('tableName')
    }
  }
  onInsertSubmit = (event) => {
    fetch(`http://localhost:4000/addTable?title=${JSON.stringify(this.state.tableName)}&sub_title=${JSON.stringify(this.state.sub_title)}&amount=${this.state.amount}&expense_date=${JSON.stringify(this.state.expense_date)}&user_id=${JSON.stringify(localStorage.getItem("userId"))}&table_coler=${null}`)
    .then(response => response.json())
    .catch(err => console.error(err))
  }
  render(){
    return(
      <div className="insertToExpenseTable">
        <div className="addTitle">
          <h2>{this.state.tableName}</h2>
        </div>
        <div className="insertToExpenseTableForm">
          <form onSubmit={this.onInsertSubmit}>
            <label>Sub-Title:</label><br/>
            <input type="text" value={this.state.sub_title} onChange={(event) => this.setState({sub_title: event.target.value})}/><br/>
            <label>Amount:</label><br/>
            <input type="number" value={this.state.amount} onChange={(event) => this.setState({amount: event.target.value})}/><br/>
            <label>Date:</label><br/>
            <input type="text" value={this.state.expense_date} onChange={(event) => this.setState({expense_date: event.target.value})} placeholder="yyyy-mm-dd"/><br/>
            <input type="submit" value="Submit" className="insertBtn"/>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    tableNameToInsert: state.tableNameToInsert
  }
}

export default connect(mapStateToProps)(InsertToExpenseTable);
