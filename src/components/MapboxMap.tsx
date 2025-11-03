import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapboxMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
}

const MapboxMap: React.FC<MapboxMapProps> = ({ latitude, longitude, zoom = 15 }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = 'pk.eyJ1Ijoibmd1ZXNzYW4taXQiLCJhIjoiY21ncHJ2dXo1MDBtdTJxczhzdW1xM292aCJ9.q7Q3rcOzslqq9SB-fu8QIg';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [longitude, latitude],
      zoom: zoom,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add marker for EXFORM location
    const marker = new mapboxgl.Marker({
      color: '#E31937',
      scale: 1.2
    })
      .setLngLat([longitude, latitude])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(
            '<div style="padding: 10px;"><h3 style="font-weight: bold; margin-bottom: 5px;">EXFORM</h3><p>Yopougon - en face du CHU</p></div>'
          )
      )
      .addTo(map.current);

    // Show popup by default
    marker.togglePopup();

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [latitude, longitude, zoom]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0 rounded-xl" />
    </div>
  );
};

export default MapboxMap;
