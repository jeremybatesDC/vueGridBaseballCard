# Baseball Card Creator

## To Do

-- use placeholders and style them exaclty if possible -- makes it easier for user to to type from scratch.
-- Name on back could inherit AS A PLACEHOLDER the value of name on front, so it can be its own field that could be edited on its own without affecting the field on the front. Better and simpler than having user select whether to inherit or not. I'll find an issue maybe, but i like the idea
-- not sure if this would be considered a hack that might be prevented in future iOS updates, but setting font-size to 16px and then using font-variation settings to achieve desired visual size works at present and avoids the zoom plague

-- might actually not be that hard to allow landscape front

- actually use Typescript :-)
- consider PWA -- why is dev tools showing installation probs related to icons? They are there... Path issue? Prob not issue with actual file but can check
- CLS is being caused by at lease these, so think man, think:
  (if initial font is better sized to match loaded font, then won't flex... Obvi caching is the way, but first load... )
  tr
  tr.stats-table t-body-tr
  td.stats-table-t-body-td
  blockquote
  --> factor out card table (and use SUSPENSE if needed)

* build a subsetted version of the font without the undesired axes (is that even a thing?)

--> better highlightthe active table cell you're editing beucase otherwise it's disorientating

--> in addition to preventing jumps by taking up space (the focus UI needs this), CONSIDER a simple ANIMATION to show that a field is opening up to be edited and then is closing back down.

need a close button for the focus UI.
What if it were a label that brought focus back up one landmark level?

--> Use Vue3 async components and suspense API

--> stats: Previous 5 years
(offer previous 10 years but no fact footer)
(offer 10 categories, but no career highlights section)

--> "Rookie" or "Single Year" option

- Establish flow:
- User shouldn't have to save anything manually (although a button to force it to happen on request can be reassuring). So when do we save to indexedDB?

1.  If a value for a given field in indexedDB is null or doesn't exist, then grab the json default data for that field

2.  On X event(s) or at Y time(s), save fields that user changes to IDB. Do this async and, if it makes sense, have a WORKER do this to keep the UI thread free (maybe for a dostracting animation)

---

- Add Examples (start with JSON)  
  -- untappt cards
  -- github cards
  -- genealogy cards
  -- politicians
  -- baseball current example

- Years: Default to 2019, working backwards X (5) years. Could offer another "start year." Will have to think of easy way to give non-contiguous years without making it too easy for user to make typo... (they could default, and then each be over-rideable via a select menu or data-list or whatever)

- Header -- have user define what kind of stat it is (to make calculation in footer proedictable and logical -- if user wants to add up all the miles per hour, fine, but that can be an override of a sensible defualt)

### Built with

- Vue 3
- Vite
- CSS Grid Module
