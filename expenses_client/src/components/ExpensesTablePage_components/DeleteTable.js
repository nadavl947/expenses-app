import React from 'react';

class DeleteTable extends React.Component{
  onDeleteTableClick = () => {
    alert('Delete all Table?')
    fetch(`http://localhost:4000/deleteTable?title=${JSON.stringify(this.props.tableName)}&user_id=${JSON.stringify(localStorage.getItem("userId"))}`)
    .then(response => response.json())
    .catch(err => console.error(err))
  }
  render(){
    return(
      <form className="deleteTableBtn" onSubmit={this.onDeleteTableClick}>
        <input type="submit" value="X"/>
      </form>
    )
  }
}
export default DeleteTable;
