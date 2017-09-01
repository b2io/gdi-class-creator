import { flow, fromPairs, get, map } from 'lodash/fp';
import { mapDataToValues } from 'react-controlled-form';
import { connect } from 'react-redux';
import { branch, compose, renderComponent, withHandlers } from 'recompose';
import { LoadingIndicator, SignInButton } from 'modules/common';
import { submit } from '../actions';
import CreateClassForm from '../components/CreateClassForm';
import withGoogleSheets from 'with-google-sheets';

const toOption = ([label], value) => ({ value, label });

const handleSubmit = props =>
  flow(
    get('data'),
    mapDataToValues,
    Object.entries,
    map(([key, value]) => [key, get('label', value)]),
    fromPairs,
    props.onSubmit,
  );

const mapValuesToProps = ([classes, contacts, instructors, sponsors]) => ({
  classes: classes.map(toOption),
  contacts: contacts.map(toOption),
  instructors: instructors.map(toOption),
  sponsors: sponsors.map(toOption),
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

export default compose(
  connect(null, { onSubmit: submit }),
  withHandlers({ onSubmit: handleSubmit }),
  withData,
  withLoadingIndicator,
  withSignInButton,
)(CreateClassForm);
