// Given an array of social media posts and an array of users, return a list of posts (as an array of hashes) that replaces the submitted_by id number as the person's actual name.

// For example, given this array of posts (note that the submitted_by is an id number):

[
  { title: "Me Eating Pizza", submitted_by: 231, likes: 1549 },
  {
    title: "i never knew how cool i was until now",
    submitted_by: 989,
    likes: 3,
  },
  { title: "best selfie evar!!!", submitted_by: 111, likes: 1092 },
  { title: "Mondays are the worst", submitted_by: 403, likes: 644 },
];

// And this array of users:

// [
// {user_id: 403, name: "Aunty Em"},
// {user_id: 231, name: "Joelle P."},
// {user_id: 989, name: "Lyndon Johnson"},
// {user_id: 111, name: "Patti Q."},
// ]

// Return the array of posts as follows:

// [
// {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
// {title: 'i never knew how cool i was until now', submitted_by: "Lyndon Johnson", likes: 3},
// {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
// {title: 'Mondays are the worst', submitted_by: "Aunty Em", likes: 644}
// ]

function complete(array, array2) {
  for (x = 0; x < array.length; x++) {
    for (y = 0; y < array2.length; y++) {
      if (array[x]["submitted_by"] === array2[y]["userID"]) {
        array[x]["submitted_by"] = array2[y]["name"];
      }
    }
  }
  return array;
}

console.log(
  complete(
    [
      { title: "Me Eating Pizza", submitted_by: 231, likes: 1549 },
      {
        title: "i never knew how cool i was until now",
        submitted_by: 989,
        likes: 3,
      },
      { title: "best selfie evar!!!", submitted_by: 111, likes: 1092 },
      { title: "Mondays are the worst", submitted_by: 403, likes: 644 },
    ],
    [
      { userID: 403, name: "Aunty Em" },
      { userID: 231, name: "Joelle P." },
      { userID: 989, name: "Lyndon Johnson" },
      { userID: 111, name: "Patti Q." },
    ]
  )
);
