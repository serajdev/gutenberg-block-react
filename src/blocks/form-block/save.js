import React from 'react';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const Save = ( { attributes } ) => {
  

    return (
        <div className="wrld-form-block">
        <div className="wrld-form-group">
            <label htmlFor="name">{ __( 'Full Name ', 'my-plugin' ) }</label>
            <input type="text" id="name" name="name"  />
        </div>
        <div className="wrld-form-group">
            <label htmlFor="email">{ __( 'Email  s', 'my-plugin' ) }</label>
            <input type="email" id="email" name="email"  />
        </div>
  </div>
    );
  }

export default Save;