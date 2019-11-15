// eslint-disable-next-line no-unused-vars
var config = {
	style: 'mapbox://styles/gilesdring/ck2zzj29b022n1crvsz4q8z5f',
	accessToken: 'pk.eyJ1IjoiZ2lsZXNkcmluZyIsImEiOiJjazJ4Y29nd3cwYWdkM2dwZDhlZ21zanFmIn0.V3S_lGS6Nub-uTcsm5xRrQ',
	showMarkers: false,
	theme: 'light',
	alignment: 'left',
	title: 'Digital EIA Reporting in Mapbox',
	subtitle: 'Example Non-technical summary using Mapbox Storytelling template',
	footer: 'Source: source citations, etc.',
	chapters: [
		{
			id: 'site-overview',
			title: 'Site Overview',
			description: [
				'<p>This section provides an overview of the site, which is a disused industrial site in Hebden Bridge, West Yorkshire.',
				'<p>The site lies just to the west of the Hebden Bridge in the settlement of Mytholm. It is directly adjacent to the A646.',
			].join(''),
			location: {
				center: [-2.02726, 53.74184],
				zoom: 12.0,
				pitch: 0.00,
				bearing: 0,
			},
			onChapterEnter: [
				{ layer: 'deiaredline', opacity: 1 },
			],
			onChapterExit: [],
		},
		{
			id: 'site-history',
			title: 'Site History',
			image: 'http://www.hebdenbridgehistory.org.uk/charlestown/photos5/mytholmaerial86.jpg',
			description: 'It is the former location of <a href="http://www.hebdenbridgehistory.org.uk/charlestown/mytholm.html#browns">Mytholm Mill (a.k.a. Browns)</a>, a former cotton mill and (latterly) engineering works. The site fell from use during the mid-1980s, and was demolished in 2005.',
			location: {
				center: [-2.02926, 53.74184],
				zoom: 17.0,
				pitch: 40.00,
				bearing: 25,
			},
			onChapterEnter: [
				{ layer: 'deiaredline', opacity: 1 },
			],
			onChapterExit: [
				{ layer: 'deiaredline', opacity: 0.5 },
			],
		},
		{
			id: 'water-system',
			title: 'Water System',
			// image: './path/to/image/source.png',
			description: 'The site lies close to the River Calder and the Rochdale Canal. It is in an area of high flood risk.',
			location: {
				center: [-2.027, 53.742],
				zoom: 14.5,
				pitch: 80,
				bearing: -43.2,
			},
			onChapterEnter: [
				{ layer: 'flood-risk', opacity: 0.6 },
				{ layer: 'waterway', opacity: 1.0 },
				{ layer: 'water', opacity: 1.0 },
				{ layer: 'water-shadow', opacity: 1.0 },
			],
			onChapterExit: [
				{ layer: 'flood-risk', opacity: 0.0 },
				{ layer: 'waterway', opacity: 0.3 },
				{ layer: 'water', opacity: 0.3 },
				{ layer: 'water-shadow', opacity: 0.3 },
			],
		},
	],
};
