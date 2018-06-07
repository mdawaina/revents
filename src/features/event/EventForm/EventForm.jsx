import React, { Component } from "react";
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {

  state = {
    event: {
      title: '',
      date:'',
      city:'',
      venue:'',
      hostedBy:''
    }
  }
  onFormSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state.event);
  }

  onInputChange = (evt) => {
    const newEvt = this.state.event;
    newEvt[evt.target.name] = evt.target.value;
    this.setState(
      {
        event: newEvt
      }
    )
  }
  render() {

    const {event} = this.state;
    
    
    return (
     
        <Segment>
          <Form>
            <Form.Field>
              <label>Event Title</label>
              <input name='title' onChange={this.onInputChange} value={event.title}  placeholder="Event Title"/>
            </Form.Field>
            <Form.Field>
              <label>Event Date</label>
              <input type="date" name='date' onChange={this.onInputChange} value={event.date} placeholder="Event Date" />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input name='city' onChange={this.onInputChange} value={event.city} placeholder="City event is taking place" />
            </Form.Field>
            <Form.Field>
              <label>Venue</label>
              <input name='venue' onChange={this.onInputChange} value={event.title} placeholder="Enter the Venue of the event" />
            </Form.Field>
            <Form.Field>
              <label>Hosted By</label>
              <input placeholder="Enter the name of person hosting" />
            </Form.Field>
            <Button positive type="submit" onClick={this.onFormSubmit}>
              Submit
            </Button>
            <Button type="button" onClick={this.props.handleCancel}>Cancel</Button>
          </Form>
        </Segment>
     
    );
  }
}

export default EventForm;
