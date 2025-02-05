import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

//Interface that extends the native TextProps and adds the personal properties
interface TextProps extends RNTextProps {
  fontPreset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  //Native TextStyle properties
  style?: TextStyle;
}

//A type that defines the possible values for the fontPreset prop
type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall';

//The Text component that receives, the children, the fontPreset prop and applies the corresponding style
export function Text({
  children,
  fontPreset = 'headingLarge',
  bold,
  italic,
  style,
  ...rest
}: TextProps) {
  const fontFamily = getFontFamily(bold, italic);
  return (
    <RNText style={[$fontSizes[fontPreset], {fontFamily}, style]} {...rest}>
      {children}
    </RNText>
  );
}

//Function that returns the font family based on the bold and italic props
function getFontFamily(bold?: boolean, italic?: boolean) {
  switch (true) {
    case bold:
      return $fontFamily.bold;
    case italic:
      return $fontFamily.italic;
    default:
      return $fontFamily.regular;
  }
}

//Objects that contains the font sizes for each variant and font family's
const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 26, lineHeight: 32},
  headingMedium: {fontSize: 18, lineHeight: 22},
  headingSmall: {fontSize: 12, lineHeight: 15},

  paragraphLarge: {fontSize: 18, lineHeight: 22},
  paragraphMedium: {fontSize: 14, lineHeight: 17},
  paragraphSmall: {fontSize: 10, lineHeight: 12},
};

const $fontFamily = {
  bold: 'LibreBaskerville-Bold',
  italic: 'LibreBaskerville-Italic',
  regular: 'LibreBaskerville-Regular',
};
