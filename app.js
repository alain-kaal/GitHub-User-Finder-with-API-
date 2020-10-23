// Init Github
const github = new Github();
// Init UI
const ui = new UI();

// Search input
const searchUser = getOneElement('#searchUser');
searchUser.addEventListener('keyup', (e) => {
  // recupere la valeur entré
  const userText = e.target.value;

  if (userText !== '') {
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        // Show alert
        // ui.showAlert('User not found', 'alert alert-danger');
        console.log('user does not exit');
      } else {
        // On affiche le profile
        console.log('show profile');
        // ui.showRepos(data.repos);
      }
      console.log(data);
    });

    // Make http call
    /*  github.getUser(userText)
     .then(data => {
       if(data.profile.message === 'Not Found') {
         // Show alert
         ui.showAlert('User not found', 'alert alert-danger');
       } else {
         // Show profile
         ui.showProfile(data.profile);
         ui.showRepos(data.repos);
       }
     })*/
  } else {
    // Clear profile en effacant les lettres
    // ui.clearProfile();
    console.log('clear profile ...');
  }
});

// Search input event listener
/* searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
   // Make http call
   github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  } else {
    // Clear profile
    ui.clearProfile();
  }
});  */
