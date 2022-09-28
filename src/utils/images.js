const load = async function () {
	let images = [];

	try {
		images = import.meta.glob('~/assets/images/**');
	} catch (e) {
		console.error(e);
	}

	return images;
};

let _images;

export const fetchLocalImages = async () => {
	_images = _images || load();
	return await _images;
};

export const findImage = async (imagePath) => {
	if (typeof imagePath !== 'string') {
		return null;
	}

	if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
		return imagePath;
	}

	// Only consume images using ~/assets alias (or absolute)
	if (!imagePath.startsWith('~/assets')) {
		return null;
	}

	const images = await fetchLocalImages();
	const key = imagePath.replace('~/', '/src/');

	return typeof images[key] === 'function' ? (await images[key]())['default'] : null;
};
