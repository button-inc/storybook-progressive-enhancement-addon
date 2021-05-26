import React, { useCallback } from "react";
import { useGlobals } from "@storybook/api";
import { Icons, IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";
import { useEffect } from "@storybook/client-api";

export const Tool = () => {
  const [{ allEnabled, cssOnly, htmlOnly }, updateGlobals] = useGlobals();

  // There must be a better way to have default globals, but havent found it
  // useEffect(() => {
  //   updateGlobals({
  //     allEnabled: true,
  //     cssOnly: false,
  //     htmlOnly: false,
  //   })
  // }, [])

  const toggleAllEnabled = useCallback(
    () =>
      updateGlobals({
        allEnabled: !allEnabled,
        cssOnly: false,
        htmlOnly: allEnabled
      }),
    [allEnabled]
  );
  
  const toggleCssEnabled = useCallback(
    () =>
      updateGlobals({
        cssOnly: !cssOnly,
        allEnabled: false,
        htmlOnly: cssOnly
      }),
    [cssOnly]
  );
  
  const toggleHtmlEnabled = useCallback(
    () =>
      updateGlobals({
        htmlOnly: true,
        cssOnly: false,
        allEnabled: false,
      }),
    [htmlOnly]
  );

  return (
    <>
      <IconButton
        key={TOOL_ID}
        active={allEnabled}
        title="Apply outlines to the preview"
        onClick={toggleAllEnabled}
      >
        <Icons icon="outline" />
      </IconButton>
      <IconButton
        key={`${TOOL_ID}/2`}
        active={cssOnly}
        title="Apply outlines to the preview"
        onClick={toggleCssEnabled}
      >
        <Icons icon="outline" />
      </IconButton>
      <IconButton
        key={`${TOOL_ID}/3`}
        active={htmlOnly}
        title="Apply outlines to the preview"
        onClick={toggleHtmlEnabled}
      >
        <Icons icon="outline" />
      </IconButton>
    </>
  );
};
