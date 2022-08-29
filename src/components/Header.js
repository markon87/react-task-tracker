import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom'
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation();
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (<Button color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} 
            onClick={onAdd} />)}
        </header>
    );
}

// default props
Header.defaultProps = {
    title: 'Task Tracker',
}

// declaring prop types
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const HeaderStyle = {
//     color: 'red',
//     backgroundColor: 'black',
//     padding: '0px 15px'
// }

export default Header;
