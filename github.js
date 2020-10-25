class Github {
  constructor() {
    this.client_id = '7fba72e052423a40bcff';
    this.client_secret = '801023832bc354ecfebf5ac3f3048c8a00a9c583';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
    // console.log(this._userRepository());
  }

  async getUser(user) {
    const url = this._userUrl(user);
    const repositoryLink = this._userRepository(user);

    // fetching using fetch API
    const profileResponse = await fetch(url);
    const repoResponse = await fetch(repositoryLink);

    const profile = await profileResponse.json();
    const repository = await repoResponse.json();
    // console.log(profile);
    return {
      profile,
      repository,
    };
  }

  // helper function to built the link
  _userUrl(user) {
    // placement des variables
    let domain = 'https://api.github.com/users/';
    let path_client = `${user}?client_id=${this.client_id}`;
    let path_secret = `&client_secret=${this.client_secret}`;
    let url = `${domain}${path_client}${path_secret}`;
    return url;
  }
  // helper function to built the link
  _userRepository(user) {
    // placement des variables
    let domain = 'https://api.github.com/users/';
    let repos = `${user}/repos?per_page=${this.repos_count}`;
    let tri = `&sort=${this.repos_sort}?`;
    let client = `&client_id=${this.client_id}`;
    let secret = `&client_secret=${this.client_secret}`;
    let linkRepos = `${domain}${repos}${tri}${client}${secret}`;
    return linkRepos;
  }
  /* 
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }

  userInfo(){
  */
}

/*
Client ID
7fba72e052423a40bcff
Client Secret
801023832bc354ecfebf5ac3f3048c8a00a9c583 
 */
