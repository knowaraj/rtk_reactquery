import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
  filterStatus: 'all',
  sidebarOpen: true,
  notifications: [],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setFilter: (state, action) => {
      state.filterStatus = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    addNotification: (state, action) => {
      state.notifications.push({
        id: Date.now(),
        message: action.payload.message,
        type: action.payload.type || 'info',
      });
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (notif) => notif.id !== action.payload
      );
    },
  },
});

export const { toggleTheme, setFilter, toggleSidebar, addNotification, removeNotification } = uiSlice.actions;
export default uiSlice.reducer;