/* ITC-122 Assingment 1
node.js with 5 array with 4 attributes
*/

const recordlabels = [
    {artist:'nirvana', album: 'nevermind',year:'1991', genre:'grunge'},
    {artist:'the beatles', album: 'hard day night',year:'1967', genre:'classic rock'},
    {artist:'notorious B.I.G', album: 'ready to die',year:'1994', genre:'rap'},
    {artist:'stone temple pilots', album: 'purple',year:'1994', genre:'grunge'},
    {artist:'elton john', album: 'goodbye yellow brick road',year:'1973', genre:'classic rock'}

]
exports.getAll = () => {
    return recordlabels;
}
/* get the data from the music , especific artist*/
exports.getDetail = artist => {
    console.log(artist);
    return  recordlabels.find((recordlabel) => {
        return recordlabel.artist === artist;
      })
    
}

/*adding music and giving the element to fill the array*/
exports.addMusic = (newMusic) =>{
    if (!newMusic.artist) { return false;}
    else {
    // add new music
    recordlabels.push(newMusic);
    return true;
    }
        }
    
/* delete artist and giving an msg if it can't find the artist*/
exports.deleteMusic = artist => {
    const deleteMusic = recordlabels.findIndex(recordlabels => recordlabels.artist ===artist);
    if (deleteMusic === -1){
        return {"delete": false , "msg" : ` "${artist}" we can't find this artist`}
    }else{
        recordlabels.splice(deleteMusic,1);
        return{"delete": true , "msg": `"${artist}" is been deleted`}
    }
}



