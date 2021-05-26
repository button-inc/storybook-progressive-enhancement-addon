import parse from 'html-react-parser';
import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react'

const getHtmlWithCss = element => renderToStaticMarkup(element);

const HtmlWithCssWrapper = ({ children }) => {
  const htmlWithCssString = getHtmlWithCss(children);
  return parse(htmlWithCssString);
};

const HtmlOnlyWrapper = ({ children }) => {
  const htmlWithCssString = getHtmlWithCss(children);
  const htmlString = htmlWithCssString.replace(/class=".+?"/g, '');
  return parse(htmlString);
};

export { HtmlOnlyWrapper, HtmlWithCssWrapper };
