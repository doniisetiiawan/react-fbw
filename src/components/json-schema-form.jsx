import React from 'react';
import Form from '@rjsf/core';

const schema = {
  type: 'object',
  properties: {
    firstName: { type: 'string', default: 'Dan' },
    lastName: { type: 'string', default: 'Abramov' },
  },
};

class JSONSchemaForm extends React.Component {
  handleSubmit = ({ formData }) => {
    console.log(formData);
  };

  render() {
    return (
      <Form schema={schema} onSubmit={this.handleSubmit} />
    );
  }
}

export default JSONSchemaForm;
