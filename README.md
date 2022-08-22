# TENTS

**ARCHIVED. Please checkout [juliusmarminge/create-t3-turbo](https://github.com/juliusmarminge/create-t3-turbo) instead.**

Turbo-Expo-Next-TRPC-Starter

This is a starter repo to get started with Expo and tRPC in Turborepo.

- Initially bootstrapped with `npx create-turbo`
- Heavily inspired by [KATT/zART](https://github.com/katt/zart)
- Got Expo working with [gunnnnii](https://github.com/gunnnnii/turbo-expo-trpc-starter)'s starter repo

TODO:

- Remove the dependency for yarn workspaces.
  - I want this repo to support any package manager.
- Simplify dependency tree
  - I feel like some packages are magically imported without being listed as a dependency
- Include [tailwind](https://tailwindcss.com)

## What's inside?

This turborepo uses [Yarn](https://yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps

- `apps/mobile`: a [`react-native`](https://reactnative.dev/) app using [`expo`](https://expo.dev/)
- `apps/web`: a [Nextjs](https://nextjs.org) app hosting the tRPC endpoints.

### Packages

- `packages/api`: a [`trpc`](https://trpc.io/) backend service exposing typesafe API endpoints
- `packages/db`: a typesafe database using [Prisma](https://prisma.io).
- `packages/config`: home for all the projects shared configurations, such as `eslint` and `tsconfig`.

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
