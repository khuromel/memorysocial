
memories = new Meteor.Collection('memories');

/****************************
**  AmazonWines Table
****************************/
memoriesSchema = new SimpleSchema({
  user:{
    type: Object,
    optional: true
  },
  'user._id':{
    type: String,
    optional: true
  },
  name:{
    type: String
  },
  producer:{
    type: String
  },
  vintage:{
    type: String,
    optional: true
  },
  points:{
    type: String,
    optional: true
  },
  match_string:{
    type: String,
    optional: true
  },
  match_wine_id:{
    type: String,
    optional: true
  },
  query_string:{
    type: String,
    optional: true
  },
  asin:{
    type: String,
    optional: true
  },
  ean:{
    type: String,
    optional: true
  },
  vendor_name:{
    type: String,
    optional: true
  },
  country_string:{
    type: String,
    optional: true
  },
  availability:{
    type: String,
    optional: true
  },
  replenishment_category:{
    type: String,
    optional: true
  },
  cntWithoutVintage:{
    type: String,
    optional: true
  }
});

memories.attachSchema(memoriesSchema);
