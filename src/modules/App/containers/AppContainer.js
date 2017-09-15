import App from '../components/App';
import { branch, compose, renderComponent } from 'recompose';
import { LoadingIndicator, SignInButton } from 'modules/common';
import withGoogleSheets from 'with-google-sheets';

const toOption = ([label], value) => ({ value, label });

const mapValuesToProps = ([classes, contacts, instructors, sponsors]) => ({
  options: {
    classes: classes.map(toOption),
    contacts: contacts.map(toOption),
    instructors: instructors.map(toOption),
    sponsors: sponsors.map(toOption),
  },
});

const withData = withGoogleSheets(
  {
    apiKey: process.env.REACT_APP_API_KEY,
    clientId: process.env.REACT_APP_CLIENT_ID,
    sheetId: process.env.REACT_APP_SHEET_ID,
  },
  ["'CLASS'!A2:C", "'CONTACT'!A2:B", "'INSTRUCTOR'!A2:G", "'SPONSOR'!A2:D"],
  mapValuesToProps,
);

const withLoadingIndicator = branch(
  props => props.initializing || props.loading,
  renderComponent(LoadingIndicator),
);

const withSignInButton = branch(
  props => props.authorizing,
  renderComponent(SignInButton),
);

export default compose(withData, withLoadingIndicator, withSignInButton)(App);
