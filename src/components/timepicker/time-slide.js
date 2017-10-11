import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import Slider from 'react-slick'
import { globalVariable, timeSlideStyle } from './../../const/theme'
import './../../../node_modules/slick-carousel/slick/slick.css'

const c = classnames.bind(styled)


const NewSlider = styled(Slider)`
  display: flex !important;
  align-items: center;
  margin: 10px 0;
  > ul {
    display: none !important;
  }
  .slick-list {
    padding: 20px 15px !important;
    margin: 0 20px;
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
`

const Navigate = styled.div`
  color: ${timeSlideStyle.timeSlideColor};
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
`

const ArrowNav = ({ iconName, onClick }) => (
  <Navigate onClick={onClick}>
    <i className={c(iconName)} />
  </Navigate>
)

const DataNum = styled.span`
  font-size: 18px;
  color: ${timeSlideStyle.timeSlideColor};
  cursor: pointer;
  line-height: 1;
  position: relative;
  text-align: center;
  &.disabled {
    color: ${timeSlideStyle.timeSlideDisabledColor};
    cursor: default;
  }
  &.active {
    color: ${timeSlideStyle.timeSlideSelectedColor};
    font-size: 30px;
    &::before {
      content: '${props => props.hour ? 'H' : props.minute ? 'M' : 'S'}';
      position: absolute;
      top: -20px;
      left: 0;
      right: 0;
      text-align: center;
      font-family: 'CloudBold';
      font-size: 18px;
    }
  }
  &:hover {
    color: ${globalVariable.colorPrimary};
  }
`

export default class TimeSlide extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      activeIndex: 1,
      interval: 1,
    }
  }
  componentDidMount() {
    const newData = [...this.state.data]
    const endCount = this.props.use12Hour ? 12 : this.props.minute || this.props.second ? 60 : 24
    const interval = this.props.interval ? parseInt(this.props.interval, 10) : 1
    
    for (let count = interval; count <= endCount; count += interval) {
      newData.push({ data: count, disabled: false })
    }

    this.setState({ data: newData })
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      activeIndex: nextProps.current ? nextProps.current : 0,
      interval: nextProps.interval ? nextProps.interval : 1,
    })
  }
  handleOnClick(activeIndex, data) {
    const type = this.props.hour ? 'h' : this.props.minute ? 'm' : 's'
    this.setState({ activeIndex: activeIndex })
    if (this.props.onChange) {
      this.props.onChange(data, type)
    }
  }
  render() {
    const dataLength = this.state.data.length
    const slidesToShow = (dataLength) >= 12 ? 12 : dataLength
    const initialSlide = parseInt(this.state.activeIndex / this.state.interval, 10)
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 12,
      nextArrow: <ArrowNav iconName="icon-arrow-right" />,
      prevArrow: <ArrowNav iconName="icon-arrow-left" />,
      swipeToSlide: true,
      centerMode: true,
      initialSlide: initialSlide,
      slickGoTo: initialSlide,
      responsive: [
        { breakpoint: '400px',
          settings: { slidesToShow: 3, slidesToScroll: 3 },
        },
        { breakpoint: globalVariable.screenMobile,
          settings: { slidesToShow: 4, slidesToScroll: 4 },
        },
        { breakpoint: globalVariable.screenSamllTablet,
          settings: { slidesToShow: 5, slidesToScroll: 5 },
        },
        { breakpoint: globalVariable.screenTablet,
          settings: { slidesToShow: 7, slidesToScroll: 7 },
        },
        { breakpoint: '1024px',
          settings: { slidesToShow: 10, slidesToScroll: 10 },
        },
      ],
    }
    return (
      <NewSlider {...settings} innerRef={el => (this.newSlide = el)}>
        {
          this.state.data.map((data, index) => (
            <DataNum
              key={data.data}
              className={c({
                disabled: data.disabled,
                active: parseInt(this.state.activeIndex, 10) === parseInt(data.data, 10),
              })}
              onClick={() => !data.disabled && this.handleOnClick(index, data.data)}
              {...this.props}
            >
              {data.data}
            </DataNum>
          ))
        }
      </NewSlider>
    )
  }
}
