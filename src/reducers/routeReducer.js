import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  routes: [
    { id: 1, name: 'Route 1', points: [[51.505, -0.09], [51.51, -0.1], [51.51, -0.12]] },
    { id: 2, name: 'Route 2', points: [[51.505, -0.09], [51.52, -0.12], [51.51, -0.13]] },
  ],
  selectedRoute: null,
};

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    selectRoute(state, action) {
      const selectedRouteId = action.payload.id;
      state.routes = state.routes.map((route) => ({
        ...route,
        selected: route.id === selectedRouteId,
      }));
      state.selectedRoute = state.routes.find((route) => route.id === selectedRouteId);
    },
  },
});

export const { selectRoute } = routeSlice.actions;
export default routeSlice.reducer;
