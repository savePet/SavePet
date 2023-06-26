import { ReactNode, createContext, useState} from "react";

interface MenuProviderProps {
  children: ReactNode;
}

interface MenuContextProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;

}


export const MenuContext = createContext<MenuContextProps>({
  isMenuOpen: true, 
  toggleMenu: () => {},

});

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [isMenuOpen, setMenuOpen] = useState(true);


  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};