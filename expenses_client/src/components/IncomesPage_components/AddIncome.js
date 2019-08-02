import React from 'react';

class AddIncome extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      incom_source: '',
      amount: '',
      incom_date: '',
      color: ''
    }
  }
  onIncomeSubmit = (event) => {
    fetch(`http://localhost:4000/addIncome?incom_source=${JSON.stringify(this.state.incom_source)}&amount=${this.state.amount}&incom_date=${JSON.stringify(this.state.incom_date)}&color=${JSON.stringify(this.state.color)}&user_id=${JSON.stringify(localStorage.getItem("userId"))}`)
    .then(response => response.json())
    .catch(err => console.error(err))
  }
  render(){
    return(
      <div className="addIncome">
        <div className="addTitle">
          <h2>ADD INCOME</h2>
        </div>
        <div className="addIncomeForm">
          <form onSubmit={this.onIncomeSubmit}>
            <label>Income Source:</label><br/>
            <input type="text" value={this.state.incom_source} onChange={(event) => this.setState({incom_source: event.target.value})}/><br/>
            <label>Income Color:</label><br/>
            <input type="text" value={this.state.color} onChange={(event) => this.setState({color: event.target.value})}/><br/>
            <label>Amount:</label><br/>
            <input type="number" value={this.state.amount} onChange={(event) => this.setState({amount: event.target.value})}/><br/>
            <label>Date of Income</label><br/>
            <input type="text" value={this.state.incom_date}onChange={(event) => this.setState({incom_date: event.target.value})} placeholder="yyyy-mm-dd"/><br/>
            <input type="submit" value="Submit" className="addIncomeBtn"/>
          </form>
        </div>
      </div>
    )
  }
}
export default AddIncome;
