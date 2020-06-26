# User List

## Content

⚠️ Under construction ⛏️

User List developed in Typescript, React & Styled-Components and tested with Jest and Enzyme

## Getting Started

You'll only have to follow the instructions below to be able to reproduce the project (You can use _npm_ or _yarn_):

1. `yarn install`
2. `yarn start:mock-server`
3. `yarn start`

## Architecture on a high level

![high-level-architecture](./src/assets/images/high-level-architecture.png)

Based on Brad Frost's book, "Atomic Design" I have altered some of his ideas to encapsulate the components so that they can be reusable and well organized.
To structure the application we've 3 different parts:

- core
- pods + app
- config

#### CORE

we find everything that we reuse in different components or in the global app, for example:

- **assets** where we find those static files like fonts, icons, etc;
- **core** where we find a customization of the fetch method and some auxiliary functions;
- **layout** to attach all those templates that only give a structural design to the components or the app;
- **providers** where we can find each of the abstractions that contain common data used by different components, to avoid prop-drilling, etc
- **common** that includes all those simple components that make up the functionality of a page or part

#### PODS + APP

In it we'd find if it was a big application a division by functionalities or screens (also classified by navigation). This will form the general app view.

In the app we collected all the pods, providers on a layout to start the app

#### CONFIG

It's about each one of the configurations to package the project, to pass the tests, etc according to the different environments

## Component Structure

![high-level-architecture](./src/assets/images/component-structure.png)

We make this division so that we can separate the business logic from the representational layer, as well as split it into more child components if necessary.

In **.business** we leave the whole business layer and operations. In **.hooks** we can generate customized hooks to be able to reuse or lighten the size of the presentational layer.

On the other hand, **.api** where we will transform the data received from backend mapped to use them in the view in question and abstract the intermediate logic that is, we will rely on **.model** to type and streamline the process.

Finally we style the components in **.styled** while we make unitary tests in **.tests**

## Style guide (Theme) (previous development in Figma)

The Figma tool has been used to acquire a homogeneous appearance and a predefined style that could be modified in future versions.

In addition, with Figma it's possible to use StyleDictionary and through the API to obtain style tokens for the different related applications creating a whole Design System that improves communication between UI / UX and developers.

Resources link: [My Figma project](https://www.figma.com/file/FePSOlXe9rx7iAWNyfcfUB/frangaliana-portfolio?node-id=0%3A1)

## Why hasn't the Context API been used?

We'd use the Context API to reuse a common part to different components or keep data constant over time or application flow.

In this case, 2 lists such as the user list and the ordered list aren't used by many components, besides there isn't a great level of nesting to avoid prop-drilling and that these props lose sense. It's necessary to generate a state as we subdivided in components to generate a simple method to work with it and to avoid very nested structures that complicate the understanding or that lead to performance problems.

Option to transform the solution developed in Context API: create a context that keeps both the list and the order lists and by useReducer we'd do the operations of adding, removing and updating on them by actions.

## Why hasn't Immutable.js been used?

In addition to the fact that we don't use Redux, we follow the functional programming principles together with the fact that it isn't a very complex data structure. By this we mean:

- Pure functions, it returns the same result if given the same arguments

- Immutability, a new object is always created when some value is added or altered so we don't find collateral errors

- Functions as first class citizens, mainly because of the approach React takes in addition to the security and structuring it provides.

- Using Higher Order Functions, we leave aside the imperative programming to bet on the declarative one. It gives transparency since in between we don't alter data, but use a function that receives a function as an argument or returns a function as an output.

Besides the use of closures, currying, and so on...

## How did we get the features?

To show the list, we've loaded in a mocked api the users file and in it added to each one the age attribute and mainly the id, important for the lists rendering.

For the order of it, we've generated the first list and on it we generate a second one that will be the one that will be in continuous change by the order options since if we want to return to the initial state we simply use the first one of these.(The fields order is character by character with the auxiliary functions created)

Finally, to edit users within the list, thanks to reusing components we've generated a card that depending on the mode will display some action buttons and let you edit. As we don't want to edit any data until the user is sure of it, we save everything in an intermediate object that will finally update the list when the button actions.

## What would be missing to improve or what should be added that has not entered the proposed time?

- Unit tests after each of the functionalities, at least in the business layer that can add, delete or modify data.

In addition to the representation of the components to show the expected result and compare it with the obtained one.

- Improved design to increase response quality, as well as use in different browsers

- Code refactoring to encapsulate most common parts and abstract component parts to make them as silly / representative as possible

- Improved packaging with Webpack settings for better performance

- Use of useMemo and useCallback to avoid repeated calls for known parameters

- Remove hardcoded text and use internationalization with reacti18next

- Great extra: add cache, pre-rendering for static parts, give a better user experience and less loading time in successive calls
