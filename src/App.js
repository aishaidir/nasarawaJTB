import React from 'react';
import './App.css';
import './css/styles.css';
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { DefaultLayout } from './container/DefaultLayout';
import routeDefinitions from './routes';
// import { AuthPage,CompleteSignup, InitiatePasswordReset, CompletePasswordReset } from './routes/Loaders';
export const history = createBrowserHistory();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2e7d32'
    },
    secondary: {
      light: '#daa520',
      main: '#388e3c',
      dark: '#ba000d',
      contrastText: '#000'
    },
    textPrimary: {
      main: '#daa520'
    }
  }
});
const App = () => {
    const routes = routeDefinitions.map(({
      path,component, title, exact, key,
    }) => {
     
      return (
        <Route
          exact={Boolean(exact)}
          path={path}
          component={component}
          title={title}
          key={key}
        />
      )
    });

    return ( 
      <MuiThemeProvider theme={theme}>
        <Router history={history} >
            <Switch>
            {/* <Route exact path="/auth" name="Login" component={AuthPage} />
            <Route exact path="/auth/signup" name="Register" component={CompleteSignup}/>
            <Route exact path="/organisation/ws/reset/initiate-password-reset" name="Initiate Reset" component={InitiatePasswordReset}/>
            <Route exact path="/organisation/ws/reset/complete-password-reset/:token" name="Complete Reset" component={CompletePasswordReset}/> */}
            <Route path="/" name="Home" component={DefaultLayout} />
            </Switch>
        </Router>
        </MuiThemeProvider>
    );
}

export default App;
