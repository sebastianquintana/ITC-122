/* ITC-122 Assingment 1
node.js with 5 array with 4 attributes
*/

const music = [
    {artist:'Nirvana', album: 'nevermind',year:'1991', genre:'Grunge'},
    {artist:'the beatles', album: 'hard day night',year:'1967', genre:'classic rock'},
    {artist:'Notorious B.I.G', album: 'ready to die',year:'1994', genre:'Rap'},
    {artist:'Stone Temple Pilots', album: 'purple',year:'1994', genre:'Grunge'},
    {artist:'Elton John', album: 'Goodbye Yellow Brick Road',year:'1973', genre:'classic rock'}

]
exports.getAll = () => {
    return music;
}
exports.getDetail = artist => {
    const music = music.find(music => music.artist === artist);
    return music;
}