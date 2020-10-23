class Github {
  constructor() {
    this.client_id = '7fba72e052423a40bcff';
    this.client_secret = '801023832bc354ecfebf5ac3f3048c8a00a9c583';
    /*   this.repos_count = 5;
    this.repos_sort = 'created: asc'; */
  }

  async getUser(user) {
    const url = this._userUrl(user);
    const profileResponse = await fetch(url);

    const profile = await profileResponse.json();
    // console.log(profile);
    return {
      profile,
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
    // placement des variables
    let domain = 'https://api.github.com/users/';
    let path_client = `${user}?client_id=${this.client_id}`;
    let path_secret = `&client_secret=${this.client_secret}`;
    let url = `${domain}${path_client}${path_secret}`;
  } */
}

/*
Client ID
7fba72e052423a40bcff
Client Secret
801023832bc354ecfebf5ac3f3048c8a00a9c583 
 */
