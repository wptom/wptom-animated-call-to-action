// src/edit.js
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ColorPicker, TabPanel, RangeControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import IconDropdown from './components/IconDropdown';
import './components/IconDropdown.css';

const PREDEFINED_GRADIENTS = [
	{ name: 'Red to Yellow', gradient: 'linear-gradient(45deg, #f00, #ff0)' },
	{ name: 'Green to Blue', gradient: 'linear-gradient(45deg, #0f0, #00f)' },
	{ name: 'Black to White', gradient: 'linear-gradient(45deg, #000, #fff)' },
];

const DASHICONS = [
	'admin-site', 'admin-media', 'admin-page', 'admin-comments', 'admin-appearance',
	'admin-plugins', 'admin-users', 'admin-tools', 'admin-settings', 'admin-network',
	'admin-generic', 'admin-home', 'admin-collapse', 'admin-links', 'format-links',
	'admin-post', 'format-standard', 'format-image', 'format-gallery', 'format-audio',
	'format-video', 'format-chat', 'format-status', 'format-aside', 'format-quote',
	'welcome-view-site', 'welcome-widgets-menus', 'welcome-comments', 'welcome-learn-more',
	'image-crop', 'image-rotate-left', 'image-rotate-right', 'image-flip-vertical', 'image-flip-horizontal',
	'undo', 'redo', 'editor-bold', 'editor-italic', 'editor-ul',
	'editor-ol', 'editor-quote', 'editor-alignleft', 'editor-aligncenter', 'editor-alignright',
	'editor-insertmore', 'editor-spellcheck', 'editor-distractionfree', 'editor-expand', 'editor-contract',
	'editor-kitchensink', 'editor-underline', 'editor-justify', 'editor-textcolor', 'editor-paste-word',
	'editor-paste-text', 'editor-removeformatting', 'editor-video', 'editor-customchar', 'editor-outdent',
	'editor-indent', 'editor-help', 'editor-strikethrough', 'editor-unlink', 'editor-rtl',
	'editor-ltr', 'editor-break', 'editor-code', 'editor-paragraph', 'align-left',
	'align-right', 'align-center', 'align-none', 'lock', 'unlock',
	'calendar', 'calendar-alt', 'visibility', 'hidden', 'post-status',
	'post-trash', 'edit', 'trash', 'arrow-up', 'arrow-down',
	'arrow-left', 'arrow-right', 'arrow-up-alt', 'arrow-down-alt', 'arrow-left-alt',
	'arrow-right-alt', 'arrow-up-alt2', 'arrow-down-alt2', 'arrow-left-alt2', 'arrow-right-alt2',
	'sort', 'leftright', 'randomize', 'list-view', 'exerpt-view',
	'grid-view', 'move', 'hammer', 'art', 'migrate',
	'performance', 'universal-access', 'universal-access-alt', 'tickets', 'nametag',
	'clipboard', 'heart', 'megaphone', 'schedule', 'wordpress',
	'wordpress-alt', 'pressthis', 'update', 'screenoptions', 'info',
	'cart', 'feedback', 'cloud', 'translation', 'tag',
	'category', 'archive', 'tagcloud', 'text', 'media-archive',
	'media-audio', 'media-code', 'media-default', 'media-document', 'media-interactive',
	'media-spreadsheet', 'media-text', 'media-video', 'playlist-audio', 'playlist-video',
	'controls-play', 'controls-pause', 'controls-forward', 'controls-skipforward', 'controls-back',
	'controls-skipback', 'controls-repeat', 'controls-volumeon', 'controls-volumeoff', 'yes',
	'no', 'no-alt', 'plus', 'plus-alt', 'minus',
	'dismiss', 'marker', 'star-filled', 'star-half', 'star-empty',
	'flag', 'location', 'location-alt', 'vault', 'shield',
	'shield-alt', 'sos', 'search', 'slides', 'analytics',
	'chart-pie', 'chart-bar', 'chart-line', 'chart-area', 'groups',
	'businessman', 'businesswoman', 'businessperson', 'id', 'id-alt',
	'products', 'awards', 'forms', 'testimonial', 'portfolio',
	'book', 'book-alt', 'download', 'upload', 'backup',
	'clock', 'lightbulb', 'microphone', 'desktop', 'tablet',
	'smartphone', 'phone', 'index-card', 'carrot', 'building',
	'store', 'album', 'camera', 'images-alt', 'images-alt2',
	'video-alt', 'video-alt2', 'video-alt3'
];

