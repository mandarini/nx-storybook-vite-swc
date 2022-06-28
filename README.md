# Nx-vite-storybook-swc

This project was generated using [Nx](https://nx.dev).

It contains the changes you need to make to switch to `swc` or to `vite` for Storybook configurations.

## Contents

### Applications

#### `nextapp` application

A Next.js application using the `"@nrwl/next:build"` builder. Storybook needs `swc` to work, since the Next.js builder uses `swc`.

You can see the changes you need to make to your existing Next.js Storybook configurations in order for Storybook to work properly under the `nextjs` tag.

#### `reactapp-one` application

A React application, which uses the `"@nrwl/web:webpack"` builder and `swc` as a compiler instead of `babel`.

For Storybook to work, it needs `swc` set up. You can see the changes you need to make in order for Storybook to work properly under the `swc` tag.

#### `reactapp-two` application

A React application, which uses the `"@nrwl/web:webpack"` builder and `babel` as a compiler.

Storybook works as is. No changes needed.

However, you can opt-in to Vite. You can see the changes you need to make to opt-in to Vite under the `vite` tag.

### Libraries

#### `nextlib` application

A Next.js library using the `""@nrwl/web:rollup""` builder. Storybook works as is, no changes needed.

#### `reactlib-one` application

A React application, which uses the `"@nrwl/web:rollup"` builder and `swc` as a compiler instead of `babel`.

For Storybook to work, it needs `swc` set up. You can see the changes you need to make in order for Storybook to work properly under the `swc` tag.

#### `reactapp` application

A React application, which uses the `"@nrwl/web:rollup"` builder and `babel` as a compiler.

Storybook works as is. No changes needed.

However, you can opt-in to Vite. You can see the changes you need to make to opt-in to Vite under the `vite` tag.
