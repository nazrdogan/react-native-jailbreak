import { NativeModules } from 'react-native';

type JailbreakType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Jailbreak } = NativeModules;

export default Jailbreak as JailbreakType;
