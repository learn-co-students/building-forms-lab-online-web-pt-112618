import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  renderBands = () => {
      return this.props.bands.map(band => <li key={band.id}>{band.name}</li> )
  }
  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bands: state.bands
})

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({type: 'ADD_BAND', name: formData})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
