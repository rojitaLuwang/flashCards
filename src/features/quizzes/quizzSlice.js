import { createSlice } from "@reduxjs/toolkit";
//import { useDispatch } from "react-redux";
import { addQuizId } from "../topics/topicsSlice";


const initialState = {
    quizzes: {}
};
//const dispatch = useDispatch();

export const createQuiz = (payload) => {
    const toAddQuiz = {
        topicId:  payload.topicId,
        id: payload.id
    }
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizId(toAddQuiz));
    }
} 

export const quizzSlice = createSlice(
    {
        name: 'quizzes',
        initialState: initialState,
        reducers: {
            addQuiz: (state, action) => {
                state.quizzes[action.payload.id] = action.payload;
            }
        }
    }

)

export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzSlice.actions;
export default quizzSlice.reducer;