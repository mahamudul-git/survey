import { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <NavigationContext.Provider value={{
      isMenuOpen,
      openMenu,
      closeMenu,
      toggleMenu,
      setIsMenuOpen
    }}>
      {children}
    </NavigationContext.Provider>
  );
};
