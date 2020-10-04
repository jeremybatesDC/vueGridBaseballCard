# Baseball Card Creator

## To Do

uploading a logo presently just populates the single canvas for player image... need another canvas in logo figure div and have function accept/handle that ref/id

exciting that canvas is working -- i bet that i can still use the worker for the blob/reader, as long as that wouldn't actually make it slower

consider down keys in table colummns

cat paw logo could be over the outline of astate... or, for instance, the outline of brooklyn

adding Pica or an even more proven canvas image resizer that addresses the many image quality issues that arise when doing this for first time yourself
but what about zoom/crop? since my mom already asked for that fnctionality, and i was thinking about it, maybe there is a single solution.
https://github.com/blueimp/JavaScript-Load-Image -- only problem is that the file is huge (176kb unpacked)
Pica is also enormous

i think i'm doing too much work with computed AND watch -- harnessing one way, then behaving accordingly, is prob better

re-punch up cardback after removing grad. Text too thin

either remove/repalace grad or just rename it "extraboldness" for now...

create exact same schema in json, data() and indexdb

would ismplest thing be to super throttle a watch function and re-save? I think maybe so let's try
using handlers thiugh also seems fiddly.

pass data via props into cardFront and cardBack from App based on whether local data exists yet or not. Makes sense at the App level to me.
although, thinking this through, user may have doen side front bu tnot back.
Ah, but back would always at least have the name and position, right?

logo image should be made small on encode

paw is good for logo and logo button

avoid watching sliders so much potential for making cpu fan explode

GRAD is making ugly letters...

to toFixed on the average reducer funciton -- that should LIMIT the num of deimila places to 2, but i want to allow 0 places instrad of .0

can try inline worker

i think i'm forcing setup wrong if i need THIS. I'm not following the composition pattern. But thatS ok and in this case maybe preferable

make cardback async

re-refactor inputs scss per v4

review readme in v4 for additional ideas i may have added at some poeint

bettwe click outside to close like underneath on desktop? it doesn't take up full height...

PUT SERVICE WORKER BACK AFTER DEV -- really want env var here

touch indicator at least on initial load for logo image
emphasize those image upload buttons more. Thumbprint icon? in v2 i could try to graduate them.

can i tree shake vue? Vite says it's optimizable and i do think the entire thing is loading... hmmm

after editing career highlights, sometimes hard ot click table stats without triggering career highlights again

logo image could match upload logo icon for more of a visual hint! plus it's super digitized8

---

### Notes

    //reason that iM ok here with less than 44px is that when they are next to each other, focus UI makes it less of a huge deal if user taps the adjascent box. Not ideal but also still clickable

- group/team bulk stats upload
- sell to youth sports leagues

--> Pitch an extension/investment.

--> Print partner? Need whitelabeling or at least to achieve some sort of margin

--> absolutlely cannot find that blog post about auto-sizing grid when cells unused

-- not sure if this would be considered a hack that might be prevented in future iOS updates, but setting font-size to 16px and then using font-variation settings to achieve desired visual size works at present and avoids the zoom plague

stick to cm/mm even if it's off by 1mm. Much more sensible. Aim for 1cm touch targets. PLus math is so clean. But, the 3.5" x 2.5" aspect ratio is a cleaner 1.4 (rather than 1.39) -- but does that matter?

consider 44px 22px 11px -- certainly unconventional but could work

can i offer a 48px touch target (off to the side perhaps) while maintaining tight vertical content like cards actually have?

--> using filter drop shadow mutliple syntax could help here. Just not sure exactly when

--> css backdrop filter is cool/intertesting/well supported: https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter

