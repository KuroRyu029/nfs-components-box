import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import styled from 'styled-components'
import moment from 'moment'
import TimeSlide from './time-slide'
import { DropdownSelectionBox } from './../dropdown/dropdown-selection'
import { Input } from './../input/input'
import { globalVariable, inputStyle, timeSlideStyle } from './../../const/theme'

const c = classnames.bind(styled)

/*------------------------------------------------------
use12Hours:       boolean
showSecond:       boolean
hourInterval:     Int
minuteInterval:   Int
secondInterval:   Int
currentTime:      boolean
placeholder:      text
onChangeDate:     fn
------------------------------------------------------*/

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const InputDropdown = Input.extend`
  // border: 1px solid red;
`

const SelectPeriod = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  margin: 0 -15px 20px -15px;
  font-size: 16px;
  cursor: pointer;
  > li {
    list-style-type: none;
    margin: 0 5px;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    color: ${timeSlideStyle.timeSlideColor};
    &.active {
      background-color: ${timeSlideStyle.timeSlideSelectedColor};
      border-radius: 100%;
      color: #FFFFFF;
    }
  }
`

const InputDropdownContainer = styled.div`
  border: 1px solid ${props => props.theme.inputBorder ? props.theme.inputBorder : inputStyle.inputBorder};
  border-radius: 3px;
  margin: 5px 0 0;
  padding: 20px 15px;
  transition: max-height ${globalVariable.animateSlow} ease-out;
  max-height: 0;
  opacity: 0;
  position: absolute;
  z-index: -1;
  ${props => props.show && `
    transition: max-height ${globalVariable.animateSlow} ease-out;
    opacity: 1;
    max-height: 300px;
    position: relative;
    z-index: 0;
  `}
`

export default class InputTime extends React.Component {
  constructor(props) {
    super()
    let format = ''

    if (props.use12Hours) {
      if (props.showSecond) {
        format = 'hh : mm : ss'
      } else {
        format = 'hh : mm'
      }
    } else {
      if (props.showSecond) {
        format = 'HH : mm : ss'
      } else {
        format = 'HH : mm'
      }
    }

    this.state = {
      format: format,
      defaultValue: props.currentTime ? moment(new Date()).format(format) : '',
      h: props.currentTime ? moment(new Date()).format(props.use12Hours ? 'hh' : 'HH') : 0,
      m: props.currentTime ? moment(new Date()).format('mm') : 0,
      s: props.currentTime ? moment(new Date()).format('ss') : 0,
      toggle: false,
      period: 'am',
    }
  }
  componentDidMount() {
    ReactDOM.findDOMNode(root).addEventListener ('click', this.handleClick.bind(this));
  }
  setTime(activeIndex, type) {
    const setTime = {}
    setTime[type] = parseInt(activeIndex, 10)
    this.setState(setTime)

    const oldData = moment(this.state.defaultValue !== '' ? this.state.defaultValue : new Date(), this.state.format)
    const newTime = {}
    newTime[type] = activeIndex === 60 ? '00' : activeIndex
    const newData = oldData.set(newTime)

    // if (type === 's' && activeIndex === 60) {
    //   const newMinute = parseInt(oldData.format('mm'), 10) + this.props.minuteInterval
    //   this.setState({ m: newMinute })
    //   newData = oldData.set({ m: newMinute, s: 0 })
    //   const newHour = newData.format(this.props.use12Hours ? 'hh' : 'HH')
    //   this.setState({ h: newHour })
    // } else if (type === 'm' && (activeIndex === 60)) {
    //   console.log('type m');
    //   let newHour = oldData.format(this.props.use12Hours ? 'hh' : 'HH')
    //   if (this.props.use12Hours && newHour === '12') {
    //     newHour = 1
    //   } else {
    //     newHour = parseInt(newHour, 10) + this.props.hourInterval
    //   }
    //   this.setState({ h: newHour })
    //   newData = oldData.set({ h: newHour, m: 0 })
    // } else {
    //   newData = oldData.set(setTime)
    // }

    this.setState({ defaultValue: newData.format(this.state.format) })
  }
  selectPeriod(value) {
    this.setState({ period: value })
  }
  handleInputKeyPress(evt) {
    if (evt.key === 'Enter') {
      const data = moment(evt.target.value, this.state.format)
      if (!moment(evt.target.value, this.state.format, true).isValid()) {
        evt.target.value = this.props.currentTime ? this.state.defaultValue : ''
        this.setState({
          m: 0,
          s: 0,
          h: 0,
          defaultValue: '',
        })
      } else {
        this.setState({
          m: data.format('mm') === '00' ? '60' : data.format('mm'),
          s: data.format('ss') === '00' ? '60' : data.format('ss'),
          h: data.format(this.props.use12Hours ? 'hh' : 'HH'),
          defaultValue: evt.target.value,
        })
      }
    }
  }
  handleInputOnClick() {
    if (!this.state.toggle) {
      this.setState({ toggle: true })
    }
  }
  handleInputChange(evt) {
    this.setState({ defaultValue: evt.target.value })
    if (this.props.onChangeDate) {
      this.props.onChangeDate(this.state.defaultValue)
    }
  }
  handleClick(evt) {
    if (!this.InputContainer.contains(evt.target)) {
      this.setState({ toggle: false })
    }
  }
  render() {
    return (
      <InputContainer innerRef={el => (this.InputContainer = el)}>
        <InputDropdown
          type="text"
          placeholder={this.state.defaultValue === '' && this.props.placeholder}
          value={this.state.defaultValue === '' ? null : this.state.defaultValue}
          onKeyPress={evt => this.handleInputKeyPress(evt)}
          onClick={() => this.handleInputOnClick()}
          onChange={evt => this.handleInputChange(evt)}
        />
        <InputDropdownContainer show={this.state.toggle}>
          {
            this.props.use12Hours &&
            <SelectPeriod>
              <li
                role="presentation"
                className={c({ active: this.state.period === 'am' })}
                onClick={() => this.selectPeriod('am')}
              >AM</li>
              <li
                role="presentation"
                className={c({ active: this.state.period === 'pm' })}
                onClick={() => this.selectPeriod('pm')}
              >PM</li>
            </SelectPeriod>
          }
          <TimeSlide
            hour
            use12Hour={this.props.use12Hours}
            interval={this.props.hourInterval}
            onChange={(activeIndex, type) => this.setTime(activeIndex, type)}
            current={this.state.h}
          />
          <TimeSlide
            minute
            interval={this.props.minuteInterval}
            onChange={(activeIndex, type) => this.setTime(activeIndex, type)}
            current={this.state.m}
          />
          {
            this.props.showSecond &&
            <TimeSlide
              second
              interval={this.props.secondInterval}
              onChange={(activeIndex, type) => this.setTime(activeIndex, type)}
              current={this.state.s}
            />
          }
        </InputDropdownContainer>
      </InputContainer>
    )
  }
}
