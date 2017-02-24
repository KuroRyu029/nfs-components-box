import React from 'react';

const style = require('./testComponentStyle.css');

export default class TestComponent extends React.Component {
  render() {
    return (<div className="testClass">Hello world!! This is Foo Bar.</div>)
  }
}