- CLS is being caused by at lease these, so think man, think:
  (if initial font is better sized to match loaded font, then won't flex... Obvi caching is the way, but first load... )
  tr
  tr.stats-table t-body-tr
  td.stats-table-t-body-td
  blockquote

  --> might be good to show all font adjustment buttons for each text input, but not all buttons would be enabled for all fields. That way user won't wonder "what happened to width option?" but will be shown it just can't be applied here (may need clear helper text about limitations)

the way to make a mask is via computed and watchers, set/get. No need for a mask plugin.
and, after considering it, i donT think i need a table plugin. If I can properly tag columns then doing math on them shouldnT take any special code really. It would just be a formula, and probably use the Computed method

so really it's just an upload button... I want it to match the logo image icon. And since image player icon can't be a mountain, and logo image prob shouldn't be a person, then need to generalize morereplace filepicker player image upload button with an icon of a picture that feautures a person not a mountian: something like: https://iconmonstr.com/picture-4-svg/

## App

gets too slow with huge photos (does the same happen after you change photos 100times even with small images? is it a pure memory issue?)

Nativescript-Vue is the way to go... everything just seems to be between versions right now. I starred 8 repos though

verify no input field zoom following this lightrefactor

reafcotr container classes? long words

logo position squares AND layout icons: active white color--RESTORE AFTER HAVING MOVED IT TO INDEX.html

i stupidly removed previous xcode when installing beta xcode. Nativescript appearently isn't expecting the beta... restore that, but maybe not now on bad internet connection

-- i already have an apple dev account it seems -- upgrading xcode now... The vue3 feature of making it "easier to target native" seems to have evaporated

### 2nd release

tabs the Vue way: https://codepen.io/team/Vue/pen/jOPjZOe
ASIDE & FOOTER!
textareas content strategy/testing:
a) maxlength?
b) b/c may not be feasible to alwasy vertically center textareas w/out ever clipping text, consider adding a visual florish / bottom box shadow that would be obscured by a 2nd/3rd etc line of text (maybe with a text background color or something)

might get too slow with huge photos

don't need TRUE icons for font sliders -- just style a capital A with the relevant hard-coded font variation settings

also, consider relabelling axes because doesnT always make sense to user

shorten class names

if in installed full screen mode can take advantage of more space or at least have a gradient or something

retry gum mix blend mode -- there was problem on ios when background color dark

the placeholder for 0 is grey again why?

have one color function becuase there's double the needed amount of js i think

