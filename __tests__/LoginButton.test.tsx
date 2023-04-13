import React from 'react';
import {View} from 'react-native';
import {render} from '@testing-library/react-native';
import LoginButtonComponent from '../src/components/atoms/Button/LoginButtonComponent';
import LoginButton from '../src/components/atoms/Button/LoginButton';

describe('LoginButton', () => {
  it('should render LoginButtonComponent', () => {
    const {getByTestId} = render(<LoginButton />);
    const LoginButtonComponent = getByTestId('login-button-component');
    expect(LoginButtonComponent).toBeDefined();
  });

  it('should render a View component', () => {
    const {getByTestId} = render(<LoginButton />);
    const viewComponent = getByTestId('view-component');
    expect(viewComponent).toBeDefined();
  });
});
