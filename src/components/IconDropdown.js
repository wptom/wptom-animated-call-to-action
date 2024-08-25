// src/components/IconDropdown.js
import { useState } from 'react';
import { Dashicon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const IconDropdown = ( { label, value, options, onChange } ) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (icon) => {
		onChange(icon);
		setIsOpen(false);
	};

	return (
		<div className="icon-dropdown">
			<label>{ label }</label>
			<button type="button" onClick={() => setIsOpen(!isOpen)} className="icon-dropdown-button">
				<Dashicon icon={ value } style={{ fontSize: '16px', marginRight: '8px' }} /> { value }
			</button>
			{isOpen && (
				<div className="icon-dropdown-menu">
					{options.map(icon => (
						<button
							key={icon}
							type="button"
							onClick={() => handleSelect(icon)}
							className="icon-dropdown-item"
						>
							<Dashicon icon={ icon } style={{ fontSize: '16px', marginRight: '8px' }} />
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default IconDropdown;
