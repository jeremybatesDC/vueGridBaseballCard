# Baseball Card Creator

## To Do

- So that we can use web worker whenever we want/need, switch to indexdb. Consider Jake Archibald's 1kb wrapper that "mostly mirrors the IndexedDB API, but adds" promises and "small improvements that make a big difference to usability": https://github.com/jakearchibald/idb OR https://github.com/jakearchibald/idb-keyval

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
