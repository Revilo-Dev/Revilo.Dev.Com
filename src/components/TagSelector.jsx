import React, { useState } from 'react';

const TagSelector = ({ tags, onTagSelect }) => {
  const [selectedTag, setSelectedTag] = useState('All');

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    onTagSelect(tag);
  };

  return (
    <div className="flex space-x-4 mb-8 overflow-x-auto overflow-y-hidden">
      <button
        className={`btn ${selectedTag === 'All' ? 'btn-primary' : 'btn-soft'} AH-Underline`}
        onClick={() => handleTagClick('All')}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          className={`btn ${selectedTag === tag ? 'btn-primary' : 'btn-soft'} AH-Underline`}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagSelector;

{/* Use example with info cards
  <div>
        {filteredProjects.map((project, index) => (
          <InfoCard
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            row1={project.rows && project.rows[0] ? project.rows[0].content : null}
            row2={project.rows && project.rows[1] ? project.rows[1].content : null}
            row3={project.rows && project.rows[2] ? project.rows[2].content : null}
            img={project.img} 
            description={project.description}
            linkUrl={project.linkUrl} 
            linkname={project.linkname} 
          />
        ))}

      </div>
  
  */}