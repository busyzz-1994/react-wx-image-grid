import React, { FC, ReactNode, useState } from 'react';
//@ts-ignore
import WxImageViewer from 'react-wx-images-viewer';
import './index.scss';
export interface Props {
  children: ReactNode | ReactNode[];
  defaultIndex?: number;
}
const Component: FC<Props> = ({ children, defaultIndex }) => {
  const [visible, setVisible] = useState(false);
  const imgList = React.Children.toArray(children).filter(item => item !== ' ');
  //@ts-ignore
  const urls = imgList.map(item => item?.props?.src);
  const len = imgList.length;
  const needFill = len >= 5 && len % 3 === 2;
  const showViewer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="react-wx-image-grid">
      {imgList.map((item, index) => (
        <div
          onClick={() => showViewer()}
          key={index}
          className="react-wx-image-grid-item"
        >
          {item}
        </div>
      ))}
      {needFill && <div className="react-wx-image-grid-item"></div>}
      {visible && (
        <WxImageViewer onClose={onClose} urls={urls} index={defaultIndex} />
      )}
    </div>
  );
};

export default Component;
