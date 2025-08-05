import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";


interface InitialState {
     tasks: ITask[];
     filter: "all" | "high" | "medium" | "low";
}


const initialState: InitialState = {
     tasks: [
          {
               id: "iCrii1FbDC5QLzbUCuCPM",
               isCompleted: false,
               title: "HTML" ,
               description: "Learning HTML5",
               priority: "Low",
               dueDate: "2025-08-26T18:00:00.000Z",
               assignedTo: null,
          }
     ],
     filter: "all",
};


type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority" | "assignedTo">;


const createTask = (taskData: DraftTask): ITask => {
     return {
          ...taskData,
          id: nanoid(),
          isCompleted: false,
          assignedTo: taskData.assignedTo ? taskData.assignedTo : null,
     };
};



const taskSlice = createSlice({
     name: "task",
     initialState,
     reducers: {
          addTask: (state, action: PayloadAction<DraftTask>) => {

          const task = createTask(action.payload);
          state.tasks.push(task);
     },

     toggleCompletedState: (state, action: PayloadAction<string>) => {
          state.tasks.forEach((task) => 
               task.id === action.payload ?
               (task.isCompleted = !task.isCompleted): task
          );
     },

     deleteTask: (state, action: PayloadAction<string>) => {
          state.tasks = state.tasks.filter((task) => task.id !== action.payload);
     },

     updateFilter: (state, action: PayloadAction<"high" | "medium" | "low" | "all">) => {
          state.filter = action.payload;
     }


     },
     extraReducers: (builder) => {
          builder.addCase(removeUser, (state, action) => {
               state.tasks.forEach((task) => task.assignedTo === action.payload ? (task.assignedTo = null) : task);
          });
     },
});


export const selectTasks = (state: RootState) => {

     const filter = state.todo.filter;

     if(filter === "low") {
          return state.todo.tasks.filter((task) => task.priority === "Low");
     } else if(filter === "medium") {
          return state.todo.tasks.filter((task) => task.priority === "Medium");
     } else if(filter === "high") {
          return state.todo.tasks.filter((task) => task.priority === "High");
     } else {
          return state.todo.tasks;
     }
};

export const selectFilter = (state: RootState) => {
     return state.todo.filter;
};


export const { addTask, toggleCompletedState, deleteTask, updateFilter } = taskSlice.actions;


export default taskSlice.reducer;