import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },

}, { timestamps: true });


/*

{
    title = 'otsikko'
    description = 'kuvaus'
    body = ' tekstin sisältö'
}

*/
export default mongoose.model("Note", noteSchema);
/*
Kursurin tupla käyttö!
    aseta kursori ensin kohtaan yks
        ALT-nappi pohjassa paino toiseen kohtaa kursori,
        näillä saadaan kursori kirjoittamaan tai poistamaan kahdesta paikasta
        identtisesti! =)
*/