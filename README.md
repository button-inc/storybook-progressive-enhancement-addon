# Storybook Progressive Enhancement Addon

An addon to allow users to toggle between HTML only, css + html, and css + html + javascript views for each of their components to see how they progressively enhance.

## Getting Started

Install the addon:

`npm i @button-inc/storybook-progressive-enhancement-addon`

Add the addon to your storybook, in .storybook/main.js:

```javascript
module.exports = {
  stories: ['../stories/*.stories.mdx', '../stories/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@button-inc/storybook-progressive-enhancement-addon'], // <- Include this part in your addons array
};
```

The components will render with a template displaying the provided information. Pass in parameters to your story, following the example below:

```javascript
parameters: {
    details: {
      title: "Button",
      description: "The base description that always shows up",
      allEnabledDescription: 'Description to show with all fields enabled',
      cssEnabledDescription: 'Description to show with CSS enabled',
      htmlOnlyDescription: 'Description to show with just html enabled',
      usageCode: `
        import component from @button-inc/component
        <Component x={true}/>
        `,
      props: [
        {
          name: 'size',
          type: 'string',
          description: 'size of the element'
        },
        {
          name: 'variant',
          type: 'string',
          description: 'variant of the element'
        }
      ]
    },
  },
```