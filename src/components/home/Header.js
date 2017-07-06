import React from 'react';
import { HeaderStyle as Styles} from '../../styles/home';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={Styles.header}>
                <h1>This is header.</h1>
            </div>
        );
    }
}
 export default Header;