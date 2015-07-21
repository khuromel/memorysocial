Template.user_profile.helpers({
  user_profile: function (){
    var profile = Meteor.users.find();
    debugger;
    return profile;
    },
});
