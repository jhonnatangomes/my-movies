# My Movies

Welcome to my movies, an app where you can search and discover new movies and tv shows.

## How it works

The home page presents the user with 20 movies and a search bar. This movie list comes from [TMDB] (The Movie Database). This list contains the 20 most popular movies currently and it is updated weekly. You can also start typing on the search bar to find the movie or tv show you want.

Another feature is the random recommendation. After you have clicked on at least one movie or tv show you can see random recommendations by going to the leftmost icon on the menu bar.

A favorites list and login feature is going to be implemented soon, so that users can have their favorites information attached to their account.

The UI of this project was based on this figma community [design].

##### Note

All the movie information existing on this project comes from TMDB [API].

## How to run

You can either use the deployed [version] in Vercel or you can clone the repository to your machine and run it.

In case you chose the later, first clone the repository and enter in the newly created directory:

    git clone https://github.com/jhonnatangomes/my-movies
    cd my-movies

Then, install dependencies

    npm install

You can then start the project with

    npm start

[tmdb]: https://www.themoviedb.org/
[api]: https://developers.themoviedb.org/3/getting-started
[version]: http://my-movies-three.vercel.app/
[design]: https://www.figma.com/community/file/1006119758184707289
