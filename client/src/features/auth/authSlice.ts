import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

const tokenFromStorage = sessionStorage.getItem('token');

const initialState: AuthState = {
  isAuthenticated: !!tokenFromStorage,
  token: tokenFromStorage,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<{ token: string }>) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      sessionStorage.setItem('token', action.payload.token);
    },
    clearAuth: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      sessionStorage.removeItem('token');
    },
  },
  selectors: {
    selectIsAuthenticated: (state) => state.isAuthenticated,
    selectToken: (state) => state.token,
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export const { selectIsAuthenticated, selectToken } = authSlice.selectors;
export default authSlice.reducer;
