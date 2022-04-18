import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contact";
import  { skillsSlice } from "./skills";

export default  configureStore({
    reducer:{
        contact: contactSlice.reducer,
        skills: skillsSlice.reducer


    }
})