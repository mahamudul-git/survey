import { useState } from "react";
import { NavigationContext } from "../hooks/useNavigation.js";

// Provider component
const NavigationProvider = ({ children }) => {
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

export default NavigationProvider;
