import * as PropTypes from 'prop-types';
import {
  isFontFamilyTokenProp,
  isFontSizeTokenProp,
  isFontWeightTokenProp,
  isLineHeightTokenProp,
  isPaddingTokenProp,
  isMarginTokenProp,
  isTextColorTokenProp,
  ResponsiveProp,
} from '@twilio-paste/style-props';

export const TextPropTypes = {
  as: PropTypes.string as any,
  display: ResponsiveProp(PropTypes.string),
  cursor: ResponsiveProp(PropTypes.string),
  content: ResponsiveProp(PropTypes.string),
  fontFamily: isFontFamilyTokenProp,
  fontSize: isFontSizeTokenProp,
  fontStyle: ResponsiveProp(PropTypes.string),
  fontWeight: isFontWeightTokenProp,
  lineHeight: isLineHeightTokenProp,
  letterSpacing: ResponsiveProp(PropTypes.string),
  margin: isMarginTokenProp,
  marginTop: isMarginTokenProp,
  marginRight: isMarginTokenProp,
  marginBottom: isMarginTokenProp,
  marginLeft: isMarginTokenProp,
  padding: isPaddingTokenProp,
  paddingTop: isPaddingTokenProp,
  paddingRight: isPaddingTokenProp,
  paddingBottom: isPaddingTokenProp,
  paddingLeft: isPaddingTokenProp,
  overflow: ResponsiveProp(PropTypes.string),
  overflowX: ResponsiveProp(PropTypes.string),
  overflowY: ResponsiveProp(PropTypes.string),
  textAlign: ResponsiveProp(PropTypes.string),
  color: isTextColorTokenProp,
  textDecoration: ResponsiveProp(PropTypes.string),
  textOverflow: ResponsiveProp(PropTypes.string),
  verticalAlign: ResponsiveProp(PropTypes.string),
  whiteSpace: ResponsiveProp(PropTypes.string),
  transition: ResponsiveProp(PropTypes.string),
};
