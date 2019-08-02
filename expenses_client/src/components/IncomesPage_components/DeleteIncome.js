import React from 'react';

class DeleteIncome extends React.Component{
  onBtnClick = () => {
    alert('Delete This Income?')
    fetch(`http://localhost:4000/deleteIncome?id=${this.props.ItemsId}`)
    .then(response => response.json())
    .catch(err => console.error(err))
    window.location.reload();
  }
  render(){
    return(
      <div className="deleteIncome">
        <button onClick={this.onBtnClick}>X</button>
      </div>
    )
  }
}
export default DeleteIncome;
