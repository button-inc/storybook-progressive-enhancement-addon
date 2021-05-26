/* eslint-env browser */
import {
  useGlobals,
  useParameter,
} from "@storybook/addons";
import { HtmlWithCssWrapper, HtmlOnlyWrapper } from "./wrappers";
import Template from "./Template";
import React from "react";

const PARAM_KEY = "details";

export const withGlobals = (StoryFn, context) => {
  const [{ allEnabled, cssOnly }, updateGlobals] = useGlobals();
  const details = useParameter(PARAM_KEY, null);
  const {allEnabledDescription, htmlOnlyDescription, cssEnabledDescription} = details;

  if (allEnabled || allEnabled === undefined) {
    return <Template details={details} peDescription={allEnabledDescription}>{StoryFn()}</Template>
  }

  if (cssOnly) {
    return (
      <Template details={details} peDescription={cssEnabledDescription}>
        <HtmlWithCssWrapper>{StoryFn()}</HtmlWithCssWrapper>
      </Template>
    )}

  return (
    <Template details={details} peDescription={htmlOnlyDescription}>
      <HtmlOnlyWrapper>{StoryFn()}</HtmlOnlyWrapper>
    </Template>
  )
};
