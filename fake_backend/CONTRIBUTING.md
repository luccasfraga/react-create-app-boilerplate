# Contributing

Welcome! Feel free to contribute with _anything_, bring any improvements and refactors to this fake-backend project, and/or even bring new functionality to [`the-fake-backend`](https://github.com/rhberro/the-fake-backend) itself!

## Best practices

While working with this fake-backend project, also have in mind a few more good practices:

- you should update fake-backend with new functionality whenever possible to make it easier for all team members to experience the new feature when accessing it

- you should avoid changing the default use cases, to avoid affecting the expected experience for other team members, unless it's clearly fixing something and it was properly reviewed

- you should add new overrides for specific use cases scenarios that the default ones don't cover, so that we avoid breaking the default use cases, and still are able to reuse the overrides

## Watch mode

You may want run the server with watch mode:

```sh
yarn start:watch
```

But beware! It comes up with a few caveats:

- the Interface commands will still work, but the Interface won't respond nicely as it does without being in watch mode (probably because the IO while using the commands kind of conflicts with `nodemon` IO)

- after changing something being watched, the server is restarted, then all previous state is lost, such as previously commands

## Resources

[Readme](README.md)
