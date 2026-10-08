import * as allMovies from "./movieDatabase.js";



const calculateMoodType = function (movie, userPreferences) {
    let moodTotal =0;
    if (movie.moodType === userPreferences.moodType) moodTotal +=5;

    return moodTotal;
};

const calculateMovieTone = function (movie, userPreferences) {
    let toneTotal =0;
    if (movie.movieTone === userPreferences.movieTone) toneTotal +=5;
    return toneTotal;
};

const calculateMovieStyle = function (movie, userPreferences) {
    let styleTotal =0;
    if(movie.movieStyle === userPreferences.movieStyle) styleTotal +=5;
    return styleTotal;
};


export const calculateMovieScores = function (userPreferences){
    let selectMovies;
    let scoredMovies = [];

    if (userPreferences.animated === true) {
        selectMovies = allMovies.movieDatabase.filter(function (movie) {
            return movie.animated === true; }); }
    else {
        selectMovies = allMovies.movieDatabase;
    }

    for (const movie of selectMovies){
        if (userPreferences.movieRuntime > 0 && movie.movieRuntime > userPreferences.movieRuntime) {continue;}

        const moodTotal= calculateMoodType(movie, userPreferences);
        const toneTotal = calculateMovieTone(movie, userPreferences);
        const styleTotal = calculateMovieStyle(movie, userPreferences);

        let movieScore = moodTotal + toneTotal + styleTotal;

        scoredMovies.push({
            decision: movie.title,
            title: movie.title,
            movieRuntime: movie.movieRuntime,
            movieTone: movie.movieTone,
            movieStyle: movie.movieStyle,
            animated: movie.animated,
            moviePlot: movie.plot,
            score: movieScore
        });
    }

    // sorts movies by score, highest first
    scoredMovies.sort(function (a, b)
        {return b.score - a.score;});

const topMovie = scoredMovies[0];

    return{
        title: topMovie.title,
        movieRuntime: topMovie.movieRuntime,
        movieTone: topMovie.movieTone,
        movieStyle: topMovie.movieStyle,
        animated: topMovie.animated,
        moviePlot: topMovie.moviePlot
    };

};

