import { addons, types } from "@storybook/addons";

import { ADDON_ID, TOOL_ID, PANEL_ID } from "../constants";
import { Tool } from "../Tool";
import { Panel } from "../Panel";
import { Tab } from "../Tab";
import { makeDecorator } from '@storybook/addons';

// Register the addon
addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "My addon",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool,
  });
});


export const decorator = makeDecorator({
  name: 'withSomething',
  parameterName: 'myAddon',
  wrapper: (storyFn, context, { parameters }) => {
    console.log(parameters)
    // Do something with `parameters`, which are set via { something: ... }

    // Note you may alter the story output if you like. 
    // Although generally that's not advised.
    const wrapperStory = () => <div>
      <h1>HIHIHI</h1>
      {storyFn(context)}
    </div>
    return wrapperStory();
  }
});