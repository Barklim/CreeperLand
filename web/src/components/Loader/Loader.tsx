import React, { useContext } from 'react';
import { FadeLoader } from 'react-spinners';
import { ThemeContext } from 'styled-components';
import { PaletteColor } from 'styles/theme';

const Loader: React.FC<{ color?: PaletteColor }> = ({ color = 'white' }) => {
  const theme = useContext(ThemeContext);

  return <FadeLoader color={theme.palette[color]} />;
};

export default Loader;