// src/edit.js
export default function Edit( { attributes, setAttributes } ) {
	const { message = 'Default text for message', message2 = 'Default text for message2', backgroundGradient, customGradientStart, customGradientEnd, fontSize, fontFamily, fontSize2 = 16, fontFamily2, textAlign = 'left', textAlign2 = 'left', icon1, icon2, icon1GradientStart, icon1GradientEnd, icon2GradientStart, icon2GradientEnd, icon1Size, icon2Size } = attributes;
	const blockProps = useBlockProps( {
		style: {
			background: backgroundGradient,
			fontSize: fontSize ? `${fontSize}px` : undefined,
			fontFamily: fontFamily,
		},
	} );

	const handleCustomGradientChange = () => {
		const gradient = `linear-gradient(45deg, ${customGradientStart}, ${customGradientEnd})`;
		setAttributes({ backgroundGradient: gradient });
	};

	return (
		<>
			<InspectorControls>
				<TabPanel
					className="my-tab-panel"
					activeClass="active-tab"
					tabs={ [
						{ name: 'colors', title: __( 'Colors', 'text-domain' ), className: 'colors-tab' },
						{ name: 'typography', title: __( 'Typography', 'text-domain' ), className: 'typography-tab' },
						{ name: 'icons', title: __( 'Icons', 'text-domain' ), className: 'icons-tab' },
					] }
				>
					{ ( tab ) => {
						if ( tab.name === 'colors' ) {
							return (
								<PanelBody title={ __( 'Background Gradient', 'text-domain' ) }>
									<div>
										{PREDEFINED_GRADIENTS.map((gradient) => (
											<div
												key={gradient.name}
												style={{
													background: gradient.gradient,
													padding: '10px',
													margin: '5px 0',
													cursor: 'pointer',
												}}
												onClick={() => setAttributes({ backgroundGradient: gradient.gradient })}
											>
												{gradient.name}
											</div>
										))}
									</div>
									<div>
										<p>{ __( 'Custom Gradient Start Color', 'text-domain' ) }</p>
										<ColorPicker
											color={ customGradientStart }
											onChangeComplete={ ( color ) => {
												setAttributes({ customGradientStart: color.hex });
												handleCustomGradientChange();
											} }
										/>
										<p>{ __( 'Custom Gradient End Color', 'text-domain' ) }</p>
										<ColorPicker
											color={ customGradientEnd }
											onChangeComplete={ ( color ) => {
												setAttributes({ customGradientEnd: color.hex });
												handleCustomGradientChange();
											} }
										/>
									</div>
								</PanelBody>
							);
						} else if ( tab.name === 'typography' ) {
							return (
								<PanelBody title={ __( 'Typography Settings', 'text-domain' ) }>
									<SelectControl
										label={ __( 'Font Family', 'text-domain' ) }
										value={ fontFamily }
										options={ [
											{ label: 'Arial', value: 'Arial' },
											{ label: 'Helvetica', value: 'Helvetica' },
											{ label: 'Times New Roman', value: 'Times New Roman' },
										] }
										onChange={ ( value ) => setAttributes({ fontFamily: value }) }
									/>
									<RangeControl
										label={ __( 'Font Size', 'text-domain' ) }
										value={ fontSize }
										onChange={ ( value ) => setAttributes({ fontSize: value }) }
										min={ 10 }
										max={ 100 }
									/>
									<SelectControl
										label={ __( 'Font Family for Text 2', 'text-domain' ) }
										value={ fontFamily2 }
										options={ [
											{ label: 'Arial', value: 'Arial' },
											{ label: 'Helvetica', value: 'Helvetica' },
											{ label: 'Times New Roman', value: 'Times New Roman' },
										] }
										onChange={ ( value ) => setAttributes({ fontFamily2: value }) }
									/>
									<RangeControl
										label={ __( 'Font Size for Text 2', 'text-domain' ) }
										value={ fontSize2 }
										onChange={ ( value ) => setAttributes({ fontSize2: value }) }
										min={ 10 }
										max={ 100 }
									/>
									<SelectControl
										label={ __( 'Text Align', 'text-domain' ) }
										value={ textAlign }
										options={ [
											{ label: 'Left', value: 'left' },
											{ label: 'Center', value: 'center' },
											{ label: 'Right', value: 'right' },
										] }
										onChange={ ( value ) => setAttributes({ textAlign: value }) }
									/>
									<SelectControl
										label={ __( 'Text Align for Text 2', 'text-domain' ) }
										value={ textAlign2 }
										options={ [
											{ label: 'Left', value: 'left' },
											{ label: 'Center', value: 'center' },
											{ label: 'Right', value: 'right' },
										] }
										onChange={ ( value ) => setAttributes({ textAlign2: value }) }
									/>
								</PanelBody>
							);
						} else if ( tab.name === 'icons' ) {
							return (
								<PanelBody title={ __( 'Select Icons', 'text-domain' ) }>
									<IconDropdown
										label={ __( 'Icon 1', 'text-domain' ) }
										value={ icon1 }
										options={ DASHICONS }
										onChange={ ( value ) => setAttributes({ icon1: value }) }
									/>
									<p>{ __( 'Icon 1 Gradient Start Color', 'text-domain' ) }</p>
									<ColorPicker
										color={ icon1GradientStart }
										onChangeComplete={ ( color ) => setAttributes({ icon1GradientStart: color.hex }) }
									/>
									<p>{ __( 'Icon 1 Gradient End Color', 'text-domain' ) }</p>
									<ColorPicker
										color={ icon1GradientEnd }
										onChangeComplete={ ( color ) => setAttributes({ icon1GradientEnd: color.hex }) }
									/>
									<RangeControl
										label={ __( 'Icon 1 Size', 'text-domain' ) }
										value={ icon1Size }
										onChange={ ( value ) => setAttributes({ icon1Size: value }) }
										min={ 10 }
										max={ 100 }
									/>
									<IconDropdown
										label={ __( 'Icon 2', 'text-domain' ) }
										value={ icon2 }
										options={ DASHICONS }
										onChange={ ( value ) => setAttributes({ icon2: value }) }
									/>
									<p>{ __( 'Icon 2 Gradient Start Color', 'text-domain' ) }</p>
									<ColorPicker
										color={ icon2GradientStart }
										onChangeComplete={ ( color ) => setAttributes({ icon2GradientStart: color.hex }) }
									/>
									<p>{ __( 'Icon 2 Gradient End Color', 'text-domain' ) }</p>
									<ColorPicker
										color={ icon2GradientEnd }
										onChangeComplete={ ( color ) => setAttributes({ icon2GradientEnd: color.hex }) }
									/>
									<RangeControl
										label={ __( 'Icon 2 Size', 'text-domain' ) }
										value={ icon2Size }
										onChange={ ( value ) => setAttributes({ icon2Size: value }) }
										min={ 10 }
										max={ 100 }
									/>
								</PanelBody>
							);
						}
					} }
				</TabPanel>
			</InspectorControls>
			<div { ...blockProps }>
				<h2 style={{ fontSize: fontSize ? `${fontSize}px` : undefined, fontFamily: fontFamily, textAlign: textAlign }}>
					<RichText
						value={ message }
						onChange={ ( val ) => setAttributes( { message: val } ) }
					/>
				</h2>
				<h2 style={{ fontSize: fontSize2 ? `${fontSize2}px` : undefined, fontFamily: fontFamily2, textAlign: textAlign2 }}>
					<RichText
						value={ message2 }
						onChange={ ( val ) => setAttributes( { message2: val } ) }
					/>
				</h2>
			</div>
		</>
	);
}
