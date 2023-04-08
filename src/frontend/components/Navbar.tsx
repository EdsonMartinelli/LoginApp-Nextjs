import { useThemeContext } from "../contexts/ThemeContext";

export function Navbar() {
    const themeContext = useThemeContext();
    return(
        <div>
            { <button 
                onClick={() => themeContext.toogleTheme()}
            >
                {themeContext.theme}
            </button> }
        </div>
    );
  
}
