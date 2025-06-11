import React from 'react';
import ReactDOM from 'react-dom/client';
import { Excalidraw } from '@excalidraw/excalidraw';

const ExcalidrawApp = () => {
    return (
        <div style={{ height: '600px' }}>
            <Excalidraw />
        </div>
    );
};

// Montar Excalidraw en el contenedor Razor
const container = document.getElementById('excalidraw-container');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<ExcalidrawApp />);
}
