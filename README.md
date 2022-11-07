# radiance-api-2

This repo is associated with the [Radiance app](https://github.com/coopercodex/Radiance).
This APi is also live on [Heroku] (https://radiance-app.herokuapp.com/api/v1/affirmations)

## Set Up

Clone this down, and `cd` into it.  Then run:

`npm install`

`node server`

## Endpoints

| Description | URL | Method | Required Properties for Request Body | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all affirmations |`http://localhost:3001/api/v1/affirmations`| GET  | none | An array containing all affirmations |
