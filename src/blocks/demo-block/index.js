import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';

registerBlockType( 'demo/my-custom-block', {
    title: 'My Custom Block',
    icon: 'smiley',
    category: 'common',
    edit: () => {
        return (
            <div>
                <p>I am from edit function</p>
            </div>
        );
    },
    save: () => {
        return (
            <div>
                <p>I am from save function</p>
            </div>
        );
    },
} );