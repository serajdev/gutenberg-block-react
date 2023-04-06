import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import Edit from './Edit';
import Save from './Save';

registerBlockType( 'demo/wrld-visiting-card', {
    title: 'Visiting Card',
    icon: 'smiley',
    category: 'common',
    edit: Edit,
    save: Save,
} );