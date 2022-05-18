import React from 'react';
import { Device } from '../common/types';

const DeviceContext = React.createContext<Device>(Device.Desktop);

export default DeviceContext;
