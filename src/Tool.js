import React, { useCallback } from "react";
import { useGlobals } from "@storybook/api";
import { Icons, IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";
import HtmlLogo from './components/htmlLogo'

export const Tool = () => {
  const [{ allEnabled, cssOnly, htmlOnly }, updateGlobals] = useGlobals();

  const toggleAllEnabled = useCallback(
    () =>
      updateGlobals({
        allEnabled: !allEnabled,
        cssOnly: false,
        htmlOnly: allEnabled
      }),
    [allEnabled, cssOnly, htmlOnly]
  );
  
  const toggleCssEnabled = useCallback(
    () =>
      updateGlobals({
        cssOnly: !cssOnly,
        allEnabled: false,
        htmlOnly: cssOnly
      }),
    [cssOnly, cssOnly, htmlOnly]
  );
  
  const toggleHtmlEnabled = useCallback(
    () =>
      updateGlobals({
        htmlOnly: true,
        cssOnly: false,
        allEnabled: false,
      }),
    [htmlOnly, cssOnly, htmlOnly]
  );

  return (
    <>
      <IconButton
        key={TOOL_ID}
        active={allEnabled === undefined ? true : allEnabled}
        title="Apply outlines to the preview"
        onClick={toggleAllEnabled}
      >
        {/* <HtmlLogo></HtmlLogo> */}
        <p>HTML + JS + CSS</p>
      </IconButton>
      <IconButton
        key={`${TOOL_ID}/2`}
        active={cssOnly}
        title="Apply outlines to the preview"
        onClick={toggleCssEnabled}
      >
        <p>HTML+ CSS</p>
      </IconButton>
      <IconButton
        key={`${TOOL_ID}/3`}
        active={htmlOnly}
        title="Apply outlines to the preview"
        onClick={toggleHtmlEnabled}
      >
        <p>HTML Only</p>
      </IconButton>
    </>
  );
};
