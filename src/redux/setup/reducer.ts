const initial_state = {
  jobRoles: [],
  skills: [],
  location: [],
  timePreference: {
    mon: '',
    tue: '',
    wed: '',
    thu: '',
    fri: '',
    sat: '',
    sun: '',
  },
  manualResume: [],
  accountType: '',
};

export const SetupReducer = (
  state = initial_state,
  action: {type: string; payload: any},
) => {
  const {type, payload} = action;
  switch (type) {
    case 'Store_JobRoles':
      return {...state, jobRoles: payload};
    case 'Store_Location':
      return {...state, location: payload};
    case 'Store_Skills':
      return {...state, skills: payload};
    case 'Store_TimePreference':
      return {...state, timePreference: payload};
    case 'Store_ManualResume':
      return {...state, manualResume: [...state.manualResume, payload]};
    case 'Update_ManualResume':
      return {...state, manualResume: payload};
    case 'Store_ProfileType':
      return {...state, accountType: payload};
    default:
      return state;
  }
};
