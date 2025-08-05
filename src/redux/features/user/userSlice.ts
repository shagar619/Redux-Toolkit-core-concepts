
import type { IUser } from "@/types/common";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


interface InitialState {
     users: IUser[];
};

const initialState: InitialState = {
     users: [
          {
               _id: "1gsdgfgeywggfv",
               name: "John",

          },
          {
               _id: "2dhufdhgghhbrg",
               name: "John",

          },
     ]
}

const userSlice = createSlice({
     name: "user",
     initialState: initialState,
     reducers: {
          addUser: (state, action: PayloadAction<IUser>) => {
               state.users.push(action.payload)
          },

          removeUser: (state, action: PayloadAction<string>) => {
               state.users = state.users.filter((user) => user._id !== action.payload)
          },
     }
});




export const selectUsers = (state: { user: InitialState }) => state.user.users;

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;