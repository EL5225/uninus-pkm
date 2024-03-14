import { TMetaResponse } from '../common';

export type TUser = {
  id: string;
  fullname: string;
  image?: string;
  email: string;
  role: {
    id: string;
    name: string;
    permissions: Array<string>;
  };
};

export type TUserRequest = {
  id?: string;
  fullname: string | null;
  email?: string;
  roleId?: string;
  avatar?: string;
  password?: string;
  organizationId?: string;
  facultyId?: string;
  departmentId?: string;
};
export type TUserResponse = TMetaResponse<TUserRequest[]>;

export type TUserSingleResponse = TMetaResponse<TUserRequest>;
