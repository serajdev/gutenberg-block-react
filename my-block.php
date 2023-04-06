<?php
/**
 * Plugin Name:       My Blocks
 * Plugin URI:        https://wisdmlabs.com/reports-for-learndash/
 * Description:       Wisdm React
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            WisdmLabs
 * Author URI:        https://wisdmlabs.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       my-blocks
 *
 * @package demo
 */



 add_action( 'admin_menu', 'demo_init_menu' );

 /**
  * Init Admin Menu.
  *
  * @return void
  */
 function demo_init_menu() {
     add_menu_page( __( 'Blocks Menu', 'my-blocks'), __( 'React menu', 'my-blocks'), 'manage_options', 'my-blocks', 'my_block_admin_page', 'dashicons-admin-post', '2.1' );
 }
 

 function my_block_admin_page() {
    require_once plugin_dir_path( __FILE__ ) . 'templates/app.php';
}



 /**
  * Enqueue scripts and styles.
  *
  * @return void
  */
  function demo_admin_enqueue_scripts() {
    wp_enqueue_style( 'jobplace-style', plugin_dir_url( __FILE__ ) . 'build/index.css' );
    wp_enqueue_script( 'jobplace-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-element','wp-blocks' ), '1.0.0', true );
}

add_action( 'admin_enqueue_scripts', 'demo_admin_enqueue_scripts' );


 /**
 * Register Gutenberg blocks.
 */

 function my_custom_block_enqueue() {
    wp_enqueue_script(
        'my-custom-block-editor',
        plugins_url( 'build/block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/block.js' )
    );
}

add_action( 'enqueue_block_editor_assets', 'my_custom_block_enqueue' );