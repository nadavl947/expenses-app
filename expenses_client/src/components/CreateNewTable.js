import React from 'react'
import { SketchPicker } from 'react-color'

class CreateNewTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      table_coler: 'ED6033',
      sub_title: '',
      amount: '',
      expense_date: ''
    }
  }
  onCreateTableClick = (event) => {
    fetch(`http://localhost:4000/addTable?title=${JSON.stringify(this.state.title)}&sub_title=${JSON.stringify(this.state.sub_title)}&amount=${this.state.amount}&expense_date=${JSON.stringify(this.state.expense_date)}&user_id=${JSON.stringify(localStorage.getItem("userId"))}&table_coler=${JSON.stringify(this.state.table_coler)}`)
    .then(response => response.json())
    .catch(err => console.error(err))
  }
  onColorPiked = (color) => {
    var colorName = Array.from(color).slice(1, 8).join("")
    this.setState({
      table_coler: colorName
    })
  }
  render(){
    return(
      <div className="createTablePage">
        <div className="pageTitle">
          <h1>New Table</h1>
          <p>Create your own tables! Chose a color and defaind your items!!</p>
        </div>
        <div className="createTableForm">
          <form onSubmit={this.onCreateTableClick}>
            <div className="createTableFlex1">
              <label>Table Name:</label><br/>
              <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/><br/>
              <label>Table Color:</label><br/>
              <SketchPicker
                color={this.state.table_coler}
                onChangeComplete={(color) => this.onColorPiked(color.hex)}
                disableAlpha={true}
              />
            </div>
            <div className="createTableFlex2">
              <p>To create a new table you need to provide an item:</p>
              <label>Sub-Title:</label><br/>
              <input type="text" value={this.state.sub_title} onChange={(event) => this.setState({sub_title: event.target.value})}/><br/>
              <label>Amount:</label><br/>
              <input type="number" value={this.state.amount} onChange={(event) => this.setState({amount: event.target.value})}/><br/>
              <label>Date:</label><br/>
              <input type="text" value={this.state.expense_date} onChange={(event) => this.setState({expense_date: event.target.value})} placeholder="yyyy-mm-dd"/><br/>
              <input type="submit" value="Submit" className="addIncomeBtn"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default CreateNewTable;
