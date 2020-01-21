import Layout from './src/components/Layout'
import React from 'react';
import { Provider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import rootReducer from './src/store/rootReducer';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(logger));

const theme = {
  ...DefaultTheme,
  roundness: 13,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};
export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <PaperProvider theme={theme}>
        <Layout
        />
        </PaperProvider>
      </Provider>
    );
  }
}