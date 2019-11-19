import React from 'react';
import { Button } from 'semantic-ui-react'

const Hearts = () => (
  <div>
    <Button
      content='Like'
      icon='heart'
      label={{ as: 'a', basic: true, content: '2,048' }}
      labelPosition='right'
    />
  </div>
)

  export default Hearts;