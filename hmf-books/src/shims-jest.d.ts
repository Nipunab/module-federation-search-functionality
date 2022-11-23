export {};
declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveZeroViolations(): R;
    }
  }
  interface Window {
    domNode: HTMLDivElement;
  }
}
