import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{

    constructor(props) {
        super(props);

        this.state = {lat:null,
                      errorMessage:'',
                      errorCode:null
                    };

        window.navigator.geolocation.getCurrentPosition(//using the geolocation API
            (position)=>{
                this.setState({lat:position.coords.latitude});
                
            },

            (err)=> this.setState({errorMessage:err.message,errorCode:err.code})  //console.log(err)
           
        )

      }


    render(){
        if (this.state.errorMessage && !this.state.lat){
            return <div> 
                         <h1>Error:{this.state.errorMessage}</h1>
                         <h1>Error Code:{this.state.errorCode}</h1>
                  </div>
        }


        else if( !this.state.errorMessage && this.state.lat ){
            return <div>
                         <h1>Latitude:{this.state.lat}</h1>
                   </div> 
        }


        else {
            return <div>Loading, Please wait</div>
        }

    };
};

ReactDom.render(<App/>,document.querySelector("#root"))