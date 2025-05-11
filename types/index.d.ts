declare module 'react-bootstrap';
declare module 'react-chartjs-2';
declare module 'chart.js';
declare module 'react-native-safe-area-context';
declare module './screens/MindFlowScreen';
declare module './screens/ActivationScreen';
declare module './screens/HomeScreen';
declare module './components/CustomDrawer';

interface PermissionResponse {
  granted: boolean;
}

declare function requestMicrophonePermission(): Promise<boolean>;
declare function requestStoragePermission(): Promise<boolean>;
declare function requestBackgroundPermission(): Promise<boolean>; 