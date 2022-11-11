import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDone, MdOutlineEdit, MdOutlineClose } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import { TASKDELETE, TASKDONE } from "../Redux/actionTypes";
import { taskDelete, taskDone } from "../Redux/action";

const Task = () => {
  const tasks = useSelector((state) => state.filtred);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className=" grid grid-flow-row justify-center pt-8 lg:md:pt-0">
      {tasks.map((el, i) => (
        <div
          key={i}
          className={`rounded-full mx-2 border-[1px] ${
            el.isDone ? "bg-primary" : ""
          }`}
        >
          <div className=" grid grid-flow-col grid-cols-4 gap-16 items-center text-white mx-2 h-16">
            <div className={`col-span-2 ${el.isDone ? " line-through" : ""}`}>
              {el.taskDesc}
            </div>
            <div>{el.isDone ? "Done" : "Todo"}</div>
            <div className="text-end">
              {el.isDone ? (
                <div className="flex flex-row justify-end lg:md:w-[6.25rem] ">
                  <button
                    className="btn btn-circle btn-error btn-md"
                    onClick={() => {
                      dispatch(taskDelete(el.taskId));
                    }}
                  >
                    <MdOutlineClose size={"1.1rem"} />
                  </button>
                </div>
              ) : (
                <div className=" flex flex-row justify-end gap-1">
                  <button
                    className="btn btn-circle btn-success btn-md "
                    onClick={() => {
                      navigate(`/edit/${el.taskId}`);
                    }}
                  >
                    <MdOutlineEdit size={"1.1rem"} />
                  </button>
                  <button
                    className="btn btn-circle btn-success btn-md"
                    onClick={() => {
                      dispatch(taskDone(el.taskId));
                    }}
                  >
                    <MdDone size={"1.1rem"} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
