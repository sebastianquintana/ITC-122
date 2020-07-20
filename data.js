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
/* get the data from the music , especific artist*/
exports.getDetail = artist => {
    const musica = music.find(music => music.artist === artist);
    if (musica === undefined){
        return{"details":false, "msg": `"${artist}" not found`}
    }else{
    return musica;
}
}
/*adding music and giving the element to fill the array*/
exports.addMusic = (artist, album, year, genre) =>{
    if([artist,album,year,genre].includes(undefined)){
        return{"added": false,"msg":"information incomplete"};
    }else{
            const newMusic = {
            artist: artist,
            album: album,
            year:year,
            genre: genre
        }
        music.push(newMusic);
        return newMusic;
        }
    }
/* delete artist and giving an msg if it can't find the artist*/
exports.deleteMusic = artist => {
    const deleteMusic = music.findIndex(music => music.artist ===artist);
    if (deleteMusic === -1){
        return {"delete": false , "msg" : ` "${artist}" we can't find this artist`}
    }else{
        music.splice(deleteMusic,1);
        return{"delete": true , "msg": `"${artist}" is been deleted`}
    }
}

