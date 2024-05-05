import fs from 'fs'
import path from 'path'

export default function (plop) {
  // controller generator
  plop.setGenerator('ui-component', {
      description: 'A UI component with a storybook',
      prompts: [{
          type: 'input',
          name: 'name',
          message: 'Component name'
      }],
      actions: () => {
        const actions = []
        const target = 'src/components'
        const source = 'src/templates/ui-component'

        actions.push(getAction({ source, target }))

        return actions
      }
  })
}

const getAction = ({ source, target }) => {
  return {
    type: 'addmany',
    destination: target,
    templateFiles: `${source}/*`
  }
}