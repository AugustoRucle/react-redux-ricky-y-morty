import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import '../assets/styles/components/Player.scss'

import { getVideoSource } from '../actions'

const Player = props => {

    const { id } = props.match.params
    const hasPlaying = Object.keys(props.playing).length > 0

    useEffect(()=> {
        props.getVideoSource(id)
    }, [])

    return hasPlaying? (
        <div className="Player" >
            
            <iframe width="420" height="315"
                src={props.playing.source}>
            </iframe>

            <div className="Player-back" >
                <button 
                    onClick={()=> props.history.goBack() } 
                    type="button">
                    Regresar
                </button>
            </div>

        </div>
    ): <Redirect to="/400/" />
}

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDistpatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps, mapDistpatchToProps)(Player)