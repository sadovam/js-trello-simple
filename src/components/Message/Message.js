import { connect } from 'react-redux';
import cs from './Message.module.css';

const Message = ({message: {title, text}}) => {
    return (<p className={ cs.message } style={title ? {top: '0'} : {top: '-150px'}}>
        <span className = { cs.title }>{title}</span>
        <br/>{text}</p>); 
};

const mapStateToProps = state => ({message: state.home.showMessage})

export default connect(mapStateToProps, {})(Message);