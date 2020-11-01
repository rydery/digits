import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='digits-background'>
          <Grid containter centered stackable columns={3}>

            <Grid.Column textAlign='center'>
              <Icon size='huge' name='users' inverted/>
              <Header as='h1' inverted>Multiple Users</Header>
              <Header as='h3' inverted>This address book allows any number of users to register and save thier business
                contacts. You can only see the contacts you created.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size='huge' name='folder' inverted/>
              <Header as='h1' inverted>Multiple Users</Header>
              <Header as='h3' inverted>For each contact you can save their name, address, and phone number</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size='huge' name='calendar check' inverted/>
              <Header as='h1' inverted>Multiple Users</Header>
              <Header as='h3' inverted>Each time you make contact with a contact you can write a note that sumaraizes the conversation. This note is saved along with a timestamnp with the contact.</Header>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

export default Landing;
