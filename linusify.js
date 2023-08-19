// taken from mrbeastify

(new MutationObserver(() =>
	document.querySelectorAll('ytd-thumbnail yt-image, .ytp-videowall-still-image')
		.forEach(e => {
			if (e.classList.contains('Linusify')) return;
			let img = document.createElement('IMG');
			img.src = `https://i.ytimg.com/vi/0cTpTMl8kFY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEeguV2aIZbYPUCSbXqCfkJ_wFFA`;
			img.style.position = 'absolute';
			img.style.width = '100%';
			img.style.left = 0;
			img.style.bottom = 0;
			img.style.objectFit = 'cover';
			e.append(img);
			e.classList.add('Linusify');
		}),

)).observe(document.querySelector('ytd-page-manager'), {subtree: true, childList: true});
