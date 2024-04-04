function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // [1] Sorting array secara descending menggunakan for loop (bubble sort)
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      // Melakukan pengecekan apakah tahun mobil sekarang lebih kecil dari tahun mobil setelahnya
      if (result[j].year < result[j + 1].year) {
        // Jika ya, maka lakukan pertukaran posisi
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  // [2] Sorting array secara descending menggunakan sort()
  // result.sort((a, b) => b.year - a.year);

  console.log(result);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
