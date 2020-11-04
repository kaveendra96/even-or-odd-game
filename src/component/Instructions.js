import React from 'react'
import { connect } from 'react-redux'
import { expandInstructions,collapseInstructions } from '../actions/settings'

const Instructions = (props) =>{
    const { instructionsExpanded } = props
    return(
        <div className="mt-4">
            {
            instructionsExpanded ? (
                <div>
                    <h3>Game Instructions</h3>
                    <p>mathakayan obe hithe thabagena duk widina</p>
                    <p>mama obage palamu pem watha</p>
                    <button onClick={props.collapseInstructions}>Close Instructions</button>
                </div>
            ):
            (
                <div>
                    <button onClick={props.expandInstructions}>Show Instructions</button>
                </div>
            )
        }
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        instructionsExpanded:state.settings.instructionsExpanded
    }
}
const mapDispatchToProps= dispatch =>{
    return {
        expandInstructions: () => dispatch(expandInstructions()),
        collapseInstructions: () => dispatch(collapseInstructions())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Instructions)