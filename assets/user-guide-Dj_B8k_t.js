var e=`# Inventory User Guide

This application keeps an inventory of things on a map: signs, trails,
parks, culverts, whatever you want. You decide what kinds of things you keep
(**data types**) and what you record about each one (**fields**),
then draw them on the map and fill in their details.

Everything stays in your browser on your computer. Nothing is sent
anywhere; to move your inventory or share it, you save it as a file.

The browser may clear the cached inventory when storage runs low. Use Save As…
now and then for a backup.

## Contents

- [The screen](#the-screen)
- [Getting started](#getting-started)
- [Data types](#data-types)
- [Subtypes](#subtypes)
- [Drawing records](#drawing-records)
- [Selecting](#selecting)
- [Changing shapes](#changing-shapes)
- [Filling in a record](#filling-in-a-record)
- [Finding records](#finding-records)
- [Filtering](#filtering)
- [Showing, hiding and freezing](#showing-hiding-and-freezing)
- [Partitions](#partitions)
- [Saving and sharing](#saving-and-sharing)
- [Bringing in other data](#bringing-in-other-data)
- [The map](#the-map)
- [Keyboard and mouse](#keyboard-and-mouse)
- [Troubleshooting](#troubleshooting)

## The screen

- **The toolbar** (top): Load… or Save As… an Inventory database, Clear the
  current inventory; **Modify** to switch editing on and off. When modify in on
  the draw tool; Cut; Undo and Redo. At the right end, **?** opens this guide
  and the **gear** opens the map's settings.
- **The panel** (left) has many sections. Click a section's header to
  fold it away or open it again; each open section scrolls on its own.
  Drag the panel's right edge to make it wider or narrower (or focus the
  edge and use the arrow keys); double-click the edge for its usual
  width. The browser remembers it.
- **On a phone** (any window narrower than it is tall) the toolbar and
  panel become one sheet along the bottom, the toolbar a row of icons at
  its top. Swipe up or down on the handle or the toolbar to make it
  bigger or smaller: closed (just the toolbar), partly open, or fully
  open. Tap the handle to open it fully, and again to go back. Swipe the
  toolbar sideways for the buttons that don't fit. The browser remembers
  the size.
- **The map** fills the rest. Drag the map to move around; scroll to
  zoom in and out. At its top right, **+** and **−** zoom, and the
  compass shows which way is north: drag it to turn the map, or click it
  to turn the map back to north and flat. Tilting the map shows hills
  and valleys in 3D: <kbd>Ctrl</kbd>+drag or right-drag up, or click
  **3D** under the compass. It lights up once the map is tilted more
  than 5° (a slighter tilt is still 2D); click it again to lay the map
  flat. The hills show once you're zoomed in to
  zoom 8 (about a valley across the screen) or closer. Zoomed out
  further, **3D** is greyed and a click on it says to zoom in first. A
  flat map is drawn without the hills, so it's the quickest to move
  around on a slow computer. When you turn a 2D map, it only starts
  to tilt once you've dragged a little way up or down, so a turn
  that drifts doesn't tilt it by accident. The scale is
  at the bottom left.

### Panel sections

- **Features** — find records by name, show details for the record you've
  selected.
- **Inventory** — your data types and their subtypes, search and filter to
narrow your results, eyeball to toggle visibility.
- **Partitions** — areas split into pieces, such as service areas.
- **Tips** — what you can do right now, and how: the keys and
  Alt+clicks for the tool that's on, the record or piece you've
  selected, or the type you're drawing into. It changes as you go.
- **Backdrop** — extra map layers you've added to draw over. It's
  off to start: turn it on in the gear's **Panel sections**.
- **Log** — what just happened, and anything that went wrong.

### Help
  This panel opens on the right. On a wide screen the map
  makes room for it, so you can keep working while you read.

  In the type editor and the export
  and import dialogs, a round **?** (by the title, and by Map records,
  Fields and Subtypes) opens the guide at that part, beside the dialog,
  and you can read it while you edit.

## Getting started

1. In the panel's **Inventory** section, click **+** to make a data type.
   Give it a name (say, *Sign*), choose its geometry — **point**,
   **line** or **polygon** — and a color. Add fields for what you want to
   record, such as *condition* (a single choice of *good*, *fair*,
   *poor*). Click **Create**.
2. Click the type's name in Inventory. It's now the **draw target**: the
   panel says "Drawing: Sign", and the toolbar shows **Draw Point (Sign)**.
3. Click **Draw Point (Sign)**, then click on the map. The new record is
   selected and its form opens in **Features**.
4. Fill in the form and click **Apply**.
5. Now and then, click **Save As…** to keep a copy of the inventory as a
   file. See [Saving and sharing](#saving-and-sharing).

## Data types

A data type is a kind of thing you keep: *Sign*, *Trail*, *Park*. Each
type has:

- a **name** (no two types share one) and a **description**;
- a **geometry**: every record of a point type is a point, of a line
  type a line, of a polygon type an area. It can't change once the type
  has records;
- a **map color**, and optionally an **icon**;
- **fields**: what you record about each one;
- optionally **subtypes** — see [Subtypes](#subtypes).

**+** in the Inventory header makes a type. A type's **⋮ → Edit type…**
changes it.

### Fields

Every record has a **name** and a **description** already; fields add
the rest. Each field has a **key** (a short name for it, used in exported
files), an optional **label** and **help text** (shown on the form), and
can be **required**.

| Kind | What it holds | On the form |
|---|---|---|
| Text | Any text; optionally a max length | A text box (a bigger one when 100 characters or more are allowed) |
| Whole number | 1, 2, 300 — optionally between a min and max | A number box |
| Number | 2.5, −0.1 — optionally between a min and max | A number box |
| Yes / no | Yes or no | A switch (off is no) |
| Single choice | One of a list of options | A drop-down list |
| Multi choice | Any of a list of options | A checkbox for each |
| Date | A day | A date picker |

Options for a choice field go one per line. **↑** moves a field up the
form, **✕** removes it.

Good to know:

- A field's **key can't be changed** once the type is saved — records
  keep their values under it. Give it a new label instead.
- **Removing a field** doesn't erase what's been recorded in it: the
  values stay on the records, listed under *Other properties* on the
  form, where you can remove them.
- **Edit as JSON Schema** shows the fields as JSON Schema, for those who
  know it. Only the keywords the field list can express are accepted;
  anything else is refused with a message rather than quietly dropped.

### Icons

An icon shows on the type's row and on the map: a point becomes a larger
circle with the icon in it; a line or polygon gets a small badge in the
middle. Choose any lucide icon — the common ones come first, and typing
in **Search icons** narrows the list to names with every word you type
(Enter picks the first) — or **Upload image…** to use your own (PNG,
JPEG, SVG, WebP or GIF — it's scaled to fit). Images uploaded for other
types are offered too. **Clear** beside it takes the icon off (a
subtype's then shows its type's).

### Map records and map labels

In the type editor:

- **Map records — Show from zoom … to …**: outside these zooms the
  type's records are hidden, and can't be selected or drawn. "From" is
  useful for types with many small records; "to" for ones that only
  matter zoomed out, such as large areas. They're hidden from the "to"
  zoom on; leave it empty for no limit. The type's name in Inventory
  turns grey and italic while they're hidden this way, and the draw
  tool's tip says whether to zoom in or out.
- **Map labels**: whether the type's records are labelled on the map,
  with what (the name, the description, the subtype or a field), and
  at which zooms: from one, and up to another if you set it. **Feature labels** in the gear menu turns every type's
  labels off and on at once.

### Order and deleting

A type's **⋮ → Move up / Move down** reorders the Inventory list. On the
map, points are always drawn over lines and lines over areas; among types
of the same geometry, the one higher in the list is drawn on top, and is
the one a click picks where they overlap.

**⋮ → Delete type…** deletes the type with all its subtypes and records,
after asking. This also clears the undo history.

### Searching the types

The **magnifying glass** in the Inventory header opens a search box. Type
part of a type's or subtype's name, capitals don't matter, and the list
shows only what matches. A type that matches shows with all its
subtypes; a subtype that matches shows under its type, even if that
type's subtypes are folded away. The search is a regular expression, so
\`^road\` finds names starting with "road" and \`stop|yield\` finds either.
If what you type isn't a valid expression the box turns red and
everything shows. <kbd>Esc</kbd> in the box, or the magnifying glass
again, closes it and shows every type.

## Subtypes

Subtypes are kinds of a type: *Sign* might have *Stop*, *Yield* and
*Highway*. They're added in the type editor's **Subtypes** section with
**+ Add subtype**. A subtype can have:

- its **own color** and **icon** (otherwise it uses the type's);
- **defaults**: values filled in on every new record of that subtype;
- **narrower rules**: fewer options for a choice field, or a tighter min
  and max for a number.

Defaults and rules are under **Defaults and narrower rules** on each
subtype's row.

A field can apply to every record or, with **Applies to** on the field's
row, only to some subtypes — a *route number* field only for *Highway*
signs, say.

Subtypes are listed under their type in Inventory; the caret beside the
type's name folds them away. Click a subtype to draw records of it. A
record's subtype can be changed on its form: the new subtype's fields
appear, and its defaults fill any that are empty.

## Drawing records

1. Turn **Modify** **ON** (the app starts with it off).
2. Click a type or subtype in Inventory to make it the **draw target**.
   You can't draw into a type that's hidden or frozen, or whose records
   are hidden at this zoom.
3. Click the draw tool in the toolbar — it's named for its geometry and
   the target, such as **Draw Point (Sign · Stop)**.
4. Draw:
   - **Point**: click where it goes.
   - **Line**: click each point along it. Finish with <kbd>Enter</kbd>,
     a double-click, or a right-click.
   - **Polygon**: click each corner. Finish by clicking the first
     corner again, or with <kbd>Enter</kbd> or a right-click.
5. The tool draws one record and puts you back in Modify, with the new
   record selected and its form open. To draw several in a row,
   <kbd>Alt</kbd>+click the tool instead: it stays on after each record
   until <kbd>Esc</kbd>. Clicking the tool's button again stops it too,
   dropping anything half drawn.

Picking another type or subtype turns the draw tool off: click the
draw tool again to draw the new one.

While drawing a line or polygon:

- <kbd>Backspace</kbd> takes back the last point.
- Hold <kbd>Alt</kbd> and drag to draw a stretch **freehand**; let go to
  carry on with clicks.
- <kbd>Esc</kbd> cancels the drawing.
- Dragging the map still moves it.

Points snap to nearby corners and edges while you draw — see
[Snapping](#snapping).

A new record of a subtype gets the subtype's defaults. One
<kbd>Ctrl</kbd>+<kbd>Z</kbd> removes it again.

A record's **type is fixed** once it's drawn. If you drew something under
the wrong type, delete it and draw it again under the right one. (Its
subtype can be changed.)

## Selecting

- **Click** a record to select it. Where records overlap, the click
  picks the one drawn on top.
- <kbd>Shift</kbd>+click adds a record to the selection.
- <kbd>Shift</kbd>+drag draws a box: everything entirely inside it is
  selected. The box is the rectangle you draw on screen, also when the
  map is turned or tilted.
- <kbd>Alt</kbd>+<kbd>Shift</kbd>+drag draws a freehand lasso instead.
- <kbd>Esc</kbd> clears the selection.

The selection is listed in **Features**, each record with its icon, name
and type; **✕** takes one out of the selection. With several selected,
click one in the list to select just that one.

## Changing shapes

With **Modify** on, a selected line or polygon shows **handles**: small
circles at its corners and small triangles halfway along each edge.
(Zoomed far out, handles hide until there's room for them.)

- **Drag a corner** to move it.
- **Drag a triangle** to bend that edge, or **click** it to add a corner
  there. Double-clicking an edge also adds a corner exactly where you
  click.
- **Hold <kbd>Alt</kbd> and drag** a record to move the whole thing. (A
  plain drag moves the map, so nothing moves by accident.) With several
  selected, this moves them all.
- **Drag a corner onto another corner** and the two become one: the
  records are **welded** there, and move together from then on. A corner
  with a dot in it is welded.
- Where two records share an edge, a corner added on it goes into both,
  so they stay joined. Hold <kbd>Alt</kbd> while adding it to add it to
  the selected record only.
- **Delete** removes the selected records, or the selected corners.

### Right-click menu

Right-click a record for more:

| Item | What it does |
|---|---|
| Edit record | Selects it and shows its form |
| Duplicate | A copy, a little offset — <kbd>Alt</kbd>+drag it into place |
| Cut | Draw lines across this record to split it (lines and polygons) |
| Reverse | Flips the direction of a line or polygon |
| Explode | Splits a record with several parts into one record per part |
| Collect | With several records of one type selected: makes them one record with several parts |
| Dissolve | With several polygons (or lines) of one type selected: merges them into one, removing shared edges (or joining lines end to end) |
| Disconnect | Unwelds a point from the corner it's on |
| Delete feature | Deletes it |

Right-click a **corner** to **Delete vertex**, or to **Disconnect** a
welded corner so its records can be pulled apart. A corner isn't deleted
if that would leave a polygon with fewer than three corners or a line
with fewer than two points.

With Modify off, the menu only offers **View record**.

### Cutting

**Cut** in the toolbar splits every line and polygon of the draw
target's data type that your cut line crosses; other types' records
under the line aren't cut. Draw the line across them — starting and ending outside a
polygon — and finish with <kbd>Enter</kbd>, a double-click or a
right-click. The pieces fit together exactly. Each cut is one undo step.
Like the draw tools, Cut cuts along one line and puts you back in
Modify; <kbd>Alt</kbd>+click it to cut along several, until
<kbd>Esc</kbd>. A line that cuts nothing leaves the tool on to try
again. <kbd>Esc</kbd>, clicking **Cut** again, or picking another type
or subtype, leaves the tool. To split just one record without touching its neighbours, use
its right-click **Cut** instead (<kbd>Alt</kbd>+click it, too, for
several lines).

### Snapping

While drawing or dragging, the pointer snaps to what's within a few
pixels: existing corners first, then where lines cross, then edges. A
colored dot shows where the point will land. Snapping to a corner welds
to it.

**Snap** in the gear menu turns snapping off — for placing something
close to, but not on, another record.

### Undo

Every change on the map, and every **Apply** on a form, can be undone
with **Undo** or <kbd>Ctrl</kbd>+<kbd>Z</kbd>, and redone with **Redo**
or <kbd>Ctrl</kbd>+<kbd>Y</kbd>. The undo history starts fresh when the
page is reloaded.

## Filling in a record

Select a record and its form appears in **Features**: its **id** (fixed),
its **subtype** (when the type has subtypes), **name**, **description**
and fields. The name is what labels it on the map, unless the type
labels with something else.

- Values are checked as you type; a problem shows under the field.
- Once something has changed, **Apply** and **Revert** appear at the
  bottom of the section, marked *Unsaved changes*. **Apply** saves the
  changes (one undo step); it won't while a value isn't valid.
  **Revert** puts the form back.
- If you select something else, or turn Modify off, with changes not
  applied, you're asked whether to apply or discard them, or cancel and
  go back to the record. Leaving the page asks too.
- *Other properties* lists values that aren't fields of the record's
  subtype — brought in by an import, or left by a removed field. **✕**
  removes one.

In Inventory, a **⚠** beside a type or subtype counts its records with a
problem: a required value missing, a value that doesn't fit its field,
or a subtype the type no longer has.

## Finding records

With nothing selected, **Features** has a search box (once there are
records to find; until then it says *No features yet*). Type part of a
name — capitals don't matter — to list the records that match. Click one,
or press <kbd>Enter</kbd> for the first, to select it and centre the map
on it. Hidden and frozen records aren't searched.

A type's **⋮ → Zoom** fits the map to all its records.

## Filtering

The **funnel** in the Inventory header filters records by their values.
Records that don't pass are hidden from the map and the search; the rows
count those that pass ("3/12"), and the funnel lights up.

A **condition** tests the type, the subtype, the name, the description
or a field:

- *is*, *is not*, *contains*;
- &lt; ≤ &gt; ≥ — numbers and dates by value, text alphabetically;
- *is empty*, *is not empty*.

Text is compared ignoring capitals. Types, subtypes, choices and yes / no
are picked from a list; other values are typed. A condition with no
value yet isn't applied.

**+ condition** adds a condition. Where the second one joins, choose
whether they're joined by **and** (all must pass) or **or** (any may
pass). **+ group** adds a box of conditions joined the other way — like
parentheses. For example: *type is Sign* **and** (*condition is poor*
**or** *condition is damaged*).

**Clear** removes the filter. A record you've selected stays shown even
if it doesn't pass, until you select something else. The filter is kept
with the inventory.

While a filter is on, a type's **⋮** also offers **Export filtered
GeoJSON**, and **Zoom** goes to the records that pass.

## Showing, hiding and freezing

On each type and subtype row in Inventory:

- the **eye** hides its records from the map, or shows them again;
- **⋮ → Freeze** keeps them visible but locked: they can't be selected,
  changed, snapped to or drawn into. **⋮ → Unfreeze** unlocks them.

Turning **Modify off** locks everything at once: you can select records
and read their forms, but not change anything. It's a safe way to look
around, and how the app starts: turn Modify on to edit.

## Partitions

A partition splits one big area into pieces — British Columbia into five
or six service areas, say. The area's outline is its **border**, which
never changes. The **pieces** cover the whole of it, with no gaps and no
overlaps, but you can split them, join them and move the lines between
them as often as you like. A partition isn't inventory: it isn't
filtered, and it's drawn at the bottom: under your data types, the
backdrops and the base map's roads, borders and names.

**+** in the Partitions header makes one. Like a data type, it has a
name, a description, fields and map labels; every piece also has a
name, a description and a **color** of its own. **Border line** sets
the color and width (in pixels, 0.5 to 12) its border is drawn with,
over a dark casing — a light 2 px line to start; **Default** goes back
to it. Change them any time with **⋮ → Edit partition…**.

1. **Give it a border.** Click the partition (it becomes the target),
   then **Draw Border** in the toolbar and draw the outline. Or use its
   **⋮ → Import border…** and pick a GeoJSON file: all its polygons and
   multipolygons together become the border. Either way, the border
   starts as the partition's one piece. Undo takes it back. A file
   whose features share boundaries, like
   \`data/british-columbia_partition-border.geojson\` (the mainland,
   Vancouver Island and Haida Gwaii), is imported as those pieces
   instead, and the border is their outline.
2. **Split it.** With the partition the target, **Cut** splits its
   pieces along the line you draw, like cutting records. Each new piece
   gets a color of its own. A piece in several parts (a mainland and
   islands) can't be cut whole: right-click it → **Explode** first, cut
   the part you want, then join the islands back on.
3. **Join pieces.** Select two or more (<kbd>Shift</kbd>+click), then
   right-click → **Dissolve**. The line between them goes; the pieces
   don't have to touch, so an island can join the area beside it.
4. **Move a line.** Neighbouring pieces share the vertices along the
   line between them, so dragging one moves both sides at once. A point
   on the border can only slide along it: let go near the border and
   it's put exactly on it. The border's own corners, and the stretches
   of a piece's edge along the border, show no handles: they can't move.
5. **Fill in each piece** in the Features panel: its name, its color,
   and the partition's fields.

An edit that would leave a gap, an overlap or a different border is
refused and undone at once, and the Log says why — dragging a corner of
the border, say, or deleting a piece (Dissolve it into a neighbour
instead). Pieces have no Duplicate or Delete in their right-click menu.

A partition saves with the inventory, in Save As… (its pieces as a
table, with their colors; its border in the type definitions), and
exports as GeoJSON from its **⋮**.

## Saving and sharing

### Your inventory is kept in this browser

Every change is saved in this browser straight away, and comes back when
you reopen the page. It isn't sent anywhere — which also means it isn't
on any other computer or browser, and clearing the browser's site data
deletes it. The app asks the browser to keep its storage; if the browser
won't, the Log says so.

**Use Save As… regularly to keep a copy.**

### Save As…

Saves the whole inventory as one **GeoPackage** file (\`.gpkg\`): every
type, subtype and record. It's the file to back up, to move the
inventory to another computer, or to give to someone — GIS programs such
as QGIS and ArcGIS open it, with a table for each type.

### Load…

Asks what to open:

- **Sample data** — avalanche paths and weather stations, to try the
  app with;
- **Choose file…** — a GeoPackage made by **Save As…**, from your
  computer.

Into an empty inventory it just loads. Otherwise you choose:

- **Merge** — adds the types and records you don't already have;
- **Replace inventory** — swaps the current inventory for the file's.

Other files are refused — see
[Bringing in other data](#bringing-in-other-data).

### Clear

Empties the inventory: every type and record, the filter and the undo
history, after asking. Backdrops and the gear menu's settings stay.
**It can't be undone** — Save As… first if you might want it back.

### Exporting part of it

With records selected, a **download** button shows in the Features
header. It saves just those records, in the format you choose:

- **GeoJSON** — one file with every field, for web maps, QGIS and code.
- **KMZ** — for Google Earth and most phone map apps: a folder per type
  in its color, each record named by its name, with its fields.
- **GeoPackage** — for QGIS and ArcGIS, a table per type. **Load…**
  opens it here too, with its types. Some (not all) of a partition's
  pieces go in as an ordinary polygon type, since they no longer cover
  its border.

Under the formats, **Fields** lists each type in the selection with a
box for its name, description and each field: untick the ones to leave
out (**All** and **None** tick or untick them all). A record's subtype
always goes. In a GeoPackage, the type saved with the records leaves
those fields out too.

The file is named after the type when the records are all of one, else
\`selection\`. The format and the fields you chose are picked next time.

A type's **⋮ → Export…** opens the same dialog for all its records, and
a subtype's ⋮ for that subtype's; they're named after it. With a filter
on, **Export filtered…** exports only those that pass.

## Bringing in other data

Other data comes into a type you make for it:

1. Make a type (**+** in Inventory) of the right geometry, with the
   fields you want.
2. Its **⋮ → Import GeoJSON…** and choose the file.
3. Columns in the file that match the type's fields (or name,
   description, id or subtype — capitals don't matter) fill them in. Any
   other columns are listed, each with the field it would become; tick
   the ones to add as fields. The rest are left off.

Features of another geometry are skipped, and the Log says how many.

To bring a file into one subtype, use the subtype's **⋮ → Import
GeoJSON…** instead. Every record goes into that subtype, whatever
subtype the file gives it. The subtype's default values fill any fields
the file leaves empty. Columns you tick become fields of that subtype
only.

For a shapefile, another GeoPackage or other formats, first save the
data as GeoJSON from a GIS program such as QGIS.

## The map

The map starts on BC, from Victoria and Terrace to Fort St. John and
Nelson. With records in your inventory, it opens on them instead, and
Load… moves it to what's loaded.

The address shows where the map is — \`?zoom=…&lat=…&lng=…\` (and
\`bearing\` and \`pitch\` when it's turned or tilted) — so
you can bookmark it or send the link: it opens there. With **Remember
map view** on in the gear menu (it is unless you turn it off), reloading
the page or opening the app again comes back to where you were.

### Base map

Under your records the map always shows satellite imagery, BC's borders,
its major roads — numbered highways in yellow, with their highway
shields, other major roads in white — road names as you zoom in, and
place names, from cities when zoomed out to hamlets when zoomed in.
The map's sources are credited behind the ⓘ button in its bottom-right
corner.

### The gear menu

The **gear** at the right end of the toolbar has switches, kept with the
inventory:

- **Snap** — snapping while drawing and editing (shown when Modify is on);
- **Feature labels** — your records' labels;
- **Place names** — city, town, village and hamlet names;
- **Highway shields** — the highway number signs;
- **Remember map view** — come back to where the map was (kept by this
  browser, not the inventory).

Under them, **Panel sections** opens a list of the panel sections you
can do without — **Partitions**, **Tips**, **Backdrop** and **Log** — to show or
hide them; a hidden section's header goes too, leaving the others more
room. The browser remembers them. Backdrop is off until you turn it on. (A development build lists
**Inspect** as well.)

Its switches leave it open; click the gear again, press <kbd>Esc</kbd>,
or click elsewhere to close it.

### Backdrop layers

The **Backdrop** section adds map layers to view and trace over — in
PMTiles format, from a file (**+ → PMTiles file…**) or a web address
(**+ → PMTiles URL…**). They can't be edited. On each row: the eye shows
or hides it, the arrows paint it above or below other backdrops, and ⋮
zooms to it or removes it. A file's copy is kept in the browser so it's
still there after a reload.

## Keyboard and mouse

| Do this | To |
|---|---|
| Drag empty map | Move the map |
| Scroll | Zoom in and out |
| <kbd>Ctrl</kbd>+drag, or right-drag, empty map | Turn the map (drag right for counter-clockwise, left for clockwise) and tilt it into 3D (drag up or down); click the compass to undo, or **3D** to lay it flat |
| Click | Select a record |
| <kbd>Shift</kbd>+click | Add a record to the selection |
| <kbd>Shift</kbd>+drag | Select everything inside a box |
| <kbd>Alt</kbd>+<kbd>Shift</kbd>+drag | Select everything inside a lasso |
| <kbd>Alt</kbd>+drag a record | Move it |
| Right-click a record or corner | More actions |
| <kbd>Alt</kbd>+click a draw tool or Cut | Keep the tool on for several records or cuts, until <kbd>Esc</kbd> |
| Click the draw tool or Cut that's on | Stop it, dropping anything half drawn |
| <kbd>Enter</kbd>, double-click or right-click | Finish a line, polygon or cut |
| <kbd>Backspace</kbd> while drawing | Take back the last point |
| <kbd>Alt</kbd>+drag while drawing | Draw freehand |
| <kbd>Delete</kbd> | Delete the selected records or corners |
| <kbd>Esc</kbd> | Cancel drawing, clear the selection, close a menu |
| <kbd>Ctrl</kbd>+<kbd>Z</kbd> | Undo |
| <kbd>Ctrl</kbd>+<kbd>Y</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd> | Redo |
| <kbd>?</kbd> | Open or close this guide |

## Troubleshooting

**I can't draw.** Check that Modify is ON and that a type is the draw
target ("Drawing: …" in Inventory). You can't draw into a hidden or frozen
type, or zoomed out past the zoom its records show from.

**A record disappeared.** It may be filtered out (is the funnel lit?),
its type or subtype hidden (the eye), or you're zoomed out past the
zoom its type shows from. Try clearing the filter, or the type's
**⋮ → Zoom**.

**I can't select or change a record.** Its type or subtype may be
frozen (**⋮ → Unfreeze**), or Modify is off.

**A record has a ⚠.** Select it: the form marks the field with the
problem.

**Load… refused my file.** Load… only opens files made by Save As….
Other data comes in through a type — see
[Bringing in other data](#bringing-in-other-data).

**The Log warns the browser may clear storage.** The browser hasn't
promised to keep this site's data. Your inventory is still saved; use
Save As… regularly so you have a copy.

**The map is blank.** The satellite imagery and labels come from the
internet; without a connection the map behind your records stays empty,
but your records still show and can be edited.
`;export{e as default};