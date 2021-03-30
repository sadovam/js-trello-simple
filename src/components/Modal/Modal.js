import { connect } from 'react-redux';
import { hideModal } from '../../store/actions';
import cs from './Modal.module.css';

const Modal = ({component, hideModal}) => {
    return (
    component ? <div className={ cs.modal } onClick={hideModal}>{component}</div> : null
    ) 
};

const mapStateToProps = state => ({component: state.home.showModal})
const mapDispatchToProps = { hideModal, }

export default connect(mapStateToProps, mapDispatchToProps)(Modal);