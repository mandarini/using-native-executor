# Storybook Angular native builder scenarios

This is a project where we will test various scenarios of apps and libs, either using the Nrwl/Nx Storybook `@nrwl/storybook:storybook`/`@nrwl/storybook:build` executors or the "native" Storybook `@storybook/angular:start-storybook`/`@storybook/angular:build-storybook` executors for Angular.

## List of projects and description

### nativestorybookapp

This is an Angular application with Storybook which uses the "native" Storybook executors for Angular (`@storybook/angular:start-storybook`/`@storybook/angular:build-storybook`).

### ngapp

This is an Angular application with Storybook which uses the Nrwl/Nx Storybook executors. (`@nrwl/storybook:storybook`/`@nrwl/storybook:build`).

### nativelib-buildable

This is a buildable Angular application with Storybook which uses the "native" Storybook executors for Angular (`@storybook/angular:start-storybook`/`@storybook/angular:build-storybook`).

### nativelib-nonbuildable

This is a non-buildable Angular application with Storybook which uses the "native" Storybook executors for Angular (`@storybook/angular:start-storybook`/`@storybook/angular:build-storybook`).

### nglib-buildable

This is a buildable Angular application with Storybook which uses the Nrwl/Nx Storybook executors. (`@nrwl/storybook:storybook`/`@nrwl/storybook:build`).

### nglib-nonbuildable

This is a non-buildable Angular application with Storybook which uses the Nrwl/Nx Storybook executors. (`@nrwl/storybook:storybook`/`@nrwl/storybook:build`).

## Features of these apps and libs

### Styles

All of these apps and libs use an external stylesheet, which is imported via

```
        "stylePreprocessorOptions": {
          "includePaths": ["libs/design-system/src/lib"]
        }
```

It is only imported ONCE in every `project.json`.

In the cases where the Angular builder allows it, that is when the executor for the `build` target is `@angular-devkit/build-angular:browser`, the `stylePreprocessorOptions` are specified there.

In all other cases (even buildable libs, where the executor of the `build` target is the `@nrwl/angular:ng-packagr-lite` which does not allow `stylePreprocessorOptions`), the `stylePreprocessorOptions` are specified in the `build-storybook` target options.

Then, the `stylePreprocessorOptions` (or the `styles` array, if that's what one uses) are passed in the `storybook` executor as well, since the `browserTarget` is set as the `build` target (in the case of apps) or the `build-storybook` target (in the case of libs).

### Assets

All of these apps use assets (a `.png` image). These are irrelevent to the Storybook executor used, since now Storybook uses `staticDirs` in `main.js` to import assets.
