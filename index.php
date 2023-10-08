<?php 

/*
Plugin Name: Are You Paying Attention Quiz
    Description: Give youe readers a multiple choice question.
    Version: 1.0
    Author: Halyna 
    Author URL: https://halynayampolska.com/
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly 

class AreYouPayingAttention {
    function __construct() {
        add_action('init', array($this, 'adminAssets'));
    }

    function adminAssets() {
        wp_register_script('ournewblocktype', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element'));
        register_block_type('ourplugin/are-you-paying-attention', array(
            'editor_script' => 'ournewblocktype',
            'render_callback' => array($this, 'theHTML')
        ));
    }

    function theHTML($attributes) {
        return '<p>Today the sky is ' .  $attributes['skyColor'] . ' and the grass is ' . $attributes['grassColor'] . '!!!</p>';
    }
}

$AreYouPayingAttention = new AreYouPayingAttention();
