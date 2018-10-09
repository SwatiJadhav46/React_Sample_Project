import { get } from '../apis/apiHelper.js';

const fetchingEmailSucceed = (emailList=[]) => {
  return {
    type: "FETCHING_EMAILS_SUCCEEDED",
    payload: {
      emailList
    }
  }
}

const fetchingEmailFailed = (errorMsg) => {
  return {
    type: "FETCHING_EMAILS_fAILED",
    payload: {
      errorMsg
    }
  }
}

export const fetchEmails = () => {
  return dispatch => {
    get("http://d4cb1993.ngrok.io/mails/inbox")
      .then(jsonResponse => {
        console.log("==============", jsonResponse)
        dispatch(fetchingEmailSucceed(jsonResponse.data))
      })
      .catch(errorResponse => {
        dispatch(fetchingEmailFailed(errorResponse.message))
      });
  }
}
