import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

interface TextProps extends RNTextProps {
  fontPreset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  style?: TextStyle;
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall';

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
