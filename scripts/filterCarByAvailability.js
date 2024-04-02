function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // [1] Filter Car berdasarkan Availablity menggunakan perulangan for
  for (let i = 0; i < cars.length - 1; i++) {
    // Melakukan pengecekan apakah mobil available atau tidak
    if (cars[i].available === true) {
      // jika mobil available, maka masukkan ke dalam array result
      result.push(cars[i]);
    }
  }

  // [2] Filter Car berdasarkan Availablity menggunakan perulangan forEach
  // cars.forEach((element) => {
  //   // Melakukan pengecekan apakah mobil available atau tidak
  //   if (element.available) {
  //     // jika mobil available, maka masukkan ke dalam array result
  //     result.push(element);
  //   }
  // });

  console.log(result);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
