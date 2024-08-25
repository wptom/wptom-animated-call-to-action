// src/save.js
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Dashicon } from '@wordpress/components';

export default function save( { attributes } ) {
	const { message = 'Default text for message', message2 = 'Default text for message2', backgroundGradient, fontSize, fontFamily, fontSize2 = 16, fontFamily2, textAlign = 'left', textAlign2 = 'left', icon1, icon2, icon1GradientStart, icon1GradientEnd, icon2GradientStart, icon2GradientEnd, icon1Size, icon2Size } = attributes;
	const blockProps = useBlockProps.save( {
		style: {
			background: backgroundGradient,
			fontSize: fontSize ? `${fontSize}px` : undefined,
			fontFamily: fontFamily,
		},
	} );

	return (
		<div { ...blockProps }>
			<h2 style={{ fontSize: fontSize ? `${fontSize}px` : undefined, fontFamily: fontFamily, textAlign: textAlign }}>
				<RichText.Content value={ message } />
			</h2>
			<h2 style={{ fontSize: fontSize2 ? `${fontSize2}px` : undefined, fontFamily: fontFamily2, textAlign: textAlign2 }}>
				<RichText.Content value={ message2 } />
			</h2>
			<div>
				<Dashicon icon={icon1} style={{ background: `linear-gradient(45deg, ${icon1GradientStart}, ${icon1GradientEnd})`, WebkitBackgroundClip: 'text', color: 'transparent', fontSize: `${icon1Size}px` }} />
				<Dashicon icon={icon2} style={{ background: `linear-gradient(45deg, ${icon2GradientStart}, ${icon2GradientEnd})`, WebkitBackgroundClip: 'text', color: 'transparent', fontSize: `${icon2Size}px` }} />
			</div>
		</div>
	);
}
