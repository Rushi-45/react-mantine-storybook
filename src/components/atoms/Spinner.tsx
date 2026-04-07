import { Loader } from '@mantine/core';
import type { LoaderProps } from '@mantine/core';

export interface SpinnerProps extends Omit<LoaderProps, 'size' | 'color'> {
  size?: 'small' | 'medium' | 'large';
  color?: 'blue' | 'gray' | 'white';
}

const sizeMap = { small: 'xs', medium: 'sm', large: 'md' } as const;
const colorMap = { blue: 'blue', gray: 'gray', white: 'gray.1' } as const;

const Spinner = ({ size = 'medium', color = 'blue', ...props }: SpinnerProps) => (
  <Loader size={sizeMap[size]} color={colorMap[color]} {...props} />
);

export default Spinner;
