"use client"; // ✅ must be client component

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface BrandContextType {
  logoUrl: string;
  updateLogo: (file: File) => void;
  resetLogo: () => void;
}

// Default SVG logo (Data URI)
const DEFAULT_LOGO = `data:image/svg+xml,%3Csvg ... %3C/svg%3E`;

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export const BrandProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [logoUrl, setLogoUrl] = useState<string>("");

  // Load from localStorage on mount
  useEffect(() => {
    const savedLogo = localStorage.getItem("med_afrique_logo");
    setLogoUrl(savedLogo || DEFAULT_LOGO);
  }, []);

  // Update favicon whenever logoUrl changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      const favicon = document.getElementById("favicon") as HTMLLinkElement;
      if (favicon) {
        favicon.href = logoUrl;
      }
    }
  }, [logoUrl]);

  // Update logo with new file
  const updateLogo = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setLogoUrl(base64String);
      localStorage.setItem("med_afrique_logo", base64String);
    };
    reader.readAsDataURL(file);
  };

  // Reset to default logo
  const resetLogo = () => {
    setLogoUrl(DEFAULT_LOGO);
    localStorage.removeItem("med_afrique_logo");
  };

  return (
    <BrandContext.Provider value={{ logoUrl, updateLogo, resetLogo }}>
      {children}
    </BrandContext.Provider>
  );
};

// Hook to use BrandContext
export const useBrand = () => {
  const context = useContext(BrandContext);
  if (!context) throw new Error("useBrand must be used within a BrandProvider");
  return context;
};
