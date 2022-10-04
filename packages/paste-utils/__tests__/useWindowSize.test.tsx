import * as React from 'React';
import {renderHook, act} from '@testing-library/react-hooks';
// import {render, screen} from '@testing-library/react';
import {useWindowSize} from '../src/hooks/useWindowSize';
import {Theme} from '@twilio-paste/theme';

const resizeTo = (w: number, h: number): void => {
  Object.defineProperty(document.documentElement, 'clientWidth', {
    value: w,
    configurable: true,
  });
  Object.defineProperty(document.documentElement, 'clientHeight', {
    value: h,
    configurable: true,
  });
  // (window.innerWidth as number) = w;
  // (window.innerHeight as number) = h;
  const resizeEvent = new Event('resize', {composed: true});
  window.dispatchEvent(resizeEvent);
};

const wrapper = ({children}): React.ReactElement => <Theme.Provider theme="default">{children}</Theme.Provider>;

const renderWindowSize = (): any => renderHook(() => useWindowSize(), {wrapper});

describe('useWindowSize', () => {
  // jest.useFakeTimers();
  beforeEach(() => {
    resizeTo(150, 150);
    // jest.advanceTimersByTime(100);
  });

  it('should get the correct width and height', () => {
    const data = renderWindowSize();
    console.log(data.result.current);
    expect(data.result.current.width).toEqual(0);
    expect(data.result.current.height).toEqual(0);
  });
});
