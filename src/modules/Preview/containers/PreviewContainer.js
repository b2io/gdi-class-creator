import { connect } from 'react-redux';
import { selectCreateClass } from 'modules/App';
import Preview from '../components/Preview';

const mapStateToProps = state => selectCreateClass(state);

export default connect(mapStateToProps)(Preview);
