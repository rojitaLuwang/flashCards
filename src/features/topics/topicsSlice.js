import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {}
}

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic:(state, action) => {
            action.payload.quizIds = [];
            state.topics[action.payload.id] = action.payload  
        },
        addQuizId: (state, action) => {
            state.topics[action.payload.topicId].quizIds
                .push(action.payload.id);
        }
    }
})

export const selectTopics = state => state.topics.topics;
export const {addTopic, addQuizId} = topicsSlice.actions;
export default topicsSlice.reducer;