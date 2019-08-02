import React from 'react';
import { Bar } from 'react-chartjs-2';
import {connect} from 'react-redux';

class GroupBar extends React.Component{
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
        data: this.props.statisticsGroupByTitleReducer.tablesTotalItems,
        backgroundColor: this.props.statisticsGroupByTitleReducer.tablesColor
      })
    }, 200)
  }
  render(){
    return(
      <div className="statisticsItem">
        <div style={{marginBottom: '5%'}}>
          <p>The Bar table below represents the number of different items in each table</p>
        </div>
        <div>
          <Bar
            data={{
              labels: this.state.labels,
              datasets: [{
                lable: 'height',
                data: this.state.data,
                backgroundColor: this.state.backgroundColor
              }]
            }}
            height={200}
            options={
              {
                maintainAspectRatio: false,
                legend: false,
                scales: {
                  yAxes: [{
                    ticks: {
                        beginAtZero: true
                      }
                  }]
                }
              }
            }
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
export default connect(mapStateToProps)(GroupBar);
