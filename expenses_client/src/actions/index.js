//======================================== expenses actions
export const GetExpensesData = (data) => {
  return {
    type: 'GET_ALL_DATA',
    payload: data
  }
}

//======================================= incomes actions
export const GetIncomesDate = (data) => {
  return {
    type: 'GET_INCOMES_DATA',
    payload: data
  }
}

export const GetincomesStatistics = (data) => {
  return {
    type: 'GET_INCOMES_STATISTICS',
    payload: data
  }
}

//======================================= statistics actions
export const GetStatisticsTitleGroup = (data) => {
  return {
    type: 'GET_STATISTIC_TITLE_GROUP',
    payload: data
  }
}

//====================================== google auth actions
export const SignInAction = (userId, userEmail) => {
  return{
    type: 'SIGN_IN',
    payload: {
      userId: userId,
      userEmail: userEmail
    }
  }
}

export const SignOutAction = () => {
  return {
    type: 'SIGN_OUT'
  }
}
