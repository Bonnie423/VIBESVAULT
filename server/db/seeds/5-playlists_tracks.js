/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('playlists_tracks').insert([
    {playlists_id: 1, tracks_id: 1, users_id: 1, date:'3/12/2023'},
    {playlists_id: 2, tracks_id: 2, users_id: 2, date:'3/12/2023'},
    {playlists_id: 3, tracks_id: 3, users_id: 3, date:'3/12/2023'},
  ]);
}