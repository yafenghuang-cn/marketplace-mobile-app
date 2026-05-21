import { RootSiblingParent } from 'react-native-root-siblings';

import App from './app/index';

import type React from 'react';

const RootApp: React.FC = () => {
  return (
    <RootSiblingParent>
      <App />
    </RootSiblingParent>
  );
};

export default RootApp;
