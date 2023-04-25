import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./styles/themes/default";

export function App(){
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button varient="primary"/>
      <Button varient="secondary"/>
    </ThemeProvider>
  )
}