import React from "react";


const HeaderOptions = (title=`Train Time`, navigation) => {
  return {
    title: title,
    headerTitleStyle: { color: "#FFF" },
    headerStyle: { backgroundColor: "#282c2f" },
    headerRightContainerStyle: {
      marginRight: 20
    },
    headerTintColor: 'white',
    
  };
};

export default HeaderOptions;
