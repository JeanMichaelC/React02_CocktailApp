import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';

const rootNode = document.getElementById('root');

if(rootNode) {
	createRoot(rootNode).render(
		<StrictMode>
			<h1>This is a hello world with createRoot</h1>
		</StrictMode>
	);
}
