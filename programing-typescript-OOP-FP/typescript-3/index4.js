import { appendAttributes } from "./index2.js";
import { appendChildren } from "./index3.js";

export const creatComponent = (element, props, children) => {
  let tagParts = [`<${element}`];
  tagParts = appendAttributes(tagParts, props);
  tagParts.push('>'); // 태그를 닫는 꺽쇠가 존재하지 않아 생겼던 문제였다
  tagParts = appendChildren(tagParts, children);
  tagParts.push(`</${element}>`);
  return tagParts.join('');
};