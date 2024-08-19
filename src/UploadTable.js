import React, { useState } from "react";
import "./UploadTable.css"; // Import the CSS file

const UploadTable = () => {
  // Define the initial state for each row, including selected tags
  const [rows, setRows] = useState([
    { id: 1, link: "www.google.com", prefix: "prefixsample", tags: ["TAG 1", "TAG 2", "TAG 3", "TAG 4"] },
    { id: 2, link: "www.google.com", prefix: "prefixsample", tags: ["TAG 1", "TAG 2"] },
    { id: 3, link: "www.google.com", prefix: "prefixsample", tags: ["TAG 1", "TAG 2", "TAG 3"] },
    { id: 4, link: "www.google.com", prefix: "prefixsample", tags: [] },
    { id: 5, link: "www.google.com", prefix: "prefixsample", tags: ["TAG 1", "TAG 2", "TAG 3"] }
  ]);

  // Available tags for selection
  const availableTags = ["Tag 1","Tag 2","Tag 3","Tag 4","Tag 5","Tag 6", "Tag 7", "Tag 8", "Tag 9", "Tag 10"];

  // Handle tag selection
  const handleTagSelection = (rowId, tag) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId ? { ...row, tags: [...row.tags, tag] } : row
      )
    );
  };

  // Handle tag removal
  const handleTagRemoval = (rowId, tagToRemove) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId
          ? { ...row, tags: row.tags.filter((tag) => tag !== tagToRemove) }
          : row
      )
    );
  };

  return (
    <div className="uploads-table-container">
      <table className="uploads-table">
        <thead>
          <tr>
            <th>Sl No.</th>
            <th>Links</th>
            <th>Prefix</th>
            <th>Add Tags</th>
            <th>Selected Tags</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{String(row.id).padStart(2, '0')}</td>
              <td>
                <a href={`https://${row.link}`} target="_blank" rel="noopener noreferrer">
                  {row.link}
                </a>
              </td>
              <td>{row.prefix}</td>
              <td>
                <select
                  onChange={(e) => handleTagSelection(row.id, e.target.value)}
                  value=""
                >
                  <option value="" disabled>Select Tags</option>
                  {availableTags.map((tag, index) => (
                    <option key={index} value={tag}>{tag}</option>
                  ))}
                </select>
              </td>
              <td>
                {row.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag} <button onClick={() => handleTagRemoval(row.id, tag)}>×</button>
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UploadTable;
