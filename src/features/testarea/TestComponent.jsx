import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMapReact from 'google-map-react'
import { Button, Icon } from 'semantic-ui-react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import Script from "react-load-script";

const mapState = state => ({
  data: state.test.data
});
const Marker = () => <Icon name='marker' size='big' color='red' />
class TestComponent extends Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    
  state = {
    address: '',
    scriptLoaded: false
  };

  handleScriptLoad = () => {
      this.setState({scriptLoaded: true});
  }

  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  onChange = address => this.setState({ address });

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };

    return (
       
      <div>
         {/*   <Script
            url='https://maps.googleapis.com/maps/api/js?key=AIzaSyDuxs4LlRKBl0Cujg1IZzM48ChJSP2lZHY&libraries=places'
            onLoad={this.handleScriptLoad}
        /> */}
        <h1>Test Area {this.props.data}</h1>
        <br />
        <br />
        <form onSubmit={this.handleFormSubmit}>

         {this.state.scriptLoaded && <PlacesAutocomplete inputProps={inputProps} />}
          <button type="submit">Submit</button>
        </form>
        
        // Important! Always set the container height explicitly
      <div style={{ height: '300vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDuxs4LlRKBl0Cujg1IZzM48ChJSP2lZHY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker


            lat={24.7847828}
            lng={46.6946825}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>

      </div>
    );
  }
}

export default connect(mapState)(TestComponent);
