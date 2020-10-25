// Init Github
const github = new Github();
// Init UI
const ui = new UI();
// test
/* let pion = createDomElement('p', 'id', 'orange');
console.log(pion); */
// Search input
const searchUser = getOneElement('#searchUser');
searchUser.addEventListener('keyup', (e) => {
  // recupere la valeur entré
  const userText = e.target.value;

  // data renvoi les donné du fetch()
  // c'est data.profile et data .repos
  if (userText !== '') {
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        // Message d'erreur
        ui.showAlert('User not found', 'alert alert-danger');
        console.log('user does not exist');
      } else {
        /*
        data.profile et data.repositpry viennent de
        return { profile, repository, }; de GitHub.js 
         */
        // On affiche le profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repository);
      }
    });
  } else {
    // efface le profile en effacant les lettres entré
    ui.clearProfile();
    console.log('clear profile ...');
  }
});
