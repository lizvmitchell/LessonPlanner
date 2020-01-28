// Initial state of the store
const initialState = {
  standard: 'Choose a standard',
  objective: 'Write an objective',
  scaffold: 'Choose some scaffolds',
  plan: 'Enter Do-Now, Mini-Lesson, Activity',
  grade: '',
  subject: ''
}

const UPDATE_OBJECTIVE = 'UPDATE_OBJECTIVE';
export const updateObjective = (objective) => ({type: UPDATE_OBJECTIVE, objective})

const UPDATE_SCAFFOLD = 'UPDATE_SCAFFOLD';
export const updateScaffold = (scaffold) => ({type: UPDATE_SCAFFOLD, scaffold})

const UPDATE_PLAN = 'UPDATE_PLAN';
export const updatePlan = (plan) => ({type: UPDATE_PLAN, plan})

const UPDATE_STANDARD = 'UPDATE_STANDARD';
export const updateStandard = (standard) => ({type: UPDATE_STANDARD, standard})

const UPDATE_GRADE = 'UPDATE_GRADE';
export const updateGrade = (grade) => ({type: UPDATE_GRADE, grade})

const UPDATE_SUBJECT = 'UPDATE_SUBJECT';
export const updateSubject = (subject) => ({type: UPDATE_SUBJECT, subject})


export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_OBJECTIVE:
      return {...state, objective: action.objective};
    case UPDATE_SCAFFOLD:
      return {...state, scaffold: action.scaffold};
    case UPDATE_PLAN:
      return {...state, plan: action.plan};
    case UPDATE_STANDARD:
      return {...state, standard: action.standard};
    case UPDATE_GRADE:
      return {...state, grade: action.grade};
    case UPDATE_SUBJECT:
      return {...state, subject: action.subject};
    default:
      return state
  }
}
