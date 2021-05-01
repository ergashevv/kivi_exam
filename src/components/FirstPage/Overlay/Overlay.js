
import React, { Component } from 'react'
import Overlay2 from './Overlay2';
import Overlay3 from './Overlay3'

export class Overlay extends Component {
    state = {
        step: 1,
        
        
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({step: step + 1});
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({step: step - 1});
    };

  
    render() {
        const { step } = this.state;
        
        switch(step) {
            case 1:
                return(
                    <Overlay2
                        nextStep={this.nextStep}
                        
                    />
                )
            case 2:
                return(
                   <Overlay3
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                  
                   
                   /> 
                ) 
            
            default:
        }
       
    }
}

export default Overlay
