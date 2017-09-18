import { connect } from 'react-redux';
import { branch, compose, renderComponent, withHandlers } from 'recompose';
import { mapDataToValues } from 'react-controlled-form';
import { find, flatMap, reduce } from 'lodash';
import { get } from 'lodash/fp';
import withGoogleSheets from 'with-google-sheets';
import { LoadingIndicator, SignInButton } from 'modules/common';
import App from '../components/App';
import { submit } from '../actions';

// TODO: Better way to map data
const toOption = ([label], value) => ({ value, label });
const toCourse = ([name, description, techRequirements], id) => ({
  name,
  description,
  techRequirements,
  id,
});
const toContact = ([name, contactInformation], id) => ({
  name,
  contactInformation,
  id,
});
const toInstructor = (
  [name, bio, imageUrl, email, github, twitter, linkedin],
  id,
) => ({ name, bio, imageUrl, email, github, twitter, linkedin, id });
const toSponsor = ([name, address, logoUrl, notes], id) => ({
  name,
  address,
  logoUrl,
  notes,
  id,
});
const toPolicy = ([key, header, text], id) => ({ [key]: { header, text, id } });

const mapValuesToProps = (
  [classes, contacts, instructors, sponsors, policies],
) => ({
  options: {
    classes: classes.map(toOption),
    contacts: contacts.map(toOption),
    instructors: instructors.map(toOption),
    sponsors: sponsors.map(toOption),
  },
  values: {
    classes: classes.map(toCourse),
    contacts: contacts.map(toContact),
    instructors: instructors.map(toInstructor),
    sponsors: sponsors.map(toSponsor),
    policies: flatMap(policies, toPolicy),
  },
});

const withData = withGoogleSheets(
  {
    apiKey: process.env.REACT_APP_API_KEY,
    clientId: process.env.REACT_APP_CLIENT_ID,
    sheetId: process.env.REACT_APP_SHEET_ID,
  },
  [
    "'CLASS'!A2:C",
    "'CONTACT'!A2:B",
    "'INSTRUCTOR'!A2:G",
    "'SPONSOR'!A2:D",
    "'POLICY'!A2:C",
  ],
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

// TODO: Figure out how to transform data to pass into Preview
const toPreviewValue = (id, values) => find(values, { id });
const getValue = key => get(`${key}.value`);
const toPolicies = policies =>
  reduce(
    policies,
    function(result, policy) {
      return { ...result, ...policy };
    },
    {},
  );

const handleSubmit = props => event => {
  const formData = mapDataToValues(event.data);
  console.log(props.values);

  // TODO: Map through each value type and convert toPreviewValue instead,
  // will probably need to change form ids, especially classes => courses
  props.onSubmit({
    course: toPreviewValue(formData.course.value, props.values.classes),
    contact: toPreviewValue(formData.contact.value, props.values.contacts),
    instructor: toPreviewValue(
      formData.instructor.value,
      props.values.instructors,
    ),
    sponsor: toPreviewValue(formData.sponsor.value, props.values.sponsors),
    time: getValue('time')(formData),
    date: getValue('date')(formData),
    // hasLaptop: getValue('laptop')(formData),
    // hasRefreshments: getValue('refreshments')(formData),
    // hasScholarships: getValue('scholarship')(formData),
    // isPaidCourse: getValue('paid')(formData),
    policies: toPolicies(props.values.policies),
  });
};

export default compose(
  connect(null, { onSubmit: submit }),
  withData,
  withLoadingIndicator,
  withSignInButton,
  withHandlers({
    onSubmit: handleSubmit,
  }),
)(App);
