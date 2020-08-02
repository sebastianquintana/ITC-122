const expect = require("chai").expect;
const musictest = require("../data");

const playMusictest = musictest.getAll();
/*testing get info about an artist*/
describe("Music Module", () =>{
    it("returns requested Artist", () =>{
        const result = musictest.getDetail("Nirvana");
        console.log(result);
        expect(result).to.deep.equal({artist: "Nirvana", album: "nevermind", year: "1991", genre : "Grunge"});
    });

it ("fails w/ invalid artist",() =>{
    const result = musictest.getDetail("frank sinatra");
    expect(result).to.be.undefined;
});
/*testitng to add a new artist*/
it("Add new Artist", () => {
    const result = musictest.addMusic({artist : "Los jaivas",album: "alturas de machupichu", year:"1971", genre:"andes folklore"});
    expect(result).to.be.true;
});
it("fails w/ fill all the info",() =>{
    const result= musictest.addMusic({});
    expect(result).to.be.false
});
/*testing to delete an artist from the data*/
it("delete artist", ()=>{
    const result = musictest.deleteMusic("Nirvana");
    expect(result.delete).to.be.true
});
it("fails find the artist", () =>{
    const result = musictest.deleteMusic("queen");
    expect(result.delete).to.be.false
})
});