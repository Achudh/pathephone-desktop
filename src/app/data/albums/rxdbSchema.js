import instanceSchema from './instanceSchema'

const rxdbSchema = {
  title: 'album',
  version: 1, // <- incremental version-number
  type: 'object',
  properties: {
    cid: {
      type: 'string',
      minLength: 1
    },
    data: instanceSchema
  }
}

export default rxdbSchema