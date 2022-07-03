// remove angular build directory
await $`rm -rf ./dist`

// remove svelete build directory
await $`rm -rf ./my-svelte-app/build`

//build angular
await $`npm run build`

//build svelete
await $`cd ./my-svelte-app && npm run build`

//copy svelte build to angular angular build
await $`cp -R ./my-svelte-app/build ./dist/my-ng-app/s`