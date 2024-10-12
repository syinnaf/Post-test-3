//Nomor 1
let siswa1 = {
    nama: "Tono",
    usia: 20,
    nilai: [90, 85, 88]
  };
  
let siswa2 = {
    nama: "Tini",
    usia: 22,
    nilai: [78, 82, 85]
  };
  
let mergedStudent = {
    nama: `${siswa1.nama} dan ${siswa2.nama}`,
    age: (siswa1.usia + siswa2.usia) / 2, 
    grades: [...siswa1.nilai, ...siswa2.nilai]
  };
  
console.log(mergedStudent);



//Nomor 2
const FavData = {
    user: {
        id:1,
        name: "Syifa Nafisa",
        age: 18,
        favorites: {
            books: ["Laut Bercerita", "Your Name", "Absolute Justice"],
            movies: ["Your Name", "Silent", "A Litre of Tears"]
        }
    }
};

const { user: { name, age, favorites: { movies } } } = FavData;

console.log(name);
console.log(age);
console.log(movies);



//Nomor 3
const event = {
    eventName: "Workshop KSM Android",
    date: "2024-10-10",
    attendees: ["Valtrizt", "Billy"],
  };
  
  function addAttendees(eventObj, newAttendeesList) {
    
    const { attendees, ...restEventDetails } = eventObj;
    
    return {
      ...restEventDetails,
      attendees: [...attendees, ...newAttendeesList]
    };
  }
  
  const newAttendees = ["Syifa Nafisa", "Pak Dengklek"];
  const updatedEvent = addAttendees(event, newAttendees);
  console.log(updatedEvent);