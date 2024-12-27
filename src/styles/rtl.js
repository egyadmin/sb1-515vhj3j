import { css } from 'styled-components';

export const rtlStyles = css`
  direction: ${props => props.theme.language === 'ar' ? 'rtl' : 'ltr'};
  text-align: ${props => props.theme.language === 'ar' ? 'right' : 'left'};
`;

export const rtlFlexDirection = css`
  flex-direction: ${props => props.theme.language === 'ar' ? 'row-reverse' : 'row'};
`;

export const rtlMargin = (start, end) => css`
  margin-left: ${props => props.theme.language === 'ar' ? start : end};
  margin-right: ${props => props.theme.language === 'ar' ? end : start};
`;

export const rtlPadding = (start, end) => css`
  padding-left: ${props => props.theme.language === 'ar' ? start : end};
  padding-right: ${props => props.theme.language === 'ar' ? end : start};
`;