module.exports = {
  app: {
    'app.js': '// app',

    components: {
      // A standalone component
      'top-level-component': {
        'index.hbs': '{{!-- top-level-component.hbs --}}',
        'index.ts': '// top-level-component.ts',
      },

      // A template-only component
      'template-only-component': {
        'index.hbs': '{{!-- template-only-component.hbs --}}',
      },

      // A nested component
      'parent-component': {
        'index.hbs': '{{!-- parent-component.hbs --}}',
        'index.ts': '// parent-component.ts',
        'child-component': {
          'index.hbs': '{{!-- parent-component/child-component.hbs --}}',
          'index.ts': '// parent-component/child-component.ts',
          'grandchild-component': {
            'index.hbs': '{{!-- parent-component/child-component/grandchild-component.hbs --}}',
            'index.ts': '// parent-component/child-component/grandchild-component.ts',
          },
        },
      },

      // Another nested component
      nested1: {
        'nested-component': {
          'index.hbs': '{{!-- nested1/nested-component.hbs --}}',
          'index.ts': '// nested1/nested-component.ts',
        },
        nested2: {
          'super-nested-component': {
            'index.hbs': '{{!-- nested1/nested2/super-nested-component.hbs --}}',
            'index.ts': '// nested1/nested2/super-nested-component.ts',
          },
        },
      },

      // A component with layoutName
      'layout-name': {
        'has-layout-name.ts': [
          '// top-level-component.ts',
          'interface IArgs {key: string}',
          'Component.extend({ layoutName: "components/layout-name/layout-name-template" });',
        ].join('\n'),
      },

      // A component with partial
      partials: {
        'with-partial': {
          'index.hbs': [
            '{{!-- with-partial.hbs --}}',
            '{{partial "components/partials/partial-one-template"}}',
            '{{partial "components/partials/partial-two-template"}}',
            '{{partial "components/partials/partial-three-template"}}',
          ].join('\n'),
        },
      },
    },

    templates: {
      'application.hbs': '{{outlet}}',

      components: {
        // A component with layoutName
        'layout-name': {
          'layout-name-template.hbs': '{{!-- layout-name-template.hbs --}}',
        },

        // A partial template
        partials: {
          'partial-one-template.hbs': '{{!-- partial-one-template.hbs --}}',
          'partial-two-template.hbs': '{{!-- partial-two-template.hbs --}}',
          '-partial-three-template.hbs': '{{!-- partial-three-template.hbs --}}',
        },
      },
    },
  },
};
