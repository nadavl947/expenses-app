import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {connect} from 'react-redux';

class GroupDoughnut extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        labels: [],
        data: [],
        backgroundColor: []
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        labels: this.props.statisticsGroupByTitleReducer.tablesTitles,
        data: this.props.statisticsGroupByTitleReducer.tablesTotalAmount,
        backgroundColor: this.props.statisticsGroupByTitleReducer.tablesColor
      })
    }, 200)
  }
  render(){
    return(
      <div className="statisticsItem">
        <div style={{marginBottom: '5%'}}>
          <p>The Doughnut table below represents the distrirbution of money spent in each table.</p>
        </div>
        <div>
          <Doughnut
            data={{
              labels: this.state.labels,
              datasets: [{
                lable: 'height',
                data: this.state.data,
                backgroundColor: this.state.backgroundColor
              }]
            }}
            height={200}
            options={{maintainAspectRatio: false}}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    statisticsGroupByTitleReducer: state.statisticsGroupByTitleReducer
  }
}

export default connect(mapStateToProps)(GroupDoughnut);
