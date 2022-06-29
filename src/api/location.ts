export type APILocationResponse = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  error: string | undefined;
};

export const fetchLocation = (
  id: number,
  onResponse: (data: APILocationResponse) => void
) => {
  fetch(`https://rickandmortyapi.com/api/location/${id}`)
    .then((response) => response.json())
    .then(onResponse);
};
