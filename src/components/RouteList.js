import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List } from 'antd';
import { selectRoute } from '../reducers/routeReducer';

const RouteList = () => {
  const routes = useSelector((state) => state.routes);
  const dispatch = useDispatch();

  const handleRouteClick = (route) => {
    dispatch(selectRoute(route));
  };

  return (
    <List
      dataSource={routes}
      renderItem={(route) => (
        <List.Item
          onClick={() => handleRouteClick(route)}
          style={{ cursor: 'pointer', backgroundColor: route.selected ? '#f0f0f0' : 'white' }}
        >
          {route.name}
        </List.Item>
      )}
    />
  );
};

export default RouteList;
