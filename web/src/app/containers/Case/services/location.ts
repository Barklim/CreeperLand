import type { Location } from 'history';

const URLSearchParamsToRRDQuery = (searchParams: URLSearchParams): string => {
  const query = searchParams.toString();

  return query.length > 0 ? `?${query}` : '';
};

export const removeOneRollFromLocation = (location: Location): Location => {
  const locationCopy = { ...location };
  const searchParams = new URLSearchParams(locationCopy.search);
  const rolls = searchParams.get('rolls');

  if (rolls === null) return location;

  if (Number(rolls) === 1) {
    searchParams.delete('rolls');
  } else {
    searchParams.set('rolls', `${Number(rolls) - 1}`);
  }

  locationCopy.search = URLSearchParamsToRRDQuery(searchParams);

  return locationCopy;
};

export const setRollsToLocation = (
  location: Location,
  rolls: number,
): Location => {
  const locationCopy = { ...location };
  const searchParams = new URLSearchParams(locationCopy.search);

  searchParams.set('rolls', String(rolls));

  locationCopy.search = URLSearchParamsToRRDQuery(searchParams);

  return locationCopy;
};
