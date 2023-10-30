// ** Reducers Imports
import layout from "./layout"
import navbar from "./navbar"
import auth from "./authentication"
import module from "./api/module"
import homeAssignmentQuestion from "./api/homeAssignmentQuestion"
import homeAssignmentAnswer from "./api/homeAssignmentAnswer"
import journalAnswer from "./api/journalAnswer"
import preTestQuestion from "./api/preTestQuestion"
import preTestAnswer from "./api/preTestAnswer"
import seelabs from "./api/seelabs"
import user from "./api/user"

const rootReducer = {
  auth,
  navbar,
  layout,
  module,
  homeAssignmentQuestion,
  homeAssignmentAnswer,
  journalAnswer,
  preTestQuestion,
  preTestAnswer,
  seelabs,
  user
}

export default rootReducer
