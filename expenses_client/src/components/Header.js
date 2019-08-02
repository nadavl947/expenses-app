import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return(
    <div className="header">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Expenses">Expenses</Link></li>
        <li><Link to="/Incomes">Incomes</Link></li>
        <li><Link to="/Statistics">Statistics</Link></li>
      </ul>
    </div>
  )
}
export default Header;
