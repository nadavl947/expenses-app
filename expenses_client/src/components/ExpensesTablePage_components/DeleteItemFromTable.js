import React from 'react';

class DeleteItemFromTable extends React.Component{
  onDeleteItemClick = () => {
    alert('Delete this row?')
    fetch(`http://localhost:4000/deleteItem?id=${this.props.itemId}`)
    .then(response => response.json())
    .catch(err => console.error(err))
    window.location.reload();
  }
  render(){
    return(
      <div className="deleteItem">
        <button onClick={this.onDeleteItemClick}>X</button>
      </div>
    )
  }
}
export default DeleteItemFromTable;
