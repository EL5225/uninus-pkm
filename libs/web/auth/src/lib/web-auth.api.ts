import { api } from '@psu/web-services';
import {
  TForgotPasswordRequest,
  TForgotPasswordResponse,
  TLoginRequest,
  TLoginResponse,
  TRegisterRequest,
  TRegisterResponse,
} from '@psu/entities';

export const PostLogin = async (
  props: TLoginRequest
): Promise<TLoginResponse> => {
  const { data } = await api<TLoginResponse>({
    url: '/auth/login',
    method: 'POST',
    data: props,
  });
  return data;
};

export const PostRegister = async (
  props: TRegisterRequest
): Promise<TRegisterResponse> => {
  const { data } = await api<TRegisterResponse>({
    url: '/auth/register',
    method: 'POST',
    data: props,
  });
  return data;
};

export const PostForgot = async (
  props: TForgotPasswordRequest
): Promise<TForgotPasswordResponse> => {
  const { data } = await api<TForgotPasswordResponse>({
    url: '/auth/password/forgot',
    method: 'POST',
    data: props,
  });
  return data;
};
