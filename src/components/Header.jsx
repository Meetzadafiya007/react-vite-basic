import PropTypes from 'prop-types';

const Header = ({ sticky }) => {
    return (
        <header>
            <input className='border border-slate-400 focus:outline-none font-roboto text-sm placeholder:font-roboto  placeholder:font-normal px-3 py-2 rounded placeholder:text-sm w-full' placeholder='Enter Your Name'/>
            <h1 className='heading'>Hello World</h1>
        </header>
    )
}
Header.prototype = {
    sticky: PropTypes.bool
}

export default Header;
