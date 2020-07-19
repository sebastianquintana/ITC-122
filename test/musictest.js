const expect = require("chai").expect;
const music = require("./data");

const playMusic = music.getAll();
/*testing get info about an artist*/
describe("Music Module", () =>{
    it("returns requested Artist", () =>{
        const result = music.getDetail("Nirvana");
        expect(result).to.deep.equal({artist: "Nirvana", album: "nevermind", year: "1991", genre : "grunge"});
    });
});
it ("fails w/ invalid artist",() =>{
    const result = music.getDetail("frank sinatra");
    expect(result).to.be.undefined;
});
/*testitng to add a new artist*/
it("Add new Artist", () => {
    music.addMusic("Los jaivas", "alturas de machupichu", "1971", "andes folklore");
    expect(playMusic).to.deep.include({artist :"Los jaivas", album : "alturas de machupichu", year : "1971", genre : "folklore"});
});
it("fails w/ fill all the info",() =>{
    music.addMusic("los bunkers", "ven aqui");
    expect(playMusic).to.deep.include({artist:"los bunkers", album:"ven aqui", year: undefined , genre: undefined});
    expect(music.addMusic("los bunkers","ven aqui").msg).to.deep.equal("incomplete information");
});
/*testing to delete an artist from the data*/
it("delete artist", ()=>{
    music.deleteMusic("Nirvana");
    expect(playMusic).to.deep.include({artist: "Nirvana", album:"nevermind", year:"1991", genre:"grunge"});
});
it("fails find the artist", () =>{
    music.deleteMusic("queen");
    expect(music.getDetail("queen").msg).to.deep.equal("Can't find this artist");
})
