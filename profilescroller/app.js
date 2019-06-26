const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'Female',
    lookingfor: 'Male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name} 
        </li>
        <li class="list-group-item">Age: ${currentProfile.age} 
        </li>
        <li class="list-group-item">Location: ${currentProfile.location} 
        </li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking 
        for ${currentProfile.lookingfor} 
        </li>
      </ul>
    `;
  } else {
    // No more Profiles
    window.location.reload();
  }

  document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
}

// Profile Iterator
function profileIterator(profiles) {
  let i = 0;

  return {
    next: function() {
      return i < profiles.length ? { value: profiles[i++], done: false} :
      { done: true }
    }
  };
}