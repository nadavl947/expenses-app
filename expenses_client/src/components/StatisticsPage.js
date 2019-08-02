import React from 'react';
import {connect} from 'react-redux';
import {GetStatisticsTitleGroup} from '../actions';
import GroupDoughnut from './Statistics_Components/GroupDoughnut.js'
import GroupBar from './Statistics_Components/GroupBar.js'

class StatisticsPage extends React.Component{

  render(){
    return (
      <div className="statisticsPage">
        <h1>Money by Table</h1>
          <GroupDoughnut/>
        <h1>Items by Table</h1>
          <GroupBar/>
      </div>
    )
  }
}
export default connect(null, {GetStatisticsTitleGroup})(StatisticsPage);
