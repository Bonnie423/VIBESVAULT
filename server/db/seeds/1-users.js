/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').insert([
    { id: 1, user_id: '12132859372', name: 'Karl' }, // Karl's user id
    { id: 2, user_id: 'madison-rio', name: 'Maddy' }, // Maddy's user id
    { id: 3, user_id: '31ry2tyfoabut6ce3cyaj74wwxde', name: 'Courtney' }, // Courtney's user id
    { id: 4, user_id: 'zzzzzzzzz', name: 'rogueUserJatin' }, // Courtney's user id
    // { id: 4, user_id: 'gorhgoe', name: 'Murray' }, // Maddy's user id
  ])
}
