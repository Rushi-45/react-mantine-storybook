import { useState } from 'react';
import { TextInput, Button, Group } from '@mantine/core';

export interface SearchBarProps {
  placeholder?: string;
  defaultValue?: string;
  onSearch?: (value: string) => void;
}

const SearchBar = ({
  placeholder = 'Search...',
  defaultValue = '',
  onSearch,
}: SearchBarProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleSearch = () => onSearch?.(value);

  return (
    <Group gap="xs" w="100%">
      <TextInput
        flex={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <Button onClick={handleSearch}>Search</Button>
    </Group>
  );
};

export default SearchBar;
