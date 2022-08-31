import { createSlice } from "@reduxjs/toolkit";


const initialEducationCatetory = { selectedStudentType: "", selectedSubject: "", categories: [], backButton: -1, }

const educationCategorySlice = createSlice({
  name: "education-category",
  initialState: initialEducationCatetory,
  reducers: {
    setSelectedStudentType(state, action) {
      state.selectedStudentType = action.payload;
    },
    setSelectedSubject(state, action){
      state.selectedSubject = action.payload;
    },
    addCategory(state, action) {
      const newCategory = action.payload;
      const existingCategory = state.categories.find(
        (category) => category === newCategory
      );

      if (!existingCategory) {
        state.categories.push(newCategory);
      } else {
        const index = state.categories.indexOf(newCategory);
        console.log(index);
        state.categories.splice(index, 1);
      }
    },
    setBackButton(state, action) {
      state.backButton = action.payload;
    }
  }
})

export const educationCategoryActions = educationCategorySlice.actions;
export default educationCategorySlice;
