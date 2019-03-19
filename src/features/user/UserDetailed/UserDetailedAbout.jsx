import React from "react";
import { Header, Item, Segment, Grid, List, Icon } from "semantic-ui-react";
import format from 'date-fns/format';

const UserDetailedAbout = ({profile}) => {
    
    return (
        <Segment>
                        <Grid columns={2}>
                            <Grid.Column width={10}>
                                <Header icon='smile' content={'About ' + profile.displayName}/>
                                <p>I am a: <strong>{profile.displayName}</strong></p>
                                <p>Originally from <strong>{profile.country}</strong></p>
                                {/* <p>Member Since: <strong> {format(profile.createdAt.toDate(),'dddd Do MMMM')} at {' '} {format(profile.createdAt.toDate(), 'HH:mm')}</strong></p> */}
                                <p>{profile.description}</p>

                            </Grid.Column>
                            <Grid.Column width={6}>

                                <Header icon='heart outline' content='Interests'/>
                                <List>
                                  {profile.interests && profile.interests.map((interest, i) => (
                                      
                                      <Item key={i}>
                                      <Icon name='heart'/>
                                      <Item.Content>{interest}</Item.Content>
                                      </Item>

                                  ))

                                  }
                                   
                                  
                                </List>
                            </Grid.Column>
                        </Grid>

                    </Segment>
    );
  }

  export default UserDetailedAbout;