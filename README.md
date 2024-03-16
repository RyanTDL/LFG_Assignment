# Pokémon Team Builder

This Next.js application leverages the PokéAPI to create a Pokémon team builder. It demonstrates the ability to set up a new application, fetch data from an external API, and render that data. It also showcases server-side rendering features of Next.js, use of TypeScript, and styling with TailwindCSS.

## Features

- **Data Fetching**: Server-side data fetching to list all Pokémon names and their sprites.
- **Dynamic Routing**: Each Pokémon name on the list links to a dynamically generated page showing more details.
- **Search Functionality**: Ability to filter Pokémon by name on the root page.
- **Team Management**: Users can create a Pokémon team, adding up to 6 Pokémon to their team.

## Setup

To get started with this project:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the development server with `npm run dev`.

## Tasks

### Data Fetching

- Fetch and display all Pokémon names and sprites using server-side rendering on the root page.

### Dynamic Routing

- Generate a dynamic page for each Pokémon.
- Render the Pokémon's sprite on its individual page.

### Intermediate: Finding Pokémon

- Implement a search bar to filter the displayed Pokémon on the root page by their names.

### Advanced: Creating a Pokémon Team

- Implement functionality to add or delete Pokémon from the user's team.
- Persist the team across pages using React Context API.

## Error Handling

- The API is assumed never to fail on valid requests, so no validation on the API response is required.
- Users are not expected to navigate to invalid pages.

## Assumptions and Tweaks

- **Fetching Data via API**: The application should fetch all 1292 Pokémon data in one request. However, a limit of 40 was set to the API call, as it was believed to be a sufficient proof-of-concept 
- **Removing Pokemon**: The assumption was made that all Pokémon added to the team would be unique, and not have the same name. Though adding multiple Pokémon of the same name is not disabled, removing a Pokémon from the team will result in all Pokémon of the same name being removed.
- **Design Decisions**: The focus is on functionality over style; however, basic styling is applied for a cleaner look.

## Deployment

The application is deployed on Vercel, which provides a seamless deployment experience for Next.js applications.

### Live Demo

You can view the live deployment of this application at [lfg-assignment-i64n6mxa8-ryans-projects-1183f93c.vercel.app](#).