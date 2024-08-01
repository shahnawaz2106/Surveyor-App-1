// src/services/bluetooth/FilterDevices.ts
const FilterDevices = (devices: any[], criteria: any) => {
  const filteredDevices = devices.filter(device => device.name.includes(criteria.name));
  return filteredDevices;
};

export default FilterDevices;
