const conteiner = document.querySelector('.conteiner')
const peoples = document.querySelectorAll('.people')
const search = document.querySelector('input')
const searchClick = document.querySelector('button')
const back = document.querySelector('.fa-angles-left')
const selectUsers = document.querySelector('#user')
const empty = document.querySelector('.empty')

let arr = [{
    id: 0,
    img: './img/img-1.jpg',
    name: 'John',
    surname: 'Doe',
    dateOfBirth: '12.03.1985',
    address: {
        country: 'USA',
        city: 'New York',
        street: 'Broadway',
        building: '123 Apartment',
    },
    profession: ['engineer', 'musician'],
},

{
    id: 1,
    img: './img/img-2.jpg',
    name: 'Anna',
    surname: 'Smith',
    dateOfBirth: '25.09.1985', 
    address: {
        country: 'Canada',
        city: 'Toronto',
        street: 'Main Street',
        building: 'building 456',
    },
    profession: ['teacher', 'writer'],
},

{
    id: 2,
    img: './img/img-3.jpg',
    name: 'Ahmed',
    surname: 'Khan',
    dateOfBirth: '15.06.1980',
    address: {
        country: 'Pakistan',
        city: 'Karachi',
        street: 'Jinnah Road',
        building: 'building 789',
    },
    profession: ['doctor', 'chef'],
},

{
    id: 3,
    img: './img/img-4.jpg',
    name: 'Maria',
    surname: 'Gonzalez',
    dateOfBirth: '03.11.1976',
    address: {
        country: 'Spain',
        city: 'Madrid',
        street: 'Gran Via',
        building: '1011 Apartment',
    },
    profession: ['architect', 'artist'],
},

{
    id: 4,
    img: './img/img-5.jpg',
    name: 'Chen',
    surname: 'Wei',
    dateOfBirth: '18.07.1992',
    address: {
        country: 'China',
        city: 'Shanghai',
        street: 'Nanjing Road',
        building: 'building 1213',
    },
    profession: ['software engineer', 'photographer'],
},

{
    id: 5,
    img: './img/img-6.jpg',
    name: 'Luisa',
    surname: 'Silva',
    dateOfBirth: '09.05.1988',
    address: {
        country: 'Brazil',
        city: 'Rio de Janeiro',
        street: 'Copacabana',
        building: 'building 1415',
    },
    profession: ['lawyer', 'entrepreneur'],
},

{
    id: 6,
    img: './img/img-7.jpg',
    name: 'Mohammed',
    surname: 'Ali',
    dateOfBirth: '22.12.1972',
    address: {
        country: 'Egypt',
        city: 'Cairo',
        street: 'Tahrir Square',
        building: 'building 1617',
    },
    profession: ['journalist', 'activist'],
},

{
    id: 7,
    img: './img/img-8.jpg',
    name: 'Elena',
    surname: 'Ivanova',
    dateOfBirth: '07.08.1983',
    address: {
        country: 'Russia',
        city: 'Moscow',
        street: 'Tverskaya',
        building: 'building 1819',
    },
    profession: ['chemist', 'pilot'],
},

{
    id: 8,
    img: './img/img-9.jpg',
    name: 'Yuki',
    surname: 'Tanaka',
    dateOfBirth: '30.04.1995',
    address: {
        country: 'Japan',
        city: 'Tokyo',
        street: 'Shibuya',
        building: '2021 Apartment',
    },
    profession: ['translator', 'chef'],
},

{
    id: 9,
    img: './img/img-10.jpg',
    name: 'Fatima',
    surname: 'Said',
    dateOfBirth: '11.01.1979',
    address: {
        country: 'Egypt',
        city: 'Alexandria',
        street: 'Corniche',
        building: 'building 2223',
    },
    profession: ['engineer', 'sculptor'],
},

{
    id: 10,
    img: './img/img-11.jpg',
    name: 'Pavel',
    surname: 'Novak',
    dateOfBirth: '14.06.1986',
    address: {
        country: 'Czech Republic',
        city: 'Prague',
        street: 'Wenceslas Square',
        building: 'building 2425',
    },
    profession: ['chef', 'actor'],
},

{
    id: 11,
    img: './img/img-12.jpg',
    name: 'Marta',
    surname: 'Lopez',
    dateOfBirth: '29.03.1991',
    address: {
        country: 'Spain',
        city: 'Barcelona',
        street: 'Rambla',
        building: 'building 2627',
    },
    profession: ['teacher', 'painter'],
},

{
    id: 12,
    img: './img/img-13.jpg',
    name: 'Andrei',
    surname: 'Popescu',
    dateOfBirth: '17.09.1982',
    address: {
        country: 'Romania',
        city: 'Bucharest',
        street: 'Victory Avenue',
        building: 'building 2829',
    },
    profession: ['journalist', 'filmmaker'],
},

{
    id: 13,
    img: './img/img-14.jpg',
    name: 'Olga',
    surname: 'Kuznetsova',
    dateOfBirth: '05.12.1977',
    address: {
        country: 'Russia',
        city: 'Saint Petersburg',
        street: 'Nevsky Prospect',
        building: 'building 3031',
    },
    profession: ['doctor', 'singer'],
},

{
    id: 14,
    img: './img/img-15.jpg',
    name: 'Michael',
    surname: 'Brown',
    dateOfBirth: '23.08.1984',
    address: {
        country: 'USA',
        city: 'Los Angeles',
        street: 'Hollywood Boulevard',
        building: 'building 3233',
    },
    profession: ['actor', 'writer'],
}]
     
