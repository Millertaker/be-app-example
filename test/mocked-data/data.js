import products from '../../server/src/models/products'
import tags from '../../server/src/models/tags'
import categories from '../../server/src/models/categories'
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

/**
*
* Products
*/

let cats  = () => {
  return {
    name: "Cat number ",
    categories: null,
    tags: null,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a massa at lorem sagittis pharetra eu vitae velit. Pellentesque non ex at nisl blandit luctus. In imperdiet viverra vulputate. Nam tristique id orci pretium vestibulum. Ut purus ex, aliquet nec convallis id, interdum eu magna. ",
    images: [
      {name: "cat1", url: "https://instagram.fbog2-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/17267785_1894562787423821_2627378004887601152_n.jpg", alt: "alt cat 1"},
      {name: "cat2", url: "https://instagram.fbog2-1.fna.fbcdn.net/t51.2885-15/e15/c0.79.640.640/17126981_127727164425013_1162954389296513024_n.jpg", alt: "alt cat 2"},
      {name: "cat3", url: "https://instagram.fbog2-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c0.60.1080.1080/17265973_1128030517306392_737128890366951424_n.jpg", alt: "alt cat 3"},
      {name: "cat4", url: "https://instagram.fbog2-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/17267849_232975720443388_6383374162764759040_n.jpg", alt: "alt cat 4"},
      {name: "cat5", url: "https://instagram.fbog2-1.fna.fbcdn.net/t51.2885-15/s640x640/e15/17333098_1158683200927819_7783058847245008896_n.jpg", alt: "alt cat 5"},
    ]
  }
}



let dogs = () => {
  return {
    name: "Dog number ",
    categories: null,
    tags: null,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a massa at lorem sagittis pharetra eu vitae velit. Pellentesque non ex at nisl blandit luctus. In imperdiet viverra vulputate. Nam tristique id orci pretium vestibulum. Ut purus ex, aliquet nec convallis id, interdum eu magna. ",
    images: [
      {name: "cat1", url: "https://instagram.fbog2-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/17267785_1894562787423821_2627378004887601152_n.jpg", alt: "alt cat 1"},
      {name: "cat2", url: "https://instagram.fbog2-1.fna.fbcdn.net/t51.2885-15/e15/c0.79.640.640/17126981_127727164425013_1162954389296513024_n.jpg", alt: "alt cat 2"},
      {name: "cat3", url: "https://instagram.fbog2-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c0.60.1080.1080/17265973_1128030517306392_737128890366951424_n.jpg", alt: "alt cat 3"},
      {name: "cat4", url: "https://instagram.fbog2-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/17267849_232975720443388_6383374162764759040_n.jpg", alt: "alt cat 4"},
      {name: "cat5", url: "https://instagram.fbog2-1.fna.fbcdn.net/t51.2885-15/s640x640/e15/17333098_1158683200927819_7783058847245008896_n.jpg", alt: "alt cat 5"},
    ]
  }
}


/**
*
* Categories
*/

let storeCategories = [
  {
    name: "Cats",
    parent_category: null,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a massa at lorem sagittis pharetra eu vitae velit. Pellentesque non ex at nisl blandit luctus. In imperdiet viverra vulputate. Nam tristique id orci pretium vestibulum. Ut purus ex, aliquet nec convallis id, interdum eu magna. ",
    tags: null,
    images: [
      {name: "cats", url: "https://instagram.fbog2-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/17125561_173965276451484_8314095063353262080_n.jpg", alt: "all cats here"}
    ]
  },
  {
    name: "Dogs",
    parent_category: null,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a massa at lorem sagittis pharetra eu vitae velit. Pellentesque non ex at nisl blandit luctus. In imperdiet viverra vulputate. Nam tristique id orci pretium vestibulum. Ut purus ex, aliquet nec convallis id, interdum eu magna. ",
    tags: null,
    images: [
      {name: "dogs", url: "https://instagram.fbog2-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/17125561_173965276451484_8314095063353262080_n.jpg", alt: "all dogs here"}
    ]
  }
]


/**
*
* Tags
*/

let storeTags = [
  {
    "val": "cats",
    "create_date": new Date()
  },
  {
    "val": "dogs",
    "create_date": new Date()
  }
];


let initTags = () => {
  let promises = [];

  storeTags.forEach((item, index) => {
    promises.push((new tags(storeTags[index])).save());
  });

  return Promise.all(promises)
    .then((data) => {
      storeTags = data;
    });
}

let initCategories = () => {
  //Adding only 2 categories into categories array

  storeCategories[0].tags = [storeTags[0]._id];
  storeCategories[1].tags = [storeTags[1]._id];


  let promises = [];

  storeCategories.forEach((item, index) => {
    promises.push((new categories(storeCategories[index])).save());
  });


  return Promise.all(promises)
    .then((data) => {
      storeCategories = data;
    })
    .catch((error) => {
      console.log(error);
    })
}

let initProducts = () => {
  try{
    let catsArray = [];
    let dogsArray = [];

    for(let i = 0; i < 10; i++){
      catsArray.push(cats());

      catsArray[i].name = cats().name + ' ' + i;
      catsArray[i].categories = [storeCategories[0]._id];
      catsArray[i].tags = [storeTags[0]._id];
    }

    for(let i = 0; i < 10; i++){
      dogsArray.push(dogs());

      dogsArray[i].name = dogs().name + ' ' + i;
      dogsArray[i].categories = [storeCategories[1]._id];
      dogsArray[i].tags = [storeTags[1]._id];
    }

    let promises = [];

    catsArray.forEach((item, index) => {
      promises.push((new products(catsArray[index])).save());
    });

    dogsArray.forEach((item, index) => {
      promises.push((new products(dogsArray[index])).save());
    });

    return Promise.all(promises)
      .then((data) => {
        console.log('DB storage ended');
      })
      .catch((error) => {
        console.log('ERROR: ' + error);
      })

  } catch(error) {
    console.log(error);
  }
}


let initMockedDB = (done) => {
  initTags()
    .then(initCategories)
    .then(initProducts)
    .then(done)
}


module.exports = {
  cats: cats,
  dogs: dogs,
  init: initMockedDB
}