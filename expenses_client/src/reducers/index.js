import {combineReducers} from 'redux';

//============================================ expenses reducers
const allDataReducer = (allExpensesData = '', action) => {
  switch(action.type){
    case 'GET_ALL_DATA':
      return allExpensesData = action.payload;
    default:
      return allExpensesData;
  }
}

//=============================================incomes reducers
const incomesDataReducer = (incomes = '', action) => {
  switch(action.type){
    case 'GET_INCOMES_DATA':
      return incomes = action.payload;
    default:
      return incomes;
  }
}

const incomesStatisticsReducer = (incomesStat = '', action) => {
  switch(action.type){
    case 'GET_INCOMES_STATISTICS':
     return incomesStat = action.payload;
   default:
    return incomesStat;
  }
}
//=============================================statistics reducers
const statisticsGroupByTitleReducer = (titleStatistics = '', action) => {
  switch(action.type){
    case 'GET_STATISTIC_TITLE_GROUP':
      return titleStatistics = action.payload;
    default:
      return titleStatistics;
  }
}

//============================================= google oauth reducers
const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
  userEmail: null
}

const auth = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'SIGN_IN':
      return {...state, isSignedIn: true, userId: action.payload.userId, userEmail: action.payload.userEmail};
    case 'SIGN_OUT':
      return {...state, isSignedIn: false, userId: null, userEmail: null};
    default:
      return state;
  }
}

export default combineReducers({
  allDataReducer: allDataReducer,
  incomesDataReducer: incomesDataReducer,
  incomesStatisticsReducer: incomesStatisticsReducer,
  statisticsGroupByTitleReducer: statisticsGroupByTitleReducer,
  auth: auth
})
