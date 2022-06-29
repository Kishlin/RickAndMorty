export type APIEpisodeResponse = {
  id: number;
  name: string;
  episode: string;
  error: string | undefined;
};

export const fetchEpisode = (
  id: number,
  onResponse: (data: APIEpisodeResponse) => void
) => {
  fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    .then((response) => response.json())
    .then(onResponse);
};
