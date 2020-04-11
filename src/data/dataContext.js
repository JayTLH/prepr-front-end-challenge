import React from 'react';
import challenges from './challenges';
import labs from './labs';
import projects from './projects';

// setting up data context so that every component has access to the dummy data
export const DataContext = React.createContext({});

export const DataProvider = (props) => {
  return (
    <DataContext.Provider value={{challenges, labs, projects}}>
      {props.children}
    </DataContext.Provider>
  )
}