import { createSlice } from "@reduxjs/toolkit";


const initialEducationCatetory = { selectedStudentType: "", categories: [], backButton: -1 }

const educationCategorySlice = createSlice({
  name: "education-category",
  initialState: initialEducationCatetory,
  reducers: {
    setSelectedStudentType(state, action) {
      state.selectedStudentType = action.payload;
    },
    addCategory(state, action) {
      const newCategory = action.payload;
      const existingCategory = state.categories.find(
        (category) => category === newCategory
      );

      if (!existingCategory) {
        state.categories.push(newCategory);
      } else {
        const index = state.categories.findIndex((category) => category === newCategory);
        state.categories.splice(index);
      }
    },
    setBackButton(state, action) {
      state.backButton = action.payload;
    }
  }
})

export const educationCategoryActions = educationCategorySlice.actions;
export default educationCategorySlice;
