import { NativeModules } from 'react-native';
type JailbreakType = {
  check(): Promise<boolean>;
};

const { Jailbreak } = NativeModules;

export default Jailbreak as JailbreakType;
