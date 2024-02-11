import axios from "axios";

// class MovieService{
//     getData = async (url) => {
//         let res = await (url)
//         if(!res.ok){
//             throw new Error('Xatolik yuz berdi')
//         }
//         return await res.json()
//     }

//     getMoviesLIst = () => {
//         return this.getData('http://localhost:3004/data')
//     }

// }

class MovieService {
  getData = async (url) => {
    let res = await axios.get(url);
    if (res.status !== 200) {
      throw new Error("Xatolik yuz berdi");
    }
    return await res.data;
  };

  getMoviesLIst = () => {
    return this.getData("http://localhost:3004/data");
  };
}

export default new MovieService();
