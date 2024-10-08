import { request } from '@umijs/max';

export async function queryNumberList(
  params: {
    // query
    /** keyword */
    keyword?: string;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_PageInfo_UserInfo__>(
    'https://apifoxmock.com/m1/5232248-4899353-default/queryNumberList',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

export async function addNumber(
  params: {
    number?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_PageInfo_UserInfo__>(
    'https://apifoxmock.com/m1/5232248-4899353-default/addNumber',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

export async function modifyNumber(
  params: {
    number?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_PageInfo_UserInfo__>(
    'https://apifoxmock.com/m1/5232248-4899353-default/addNumber',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

export async function deleteNumber(
  params: {
    number?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_PageInfo_UserInfo__>(
    'https://apifoxmock.com/m1/5232248-4899353-default/addNumber',
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
