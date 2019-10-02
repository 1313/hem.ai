/* eslint-disable @typescript-eslint/camelcase */
// import algoliasearch, { Index, Response } from 'algoliasearch';
import axios, { AxiosResponse, AxiosInstance } from 'axios';
import setCookieParser from 'set-cookie-parser';
import querystring from 'querystring';

function cookieString(login: AxiosResponse): string[] {
  const split = setCookieParser.splitCookiesString(login.headers['set-cookie']);
  const cookies = setCookieParser.parse(split);
  const cookieStringParts = cookies
    .filter(c => c.value !== '""')
    .map(c => `${c.name}=${c.value}`);

  return cookieStringParts;
}

export class MatSe {
  public static async init(): Promise<AxiosInstance> {
    const markup = await axios.get('https://www.mat.se/login.html', {
      withCredentials: true,
    });

    const [, userId] = markup.data.match(/name="loginUuid" value="(.+)"/);

    const response = await axios
      .post(
        'https://www.mat.se/j_spring_security_check',
        querystring.stringify({
          j_username: '<EMAIL>',
          j_password: '<PASSWORD>',
          loginUuid: userId,
          _spring_security_remember_me: true,
        }),
        {
          maxRedirects: 0,
          headers: {
            Cookie: cookieString(markup).join('; '),
          },
        },
      )
      .catch(error => error.response);

    return axios.create({
      baseURL: 'https://www.mat.se',
      headers: {
        Cookie: cookieString(response).join('; '),
      },
    });
  }
}
