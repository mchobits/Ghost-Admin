import {expect} from 'chai';
import {describe, it} from 'mocha';
import {setupComponentTest} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration: Component: gh-publishmenu-scheduled', function() {
    setupComponentTest('gh-publishmenu-scheduled', {
        integration: true
    });

    it.skip('renders', function() {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.on('myAction', function(val) { ... });
        // Template block usage:
        // this.render(hbs`
        //   {{#gh-publishmenu-scheduled}}
        //     template content
        //   {{/gh-publishmenu-scheduled}}
        // `);

        this.render(hbs`{{gh-publishmenu-scheduled}}`);
        expect(this.$()).to.have.length(1);
    });
});
