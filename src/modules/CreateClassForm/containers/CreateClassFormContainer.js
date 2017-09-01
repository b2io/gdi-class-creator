import CreateClassForm from '../components/CreateClassForm';
import { compose, withHandlers } from 'recompose';
import { mapDataToValues } from 'react-controlled-form';
import { connect } from 'react-redux';
import { submit } from '../actions';

const mapDispatchToProps = {
  onSubmit: submit,
};

const handleSubmit = props => event => {
  const { instructor } = mapDataToValues(event.data);

  props.onSubmit({ instructor: instructor.label });
};

export default compose(
  connect(null, mapDispatchToProps),
  withHandlers({
    onSubmit: handleSubmit,
  }),
)(CreateClassForm);
