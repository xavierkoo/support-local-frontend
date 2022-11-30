![Nobackgroundlogo](https://user-images.githubusercontent.com/86020207/200137707-5c6d0b28-968c-4ebb-9bee-a8ad4efe6e16.png)

# Support Local

Support Local is THE one-stop shop for all things local. It compiles all local businesses, and services in an easy-to-use portal and allows them to offer their products and services to customers through the platform.

# General Info

Support Local is built using Vue CLI and hosted on Netlify.

Main App Link: https://supportlocal.netlify.app/

Backend Repository: https://github.com/xavierkoo/support-local-backend

## Frontend Tech Stack

- Vue
- Bootstrap
- Javascript
- HTML
- CSS
- SASS
- GSAP
- tsParticles

## Screenshots

![Light Landing View (Desktop)](/src/assets/img/screenshots/landing_xl.png "Light Landing View (Desktop)")
![Light Brand View (Tablet)](/src/assets/img/screenshots/brand_md.png "Light Brand View (Tablet)")
![Payment View (Mobile)](/src/assets/img/screenshots/payment_xs.png "Light Payment View (Mobile)")

## Project setup

### Download project repository to your local directory:

```
git clone git@github.com:xavierkoo/support-local-frontend.git
```

### Open your terminal in local project, and execute:

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Features

- Google Maps API
- EmailJS API
- RESTful HTTP API
- Light/Dark Mode
- Vuelidate
- Vuex
- Eslint

## API Documentation

### Google Maps API

Google Maps component: https://www.npmjs.com/package/vue3-google-map

#### Send

| Parameter | Type     | Description                             |
| :-------- | :------- | :-------------------------------------- |
| `api_key` | `string` | **Required**. Your API key              |
| `lat`     | `Number` | **Required**. Latitude of the location  |
| `long`    | `Number` | **Required**. Longitude of the location |

#### Received:

| Error Message                                                                                                                                                                                      | Status Code     |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------- |
| The request includes an invalid parameter, or a required parameter is missing. For example, the size parameter is not within the expected range of numeric values, or is missing from the request. | 400 BAD REQUEST |
| The API key included in the request is invalid.                                                                                                                                                    | 403 FORBIDDEN   |

### EmailJS API

EmailJS base link: https://api.emailjs.com/api/v1.0/email/send

#### Send:

| Parameter    | Type     | Description                                                                                                                                                                                                                      |
| :----------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `serviceID`  | `string` | **Required**. Service ID of the service through which the email should be sent. Reserved keyword default_service is supported, and should be used to use the default service, which can be set and changed via EmailJS dashboard |
| `templateID` | `Number` | **Required**. Template ID of the email                                                                                                                                                                                           |
| `form`       | `Object` | **Required**. Retrieves form elements such as merchant_email, user_email, subject, queries                                                                                                                                       |
| `publicKey`  | `string` | **Required**. Public Key of the EmailJS account                                                                                                                                                                                  |

#### Received:

SUCCESS! || FAILED…

## Acknowledgments

Many thanks to:

- Vue Paycard component inspired by @guastallaigor
- Star Rating component inspired by @craigh411
- tsParticles open-source library by @matteobruni
