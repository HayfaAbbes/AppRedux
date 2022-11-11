import { TASKADD, TASKDELETE, TASKDONE, TASKEDIT, TASKFILTER } from "./actionTypes";

export const taskAdd = (payload) => {
    return {
      type: TASKADD,
      payload,
    };
  };
  export const taskDone = (payload) => {
    return {
      type: TASKDONE,
      payload,
    };
  };
  export const taskEdit = (payload) => {
    return {
      type: TASKEDIT,
      payload,
    };
  };
  export const taskFilter = (payload) => {
    return {
      type: TASKFILTER,
      payload,
    };
  };
  export const taskDelete = (payload) => {
    return {
      type: TASKDELETE,
      payload,
    };
  };
  