import React from 'react';
import challenges from './Jason_Huang_FrontEnd_Developer_challenges';
import labs from './Jason_Huang_FrontEnd_Developer_labs';
import projects from './Jason_Huang_FrontEnd_Developer_projects';

// setting up data context so that every component has access to the dummy data
export const DataContext = React.createContext({});

export const DataProvider = (props) => {
  return (
    <DataContext.Provider value={{challenges, labs, projects}}>
      {props.children}
    </DataContext.Provider>
  )
}