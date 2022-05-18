import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './DeviceContextProvider.module.scss';
import { Device } from '../../common/types';
import DeviceContext from '../../contexts/DeviceContext';

type DeviceContextProviderProps = {
  children: React.ReactNode,
};

/**
 * Device Context Provider component.
 *
 * @component
 * @param {React.ReactNode} children
 * @return {React.ReactNode}
 */
const DeviceContextProvider = ({ children }: DeviceContextProviderProps) => {
  const isMobile = useMediaQuery({ maxWidth: styles['mobile-breakpoint'] });
  const isTablet = useMediaQuery({ maxWidth: styles['tablet-breakpoint'] });

  /**
   * Detect and return the current device type that is being used.
   *
   * @return {Device}
   */
  const detectDeviceType = (): Device => {
    if (isMobile) {
      return Device.Mobile;
    }

    if (isTablet) {
      return Device.Tablet;
    }

    return Device.Desktop;
  };

  const [deviceType, setDeviceType] = React.useState<Device>(detectDeviceType);

  React.useEffect(() => {
    setDeviceType(detectDeviceType);
  }, [isMobile, isTablet]);

  return (
    <DeviceContext.Provider value={deviceType}>
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceContextProvider;
