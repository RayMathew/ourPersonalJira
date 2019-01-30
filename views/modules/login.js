'use strict';

const e = React.createElement;

class loginModule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }

    render() {
        if (this.state.loggedIn) {
            return 'You are logged in';
        }

        return e(
            'button', {
                onClick: () => this.setState({
                    loggedIn: true
                })
            },
            'Login'
        );
    }
}
const domContainer = document.querySelector('.login-module')[0];
ReactDOM.render(e(LikeButton), domContainer);
