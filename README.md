# Baseball Card Creator

## To Do

indicate whether a field can have its font manipulated
math: computed. Grab an array by refs if necessary and tally those bitches. Can we have only a column recalcute as opposed to the whole table? Yes the watch could be scoped to a an array of only that column's cells

the way to make a mask is via computed and watchers, set/get
after considering it, i donT think i need a table plugin. If I can properly tag columns then doing math on them shouldnT take any special code really. It would just be a formula, and probably use the Computed method

need a close button for the focus UI.
What if it were a label that brought focus back up one landmark level?

-- prob should be only 1 text slider (teleport might be needed)
-- text slider styles shouldnT inherit from parent (except for maybe positioning in some cases )
-- refactor card header
-- refactor input styling -- too much redundancy. See header.
-- save font-variation-settings to CSS vars to can easily reuse somethin like "tallest thinnest"
-- factor out options API stuff
-- reduce visible size of borders for 320px devices so hopefully rest of content can give adequate touch targets in real world measurements (7-12mm) (maybe using min-max clamps?)
-- min touch target 48px wherever possible (playing numerologist right now 44, 45, 46, 48)

-- consider microformats

-- don't bikeshed too much on table width styles right now
-- consider using placeholders and style them exaclty if possible -- makes it easier for user to to type from scratch.
-- Name on back could inherit AS A PLACEHOLDER the value of name on front, so it can be its own field that could be edited on its own without affecting the field on the front. Better and simpler than having user select whether to inherit or not. I'll find an issue maybe, but i like the idea

- actually use Typescript :-)
- consider PWA -- why is dev tools showing installation probs related to icons? They are there... Path issue? Prob not issue with actual file but can check
- CLS is being caused by at lease these, so think man, think:
  (if initial font is better sized to match loaded font, then won't flex... Obvi caching is the way, but first load... )
  tr
  tr.stats-table t-body-tr
  td.stats-table-t-body-td
  blockquote
  --> factor out card table (and use SUSPENSE if needed)

--> better highlightthe active table cell you're editing beucase otherwise it's disorientating

--> in addition to preventing jumps by taking up space (the focus UI needs this), CONSIDER a simple ANIMATION to show that a field is opening up to be edited and then is closing back down.

--> Use Vue3 async components and suspense API -- and what is the new one called? Teleport. https://medium.com/@patelvivek2530/teleport-vue-3s-new-feature-a887fe05fd87 -- feature used to be palled portal

--> stats: Previous 5 years
(offer previous 10 years but no fact footer)
(offer 10 categories, but no career highlights section)

- Years: Default to 2019, working backwards X (5) years. Could offer another "start year." Will have to think of easy way to give non-contiguous years without making it too easy for user to make typo... (they could default, and then each be over-rideable via a select menu or data-list or whatever)

- Calculations and column stat type -- have user define what kind of stat it is (to make calculation in footer proedictable and logical -- if user wants to add up all the miles per hour, fine, but that can be an override of a sensible defualt)

--> "Rookie" or "Single Year" option

- Establish flow:
  -- share state?

- User shouldn't have to save anything manually (although a button to force it to happen on request can be reassuring). So when do we save to indexedDB?
  -- use blur event and see whther placeholder is showing (can select that in JS)

1.  If a value for a given field in indexedDB is null or doesn't exist, then grab the json default data for that field

2.  On X event(s) [blur with placeholder not showing] and/or at Y time(s), save fields that user changes to IDB. Do this async and, if it makes sense, have a WORKER do this to keep the UI thread free (maybe for a dostracting animation)

---

- Add Examples (start with JSON)  
  -- untappt cards
  -- github cards
  -- genealogy cards
  -- politicians
  -- baseball current example

### Notes

-- might actually not be that hard to allow landscape front

-- not sure if this would be considered a hack that might be prevented in future iOS updates, but setting font-size to 16px and then using font-variation settings to achieve desired visual size works at present and avoids the zoom plague

- build a subsetted version of the font without the undesired axes (is that even a thing?)

### Built with

- Vue 3
- Vite
- CSS Grid Module
