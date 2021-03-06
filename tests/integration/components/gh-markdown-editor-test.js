import {expect} from 'chai';
import {describe, it} from 'mocha';
import {setupComponentTest} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration: Component: gh-markdown-editor', function() {
    setupComponentTest('gh-markdown-editor', {
        integration: true
    });

    it('renders', function() {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.on('myAction', function(val) { ... });
        // Template block usage:
        // this.render(hbs`
        //   {{#gh-markdown-editor}}
        //     template content
        //   {{/gh-markdown-editor}}
        // `);

        this.render(hbs`{{gh-markdown-editor}}`);
        expect(this.$()).to.have.length(1);
    });
});
