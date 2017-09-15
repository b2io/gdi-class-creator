import { connect } from 'react-redux';
import { selectForm } from 'modules/CreateClassForm';
import Preview from '../components/Preview';

const mapStateToProps = selectForm;

export default connect(mapStateToProps)(Preview);
