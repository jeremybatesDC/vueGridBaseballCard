# Baseball Card Creator

Testing Vercel

## To Do

--> factor out card table
--> better highlightthe active table cell you're editing beucase otherwise it's disorientating

--> in addition to preventing jumps by taking up space (the focus UI needs this), CONSIDER a simple ANIMATION to show that a field is opening up to be edited and then is closing back down.

need a close button for the focus UI.
What if it were a label that brought focus back up one landmark level?

--> Use Vue3 async components and suspense API

--> Previous 5 years
(offer previous 10 years but no fact footer)
(offer 10 categories, but no career highlights section)

--> "Rookie" or "Single Year" option

--> The build task adds Unique IDs that on the last build were wrong. Once I adjusted paths manually in the dist folder, it worked on Netlify as intended. But don't want to have to keep doing that. Rather than removing useful hashing, I'd like to get that working

- Load font aysnc
- build a subsetted version of the font without the undesired axes (is that even a thing?)
- Establish flow:
- User shouldn't have to save anything manually (although a button to force it to happen on request can be reassuring). So when do we save to indexedDB?

1.  If a value for a given field in indexedDB is null or doesn't exist, then grab the json default data for that field

2.  On X event(s) or at Y time(s), save fields that user changes to IDB. Do this async and, if it makes sense, have a WORKER do this to keep the UI thread free (maybe for a dostracting animation)

---

- Add Examples (start with JSON)  
  -- github cards
  -- genealogy cards
  -- baseball current example

- Years: Default to 2019, working backwards X (5) years. Could offer another "start year." Will have to think of easy way to give non-contiguous years without making it too easy for user to make typo... (they could default, and then each be over-rideable via a select menu or data-list or whatever)

- Header -- have user define what kind of stat it is (to make calculation in footer proedictable and logical -- if user wants to add up all the miles per hour, fine, but that can be an override of a sensible defualt)

### Built with

- Vue 3
- Vite
- CSS Grid Module
