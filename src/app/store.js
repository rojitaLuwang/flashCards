import { configureStore } from "@reduxjs/toolkit";
import topicsSlice from '../features/topics/topicsSlice';
import quizzSlice from "../features/quizzes/quizzSlice";
import cardsSlice from "../features/cards/cardsSlice";

export default configureStore({
  reducer: {
    topics: topicsSlice,
    quizzes: quizzSlice,
    cards: cardsSlice
  },
});

