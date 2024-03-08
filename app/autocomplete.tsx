import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Dropdown, Form } from 'react-bootstrap';

const Autocomplete: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<{ id: string; text: string }[]>([]);


  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<{ suggestions: { id: string; text: string }[] }>(
          `https://localhost/search?q=${value}`
        );
        setSuggestions(data.suggestions || []);
      } catch (error) {
        console.log(error);
      }
    };

    if (value) {
      fetchData();
    }
  }, [value]);

  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Search data..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Dropdown>
        {suggestions?.map((suggestion) => (
          <Dropdown.Item key={suggestion.id} onClick={() => setValue(suggestion.text)}>
            {suggestion.text}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  );
};

export default Autocomplete;
