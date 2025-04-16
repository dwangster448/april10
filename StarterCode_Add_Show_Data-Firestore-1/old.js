
document.querySelector("#submit").addEventListener("click", () => {
    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    let color = document.querySelector("#favcolor").value;
  
    let user = {
      name: name,
      age: parseInt(age),
      color: color,
    };
  
    //   console.log(user);
  
    // save the user into the DB
    db.collection("mypeople")
      .add(user)
      .then(() => {
        alert("New user added!");
        show_people();
      });
  });
  
  // show people stored in our DB
  
  function show_people() {
    // data retrieval
    db.collection("mypeople")
      .get()
      .then((mydata) => {
        let docs = mydata.docs;
  
        let html = ``;
        //   loop though the docs array
        docs.forEach((d) => {
          // console.log(d.data().name);
          html += `<p class="p-3">${d.data().name} is ${
            d.data().age
          } years old. <span class="subtitle m-4">${d.id}</span> 
          <button class="button is-danger is-pulled-right" onclick="del_doc('${
            d.id
          }')">X</button>
          
          </p>`;
        });
        //   console.log(html);
  
        document.querySelector("#all_people").innerHTML = html;
      });
  }
  
  // call the function
  show_people();
  
  // delete the user test
  // delete()
  
  // db.collection("mypeople")
  //   .doc("F4DmmZabc1234")
  //   .delete()
  //   .then(() => {
  //     alert("user deleted");
  //   });
  
  function del_doc(docid) {
    db.collection("mypeople")
      .doc(docid)
      .delete()
      .then(() => {
        alert("user deleted!");
        show_people();
      });
  }
  
  // show all peole whose name is sally
  
  // db.collection("mypeople")
  //   .where("name", "==", "sally")
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
  
  // show all people whose name is sally and red is their favourite color
  // db.collection("mypeople")
  //   .where("name", "==", "sally")
  //   .where("color", "==", "red")
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
  
  // show all people whose name is sally and older than 25 years
  
  // db.collection("mypeople")
  //   .where("name", "==", "sally")
  //   .where("age", ">=", 55)
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
  
  // update()
  
  // update doc ID tTg9Kuki8j9yKfj6XzTq to change sally's age to 31
  // age field is a number
  
  // db.collection("mypeople").doc("tTg9Kuki8j9yKfj6XzTq").update({
  //   age: 31,
  // });
  
  // update favourite color to black
  
  // db.collection("mypeople").doc("tTg9Kuki8j9yKfj6XzTq").update({
  //   color: "black",
  // });
  
  // add peter and kristen as sally's friends
  
  // db.collection("mypeople")
  //   .doc("tTg9Kuki8j9yKfj6XzTq")
  //   .update({
  //     friends: ["peter", "kristen"],
  //   });
  
  // add is424 as a course that sally completed
  
  // db.collection("mypeople")
  //   .doc("1NbFEh9a3gkj2cbsl4A2")
  //   .update({
  //     courses: ["is424"],
  //   });
  
  // sally completed is365, update the courses field (courses array already exists)
  
  // db.collection("mypeople")
  //   .doc("1NbFEh9a3gkj2cbsl4A2")
  //   .update({
  //     courses: firebase.firestore.FieldValue.arrayUnion("is365"),
  //   });
  
  // sally also completed is422
  
  // db.collection("mypeople")
  //   .doc("1NbFEh9a3gkj2cbsl4A2")
  //   .update({
  //     courses: firebase.firestore.FieldValue.arrayUnion("is422"),
  //   });
  
  // arrayRemove() => remove elements from the a field of type array
  // remove is422 from the courses sally completed
  
  // db.collection("mypeople")
  //   .doc("1NbFEh9a3gkj2cbsl4A2")
  //   .update({
  //     courses: firebase.firestore.FieldValue.arrayRemove("is422"),
  //   });
  
  // mike completed is365, update the courses field (courses array already exists)
  
  // db.collection("mypeople")
  //   .doc("gPFLT6E77C01iFOLojm1")
  //   .update({
  //     courses: firebase.firestore.FieldValue.arrayUnion("is365"),
  //   });
  
  // jackie completed is365, is424 update the courses field (courses array already exists)
  
  // db.collection("mypeople")
  //   .doc("V7AGl5lvMSxzncNyl1Q9")
  //   .update({
  //     courses: firebase.firestore.FieldValue.arrayUnion("is424"),
  //   });
  
  // we want to know those students who completed is424 and their name is sally
  
  // db.collection("mypeople")
  //   .where("courses", "array-contains", "is424")
  //   .where("name", "==", "sally")
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
  
  // show the names of those who completed either is424, is365, is400
  
  // db.collection("mypeople")
  //   .where("courses", "array-contains-any", ["is424", "is400", "is365", "is777"])
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
  
  // show all users with the name sally or mike (consider uppercase) - sally vs Sally
  
  // db.collection("mypeople")
  //   .where("name", "in", ["Sally", "sally", "SALLY", "mike", "Mike"])
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
  
  // show all users other than sally
  
  // db.collection("mypeople")
  //   .where("name", "not-in", ["Sally", "sally", "SALLY"])
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
  
  // sally has soccer as her favourite sport, pizza as her favourite food, madison as her favourtie city
  
  // db.collection("mypeople")
  //   .doc("1NbFEh9a3gkj2cbsl4A2")
  //   .update({
  //     favourites: {
  //       city: "madison",
  //       food: "pizza",
  //       sport: "soccer",
  //       number: 10,
  //     },
  //   });
  
  // update sally's favourites so that 7 is her favourite number
  // sall's other favourites will remain the same
  
  // db.collection("mypeople").doc("1NbFEh9a3gkj2cbsl4A2").update({
  //   "favourites.number": 7,
  // });
  
  // team name: Real Madrid
  // city: Madrid
  // country: Spain
  // top scorers: Ronaldo, Benzema, Hazard
  // worldwide fans (in millions): 798
  
  // let rm = {
  //   name: "barcelona",
  //   city: "madrid",
  //   country: "spain",
  //   top_scorers: ["ronaldo", "benzema", "hazard"],
  //   fans_count: 798,
  // };
  
  // add to the database
  
  // db.collection("teams").add(rm);