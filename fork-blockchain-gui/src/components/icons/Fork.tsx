import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as ForkIcon } from './images/fork.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={ForkIcon} viewBox="0 0 150 58" {...props} />;
}
