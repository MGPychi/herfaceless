import React from "react";

const MainVideo = () => {
	return (
		<>
			<iframe
				src="https://player.vimeo.com/video/1028037714?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
				frameBorder="0"
				allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
				}}
				title="The Ultimate Digital Course"
			></iframe>
		</>
	);
};

export default MainVideo;
