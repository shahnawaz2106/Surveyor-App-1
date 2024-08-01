// // src/services/bluetooth/BreadcrumbTracking.ts

// import { useEffect } from 'react';

// const BreadcrumbTracking = (deviceData: any) => {
//   useEffect(() => {
//     // Logic to update breadcrumb trail based on device data
//     const updateBreadcrumbTrail = (data: any) => {
//       console.log('Updating breadcrumb trail with data:', data);
//       // Your breadcrumb logic here
//     };

//     updateBreadcrumbTrail(deviceData);

//   }, [deviceData]);

//   return null;
// };

// export default BreadcrumbTracking;





// Breadcrumb Tracking
// Start/Stop Tracking: Start and stop breadcrumb tracking based on user actions (e.g., starting and completing an investigation).
// Breadcrumb Storage: Store breadcrumb data as a series of GPS coordinates with timestamps.
// Breadcrumb Visualization: Display breadcrumb trails on the map to visualize the user’s path.






// BreadcrumbTracking in both bluetooth services and map components could lead to redundancy and confusion. The key is to differentiate their responsibilities and ensure they complement each other. Here’s a way to clarify and streamline their roles:
// Bluetooth BreadcrumbTracking:

// Focuses on collecting and processing data from the RKI device and prepares it for display or storage.
// This can handle the logic of what data points to track and their relevance, but not the actual visualization.


// Map BreadcrumbTrail:

// Focuses on visualizing the breadcrumb trail on the map.
// This component will take the processed data (perhaps from state or props) and display it.






// src/services/bluetooth/BreadcrumbTracking.ts

// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateBreadcrumbData } from '../../store/actions.ts'; // Assuming you have a redux action to update breadcrumb data

// const BreadcrumbTracking = (deviceData: any) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const processBreadcrumbData = (data: any) => {
//       // Process the data received from the device
//       const processedData = {
//         location: data.location,
//         level: data.leakLevel, // Example: 'Severe', 'Moderate', 'None'
//       };
//       return processedData;
//     };

//     const updateBreadcrumbTrail = (data: any) => {
//       const processedData = processBreadcrumbData(data);
//       dispatch(updateBreadcrumbData(processedData)); // Dispatch action to update the breadcrumb trail in state
//     };

//     updateBreadcrumbTrail(deviceData);

//   }, [deviceData, dispatch]);

//   return null;
// };

// export default BreadcrumbTracking;






// src/services/bluetooth/BreadcrumbTracking.ts
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateBreadcrumbData } from '../../store/breadcrumbSlice';

const BreadcrumbTracking = (deviceData: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const processBreadcrumbData = (data: any) => {
      return {
        location: data.location,
        level: data.leakLevel,
      };
    };

    const updateBreadcrumbTrail = (data: any) => {
      const processedData = processBreadcrumbData(data);
      dispatch(updateBreadcrumbData(processedData));
    };

    updateBreadcrumbTrail(deviceData);

  }, [deviceData, dispatch]);

  return null;
};

export default BreadcrumbTracking;
