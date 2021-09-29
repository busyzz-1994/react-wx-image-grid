/*
 * @Author: busyzz
 * @Date: 2021-09-26 10:20:48
 * @Description:
 */
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Thing from '../.';
//@ts-ignore
import images from './logo.svg';
const App = () => {
  return (
    <div className="test">
      <Thing>
        <img src={images} alt="" />
        <img src={images} alt="" />
        <img src={images} alt="" />
        <img src={images} alt="" />
        <img src={images} alt="" />
        <img src={images} alt="" />
        <img src={images} alt="" />
        <img src={images} alt="" />
        <img src={images} alt="" />
      </Thing>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
