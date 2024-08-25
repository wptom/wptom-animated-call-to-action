/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	title: 'Animated Call to Action',
	icon: 'smiley',
	category: 'widgets',
	attributes: {
		message: {
			type: 'string',
			default: 'Default text for message',
		},
		message2: {
			type: 'string',
			default: 'Default text for message2',
		},
		fontSize: {
			type: 'number',
			default: 16,
		},
		fontFamily: {
			type: 'string',
			default: '',
		},
		fontSize2: {
			type: 'number',
			default: 16,
		},
		fontFamily2: {
			type: 'string',
			default: '',
		},
		textAlign: {
			type: 'string',
			default: 'left',
		},
		textAlign2: {
			type: 'string',
			default: 'left',
		}
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
