const { REACT_APP_API_URL = '' } = process.env;

class Api {
  private baseUrl: string;

  /**
   * Initialize an api instance.
   *
   * @constructor
   * @param {string} baseUrl
   * @return {void}
   * @public
   */
  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Submit the contact form to the server.
   *
   * @param {string} name
   * @param {string} phone
   * @param {string} content
   * @param {string} recaptchaToken
   * @return {Promise<Response>}
   * @public
   */
  public submitContactForm({
    name,
    phone,
    content,
    recaptchaToken,
  }: {
    name: string,
    phone: string,
    content: string,
    recaptchaToken: string,
  }): Promise<Response> {
    return this.sendRequest('/messages', 'POST', {
      body: JSON.stringify({
        name,
        phone,
        content,
        recaptchaToken,
      }),
    });
  }

  /**
   * Handle sending the request to the server.
   *
   * @param {string} targetUrl
   * @param {string} method
   * @param {RequestInit} options
   * @return {Promise<Response>}
   * @private
   */
  private sendRequest(targetUrl: string, method: string, options: RequestInit): Promise<Response> {
    return fetch(this.baseUrl + targetUrl, {
      ...options,
      method,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    }).then(this.checkResponse);
  }

  /**
   * Handle checking the response from the server.
   *
   * @param {Response} response
   * @return {Promise<Response>}
   * @private
   */
  private checkResponse(response: Response): Promise<Response> {
    return response.json()
      .then((jsonResponse) => {
        if (response.ok) {
          return jsonResponse;
        }

        return Promise.reject(jsonResponse);
      });
  }
}

export default new Api(REACT_APP_API_URL);
