import React, {Component} from 'react';
import { connect } from 'react-redux';
import { firestoreConnect, isEmpty } from 'react-redux-firebase'
import UserDetailedHeader from './UserDetailedHeader'
import UserDetailedAbout from './UserDetailedAbout'
import {Button, Card, Grid, Header, Image, Item, Menu, Segment} from "semantic-ui-react";
import { userDetailedQuery } from '../userQueries';
import { compose } from 'redux';
import UserDetailedSidebar from './UserDetailedSidebar';
import UserDetailedPhotos from './UserDetailedPhotos';
import LoadingComponent from '../../../app/layout/LoadingComponent';


const mapState = (state, ownProps) => {
    let userUid = null;
    let profile = {};

    if(ownProps.match.params.id === state.auth.uid) {
        profile = state.firebase.profile;
    } else {
        profile = !isEmpty(state.firestore.ordered.profile) && state.firestore.ordered.profile[0];
        userUid = ownProps.match.params.id;
        console.log(!isEmpty(state.firestore.ordered.profile));
    }
 return {
    auth: state.firebase.auth,
    profile,
    userUid,
    photos: state.firestore.ordered.photos,
    requesting: state.firestore.status.requesting,
 }
  
};


 


class UserDetailedPage extends Component {
    
    render() {
      const {profile, photos, auth, match, requesting} = this.props;
        const isCurrentUser = auth.uid === match.params.id;
        const loading = Object.values(requesting).some(a => a === true);
        if(loading) return <LoadingComponent inverted={true} />
        return (
            <Grid>
                <Grid.Column width={16}>
                   <UserDetailedHeader profile={profile} />
                </Grid.Column>
                <Grid.Column width={12}>
                   <UserDetailedAbout profile={profile} />
                </Grid.Column>
                <UserDetailedSidebar isCurrentUser={isCurrentUser} />

                <UserDetailedPhotos photos={photos} />

                <Grid.Column width={12}>
                    <Segment attached>
                        <Header icon='calendar' content='Events'/>
                        <Menu secondary pointing>
                            <Menu.Item name='All Events' active/>
                            <Menu.Item name='Past Events'/>
                            <Menu.Item name='Future Events'/>
                            <Menu.Item name='Events Hosted'/>
                        </Menu>

                        <Card.Group itemsPerRow={5}>

                            <Card>
                                <Image src={'/assets/categoryImages/drinks.jpg'}/>
                                <Card.Content>
                                    <Card.Header textAlign='center'>
                                        Event Title
                                    </Card.Header>
                                    <Card.Meta textAlign='center'>
                                        28th March 2018 at 10:00 PM
                                    </Card.Meta>
                                </Card.Content>
                            </Card>

                            <Card>
                                <Image src={'/assets/categoryImages/drinks.jpg'}/>
                                <Card.Content>
                                    <Card.Header textAlign='center'>
                                        Event Title
                                    </Card.Header>
                                    <Card.Meta textAlign='center'>
                                        28th March 2018 at 10:00 PM
                                    </Card.Meta>
                                </Card.Content>
                            </Card>

                        </Card.Group>
                    </Segment>
                </Grid.Column>
            </Grid>

        );
    }
}

export default compose(connect(mapState), 
    firestoreConnect((auth,userUid) => userDetailedQuery(auth, userUid)))(UserDetailedPage);