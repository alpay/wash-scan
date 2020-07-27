import React, { FC, useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import cx from 'classnames';

import './Cam.scss';

type Props = JSX.IntrinsicElements['div'] & {

};

const Cam: FC<Props> = ({ className, children, onClick }) => {
  const [dataUri, setDataUri] = useState('');

  const classNames = cx(
    'Cam',
    className,
  );

  const handleTakePhoto = (dataUri: string) => {
    console.log("photo taken!");
    setDataUri(dataUri);
  }

  return (
    <div className={classNames}>
      {
        (dataUri) ?
          <img src={dataUri} alt={"screenshot"}/>
          :
          <Camera
            isImageMirror={false}
            idealFacingMode={"environment"}
            onTakePhoto={(dataUri: string) => { handleTakePhoto(dataUri); }}
          />
      }
    </div>
  );

};

export default Cam;