function users(arg) {
    arg.forEach(({ img, name, surname, dateOfBirth, address, profession}, ind) => {
        let peopleProfession = ''
        profession.forEach((elem) => {
            peopleProfession = peopleProfession + ' ' + elem + ','
        })
        let people = 
           `<img src=${img} alt="">
            <h3>${name} ${surname}</h3>
            <button class="info">User Information</button>
            <div class="peopleInfo">
            <h2>${2024 - dateOfBirth.slice(6)} age</h2>
            <h2>${address.country}</h2>
            <h2>${address.city}</h2>
            <h2>${address.street}</h2>
            <h2>${address.building}</h2>
            <h2>${peopleProfession}</h2>
            `  

        peoples[ind].classList.add('people') 
        peoples[ind].innerHTML = people         

        const btn = document.querySelectorAll('.info')

        btn[ind].addEventListener('click', function(){
        const h2 = document.querySelectorAll('h2')
           let start = (btn.length - 1) * 6
           let end = btn.length * 6
           h2.forEach((elem, ind)=>{
              if(ind >= start && ind < end){
                elem.classList.toggle('open')
              }else{
                   elem.classList.remove('open')
              }
           })
        })
    })  
}

function goBack() {
    peoples.forEach((elem, ind)=>{
        elem.innerHTML = '' 
    })
    empty.textContent = ''
    empty.style.padding = '0px'
    users(arr)
}

users(arr)

function selectUsersadd(){
    let professionArr = []
    arr.map(({profession})=>{
        profession.map((elem)=>{
            if(!professionArr.includes(elem)){
                professionArr.push(elem)
            }
        })
    })
    professionArr.map((elem)=>{
        const option = document.createElement('option')
        option.textContent = elem
        selectUsers.appendChild(option)
    })
}

selectUsers.addEventListener('change', function(e){
        let newArr = []
        arr.map((users)=>{
            users.profession.map((elem)=>{
                if(e.target.value == elem){
                    newArr.push(users)
                }
            })
        })
        if(newArr.length > 0){
            peoples.forEach((elem, ind)=>{
                elem.innerHTML = ''
                peoples[ind].classList.remove('people') 
            })
            empty.textContent = ''
            empty.style.padding = '0px'
            users(newArr)
        }
})

searchClick.addEventListener('click', function () {
    let newArr = []
    let inputValue = search.value.toLocaleLowerCase().trim()
    arr.map((oneElem)=>{ 
        let x = `${oneElem.name.toLocaleLowerCase()} ${oneElem.surname.toLocaleLowerCase()}` == inputValue ||
        oneElem.name.toLocaleLowerCase() ===  inputValue || inputValue === oneElem.surname.toLocaleLowerCase() || 
        `${2024 - oneElem.dateOfBirth.slice(6)} age` == inputValue
        if (x) {
            newArr.push(oneElem)
        }
       Object.values(oneElem.address).map((twoElem)=>{
            if (twoElem.toLocaleLowerCase() == inputValue) {
                newArr.push(oneElem) 
            }
        })
        oneElem.profession.map((threeElem)=>{
            if (threeElem.toLocaleLowerCase() == search.value.trim().toLocaleLowerCase())
                newArr.push(oneElem) 
        })
    })
      if(newArr.length > 0){
        peoples.forEach((elem, ind)=>{
            elem.innerHTML = ''
            peoples[ind].classList.remove('people') 
        })
        users(newArr)
      }else {
        empty.textContent = 'No results were found for your request'
        empty.style.padding = '25px 0px'
      }

})

search.addEventListener('input', goBack)

back.addEventListener('click', goBack)

selectUsersadd()