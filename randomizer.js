

ref = firebase.database().ref('articles/');

function setupObservers() {
  ref.on('value',function(snapshot){
    let articleArray = []
    for(key in snapshot.val()) {
      let articleKeys = snapshot.val()[key]
      articleArray.push(articleKeys)
    }
    randomArticle(articleArray)

  })
}


function randomArticle(articleArray) {
  let random = articleArray[Math.floor(Math.random() * articleArray.length)]
  console.log(random)
}

setupObservers()
