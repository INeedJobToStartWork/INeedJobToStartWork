export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setWelcomeMessage('Configure Node vesion managers!');
  plop.setGenerator('Every', {
    description: 'Do Every installation from bellow',
    prompts: [
      {
        type: 'input',
        name: 'nvmINPUT',
        message: 'What version for `.nvmrc` do you want?',
      },
      {
        type: 'input',
        name: 'nvmINPUT2',
        message: 'What version for `.node-version` do you want?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '.nvmrc',
        templateFile: './templates/nvm.hbs',
      },
      {
        type: 'add',
        path: '.node-version',
        templateFile: './templates/node-version.hbs',
      },
    ],
  });
  plop.setGenerator('NVM', {
    description: "generate '.nvmrc'",
    prompts: [
      {
        type: 'input',
        name: 'nvmINPUT',
        message: 'What version do you want?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '.nvmrc',
        templateFile: './templates/nvm.hbs',
      },
    ],
  });
  plop.setGenerator('FNM', {
    description: "generate '.node-version'",
    prompts: [
      {
        type: 'input',
        name: 'nvmINPUT2',
        message: 'What version do you want?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '.nvmrc',
        templateFile: './templates/node-version.hbs',
      },
    ],
  });
  // plop.setGenerator('N', {
  //   description: "add configuration N to 'package.json'",
  //   prompts: [],
  //   actions: [],
  // });
  // plop.setGenerator('VOLTA', {
  //   description: "add configuration VOLTA to 'package.json'",
  //   prompts: [],
  //   actions: [],
  // });
}
