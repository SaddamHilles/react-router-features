import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../features/counterSlice';

const store = configureStore({
  reducer: counterReducer,
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store };
