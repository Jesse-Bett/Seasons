import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
//import "semantic-ui-css/semantic.min.css";

class App extends React.Component{

     state = {lat:null,errorMessage:'',errorCode:null}; // A better way to write the above constructor function.

     componentDidMount(){
        window.navigator.geolocation.getCurrentPosition( //using the geolocation API
            position => this.setState({lat:position.coords.latitude}),
            
            err => this.setState({errorMessage:err.message,errorCode:err.code})        
        )
     }

    renderContent(){
        if (this.state.errorMessage && !this.state.lat){
            return <div> 
                         <h1>Error:{this.state.errorMessage}</h1>
                         <h1>Error Code:{this.state.errorCode}</h1>
                  </div>
        }

        else if( !this.state.errorMessage && this.state.lat ){
            return <SeasonDisplay lat = {this.state.lat}/>
        }

        else {
            return <Spinner message = 'Please accept location request'/>
        }
    }

    render(){
       return(
           <div className='border red'>
               {this.renderContent()}
           </div>
       )

    };
};

ReactDom.render(<App/>,document.querySelector("#root"))