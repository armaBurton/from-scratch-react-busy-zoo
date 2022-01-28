Start from the [React Base Template Repo](https://github.com/alchemycodelab/react-base-template)

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed app on Netlify, with link in the About section of the Github repo |  **required for grading** |

| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On click, animal A (i.e. unicorn) grows or shrinks based on button click. There are buttons for grow and shrink.  |        2 |
| On click, animal B (i.e. lion) grows or shrinks based on button click. There are buttons for grow and shrink.  |        2 |
| On click, the sign changes to open or closed. There are buttons for open and close. |        2 |
| On click, the correct animal is added to the animal parade. There are buttons for several types of anmials. |        2 |

| Components                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| `App()` : sets up and renders initial state for `isOpen`, `unicornSize`, `lionSize`, and `animals` |2|
| `App()` : `isOpen`, `unicornSize`, `lionSize`, and `animals` all change on button clicks |2|
| `App()` : passes state as props correctly to `Parade` and `OpenSign` |2|
| `OpenSign({ isOpen })` : renders the differently (up to you!) based on whether the `isOpen` props is true or false |2|
| `Parade({ animals })` : maps over the list of animals in props, rendering an `AnimalEmoji` component for each animal string |2|
| `AnimalEmoji({ animal })` : render a different emoji depending on what string is passed in for the `animal` prop |2|

### Stretch Goal Ideas
- Make a `FightSection` component to replace the fight section. Consider, what props will it need to take? How will it use those props?
- What if we made `AnimalEmoji` accept a `size` prop and used it in our `FightSection` component to render our animal combatants?
- Next week we will be managing parent state from the child component. See if you can figure out what it would take to move all the buttons (with their event listeners) down to `OpenSign` and `Parade`
- Add multiple `Parade`s to the page, managing the state separately for each `Parade` (that is, adding a camel to one parade shouldn't add it to both parades)
