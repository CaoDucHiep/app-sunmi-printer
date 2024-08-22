import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-sunmi-v2-printer' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const SunmiV2Printer = NativeModules.SunmiV2Printer
  ? NativeModules.SunmiV2Printer
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return SunmiV2Printer.multiply(a, b);
}
