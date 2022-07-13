const mhs = {
  nama: 'reymond',
  nim: '191011450014',
  kelas: '04TPLE001'
}

// destructuring object
const {nama, nim, kelas} = mhs

const fruit = ['mangga', 'apel', 'jeruk'] 

// destructruing array
const [mangga, ...apelNjeruk] = fruit

const string1 = 'test3'
const string2 = 'test2'
const string3 = string2 && string1

console.log(string3)
