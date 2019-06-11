import React, { useContext } from 'react';
import { LocationContext } from './location';
import { hasSetEntry } from './utils';
import { SchemaContext } from './schema';

const Attribute = ({ attribute, type, includeEnabled }) => {
  const { forPath } = useContext(SchemaContext);
  const { fields, toggleField, createFilter } = useContext(LocationContext);

  return (
    <div className="attribute">
      <button onClick={() => {createFilter(forPath, attribute.name)}}>Create Filter</button>
      <input
        type="checkbox"
        checked={
          fields.hasOwnProperty(type) &&
          hasSetEntry(fields[type], attribute.name)
        }
        disabled={!includeEnabled}
        onChange={() => toggleField(type, attribute.name)}
      />
      {attribute.name}
    </div>
  );
};

export default Attribute;
