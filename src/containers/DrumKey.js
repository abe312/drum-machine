import React, { Component } from 'react';
import './DrumKey.css';
import { updateDisplay, play } from '../store/actions';
import { connect } from 'react-redux';

class DrumKey extends Component {
  render() {
    const {
      updateDisplay,
      play,
      volume,
      keyCode,
      sound,
      song,
      power,
    } = this.props;
    const handleKeypress = () => {
      if (!power) {
        const error = 'Power❌On';
        updateDisplay(error);
        return;
      }
      updateDisplay(`${keyCode}:  ${sound}`);
      play(song);
      playSound(keyCode);
    };

    const playSound = key => {
      const audio = document.querySelector(`audio[data-key="${key}"]`);
      if (!audio) return;
      audio.currentTime = 0; // rewind to 0
      audio.volume = volume / 100.0;
      audio.play();
    };

    return (
      <div className="key" data-key={keyCode} onClick={handleKeypress}>
        <kbd>{keyCode}</kbd>
        <span className="sound">{sound}</span>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateDisplay: str => dispatch(updateDisplay(str)),
  play: song => dispatch(play(song)),
});

const mapStateToProps = ({ volume, power }) => ({
  volume,
  power,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrumKey);
