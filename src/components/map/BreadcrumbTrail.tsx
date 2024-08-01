// src/components/map/BreadcrumbTrail.tsx

import React from 'react';
import { View, Text } from 'react-native';

const BreadcrumbTrail: React.FC = (props) => (
  <View>
    <Text>Breadcrumb Trail Component</Text>
    {/* Your BreadcrumbTrail implementation here */}
  </View>
);

export default BreadcrumbTrail;





// src/components/map/BreadcrumbTrail.tsx

// import React from 'react';
// import { View, Text } from 'react-native';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store';

// const BreadcrumbTrail: React.FC = () => {
//   const breadcrumbData = useSelector((state: RootState) => state.breadcrumbData);

//   return (
//     <View>
//       <Text>Breadcrumb Trail Component</Text>
//       {breadcrumbData.map((breadcrumb, index) => (
//         <View key={index}>
//           <Text>{`Location: ${breadcrumb.location}, Level: ${breadcrumb.level}`}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// export default BreadcrumbTrail;




// src/components/map/BreadcrumbTrail.tsx
// import React from 'react';
// import { View, Text } from 'react-native';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store';

// const BreadcrumbTrail: React.FC = () => {
//   const breadcrumbData = useSelector((state: RootState) => state.breadcrumb.breadcrumbData);

//   return (
//     <View>
//       <Text>Breadcrumb Trail Component</Text>
//       {breadcrumbData.map((breadcrumb, index) => (
//         <View key={index}>
//           <Text>{`Location: ${breadcrumb.location}, Level: ${breadcrumb.level}`}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// export default BreadcrumbTrail;
