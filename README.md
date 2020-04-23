# Rendering Custom Components from Contenful on Gatsby with MDX or Rich Text

> This repository is based on the [gatsby-contentful-starter](https://github.com/contentful-userland/gatsby-contentful-starter) starter

Static sites are scalable, secure and have very little required maintenance. They come with a drawback though. Not everybody feels good editing files, building a project and uploading it somewhere. This is where Contentful comes into play.

With Contentful and Gatsby you can connect your favorite static site generator with an API that provides an easy to use interface for people writing content and automate the publishing using services like [Travis CI](https://travis-ci.org/) or [Netlify](https://www.netlify.com/).

## Requirements

To use this project you have to have a Contentful account. If you don't have one yet you can register at [www.contentful.com/sign-up](https://www.contentful.com/sign-up/).

## Getting started

Install [Yarn](https://yarnpkg.com/en/docs/install) (if you haven't already).

### Get the source code and install dependencies.

```
$ git clone git@github.com:opaulochaves/gatsby-contentful-rich-text.git
$ yarn install
```

### Create env files for development and production environments.

```
$ cp .env.example .env.development
$ cp .env.example .env.production
```

Grab the keys from Contentful `Settings > API keys` and paste them in the following env files

- `.env.development`

  ```yaml
  CONTENTFUL_SPACE_ID=''
  CONTENTFUL_ACCESS_TOKEN='' # Content Preview API - access token
  CONTENTFUL_HOST='preview.contentful.com'
  ```

- `.env.production`

  ```yaml
  CONTENTFUL_SPACE_ID=''
  CONTENTFUL_ACCESS_TOKEN='' # Content Delivery API - access token
  CONTENTFUL_HOST='cdn.contentful.com'
  ```

## Crucial Commands

This project comes with a few handy commands for linting and code fixing. The most important ones are the ones to develop and ship code. You can find the most important commands below.

### `yarn run dev` or `yarn start`

Run the project locally.

### `yarn run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

## Other resources

- Tutorial video series ["Building a blazing fast website with GatsbyJS and Contentful"](https://www.youtube.com/watch?v=Ek4o40w1tH4&list=PL8KiuH6vpACV-F7jXribe4YveGBhBeG9A) by @Khaledgarbaya

## Troubleshooting

- If in the first time you try running `yarn run dev` you get an error saying something like `Unknown type "ContentfulFixed".`, don't panic :). That means you need to go to your Contentful space and add a Media (an image). You can know more about this error [here](https://github.com/gatsbyjs/gatsby/issues/16455#issuecomment-520720499)
