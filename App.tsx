import { Home } from '@screens/Home';
import defaultTheme from '@theme/defaultTheme';
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  );
}
