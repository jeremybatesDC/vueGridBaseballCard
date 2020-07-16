# Baseball Card Creator

## To Do

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

- avoid or embrance iOS zoom maybe even by using these focus styles to make a modal-ish thing. There could be a button to blur which would result in it closing. One single input brought to the fore is good ui I think.

### Built with

- Vue 3
- Vite
- CSS Grid Module
