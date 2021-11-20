# Fake backend

This project is intended to mock Order Manager related backend services with static and dynamic content locally, using [`the-fake-backend`](https://github.com/rhberro/the-fake-backend) library.

## Usage

To make your application point to this fake backend, you must first create a new local environment, let's say "fake-backend" environment, alongside your previously configured environments such as, possibly, "production" and "development" application environments.

This new environment will be useful especially to configure our Order Manager related backend services endpoint base url to point to our local fake-backend server instead of the development or production environments.

Create and configure the "fake-backend" environment pointing the endpoints to `http://localhost:3001`.

## Support

It has currently just a few POS-API endpoints configured. You can check the available configured routes in a documentation-like manner by accessing the [fake-backend homepage](http://localhost:3001) of its running server.

## Run server

In order to run the server, first install the dependencies:

```sh
yarn
```

And then, start the server:

```sh
yarn start
```

## Server interface

It should display a command line interface, providing you the ability to:

- verify endpoint access logs (no command needed)
- proxy all endpoints to production (command `c`)
- proxy all endpoints to development (command `c`)
- proxy an specific endpoint to production (command `p`)
- proxy an specific endpoint to development (command `p`)
- override an specific endpoint mock to an override mock (command `o`)
- simulate some connection throttling (command `t`)

## Resources

[Contributing](CONTRIBUTING.md)
