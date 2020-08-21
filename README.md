# Baseball Card Creator

## To Do

Labor Day launch.

--> on file upload show user something is happening. Spinner might be fine. https://loading.io/css/
https://css-tricks.com/lets-make-a-fancy-but-uncomplicated-page-loader/
--> progress bar might be overkill
--> cool be cool to say "upload complete -- encoding now"

--> use contrast detect scss thing for the card back: https://css-tricks.com/switch-font-color-for-different-backgrounds-with-css/
--> card background color: front (outer border color)
--> dutone back based on user selection

--> icons for layout options

--> text options include color per field (defaults to currentColor), text-align
--> might be good to show all font adjustment buttons for each text input, but not all buttons would be enabled for all fields. That way user won't wonder "what happened to width option?" but will be shown it just can't be applied here (may need clear helper text about limitations)
--> For lines with 2 text inputs, consider not allowing width adjustments (maybe just color, grade, slant)

--> Get elements in cells to take full size

-- reduce CLS (see notes)

FOCUS UI STUFF
-> a focus UI for images is needed:

- option to upload new image (clearing it should put back the OG placeholder image).

- image sliders shown here sepia greyscale etc
- this would be where object-fit options could live

-> need a close button for the focus UI.
-> What if it were a label that brought focus back up one landmark level?

- click logo image: 1) refactor encode script to accept either image -- should be doable even just with some attributes

- helper text explaining image specs

* can a worker send the actual image file somewhere, but give back a filename string or something so we can match them up later?

- ensure offline mode tells user they are offline

* refactor resets and global inputs: -- refactor input styling -- too much redundancy. See header.

-- should be only 1 text slider (teleport might be needed): Teleport. https://medium.com/@patelvivek2530/teleport-vue-3s-new-feature-a887fe05fd87 -- feature used to be palled portal

-- text slider styles shouldnT inherit from parent (except for maybe positioning in some cases
)

indicate whether a field can have its font manipulated

math: computed. Grab an array by refs if necessary and tally those bitches. Can we have only a column recalcute as opposed to the whole table? Yes the watch could be scoped to a an array of only that column's cells

the way to make a mask is via computed and watchers, set/get. No need for a mask plugin.
and, after considering it, i donT think i need a table plugin. If I can properly tag columns then doing math on them shouldnT take any special code really. It would just be a formula, and probably use the Computed method

- Add Examples (start with JSON)  
  -- untappt cards
  -- github cards
  -- genealogy cards
  -- PRESIDENTS & politicians
  -- baseball current example
  -- school photo option ( cash money )
  -- birth announcements

- group/team bulk stats upload

-- refactor card header
-- save font-variation-settings to CSS vars to can easily reuse somethin like "tallest thinnest"

-- (further?) reduce visible size of borders for 320px devices so hopefully rest of content can give adequate touch targets in real world measurements (7-12mm) (maybe using min-max clamps?)
-- min touch target 48px wherever possible (playing numerologist right now 44, 45, 46, 48)

- consider PWA -- why is dev tools showing installation probs related to icons? They are there... Path issue? Prob not issue with actual file but can check

--> better highlightthe active table cell you're editing beucase otherwise it's disorientating

--> in addition to preventing jumps by taking up space (the focus UI needs this), CONSIDER a simple ANIMATION to show that a field is opening up to be edited and then is closing back down.

- TABS: on screens that are wide enough, consider splitting front/back buttons to sides ( for thumbs holding a phone in landscape, for instance). Goal here is to have user se 100% all content needed without having to scroll
  --> make sure tab state is saved locally
  --> use hashes so BACK works as user expects

  --> consider using requestSubmit()

STATS TABLE

--> stats: Previous 5 years
(offer previous 10 years but no fact footer)
(offer 10 categories, but no career highlights section)

- Years: Default to 2019, working backwards X (5) years. Could offer another "start year." Will have to think of easy way to give non-contiguous years without making it too easy for user to make typo... (they could default, and then each be over-rideable via a select menu or data-list or whatever)

- Calculations and column stat type -- have user define what kind of stat it is (to make calculation in footer proedictable and logical -- if user wants to add up all the miles per hour, fine, but that can be an override of a sensible defualt)

- because it may not be feasible to alwasy vertically center the aside and footer textareas without ever clipping text, consider adding a visual florish / bottom box shadow that would be obscured by the text (maybe with a text background color or something) if there was a 2nd line of text, but visible if there is only 1 line. I think that is doable. A char max-length could help too. YES. A char counter will help some fields (thinking textareas in particular)

* Establish data flow:
  -- share state? Vuex?

