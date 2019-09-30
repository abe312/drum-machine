import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrumKey from './DrumKey';
import { keypress, play, updateDisplay } from '../store/actions';
import './Drum.css';
import Controls from './Controls';
import Audio from '../components/Audio';

class Drum extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    const { bank, power, data1, data2, play, updateDisplay } = this.props;
    const arr = [81, 87, 67, 88, 90, 68, 65, 83, 69];
    const error = 'Power❌On';
    if (arr.findIndex(elem => elem === e.keyCode) === -1) return;
    if (!power) {
      updateDisplay(error);
      return;
    }
    const data = bank ? data1 : data2;
    console.log('here');
    const { keyTrigger, url, id } = data.filter(
      item => item.keyCode === e.keyCode,
    )[0];

    // console.log(obj);
    const key = keyTrigger;
    const sound = id;
    const song = url;

    console.log(key, sound, song);
    updateDisplay(`${key}:  ${sound}`);
    play(song);

    const keyToAnimate = document.querySelector(`div[data-key="${key}"]`);
    console.log(keyToAnimate);
    keyToAnimate.classList.add('playing');
    setTimeout(() => {
      keyToAnimate.classList.remove('playing');
    }, 100);
    this.playSound(key);
  };

  playSound = key => {
    const { volume } = this.props;
    const audio = document.getElementById(key);
    console.log('here', audio, key);
    if (!audio) return;
    audio.currentTime = 0; // rewind to 0
    audio.volume = volume / 100.0;
    audio.play();
  };

  render() {
    const { bank, power, volume, data1, data2 } = this.props;

    const keyboard = items => {
      // console.log(items);
      return (
        <div className="keys">
          {items.map(item => (
            <DrumKey
              key={item.keyTrigger}
              keyCode={item.keyTrigger}
              sound={item.id}
              song={item.url}
            />
          ))}
        </div>
      );
    };

    const audios = items => {
      return (
        <div>
          {items.map(item => (
            <Audio
              key={item.keyTrigger}
              src={item.url}
              keyCode={item.keyTrigger}
              volume={volume / 100.0}
            />
          ))}
        </div>
      );
    };

    return (
      <>
        <div className="drum" id="drum-machine">
          <div className="block-1">
            {bank ? keyboard(data1) : keyboard(data2)}
            {bank ? audios(data1) : audios(data2)}
          </div>
          <div className="block-2">
            <Controls />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({
  keypress,
  data1,
  data2,
  bank,
  volume,
  display,
  power,
}) => ({
  keypress,
  data1,
  data2,
  bank,
  volume,
  display,
  power,
});

const mapDispatchToProps = dispatch => ({
  keypress: e => dispatch(keypress(e)),
  play: song => dispatch(play(song)),
  updateDisplay: str => dispatch(updateDisplay(str)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Drum);
