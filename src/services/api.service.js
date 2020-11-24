import {ConstantsService} from "./constants.service";

const urlBase = ConstantsService.URL_BASE;
const endpointUrls = {
    registration: urlBase + 'registration-api.php',
    update: urlBase + 'update-api.php',
    delete: urlBase + 'delete-api.php'
};

/*
 *  * Usage & Purpose *
 *
 *  `ApiService` handles all requests and communication with server.
 */
export const ApiService = {
    returnPromise: (data, timeout) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, timeout ? timeout : 50);
        });
    },
    getRequest: (url) => {
        return fetch(url).then((response) => response.json())
            .then((data) => {
                //console.log('GET RESPONSE SUCCESS -> ', data);
                if (!data) {
                    return false;
                }

                return ApiService.prettifyResponse(data);
            })
            .catch((error) => {
                console.error('GET request failed! Error -> ', error);
            });
    },
    postRequest: (url, data, headers) => {
        return fetch(url, {
            method: 'POST',
            headers: headers ? headers : {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then((data) => {
                if (!data) {
                    return false;
                }

                return data;
            }).catch((error) => {
                console.error('POST request failed. Error on URL: ' + url + ' --> ', error);
            });
    },
    endpoints: {
        login: (email, password) => {
            return ApiService.postRequest(
                endpointUrls.registration,
                {
                    email,
                    password
                }
            ).then((response) => {
                return response;
            });
        },
    }
};
