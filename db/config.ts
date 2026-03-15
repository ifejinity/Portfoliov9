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
    company: column.text(),
    description: column.text(),
    start_at: column.date(),
    end_at: column.date({
      optional: true
    }),
    jobs: column.json()
  },
});

export default defineDb({
  tables: {
    Experiences
  }
});