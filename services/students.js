var app = angular.module("myApp");

app.service('studentListService', function(){
  this.users = [
    {
      name: 'Preston McNeil',
      pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1117694_1614542_108355616_q.jpg',
      city: 'Houston, Texas'
    },
    {
      name: "Ryan Rasmussen",
      pic: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg",
      city: "New York, New York"
    },
    {
      name: "Terri Ruff",
      pic: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/41368_8222994_4799_q.jpg",
      city: "Sandy, Utah"
    },
    {
      name: "Ken Peng",
      pic: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/49592_10133832_1627020292_q.jpg",
      city: "Tucson, Arizona"
    },
    {
      name: "Joseph 'Moses' Craven",
      pic: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/372074_17803104_1870588520_q.jpg",
      city: "Ardmore, Oklahoma"
    },
    {
      name: "Jeremy James",
      pic: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/261035_17806007_1068091327_q.jpg",
      city: "Provo, Utah"
    }
  ];
});