add {set{ idb key val back (didnT want it as dependecy in v1)}

finish getting rid of options API

does cache storage keep doubling? Ummm... at least each time i reload... hmmmmmmmm

consider moving truly global css vars to index if it'll work and slim the css file

postCSS

decrease bundle size -- split front and back at minimum i think -- ROLLUP BUNDLE ANALYZER
each front & back could be its own app maybe even. Easy split there.
remember which side user was on last.

also can we server side render at all so that all the markup doesn't have to exist in the JS file? Is that a thing?

for saving, consider using screenshot api: https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
iOS support is different but there i think (hopefully can get OS or Safari to prompt user)
Although canvas might be best no? Yeah prob. There's a lib called

- html2canvas (there is a vue version but is that actually needed here?)
- rasterizeHTML.js

more NAN prevention

consider giving front text sliders left right padding to align with outer border

A char counter will help some fields (thinking textareas in particular)

the back view is cheating and it's kinda square...

the curve logo position equation needs to be tweaked because in the in=between values there's still gap showing

turn off autocomplete to get shorter keyboard? the github phone app i have did that kind of input. Maybe is pattern?

focus colors: consider making consistent across browsers

add more years

perf: is it having to process initial image each time? can we go back to json or static something for load? Would like the skeleton to show immediately...

- re-introduce diagonal table headers
- back header needs serious refactor
- color behind table headers? There's a highlighted
- (this really applies most when card is black) rather than just darkening aside/footer/tablestats, USE LIGHTEN AND DARKEN filtering -- could be done with a css filter even if not a scss function. it should be intensifying contrast (so make lighter than color or darker depening on contrast function -- use hur rotate for instance or a css variable. for instance shouldn't all dark have charcola regions just like all white ha some grey boxes? yah
- refine top tabs type variations

refactor icon color stoke fill -- code is a mess but...

- icons -- **TRY HUE ROTATE 180** want easy way to invert colors (or may need to help contrast a bit for now with lighter highlight color). Move some stroke/fill attributes into CSS
  logo position icons need color work (just don't want to bikeshed further on this)

is there a tap highlight flash i can get rid of elsewhere? like on the tabs? it's annoying...

- ?Get elements in cells to take full size?

- front and back could have icons showing generic avatar in portrait and a stats table icon for back. maybe. (they didn't look great especially since orientations are different -- just going with existing ui for now

put positioing icons in svg defs man

tooltip guided tour minimal

js cropping or really just an anchroing option maybe

consider upgraded color picker: https://web-padawan.github.io/vanilla-colorful/

- "upload pic" and "upload logo" labels improvemnts (something is wrong there) -- brute forced it for v1 -- i think it's combo having svg and an image as direct children of flex... neither does well in that scenario so maybe this is unsurpring

- math -- sometimes things no nuts and the output exceeds 5 digits. Need to use toFixed or something to limit decimal places

- math minvalue 0 for the columns to avoid visual blanks as well as NaN errors, etc

- upgrade project dependencies

- promo screenshots of 3 different designs

- consider decreasing cardBack font weights now that subpizel-antialiasing has punched things up (or making a text shadow or drop shadow with the contrasting color -- this is really for when card is black)

- generalize stat column names

consider extending thead and tfoot (if possible) so there's no visual margin between it and career highlights. Maybe.

- consider char counter

- math to v2 because something isnT right and i AM using beta... so just breath

- make table headers reactive/vmodel based
- v-model bugging out, making the input lose fous with every keystorok... there is a bug -- the v-model is
- math: validate against NAN, etc... in compterd...
- parsefloat -- is there a better place to run this? Would this be needed with proper TS use? hmmm
- math: computed. Grab an array by refs if necessary and tally those bitches. Can we have only a column recalcute as opposed to the whole table? Yes the watch could be scoped to a an array of only that column's cells. math: JUST TOTALS for v1. averages can be v2 because that will require UI work to allow user to select which kind of career stat (total, avg, is there another?) to show for that column...

-- carefukly factor out data column junk attributes bc some areused for styling

- back color picker -- how can i get the whole card to show? Really want to see bottom of card when choosing color
  -- (wait -- when color picker is open, can the controls hide?? oooh....)

--> For lines with 2 text inputs, consider not allowing width adjustments (maybe just color, grade, slant)

- Establish data flow:
  -- share state? Vuex?

- User shouldn't have to save anything manually (although a button to force it to happen on request can be reassuring). So when do we save to indexedDB?
  -- use blur event and see whther placeholder is showing (can select that in JS)

1.  If a value for a given field in indexedDB is null or doesn't exist, then grab the json default data for that field

2.  On X event(s) [blur with placeholder not showing] and/or at Y time(s), save fields that user changes to IDB. Do this async and, if it makes sense, have a WORKER do this to keep the UI thread free (maybe for a dostracting animation)

- Add Examples (start with JSON)
  --> CREATE A TEMPLATE spreadsheet XLSX on google drive, with an instruction about how to export a file that can be imported directly on the card site: OR Creat a service:
  http://beautifytools.com/excel-to-json-converter.php
  https://www.npmjs.com/package/xlsx-to-json

--> there could be associated routes for each pre-configuation

- birthday cards
  -- untappt cards
  -- github cards
  -- genealogy cards
  -- PRESIDENTS & politicians
  -- baseball current example
  -- school photo option ( cash money )
  -- birth announcements

--> improve filters with before and after
-- reduce CLS (see notes)

--> and do i really need to be passing props the way I am in terms of binding :stlye? Well, for scoping reasons it makes sense, for instance with text fields that can be independtly named but we want json to be same. But for some universal variables at the card top, is that inline style actually required? Reactivity i believe is already being achieved.
--> maybe there are more performant ways of setting css vars so there's not so much potential for catestrophic reflow

clicking logo ideally would bring focus to that side of the cardfront image controls

--> do i save indexdb/local storage for v2? Could take pressure off

if you upload a logo, the "none" should be reset (can the last position be remembered if "none" corresponds to a class that does something slightly different?)

- Years: Default to 2019, working backwards X (5) years. Could offer another "start year." Will have to think of easy way to give non-contiguous years without making it too easy for user to make typo... (they could default, and then each be over-rideable via a select menu or data-list or whatever)

make a class/style/icon for the "none/hide" logo radio button

maybe active class for the file pikcer ? actually that mayb be odd

layout icons could use improvement to better show text

for consistency conisder color picker with text label and a palatte icon (to which the text color ocntrast function gets applied)
because fade, CARD FRONT FIGURE DESIGN ROW BACKGROUND should have, ideally, A COLOR HACKGROUND MAYBE LIKE CARD STOCK

gum stain:

- icons
- mix blend mode (and/or maybe add a before AND after to get the desired result)

--> focusin handler on stats table seems to work and properly place cusor at end of input.
But, it seems to work on touch, not mouse. That is, actually, desireable. But when things work without me knowing why it makes me nervous... (maybe click -- is focus within an event?). check if tablget is an iput and
-- don't want to add hander per cell
stats table: move cursor to end. Very simple function. Just a metter of where best to put code/handler....
If selectionEnd is less than selectionStart, then both are treated as the value of selectionEnd.
elem.setSelectionRange(99, 99)

--> consider whether look is better with current stripe placement, or whether it should be the last row before table.
Could make consfigurable i suppose. User could invert all 3 rows, for instance.

--refactor caclcolor vars because we're using it in someplace and not others...

-- consider lighteing/darkening the outline color so it looks more card-like (make it a relation to the bg color: maybe stripe also)

(do i need a 2nd color for duotone?) or is this really monotone until v2?

-- re-reconsider fui for table -- what does that look like?
-- on mobile, the table spans full width anyway... and dinsce the focus ui can cause a disorienting jump anyway that called for a cleanup item, i think we need to scrap it on table, at elast for v1

- can we allow user to switch the order of the text lines for each layout? That might be easier than giving user custom number of cols per row (lower interaction cost)

disabe more spellcheck (enough?)

build out index db (it's already set up to work) to allow saving (replaces previous localstorage implementation).

indicate whether a field can have its font manipulated

-- (further?) reduce visible size of borders for 320px devices so hopefully rest of content can give adequate touch targets in real world measurements (7-12mm) (maybe using min-max clamps?)
-- min touch target 48px wherever possible (playing numerologist right now 44, 45, 46, 48)

- drill into PWA details -- why is dev tools showing installation probs related to icons? They are there... Path issue? Prob not issue with actual file but can check

- Calculations and column stat type -- have user define what kind of stat it is (to make calculation in footer proedictable and logical -- if user wants to add up all the miles per hour, fine, but that can be an override of a sensible defualt)

--> in addition to preventing jumps by taking up space (the focus UI needs this), CONSIDER a simple ANIMATION to show that a field is opening up to be edited and then is closing back down.

- TABS: on screens that are wide enough, consider splitting front/back buttons to sides ( for thumbs holding a phone in landscape, for instance). Goal here is to have user se 100% all content needed without having to scroll
  --> make sure tab state is saved locally
  --> use hashes so BACK works as user expects

icon for logo placement can be just one def with a single class applied to determine fill.

could offer choice to choose text color and then have BG color AUTO adjust per backwards color contrast function along a greyscale or some simplified/lightened version of color picker... ...

can text align left/center/right be bumped to v2?

--> generalize text slider man!

v2: since it makes sense / is necessary to edit text in a focus UI state (this has been reasoned through now fully twice), perhaps the input doesn't have to be INSIDE the h1, h2, and h3... Interesting reversal... This is needed i think... When clicked that field's actual input element could be revealed... (keep in mind though this helps with the focus-UI idea of focus-within... but that might be cheating anyway... gotta think this through...

--> text options include text-align

there are other fonts still (though i'm using this one so thoroughyl...and ascenders/descrender adjustment needed for making 16px look maller to avoid iOS zoom

some font options look kinda frail... plus grade and weight aren't orthogonal... might consider switching here seriously... though later...

--> place for Card Number

--> re-consider icon for color, although unambiguos text really is better

--> can we move delete image(s) option to v2?

-> the buttons for filters could be previews of the larger image with th filters applied. That would be really cool and throetically not hard to do as long as it could be performant

- for imperfections, look at the card condition rating service details

-- could offer duotone filter

- bumped logo shape option to v2. RECONISDER: no inspirational card has a square subshape (so 1984)

stats should allow year range like 1997-2009

--> consider logo border option

--> lazyload images (for iOS really) -- safari implemtation in progress! Looks like it's already been implemented in webkit: https://bugs.webkit.org/show_bug.cgi?id=200764

--> avif support?

--> image editing controls (and others) could "take-over" the 1st & 2nd level control area (either via overlay or actual live region)

--> ability to save card easily and load so you can make multiple without losing work

--> re-consider whther filters should be applied to logo and player images SEPARATELY, or together. TOGETHER I thinK for v1.

--> more CSS filters like Instagram: http://www.cssco.co/
https://una.im/CSSgram/

--> texture paper: https://yoksel.github.io/svg-filters/#/presets/paper

--> consider hashes/routes to preserve the Back-button functionality some users rely on to escape a menu.

--> cutout mode using web worker and a white/black background to transparency process. There are services/plugins (also a chrome api that maybe a node server could use)

--> "classic" vs "modern" defaults.

--> is there a use for requestSubmit()

- if different text fields on front could be different colors (which i think to support full-bleed images, it should be), then we need to tell user we've remembered that color:
  radio: current color (show) vs color particular to this field. Not sure which color field would take priority.

--> but if outer border none then can zero-out inner border options, yah? It's not a great look
--> ok maybe it could be cool to have a full-bleed with inner-border look. But it's kinda meh and it be cleaner if menu were:
Borders: Yes / No (or whatever)
If outer border, then inner border options.

--> test transparent PNGs/webPs -- might need need additional bg color option. Or transparency is v2

--> gum placement and styling options

--> full bleed in v2

--> border-color option in v2 (now it will match text color)

--> was it the right call to change imae size based on border/ no border? Because color vs clear would make that menu super easy

-- consider background opacity option so full bleed cards could still have semi transparent outer border for a possibly interesting visual effect

- de-hackify tab markup (maybe use hidden and then put click handlers that toggle aria stuff. Pretty simple)

--> consider input range diagonal "mountain" behind each indicateing which end is max vs min (it can be confusing when values are negative -- this might help)

-- factor out options API stuff

--> un-nest scss

-- consider ROUTE-BASED defaults like /yoga.html, genealogy.html etc that populate menus and labels with appropriate terminology

--> offer a "100% custom" option -- leaving text blank and hiding logo inner border and choosing full bleed)

Texture move to v2
--> superlatives and shapes
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
  https://una.im/CSSgram/

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

icons needed:
https://github.com/danklammer/bytesize-icons

- b&w could be moon like dark mode: https://thenounproject.com/darthpier/collection/photo-editor/?i=1949966
- sepia though?
  not sure about this... tiny image previews would indeed be cool-- is there time?

- SAVE! (auto save assuemed? I want a disc dammit)
- SUBMIT! (not airplane please)
- print
- submit
- close (unicode X is ok)
- upload
- picture
- delete
- calendar
- options: https://camo.githubusercontent.com/27571c558459bfce3a07cdd814a6cb25195d46b0/68747470733a2f2f63646e2e7261776769742e636f6d2f64616e6b6c616d6d65722f6279746573697a652d69636f6e732f6d61737465722f646973742f69636f6e732f6f7074696f6e732e737667

- star / flag

grain:

on back, need upload json button

- ensure offline mode tells user they are offline

* refactor resets and global inputs: -- refactor input styling -- too much redundancy. See header.

-- should be only 1 text slider (teleport might be needed): Teleport. https://medium.com/@patelvivek2530/teleport-vue-3s-new-feature-a887fe05fd87 -- feature used to be palled portal

- helper text explaining image specs

* can a worker send the actual image file somewhere, but give back a filename string or something so we can match them up later?

)

STATS TABLE
--> stats: Previous 5 years
(offer previous 10 years but no fact footer)
(offer 10 categories, but no career highlights section)

### Built with

- Vue 3
- Vite
- CSS Grid Module
