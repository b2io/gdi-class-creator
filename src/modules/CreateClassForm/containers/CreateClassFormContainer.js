import { flow, fromPairs, get, map } from 'lodash/fp';
import { mapDataToValues } from 'react-controlled-form';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { submit } from '../actions';
import CreateClassForm from '../components/CreateClassForm';

const handleSubmit = props =>
  flow(
    get('data'),
    mapDataToValues,
    Object.entries,
    map(([key, value]) => [key, get('label', value)]),
    fromPairs,
    props.onSubmit,
  );

export default compose(
  connect(null, { onSubmit: submit }),
  withHandlers({ onSubmit: handleSubmit }),
)(CreateClassForm);
