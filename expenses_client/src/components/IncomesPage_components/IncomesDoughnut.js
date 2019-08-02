import React from 'react';
import {connect} from 'react-redux';
import {Doughnut} from 'react-chartjs-2';

class IncomesDoughnut extends React.Component{
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
        labels: this.props.incomesStatisticsReducer.incomeSource,
        data: this.props.incomesStatisticsReducer.incomeAmount,
        backgroundColor: this.props.incomesStatisticsReducer.incomeColor
      })
    }, 200)
  }

  render(){
    return(
      <div className="incomesDoughnut">
        <Doughnut
          data={{
            labels: this.state.labels,
            datasets: [{
              lable: 'height',
              data: this.state.data,
              backgroundColor: this.state.backgroundColor
            }]
          }}
          height={280}
          options={{maintainAspectRatio: false}}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    incomesStatisticsReducer: state.incomesStatisticsReducer
  }
}

export default connect(mapStateToProps)(IncomesDoughnut);
