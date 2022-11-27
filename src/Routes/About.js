import React from 'react';
import { Stack } from 'react-bootstrap';

export default function About() {
	return (
    <Stack gap={3}>
      <h2>About Harvest Guardian</h2>
      <div id="weather" className="bg-light border">Weather Based Planting</div>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur, nisl nec ultricies lacinia, nisl nisl aliquet nisl, ut
            aliquet nisl nisl sit amet nisl. Nulla facilisi. Nulla facilisi.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
        </div>
      <div id="maintenance" className="bg-light border">Plant Maintenance</div>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur, nisl nec ultricies lacinia, nisl nisl aliquet nisl, ut
            aliquet nisl nisl sit amet nisl. Nulla facilisi. Nulla facilisi.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
        </div>
      <div id="progress" className="bg-light border">Plant Progress Tracking</div>
       <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur, nisl nec ultricies lacinia, nisl nisl aliquet nisl, ut
            aliquet nisl nisl sit amet nisl. Nulla facilisi. Nulla facilisi.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
        </div>
    </Stack>
	);
}
