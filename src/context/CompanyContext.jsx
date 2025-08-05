import React, { createContext, useContext, useState, useEffect } from "react";

const CompanyContext = createContext();
const DEFAULT_LOGO = "https://iescobill.pk/images/logo.webp";

export const CompanyProvider = ({ children }) => {
  const [companyUrl, setCompanyUrl] = useState(() => {
    // First load: check if sessionStorage has value
    return sessionStorage.getItem("companyUrl") || DEFAULT_LOGO;
  });

  // Save to sessionStorage every time logo changes
  useEffect(() => {
    sessionStorage.setItem("companyUrl", companyUrl);
  }, [companyUrl]);

  return (
    <CompanyContext.Provider value={{ companyUrl, setCompanyUrl }}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = () => useContext(CompanyContext);
