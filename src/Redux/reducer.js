import { TASKADD, TASKDELETE, TASKDONE, TASKEDIT, TASKFILTER } from "./actionTypes";

const initialState = {
    value: [
      { taskId: 0, taskDesc: "English Course", isDone: false },
      { taskId: 1, taskDesc: "React JS Course ", isDone: false },
      { taskId: 2, taskDesc: "Redux Course", isDone: false },
      { taskId: 3, taskDesc: "JavaScript & CSS Course", isDone: false },
    ],
    filtred: [],
  };
  initialState.filtred = initialState.value;
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case TASKADD:
        return {
          ...state,
          value: [...state.value, action.payload],
          filtred: [...state.filtred, action.payload],
        };
      case TASKDONE:
        return {
          ...state,
          value: state.value.map((el, i) =>
            el.taskId === action.payload ? { ...el, isDone: true } : el
          ),
          filtred: state.filtred.map((el, i) =>
            el.taskId === action.payload ? { ...el, isDone: true } : el
          ),
        };
      case TASKEDIT:
        const { idt, nDesc } = action.payload;
        return {
          ...state,
          value: state.value.map((el, i) =>
            el.taskId === idt ? { ...el, taskDesc: nDesc } : el
          ),
          filtred: state.filtred.map((el, i) =>
            el.taskId === idt ? { ...el, taskDesc: nDesc } : el
          ),
        };
      case TASKFILTER:
        return {
          ...state,
          value: [...state.value],
          filtred: state.value.filter((el) =>
            action.payload === "Done"
              ? el.isDone === true
              : action.payload === "Todo"
              ? el.isDone === false
              : el
          ),
        };
      case TASKDELETE:
        return {
          ...state,
          value: state.value.filter((el) => el.taskId !== action.payload),
          filtred: state.filtred.filter((el) => el.taskId !== action.payload),
        };
      default:
        return initialState;
    }
  };
  
  export default Reducer;
