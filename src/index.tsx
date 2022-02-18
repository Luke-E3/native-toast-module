import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'native-toast-module' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const NativeToastModule = NativeModules.NativeToastModule
  ? NativeModules.NativeToastModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

const RNNativeToastLibrary = NativeModules.RNNativeToastLibrary
? NativeModules.RNNativeToastLibrary
: new Proxy(
    {},
    {
      get() {
        throw new Error(LINKING_ERROR);
      },
    }
  );

export function multiply(a: number, b: number): Promise<number> {
  return NativeToastModule.multiply(a, b);
}

export function show(msg: string, duration?: number): void {
  if (duration) {
    RNNativeToastLibrary.show(msg, duration);
  } else {
    RNNativeToastLibrary.show(msg);
  }
}
