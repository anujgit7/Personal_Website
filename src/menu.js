import { Link } from 'react-router-dom';

function Menu () {
    return (
        <nav>
            <ul style={styles.menu}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Academics'>Work Experience and Academics</Link></li>
                <li><Link to='/Skills'>Skills</Link></li>
                <li><Link to='/Projects'>Projects</Link></li>
            </ul>
        </nav>
    );
}

const styles = {
    menu : {
        listStyle: 'none',
        display: 'flex',
        maxWidth: '100%',
        margin: '0%',
        padding: '2%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'pink',
      },
}
export default Menu;