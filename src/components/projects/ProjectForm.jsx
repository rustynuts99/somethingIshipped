'use client'
import { useState } from 'react';
import SimpleTechStackInput from '@/components/projects/SimpleTechStackInput'
console.log('SimpleTechStackInput:', SimpleTechStackInput);
const timeOptions = [
  "Less than a month",
  "1-3 months",
  "3-6 months",
  "6-12 months",
  "Over a year"
];

const CATEGORIES = [
  "Web App",
  "Mobile App",
  "Browser Extension",
  "API/Backend",
  "Developer Tool",
  "Open Source Library",
  "Portfolio",
  "E-commerce",
  "Educational",
  "Game",
  "Just for Fun"
];

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: [],
    liveUrl: '',
    githubUrl: '',
    devDuration: '',
    categories: []
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (formData.techStack.length === 0) {
      newErrors.techStack = 'At least one technology is required';
    }
    
    if (!formData.liveUrl && !formData.githubUrl) {
      newErrors.urls = 'Either Live URL or GitHub URL is required';
    }

    if (formData.categories.length === 0) {
      newErrors.categories = 'Please select at least one category';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCategoryChange = (category) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitSuccess(false);
    setErrors({});
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit project');
      }

      setSubmitSuccess(true);
      setFormData({
        title: '',
        description: '',
        techStack: [],
        liveUrl: '',
        githubUrl: '',
        devDuration: '',
        categories: []
      });
      
    } catch (error) {
      console.error('Error:', error);
      setErrors({
        submit: error.message || 'Failed to submit project. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-50 text-green-600 rounded-md">
          Project submitted successfully!
        </div>
      )}

      {errors.submit && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-md">
          {errors.submit}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">
            Project Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter project title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full px-3 py-2 border rounded-md"
            rows={4}
            placeholder="Describe your project"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Categories
          </label>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(category => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={`px-3 py-1 rounded-full text-sm ${
                  formData.categories.includes(category)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          {errors.categories && (
            <p className="text-red-500 text-sm mt-1">{errors.categories}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Tech Stack
          </label>
          <SimpleTechStackInput
            value={formData.techStack}
            onChange={(newTechStack) => setFormData({...formData, techStack: newTechStack})}
          />
          {errors.techStack && (
            <p className="text-red-500 text-sm mt-1">{errors.techStack}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Live URL
            </label>
            <input
              type="url"
              value={formData.liveUrl}
              onChange={(e) => setFormData({...formData, liveUrl: e.target.value})}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="https://..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              GitHub URL
            </label>
            <input
              type="url"
              value={formData.githubUrl}
              onChange={(e) => setFormData({...formData, githubUrl: e.target.value})}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="https://github.com/..."
            />
          </div>
        </div>
        {errors.urls && (
          <p className="text-red-500 text-sm mt-1">{errors.urls}</p>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">
            Development Duration (optional)
          </label>
          <select
            value={formData.devDuration}
            onChange={(e) => setFormData({...formData, devDuration: e.target.value})}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">How long did you work on this?</option>
            {timeOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Project'}
          </button>
        </div>
      </form>
    </div>
  );
}