* User shouldn't have to save anything manually (although a button to force it to happen on request can be reassuring). So when do we save to indexedDB?
  -- use blur event and see whther placeholder is showing (can select that in JS)

1.  If a value for a given field in indexedDB is null or doesn't exist, then grab the json default data for that field

2.  On X event(s) [blur with placeholder not showing] and/or at Y time(s), save fields that user changes to IDB. Do this async and, if it makes sense, have a WORKER do this to keep the UI thread free (maybe for a dostracting animation)

---

### Notes

--> absolutlely cannot find that blog post about auto-sizing grid when cells unused

-- not sure if this would be considered a hack that might be prevented in future iOS updates, but setting font-size to 16px and then using font-variation settings to achieve desired visual size works at present and avoids the zoom plague

stick to cm/mm even if it's off by 1mm. Much more sensible. Aim for 1cm touch targets. PLus math is so clean. But, the 3.5" x 2.5" aspect ratio is a cleaner 1.4 (rather than 1.39) -- but does that matter?

consider 44px 22px 11px -- certainly unconventional but could work

can i offer a 48px touch target (off to the side perhaps) while maintaining tight vertical content like cards actually have?

--> using filter drop shadow mutliple syntax could help here. Just not sure exactly when

- CLS is being caused by at lease these, so think man, think:
  (if initial font is better sized to match loaded font, then won't flex... Obvi caching is the way, but first load... )
  tr
  tr.stats-table t-body-tr
  td.stats-table-t-body-td
  blockquote

### 2nd release

-- consider background opacity option so full bleed cards could still have semi transparent outer border for a possibly interesting visual effect

- de-hackify tab markup (maybe use hidden and then put click handlers that toggle aria stuff. Pretty simple)

--> consider input range diagonal "mountain" behind each indicateing which end is max vs min (it can be confusing when values are negative -- this might help)

-- factor out options API stuff

--> un-nest scss

--> offer a "100% custom" option -- leaving text blank and hiding logo inner border and choosing full bleed)

Texture move to v2
Superlatives may have to wait for round 2
--> "Rookie" or "Single Year" option

--> validate years in pre-flight

--> do we need compiler/full build on prod? i don't think so. I think we only need runtime. So make sure we're not loading more code than we need.

--> Use Vue3 async components and suspense API

--> css content visibilty new chromium property. Could help in chrome even though safari doesnT seem to want it.

- card flip on tab change:
  https://v3.vuejs.org/guide/transitions-overview.html#class-based-animations-transitions
  https://www.smashingmagazine.com/2020/02/magic-flip-cards-common-sizing-problem/
  https://dev.to/dailydevtips1/css-flip-cards-3flc

Consider adding double border option

- on back gum and crease need to reach edge of card -- either neg margins or translate or absolute who cares one of those

* CMYK misalign elements? How can i get an image trace of some kind? With canvas? A worker can indeed use canvas, but not in safari :(
* img crop/centering options
* consider building a subsetted version of the font without the undesired axes (is that even a thing?) -- or even offering more than 1 parametric font (in performannt way) -- like a SERIF

* for uploading photo could offer a choice: choose photo OR takeUserFacing. Otherwise I can't seem to express "go to photo roll, but IF user opens camera, have it facing front"
* actually use Typescript :-)
* write a test to ensure focusing an input doesn't cause zoom (doing this with viewport tag not ok and iOS will be ignoring it). can i write a test for ios zoom on input? i'd like to be able to make adjustments and not necessarily have to test manually each time on iphone... i can imagine a scenario i nqhich i get kinda far down the road re formatting and have to back out because iOS zoom

- baseball images in tabs radio buttons
- uneven light fading would be cool
  -- might actually not be that hard to allow landscape front
- consider ridiculing IE11.
  -- consider microformats
  -- can i write a css native grid that wraps and uses min max and clamp maybe? Hmmm. Worth a try, although I do need to pivot back to programming
- if continue to wrestle with layout, i think putting a table next to a textarea, even though they are both inside flex columns inside a flex-row, is asking a lot and requiring maybe too much time/code
- flex-order on back of card? Works like a charm and, on mobile (future portrait back option) it looks nicer. But, on desktop, I don't like how it looks at all. Do we give user that option? Can it look good? Well, big problem is the diagonal overflow of labels. That's not a simple sand-down

-- consider using placeholders and style them exaclty if possible -- makes it easier for user to to type from scratch.
-- Name on back could inherit AS A PLACEHOLDER the value of name on front, so it can be its own field that could be edited on its own without affecting the field on the front. Better and simpler than having user select whether to inherit or not. I'll find an issue maybe, but i like the idea

### Built with

- Vue 3
- Vite
- CSS Grid Module
