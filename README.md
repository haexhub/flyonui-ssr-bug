## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Bug

As soon as you import any class from flyonui and it runs through ssr, we run in to error `self is not defined` which indicates a problem with no window object available. Thats expected on server side. However, this should not cause the app to crash. Especially not if nothing at all is done with the classes on the server side. As you can see in components/UiDialog.vue, it is only accessed in the mounted hook (client side) and the class is initialized there.
As soon as you wrap the component in a `ClientOnly` element its working fine. But it would be great if we don't have to do this.
