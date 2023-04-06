import React from 'react';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const Edit = ( { attributes, setAttributes } ) => {
    const [ name, setName ] = useState( attributes.name );
    const [ email, setEmail ] = useState( attributes.email );

    const handleNameChange = ( event ) => {
      setName( event.target.value );
      setAttributes( { name: event.target.value } );
    };

    const handleEmailChange = ( event ) => {
      setEmail( event.target.value );
      setAttributes( { email: event.target.value } );
    };

    return (
      <div className="wrld-form-block">
            <div className="wrld-form-group">
                <label htmlFor="name">{ __( 'Full Name ', 'my-plugin' ) }</label>
                <input type="text" id="name" name="name" value={ name } onChange={ handleNameChange } />
            </div>
            <div className="wrld-form-group">
                <label htmlFor="email">{ __( 'Email', 'my-plugin' ) }</label>
                <input type="email" id="email" name="email" value={ email } onChange={ handleEmailChange } />
            </div>
      </div>
    );
  }

export default Edit;