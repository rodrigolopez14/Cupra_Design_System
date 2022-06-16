const URL_FOLDERS_FONTS= "https://cupra-design-system.s3.eu-west-1.amazonaws.com/Fonts";

const FONTS = []
FONTS.push({
	family: "Cupra-Bold",
	src: `url(${URL_FOLDERS_FONTS}/Cupra-Bold.otf)`,
})

FONTS.push({
	family: "Cupra-Light",
	src: `url(${URL_FOLDERS_FONTS}/Cupra-Light.otf)`,
})

FONTS.push({
	family: "Cupra-Regular",
	src: `url(${URL_FOLDERS_FONTS}/Cupra-Regular.otf)`,
})


export async function loadFonts() {
	const promisedFonts = FONTS.map(font => new FontFace (font.family,font.src,font.descriptors).load())
    const fonts = await Promise.all(promisedFonts).then (r => r)
	fonts.forEach(font=> document.fonts.add(font))
}