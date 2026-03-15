import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config
const Experiences = defineTable({
  columns: {
    id: column.number({ 
      primaryKey: true 
    }),
    title: column.text({
      unique: true,
      optional: false
    }),
    description: column.text(),
    jobs: column.json()
  },
});

export default defineDb({
  tables: {
    Experiences
  }
});