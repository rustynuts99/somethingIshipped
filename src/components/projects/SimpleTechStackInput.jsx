'use client'

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

function SimpleTechStackInput({ value = [], onChange }) {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedTech, setSelectedTech] = useState(value);
    const [isLoading, setIsLoading] = useState(true);

  // Load existing tech options on mount
  useEffect(() => {
    const loadTechOptions = async () => {
      try {
        const response = await fetch('/api/tech-options');
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error('Failed to load tech options:', error);
      } finally {
        setIsLoading(false);
      }

    };

    loadTechOptions();
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      
      // Check if tech already selected
      if (selectedTech.includes(inputValue.trim())) {
        return;
      }

      // Add new tech option to database
      try {
        const response = await fetch('/api/tech-options', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: inputValue.trim() })
        });

        if (response.ok) {
          const newTech = inputValue.trim();
          setSelectedTech(prev => [...prev, newTech]);
          onChange([...selectedTech, newTech]);
          setInputValue('');
          
          // Add to suggestions if not exists
          if (!suggestions.includes(newTech)) {
            setSuggestions(prev => [...prev, newTech]);
          }
        }
      } catch (error) {
        console.error('Failed to add tech option:', error);
      }
    }
  };

  const removeTech = (techToRemove) => {
    setSelectedTech(prev => prev.filter(tech => tech !== techToRemove));
    onChange(selectedTech.filter(tech => tech !== techToRemove));
  };

  return (
    <div className="w-full space-y-2">
      <div className="flex flex-wrap gap-2 p-2 border rounded-md min-h-12">
        {selectedTech.map((tech) => (
          <span
            key={tech}
            className="flex items-center gap-1 px-2 py-1 text-sm bg-blue-100 rounded-full"
          >
            {tech}
            <button
              type="button"
              onClick={() => removeTech(tech)}
              className="p-1 hover:text-red-500"
            >
              <X size={14} />
            </button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Add technologies..."
          className="flex-1 min-w-24 outline-none"
        />
      </div>
      
      {isLoading ? (
        <p className="text-sm text-gray-500">Loading suggestions...</p>
      ) : suggestions.length > 0 && inputValue && (
        <div className="p-2 border rounded-md shadow-sm">
          {suggestions
            .filter(tech => 
              tech.toLowerCase().includes(inputValue.toLowerCase()) &&
              !selectedTech.includes(tech)
            )
            .slice(0, 5)
            .map(tech => (
              <button
                key={tech}
                onClick={() => {
                  setSelectedTech(prev => [...prev, tech]);
                  onChange([...selectedTech, tech]);
                  setInputValue('');
                }}
                className="block w-full px-2 py-1 text-left hover:bg-gray-100 rounded"
              >
                {tech}
              </button>
            ))
          }
        </div>
      )}
    </div>
  );
};

export default SimpleTechStackInput;