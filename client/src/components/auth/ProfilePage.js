import React from 'react';
import { withAuth } from '@okta/okta-react';

export default withAuth(class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { user: null};
        this.getCurrentUser = this.getCurrentUser.bind(this);
    }

    async getCurrentUser() {
        this.props.getUser()
        .then(user => this.setState({user}));
    }

    componentDidMount() {
        this.auth.getUser();
    }

    render() {
        if (!this.state.user) return null;
        return(
            <section className="user-profile">
                <h1>User profile</h1>
                <div>
                    <label>Name:</label>
                    <span>{this.state.user.name}</span>
                </div>
            </section>
        )
    }
});