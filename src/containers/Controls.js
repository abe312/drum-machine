import React, { Component } from 'react';
import './Controls.css';

import { connect } from 'react-redux';
import {
  updateBank,
  updateVolume,
  updatePower,
  updateDisplay,
} from '../store/actions';

class Controls extends Component {
  componentDidMount() {
    const power = document.querySelector('.powerInput');
    power.checked = true;
  }

  render() {
    const {
      power,
      updatePower,
      volume,
      updateVolume,
      bank,
      updateBank,
      display,
      updateDisplay,
    } = this.props;
    console.log('volume, ', volume);
    const handleVolume = e => {
      updateVolume(e);
      updateDisplay(`Volume ${volume}%`);
    };
    const handleBank = () => {
      updateBank();
      updateDisplay(`Bank ${bank ? 'off' : 'on'}`);
    };

    const handlePower = () => {
      updatePower();
      updateDisplay(`Power ${power ? 'off' : 'on'}`);
    };

    return (
      <>
        <div className="controls">
          <div className="item"></div>
          <div className="item power">
            Power:{' '}
            <label className="switch">
              <input
                type="checkbox"
                onChange={handlePower}
                className="powerInput"
              />
              <span className="toggle"></span>
            </label>
          </div>
          <div className="item display">{display}</div>

          <div className="item volume">
            <input
              type="range"
              min="0"
              max="100"
              onChange={e => handleVolume(e)}
              value={volume}
              className="slider"
            />
          </div>

          <div className="item bank">
            Bank:{' '}
            <label className="switch">
              <input type="checkbox" onChange={handleBank} />
              <span className="toggle"></span>
            </label>
          </div>

          <div className="item"></div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ bank, volume, display, power }) => ({
  bank,
  volume,
  display,
  power,
});

const mapDispatchToProps = dispatch => ({
  updateBank: () => dispatch(updateBank()),
  updateVolume: e => dispatch(updateVolume(e)),
  updatePower: () => dispatch(updatePower()),
  updateDisplay: str => dispatch(updateDisplay(str)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Controls);
