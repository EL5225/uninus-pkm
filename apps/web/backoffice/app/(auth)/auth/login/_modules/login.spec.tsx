import { PropsWithChildren } from 'react';
import { AuthLoginModule } from '.';
import { render } from '@testing-library/react';

jest.mock('react-avatar', () => ({
  Avatar: jest.fn(() => <></>),
}));

jest.mock('next/image', () => ({
  Image: jest.fn(() => <></>),
}));

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  Controller: () => <></>,
  useFormContext: () => ({}),
  useContext: () => ({}),
  useForm: () => ({
    control: {
      register: jest.fn(),
      unregister: jest.fn(),
      getFieldState: jest.fn(),
      _names: {
        array: new Set('test'),
        mount: new Set('test'),
        unMount: new Set('test'),
        watch: new Set('test'),
        focus: 'test',
        watchAll: false,
      },
      _subjects: {
        watch: jest.fn(),
        array: jest.fn(),
        state: jest.fn(),
      },
      _getWatch: jest.fn(),
      _formValues: ['test'],
      _defaultValues: ['test'],
    },
    formState: {
      errors: {
        email: {
          message: 'Email tidak valid',
        },
        password: {
          message: 'Kata sandi wajib diisi',
        },
      },
    },
    handleSubmit: () => jest.fn(),
  }),
}));

jest.mock('react');
jest.mock(
  'next/link',
  () =>
    ({ children }: PropsWithChildren) =>
      children
);
jest.mock(
  'react-select',
  () =>
    ({ children }: PropsWithChildren) =>
      children
);

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe('Auth Login Module', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(<AuthLoginModule />);
    expect(baseElement).toBeTruthy();
  });
});
