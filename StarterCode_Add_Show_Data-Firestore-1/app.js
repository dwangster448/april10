// console.log(firebase);


let team1 = {
  name:"read madrid",
  city: "madrid",
  country: "spain",
  top_scorers: ["ronaldo", "benzema", "hazard"],
  fans_count: 798,
}

let team2 = {
  name:"barcelona",
  city: "barcelona",
  country: "spain",
  top_scorers: ["messi", "suarez", "puyol"],
  fans_count: 738,
}

let team3 = {
  name:"manchester united",
  city: "manchester",
  country: "england",
  top_scorers: ["cantona", "rooney", "ronaldo"],
  fans_count: 755,
}

let team4 = {
  name:"manchester city",
  city: "manchester",
  country: "england",
  top_scorers: ["sterling", "aguero", "haaland"],
  fans_count: 537,
}

let team5 = {
  name:"brazil national team",
  city: null,
  country: "brazil",
  top_scorers: ["ronaldinho", "cafu", "bebeto"],
  fans_count: 950,
}

let team6 = {
  name:"argentina national team",
  city: null,
  country: "argentina",
  top_scorers: ["messi", "batistuta", "maradona"],
  fans_count: 888,
}

let team7 = {
  name:"atletico madrid",
  city: "madrid",
  country: "spain",
  top_scorers: ["aragones", "griezmann", "torez"],
  fans_count: 400,
}

//db.collection("teams").add(team7);
// for (let i=1; i<8; i++) {
//   db.collection("teams").add(`team{i}`)
// }

// db.collection("teams")
//   .where("country", "==", "spain")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no results
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// db.collection("teams")
//   .where("country", "==", "spain")
//   .where("city", "==", "madrid")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no results
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

//TODO how to retrieve national team
// national_team = ["argentina national team", "brazil national team"]

const prefix = "national team";
const end   = prefix + "\uf8ff";   // \uf8ff is a very high Unicode code‐point

db.collection("teams")
  // .where("name", ">=", prefix) //ONLY works if substring starts at beginning of string
  // .where("name", "<=", end) //national team is a substring we are looking for
  .get()
  
  .then((data) => {
    let mydocs = data.docs;
    // if no results
    if (mydocs.length == 0) {
      console.log("no data returned");
      return;
    }

    mydocs.forEach((d) => {
      if (d.data().name.includes("national team"))
        console.log(d.data());
    });
  });

// db.collection("teams")
//   .where("country", "!=", "spain")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no results
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// db.collection("teams")
// .where("country", "not-in", ["spain","england"])
// .get()
// .then((data) => {
//   let mydocs = data.docs;
//   // if no results
//   if (mydocs.length == 0) {
//     console.log("no data returned");
//     return;
//   }

//   mydocs.forEach((d) => {
//     console.log(d.data());
//   });
// });

// db.collection("teams")
// .where("fans_count", ">", 700)
// .get()
// .then((data) => {
//   let mydocs = data.docs;
//   // if no results
//   if (mydocs.length == 0) {
//     console.log("no data returned");
//     return;
//   }

//   mydocs.forEach((d) => {
//     console.log(d.data());
//   });
// });

//TODO team range
// db.collection("teams")
// .where("fans_count", ">", 500)
// .get()
// .then((data) => {
//   let mydocs = data.docs;
//   // if no results
//   if (mydocs.length == 0) {
//     console.log("no data returned");
//     return;
//   }

//   mydocs.forEach((d) => {
//       if (d.data().fans_count < 600)
//      console.log(d.data());
//   });
// });

db.collection("teams")
.where("fans_count", ">", 500)
.where("fans_count", "<", 600)
.get()
.then((data) => {
  let mydocs = data.docs;
  // if no results
  if (mydocs.length == 0) {
    console.log("no data returned");
    return;
  }

  mydocs.forEach((d) => {
      // if (d.data().fans_count < 600)
    console.log(d.data());
  });
});

// db.collection("teams")
// .where("top_scorers", "array-contains", "ronaldo")
// .get()
// .then((data) => {
//   let mydocs = data.docs;
//   // if no results
//   if (mydocs.length == 0) {
//     console.log("no data returned");
//     return;
//   }

//   mydocs.forEach((d) => {
//     console.log(d.data());
//   });
// });

// expectation = ["ronaldo","maradona","messi"]
// db.collection("teams")
// .where("top_scorers", "array-contains-any", expectation)
// .get()
// .then((data) => {
//   let mydocs = data.docs;
//   // if no results
//   if (mydocs.length == 0) {
//     console.log("no data returned");
//     return;
//   }

//   mydocs.forEach((d) => {
//     console.log(d.data());
//   });
// });


// DhcX4KnNtgFWWFhDdaWh real madrid
// db.collection("teams")
//   .doc("DhcX4KnNtgFWWFhDdaWh")
//   .update({
//     fans_count: 811,
//     name: "real madrid fc"
//   });

// wtCh2Gh9WOQ4cPWf6sxM barcelona
// db.collection("teams")
//   .doc("wtCh2Gh9WOQ4cPWf6sxM")
//   .update({
//     fans_count: 747,
//     name: "fc barcelona"
//   });


// DhcX4KnNtgFWWFhDdaWh real madrid
// db.collection("teams")
//   .doc("DhcX4KnNtgFWWFhDdaWh")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayRemove("hazard"),
//   });

// db.collection("teams")
//   .doc("DhcX4KnNtgFWWFhDdaWh")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayUnion("crispo")
//   });


// wtCh2Gh9WOQ4cPWf6sxM barcelona
// db.collection("teams")
//   .doc("wtCh2Gh9WOQ4cPWf6sxM")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayRemove("puyol"),
//   });

// db.collection("teams")
//   .doc("wtCh2Gh9WOQ4cPWf6sxM")
//   .update({
//       top_scorers: firebase.firestore.FieldValue.arrayUnion("deco"),
//   });

   
// DhcX4KnNtgFWWFhDdaWh real madrid
// db.collection("teams")
//   .doc("DhcX4KnNtgFWWFhDdaWh")
//   .update({
//     color: {
//        home: "white",
//        away: "black"
//     }
//   });


// wtCh2Gh9WOQ4cPWf6sxM barcelona
// db.collection("teams")
//   .doc("wtCh2Gh9WOQ4cPWf6sxM")
//   .update({
//     color: {
//        home: "red",
//        away: "gold"
//     }
//   });

// db.collection("teams")
//   .doc("DhcX4KnNtgFWWFhDdaWh")
//   .update({
//     "color.away": "purple"
//   });

// db.collection("teams")
//   .doc("wtCh2Gh9WOQ4cPWf6sxM")
//   .update({
//     "color.away": "pink"
//   });