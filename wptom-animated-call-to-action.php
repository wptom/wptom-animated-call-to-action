<?php
/**
 * Plugin Name:       WPTom's Animated Call To Action
 * Description:       Animated CTA banner.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            WPTom.com
 * Author URI:        https://wptom.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wptom-animated-call-to-action
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_wptom_animated_call_to_action_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_wptom_animated_call_to_action_block_init' );
