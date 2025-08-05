import React, { Children, createContext, useContext, useState } from "react";
//create context
const UrlContext = createContext();
//url provider component
export const UrlProvider = ({ children }) => {
  const [companyUrl, setCompanyUrl] = useState("");
  return (
    <UrlContext.Provider value={{ companyUrl, setCompanyUrl }}>
      {children}
    </UrlContext.Provider>
  );
};

export const useUrl = () => useContext(UrlContext);
