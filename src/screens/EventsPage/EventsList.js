import React, { useState, useEffect, useRef } from 'react';
import eventData from '../../eventData'; // Adjust your import based on your project structure
import { motion } from 'framer-motion';

const isSmallScreen = window.innerWidth <= 768;

if (isSmallScreen) {
	console.log("Media query for small screen is active");
} else {
	console.log("Media query for large screen is active");
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		backgroundColor: '#000', // Full black background
		overflow: 'hidden', // Prevent scrolling
	},
	eventCard: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1, // Ensures the event card takes up available space
		position: 'relative', // Required for positioning text over the image
		width: '100%',
		height: '100%',
	},
	eventImage: {
		width: isSmallScreen ? '50%' : '35%', // Adjust image size based on screen size
		height: isSmallScreen ? '50%' : '35%',
		objectFit: 'contain',
	},
	eventTextContainer: {
		position: 'absolute', // Absolute positioning for text over the image
		top: isSmallScreen ? '20%' : '30%', // Adjust top position based on screen size
		left: '50%',
		transform: 'translateX(-50%)', // Center horizontally
		color: '#fff', // White text for contrast
		textAlign: 'center',
		width: '100%', // Ensure text container stretches across the image
	},
	eventTitle: {
		fontSize: isSmallScreen ? '1.5rem' : '2rem',
		marginBottom: '0.5rem',
		fontFamily: 'Rosella-Solid'
	},
	eventTagline: {
		fontSize: isSmallScreen ? '1rem' : '1.2rem',
		marginBottom: '0.5rem',
		color: '#ccc',
		fontFamily: 'Rosella-Solid'

	},
	eventDescription: {
		fontSize: '1rem',
		color: '#fff',
		marginTop: '1rem',
		width: isSmallScreen ? '80%' : '50%',
		textAlign: 'center',
		fontFamily: 'Montserrat-Regular'
	},

	floatingButton: {
		position: 'fixed',
		bottom: '2rem',
		right: '2rem',
		backgroundColor: '#83F4FF', // Pink color for the button
		color: '#fff',
		border: 'none',
		borderRadius: '50%',
		width: '60px',
		height: '60px',
		fontSize: '1.5rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer',
		boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
		zIndex: 1000, // Ensure the button stays on top
	},
};

const titleAnimation = {
	hidden: { opacity: 0, y: -50 },
	visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const taglineAnimation = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { delay: 0.3, duration: 1 } },
};

const descriptionAnimation = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
};

const EventPage = () => {
	const [currentEventIndex, setCurrentEventIndex] = useState(0);
	const [scrolling, setScrolling] = useState(false); // State to handle scroll debounce
	const scrollTimeout = useRef(null); // Ref to track timeout between scrolls

	// Function to handle the button click to go to the next event
	const handleNextEvent = () => {
		setCurrentEventIndex((prevIndex) => (prevIndex === eventData.length - 1 ? 0 : prevIndex + 1));
	};

	var xDown = null;
	var yDown = null;


	document.addEventListener('touchstart', handleTouchStart, false);

	function getTouches(evt) {
		return evt.touches ||             // browser API
			evt.originalEvent.touches; // jQuery
	}

	function handleTouchStart(evt) {
		const firstTouch = getTouches(evt)[0];
		xDown = firstTouch.clientX;
		yDown = firstTouch.clientY;

		if (yDown > 600) {
			setCurrentEventIndex((prevIndex) => prevIndex === eventData.length - 1 ? 0 : prevIndex + 1)
			setTimeout(() => {

			}, 1000)
		}

	};

	// Function to handle scroll gesture
	const handleScroll = (e) => {
		if (scrolling) return; // Prevent triggering during debounce


		setScrolling(true); // Set scrolling to true when scroll is detected

		if (e.deltaY > 0) {
			// Scroll down - show the next event
			setCurrentEventIndex((prevIndex) =>
				prevIndex === eventData.length - 1 ? 0 : prevIndex + 1
			);

		} else if (e.deltaY < 0) {
			// Scroll up - show the previous event
			setCurrentEventIndex((prevIndex) =>
				prevIndex === 0 ? eventData.length - 1 : prevIndex - 1
			);
		}

		// Reset scrolling state after 300ms to reduce sensitivity
		scrollTimeout.current = setTimeout(() => {
			setScrolling(false);
		}, 1000);
	};

	// Cleanup timeout on unmount
	useEffect(() => {
		return () => {
			if (scrollTimeout.current) {
				clearTimeout(scrollTimeout.current);
			}
		};
	}, []);

	const currentEvent = eventData[currentEventIndex];

	return (
		<div style={styles.container} onWheel={handleScroll}>
			<div style={styles.eventCard}>
				{/* Render the image */}
				<motion.img
					key={`event-img-${currentEventIndex}`} // Use key to force re-mount on event change
					src={currentEvent.bgimage}
					alt={currentEvent.title}
					style={styles.eventImage}
					initial={{ opacity: 0, scale: 1.2 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.5 }}
				/>

				{/* Render the event title, tagline, and description */}
				<motion.div style={styles.eventTextContainer} initial="hidden" animate="visible" key={`event-text-${currentEventIndex}`} // Use key to force re-mount on event change
				>
					<motion.h1
						key={`event-title-${currentEventIndex}`} // Use key to force re-mount on event change
						style={styles.eventTitle}
						variants={titleAnimation}
						initial="hidden"
						animate="visible"
					>
						{currentEvent.title}
					</motion.h1>
					<motion.h3
						key={`event-tagline-${currentEventIndex}`} // Use key to force re-mount on event change
						style={styles.eventTagline}
						variants={taglineAnimation}
						initial="hidden"
						animate="visible"
					>
						{currentEvent.tagline}
					</motion.h3>
				</motion.div>
				{/* Render the description below the image or above on small screens */}
				<motion.div
					key={`event-description-${currentEventIndex}`} // Use key to force re-mount on event change

					style={styles.eventDescription}
					variants={descriptionAnimation}
					initial="hidden"
					animate="visible"
				>
					{currentEvent.description}
				</motion.div>
				{/* Floating button to go to the next event */}
				<button style={styles.floatingButton} onClick={handleNextEvent}>
					&gt;
				</button>

			</div>
		</div>
	);
};

export default EventPage;
