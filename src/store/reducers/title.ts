interface actionParams {
  type: string,
  data: []
}
const initState: [] = [];
export default function titleReducer(preState = initState, action: actionParams) {
  const {type, data} = action;
  switch(type) {
    case 'titleGET': 
    preState = data;
      return preState;
    default:
      return preState
  }
}