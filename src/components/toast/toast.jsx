import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {DEFAULT_TOAST_MESSAGE, TOAST_TIMEOUT} from '../../utils/constants';

import styles from './toast.module.scss';


function Toast({message = DEFAULT_TOAST_MESSAGE}) {

  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, TOAST_TIMEOUT);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div className={styles.toast}>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

Toast.propTypes = {
  message: PropTypes.string,
};


export default Toast;
