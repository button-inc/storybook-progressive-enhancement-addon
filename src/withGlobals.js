/* eslint-env browser */
import { useEffect, useMemo, useGlobals } from '@storybook/addons';
import {HtmlWithCssWrapper, HtmlOnlyWrapper} from './wrappers';
import { clearStyles, addOutlineStyles } from './helpers';
import outlineCSS from './outlineCSS';
import React from 'react'

export const withGlobals = (StoryFn, context) => {
  const [{ allEnabled, cssOnly, htmlOnly }, updateGlobals] = useGlobals();

  console.log(allEnabled, cssOnly, htmlOnly)

  if (allEnabled) return StoryFn()

  if (cssOnly) {
    return (
      <HtmlWithCssWrapper>
        {StoryFn()}
      </HtmlWithCssWrapper>
    )
  }

  return (
    <HtmlOnlyWrapper>
      {StoryFn()}
    </HtmlOnlyWrapper>
  ) 
};