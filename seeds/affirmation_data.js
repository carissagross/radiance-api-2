const { json } = require('express')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('affirmations').del()
  await knex('affirmations').insert([
    {id: 1, description: 'I forgive myself and set myself free.', image: 'https://i.ibb.co/Yc64RLT/1.png'},
    {id: 2, description: 'Breathing in, I send myself love.', image: 'https://i.ibb.co/fqHPLp2/2.png'},
    {id: 3, description: 'I am in the process of becoming the best version of myself.', image: 'https://i.ibb.co/jfnq75W/3.png'},
    {id: 4, description: 'My possibilities are endless.', image: 'https://i.ibb.co/41nSRQ8/4.png'},
    {id: 5, description: 'I have the freedom & power to create the life I desire.', image: 'https://i.ibb.co/1MkQvj0/5.png'},
    {id: 6, description: 'I believe I can be all that I want to be.', image: 'https://i.ibb.co/1b7hC0T/6.png'},
    {id: 7, description: 'I choose to be kind to myself and love myself unconditionally.', image:'https://i.ibb.co/zQcshnc/7.png'},
    {id: 8, description: 'I am worthy of my dreams.', image:'https://i.ibb.co/JcqJ1Gc/8.png'},
    {id: 9, description: 'I deserve to be healthy and feel good.', image: 'https://i.ibb.co/VW6QvRW/9.png'},
    {id: 10, description: 'I am enough.', image: 'https://i.ibb.co/BqXF7Tq/10.png'},
    {id: 11, description: 'I am full of energy and vitality and my mind is calm and peaceful.', image: 'https://i.ibb.co/Yc64RLT/1.png'},
    {id: 12, description: 'Every day I am getting healthier and stronger.', image: 'https://i.ibb.co/fqHPLp2/2.png'},
    {id: 13, description: 'I honor my body by trusting the signals that it sends me.', image: 'https://i.ibb.co/jfnq75W/3.png'},
    {id: 14, description: 'I am successful.', image:'https://i.ibb.co/41nSRQ8/4.png'},
    {id: 15, description: 'I am confident.', image: 'https://i.ibb.co/1MkQvj0/5.png'},
    {id: 16, description: 'I am powerful.', image: 'https://i.ibb.co/1b7hC0T/6.png'},
    {id: 17, description: 'I am strong.', image: 'https://i.ibb.co/zQcshnc/7.png'},
    {id: 18, description: 'I am getting better and better every day.', image:'https://i.ibb.co/JcqJ1Gc/8.png'},
    {id: 19, description: 'All I need is within me right now.', image:  'https://i.ibb.co/VW6QvRW/9.png'},
    {id: 20, description: 'I wake up motivated.', image: 'https://i.ibb.co/BqXF7Tq/10.png'},
    {id: 21, description: 'I am an unstoppable force of nature.', image: 'https://i.ibb.co/Yc64RLT/1.png'},
    {id: 22, description: 'I am a living, breathing example of motivation.', image: 'https://i.ibb.co/1MkQvj0/5.png'},
    {id: 23, description: 'I am living with abundance.', image: 'https://i.ibb.co/fqHPLp2/2.png'},
    {id: 24, description: 'I am having a positive and inspiring impact on the people I come into contact with.', image: 'https://i.ibb.co/jfnq75W/3.png'},
    {id: 25, description: 'I am inspiring people through my work.', image: 'https://i.ibb.co/41nSRQ8/4.png'},
    {id: 26, description: 'I am rising above the thoughts that are trying to make me angry or afraid.', image: 'https://i.ibb.co/1b7hC0T/6.png'},
    {id: 27, description: 'Today is a phenomenal day.', image:'https://i.ibb.co/zQcshnc/7.png'},
    {id: 28, description: 'I am turning DOWN the volume of negativity in my life, while simultaneously turning UP the volume of positivity.', image: 'https://i.ibb.co/JcqJ1Gc/8.png'},
    {id: 29, description: 'I am filled with focus.', image:'https://i.ibb.co/VW6QvRW/9.png'} ,  
    {id: 30, description: 'I am not pushed by my problems; I am led by my dreams.', image:'https://i.ibb.co/BqXF7Tq/10.png'}
  ]);
};
