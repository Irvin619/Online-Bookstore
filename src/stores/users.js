import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: {
      0: {
        id: 1,
        firstName: 'Bruce',
        lastName: 'Wayne',
        email: 'B.Wayne@gmail.com',
        phone: '0700000027',
        location: 'Gotham',
        address: 'BatCave',
      },
      1: {
        id: 2,
        firstName: 'Alfred',
        lastName: 'Pennyworth',
        email: 'A.P@gmail.com',
        phone: '0702000016',
        location: 'Gotham',
        address: 'Wayne Manor',
      },
      2: {
        id: 3,
        firstName: 'Dick',
        lastName: 'Grayson',
        email: 'D.Grayson@gmail.com',
        phone: '0700000038',
        location: 'Bludhaven',
        address: 'Old City',
      },
      3: {
        id: 4,
        firstName: 'Jason',
        lastName: 'Todd',
        email: 'JTodd@gmail.com',
        phone: '0702000357',
        location: 'Gotham',
        address: 'Crime Alley',
      },
      4: {
        id: 5,
        firstName: 'Tim',
        lastName: 'Drake',
        email: 'Tim.D@gmail.com',
        phone: '0702000436',
        location: 'Jump City',
        address: 'Titans Tower',
      },
      5: {
        id: 6,
        firstName: 'Damien',
        lastName: 'Wayne',
        email: 'D.Wayne@gmail.com',
        phone: '0702000655',
        location: 'Nanda Parbat',
        address: 'League Of Assassins',
      },
    },
  }),
})