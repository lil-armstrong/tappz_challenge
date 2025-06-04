
## Features

- Imediately you send a message, the viewport scrolls to the latest message
- Scroll to bottom button
- Media preview for video, audio and images. You can only download other media
- Simple fade-in animation for chat bubbles

## How to run app

1. Clone the app from the git repository
2. Install all the required application packages by running the command:
```shell
yarn install
```
    Or if you are using NPM, then first delete the `yarn.lock` file and the run the following command:
```shell
npm install
```
3. Finally, to run the app, run the `dev`script from the `package.json` file
```shell
yarn dev
# OR
npm run dev
```

> You can simulate both the recipient and the sender chat. Simply enable the `Switch to recipient` switch located at the top of the chat header.

## Architecture
So in this architecture, data flows from the zustand store to the `Chat` component which composes the whole chat interface UI and feeds the rest of the other components the necessary data. Every view is separated into smaller components so its easier to independently configure and stlye. I choose this approach since this is a simple app. However, I have tried to ensure that I kept the levels of prop drilling low by combining multiple props as objects and using the zustand store to share data across components.

To compose the UI, I used the [Mantine design library](https://mantine.dev) components together with custom elements I styled using CSS modules and basic css. 


1. **Data store**: In this architecture, data flows from a central store, created using Zustand library. You can find the store located at `src/store`. The store holds all the messages. The store provides a function for adding a message. When a new message is sent, the store takes care of generating the necessary data (date generation, media conversion) to ensure that the message is saved in a complete form. This allows the components responsible for displaying the UI only focus on what data matter to them.

2. **Components**: Components are located in the `src/components` directory. Here, the views are separated into several react components, which are then merged together by the `Chat`component inside the next entry page.

3. **Constants**: All constants are stored inside the `src/constant` directory.

4. **Library**: Utility functions are stored inside the `utils` directory. Here I place all helper functions

5. **Types**: Typescript types are placed in two separate places depending on the scope in which they are to be used. There is the global scope and the local scope. Types that are shared amongst several components or units of the application reside inside the `src/types` directory. Local scoped types are types that reside within the directory where they are used. If you take a look at the components, you will notice that some of them have a `types.d.ts` declaration file that allows me to define several types that are only to be used within that particular component. A similar thing can be seen with the store as well.

> The solution for Part 1 of this challenge is inside the `backend_architecture.md` file.