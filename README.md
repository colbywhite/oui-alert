# \<oui-alert>

This is an attempt to implement the OpenUI spec for an [alert].

## Usage

```html
<script type="module">
  import 'oui-alert/oui-alert.js';
</script>

<!--Show an alert-->
<oui-alert>Alert text</oui-alert>

<!--Show an alert dialog with a label-->
<oui-alert dialog='true' dialogLabel='Label'>Alert text</oui-alert>

<!--Show an alert dialog with a label in a different component -->
<div id="foo">Label</div>
<oui-alert dialog='true' dialogLabelledBy='foo'>Alert text</oui-alert>
```

## npm scripts

```bash
npm start               # local demo from `demo/index.html`
npm run lint            # scan the project for linting and formatting errors
npm run format          # automatically fix linting and formatting errors
npm run test            # execute a single test
npm run test:watch      # run the tests in interactive watch mode
npm run storybook       # run a local instance of Storybook for your component
npm run storybook:build # build a production version of Storybook
```

[alert]: https://docs.google.com/document/d/1d9eJ2AL5ni7bNENfi6i6M3Ap01kNnI-Oz-BC612mUM0
