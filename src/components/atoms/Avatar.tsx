import { Avatar as MantineAvatar } from '@mantine/core';
import type { AvatarProps as MantineAvatarProps } from '@mantine/core';

export interface AvatarProps extends Omit<MantineAvatarProps, 'size' | 'radius'> {
  name?: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'circle' | 'square';
}

const sizeMap = { small: 'sm', medium: 'md', large: 'lg' } as const;

const Avatar = ({ src, alt, name, size = 'medium', shape = 'circle', ...props }: AvatarProps) => {
  const initials = name
    ? name
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : undefined;

  return (
    <MantineAvatar
      src={src}
      alt={alt ?? name}
      size={sizeMap[size]}
      radius={shape === 'circle' ? 'xl' : 'sm'}
      color="blue"
      {...props}
    >
      {!src && initials}
    </MantineAvatar>
  );
};

export default Avatar;
