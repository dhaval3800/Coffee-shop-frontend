export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
};

const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};


export const getUserLocation = (resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      resolve({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    },
    (error) => {
      console.error('Error getting user location:', error);
      reject(error);
    }
  );
};

export const getAvatarText = (name) => {
  if(!name){ return 'GU'}
  const nameParts = name?.split(' ');
  if (nameParts?.length === 1) {
    return nameParts[0].charAt(0).toUpperCase();
  } else {
    return `${nameParts[0].charAt(0).toUpperCase()}${nameParts[1].charAt(0).toUpperCase()}`;
  }
};