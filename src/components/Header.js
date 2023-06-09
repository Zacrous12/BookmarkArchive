import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd}
            />

        </header>
    )
}

Header.defaultProps = {
    title: 'Bookmark Archive',
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.PropTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Header