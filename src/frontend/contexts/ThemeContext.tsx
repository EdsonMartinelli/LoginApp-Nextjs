import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ContextProps {
  theme: string;
  toogleTheme: () => void;
}
const ThemeContext = createContext<ContextProps>({
  theme: "dark",
  toogleTheme: () => {
    return;
  },
});

interface ContextCompProps {
  children: ReactNode;
}

export function ThemeContextComponent({ children }: ContextCompProps) {
  console.log("teste");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(darkThemeMq.matches ? "dark" : "light");
  }, []);

  function toogleTheme() {
    setTheme((theme) => (theme == "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          maxHeight: "100%",
          backgroundColor: theme == "dark" ? "purple" : "lightgray",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
