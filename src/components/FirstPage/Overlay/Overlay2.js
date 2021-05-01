import React, { Component } from 'react'


export class Overlay2 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }
    render() {
       

        return (
           
           
            <div className="wrapper">
               
                <div className="form-container">

                    <div className="text-right">
                     <button className="link-button" onClick={this.continue}>Далее</button>
                    </div>
                        
                       
                </div>

               



            </div>



        )
    }
}

export default Overlay2
