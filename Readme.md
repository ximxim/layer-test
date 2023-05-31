# Layer Monorepo

## Setup

1. Clone the repo
2. Install dependencies 

```sh
yarn
```

3. Start the apps

```sh
yarn dev
```

## Structure

```
layer/
├── .yarn/
│   ├── releases/
|       └── yarn-4.0.0-rc.15.cjs
├── packages/
│   ├── sdk/ <---- @layer/sdk
|       ├── example/ <---- @layer/sdk-example
|       |   ├── tsconfig.json
|       |   └── package.json
|       ├── tsconfig.json
|       └── package.json
├── .github/
│    └── deploy.yml
├── tsconfig.json
├── .eslintrc.js
├── .editorconfig
├── .gitignore
├── prettierrc.json
├── package.json
└── yarn.lock
```

`@layer/sdk` is built using [ParcelJS](https://parceljs.org/) bundler. This package has the SDK code.

`@layer/sdk-example` is built using [Creact React App](https://create-react-app.dev/) scaffolded project. This package is used to internal testing of the sdk before release.

## Useuful Commands

- In order to add a package to a specific workspace run the following comand:

```sh
yarn workspace @layer/sdk add typescript
```

- In order to remove a package to a specific workspace run the following comand:

```sh
yarn workspace @layer/sdk remove typescript
```

- In order to run a script in a specific workspace run the following comand:

```sh
yarn workspace @layer/sdk script-name
```

### Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

- `fix(workspace)`: bug fixes, e.g. fix crash due to deprecated method.
- `feat(workspace)`: new features, e.g. add new method to the module.
- `refactor(workspace)`: code refactor, e.g. migrate from class components to hooks.
- `docs(workspace)`: changes into documentation, e.g. add usage example for the module..
- `test(workspace)`: adding or updating tests, e.g. add integration tests using detox.
- `chore(workspace)`: tooling changes, e.g. change CI config.

Our pre-commit hooks verify that your commit message matches this format when committing.
